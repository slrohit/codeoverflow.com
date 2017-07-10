import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import config from './config'
Vue.use(Vuex)

var baseUrl = config.getBaseUrl();
export default new Vuex.Store({
  state:{
    codeOutput: null
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
    }
  },
  getters:{
    codeOutput: state => state.codeOutput
  },
  mutations:{
    SET_CODE_OUTPUT: (state, { data }) => {
      state.codeOutput = data
    }
  }
})
