import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import config from './config'
Vue.use(Vuex)

var baseUrl = config.getBaseUrl();
var gitHubRawBaseUrl = config.getGithubRawBaseUrl();
export default new Vuex.Store({
  state:{
    codeOutput: null,
    questionList: [],
    totalQuestions: null,
    question: null,
    questionSuggestions: [],
    loggedInUser: "",
    showMainLoader: false
  },
  actions:{
    RUN_CODE: function ({ commit }, data) {
    	return new Promise((resolve, reject) => {
	      axios.post(baseUrl+config.resources.run,data)
	      	   .then((response) => {
			       commit('SET_CODE_OUTPUT', { data: response.data })
			       resolve()
			    }, (err) => {
			       console.log(err)
			       reject()
			    })
	      	.catch( (err) => {
				   console.log(err)
				   reject()
				});
		  })
    },
    LOAD_QUESTION_LIST: function({commit}, data) {
      return new Promise( (resolve, reject) => {
        const url = baseUrl+config.resources.getQuestion+'?offset='+data.offset+'&limit='+data.limit;
        axios.get(url)
              .then( (response) => {
                commit('SET_QUESTION_LIST', { data: response.data })
                resolve()
              }, (err) => {
                console.log(err)
                reject()
              })
              .catch( (err) => {
                console.log(err)
                reject()
              })
      })
    },
    LOAD_QUESTION: function ({ commit, state }, id) {
      if(isNaN(id)){
        console.log("Error question id must be integer");
        return;
      }
      id = parseInt(id);
      if(state.question == null || state.question.questionId !== id){
        const question = state.questionList.find(question => question.questionId === id);
        if( question ){
          commit('SET_QUESTION', { question: question })
        }else{
          const url = baseUrl + config.resources.getQuestion + '/' + id;
          axios.get(url)
                .then( response => {
                  commit('SET_QUESTION', { question: response.data })
                }, err => {
                  console.log("Error", err)
                })
        }
      }
    },
    SEARCH_QUESTION: function ({ commit, state }, query) {
      const url = baseUrl + config.resources.questionSuggest+'/'+query;
      axios.get(url)
            .then( (response) => {
              commit('SET_QUESTION_SUGGESTION', { data: response.data })
            }, (err) => {
              console.log(err);
            })
    },
    SET_LOADER: function({commit}, value){
      commit('SET_LOADER',value)
    },
    SET_USER: function({ commit }){
      commit('SET_LOGGED_IN_USER', sessionStorage.getItem('user') ? sessionStorage.getItem('user'): '');
    },
    LOGOUT: function({ commit }){
      commit('SET_LOGGED_IN_USER', "");
      sessionStorage.removeItem('user')
    },
    LOGIN: function ({ commit }, params) {
      const url = baseUrl+config.resources.login;
      return new Promise((resolve, reject) => {
        axios.post(url,params)
             .then((response) => {
             resolve(response.data)
             sessionStorage.setItem('user',params.userName);
             commit('SET_LOGGED_IN_USER', params.userName);
          }, (err) => {
             reject(err.response.data)
          })
          .catch( (err) => {
           console.log(err)
           reject(err)
        });
      })
    },
    SIGN_UP: function ({ commit }, params) {
      const url = baseUrl+config.resources.signup;
      return new Promise((resolve, reject) => {
        axios.post(url,params)
             .then((response) => {
             resolve(response.data)
             sessionStorage.setItem('user',params.userName);
             commit('SET_LOGGED_IN_USER', params.userName);
          }, (err) => {
             reject(err.response.data)
          })
          .catch( (err) => {
           console.log(err)
           reject(err)
        });
      })
    }
  },
  getters:{
    codeOutput: state => state.codeOutput,
    questions: state => state.questionList,
    totalQuestions: state => state.totalQuestions,
    question: state => state.question,
    questionSuggest: state => state.questionSuggestions,
    loggedInUser: state => state.loggedInUser,
    showMainLoader: state => state.showMainLoader,
    getSolution: state => (path) => {
      const url = gitHubRawBaseUrl+path;
      return new Promise((resolve, reject) => {
        axios.get(url)
            .then( (response) => {
              resolve(response.data)
            }, (err) => {
              console.log(err);
              reject(err)
            })  
      })
    }
  },
  mutations:{
    SET_CODE_OUTPUT: (state, { data }) => {
      state.codeOutput = data
      if(state.codeOutput && state.codeOutput['run_status'] && state.codeOutput['run_status']['output_html'] && state.codeOutput['run_status']['output_html'].length > 0){
        state.codeOutput['run_status']['output_html'] = state.codeOutput['run_status']['output_html'].split('<br><br>').map(function(v){
                  return v.split('<br>').join(' ');
              }).join('<br>')
      }
    },
    SET_QUESTION_LIST: (state, { data }) => {
      state.questionList = data.rows,
      state.totalQuestions = data.count
    },
    SET_QUESTION: (state, { question }) => {
      state.question = question
    },
    SET_LOADER: (state, value) => {
      state.showMainLoader = value
    },
    SET_QUESTION_SUGGESTION: (state, { data }) => {
      state.questionSuggestions = data.map( question => {
        return {
          url:'/questions/'+question.questionId+'/'+question.title.split(' ').join('-'),
          title: question.title,
          desc: question.description
        }
      })
    },
    SET_LOGGED_IN_USER: (state, userName) => {
      state.loggedInUser = userName
    }
  }
})
