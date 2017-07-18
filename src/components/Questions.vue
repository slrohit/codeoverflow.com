<template>
	<div class="questions container-fluid">
		<div class="row">
			<div class="col-md-1 no-padd"></div>
			<div class="col-md-10">
				<div class="row">
					<div class="col-md-9 question-cards">
						<div class="card" v-for="question in questions">
							<div class="card-block">
						    <h4 class="card-title" :qid="question.questionId">{{ question.title}}</h4>
						    <div class="content" v-html="question.html" @click="handleContentClick(question.questionId,question.title)"></div>
						    <router-link class="card-link" :to=" '/questions/'+question.questionId+'/'+question.title.split(' ').join('-') ">Go to Question</router-link>
						  </div>
						</div>
						<br>
					</div>
					<div class="col-md-3">
						<!-- <div class="card">
						  <div class="card-block">
						    This is some text within a card block.
						  </div>
						</div> -->
					</div>
				</div>
				<div class="row">
					<nav aria-label="Page navigation example">
					  <ul class="pagination">
					    <li class="page-item" v-bind:class="{disabled:activePageNo == 1}">
					      <router-link class="page-link" :to=" '/questions/page/' + (activePageNo-1) " aria-label="Previous" v-on:click.native="prevNextClick(0,$event)">
					        <span aria-hidden="true">&laquo;</span>
					        <span class="sr-only">Previous</span>
					      </router-link>
					    </li>
					    <li v-for=" n in totalPages " v-bind:class="{active:n==activePageNo}" class="page-item">
					    	<router-link class="page-link" :to=" '/questions/page/' + n " v-on:click.native="handlePageClick">{{n}}</router-link>
					    </li>
					    <li class="page-item" v-bind:class="{disabled:activePageNo == totalPages}">
					      <router-link class="page-link" :to=" '/questions/page/' + (activePageNo + 1) " aria-label="Next" v-on:click.native="prevNextClick(1,$event)">
					        <span aria-hidden="true">&raquo;</span>
					        <span class="sr-only">Next</span>
					      </router-link>
					    </li>
					  </ul>
					</nav>
				</div>
			</div>
			<div class="col-md-1 no-padd"></div>
		</div>
	</div>
</template>
<script>
	import { mapActions } from 'vuex'
	import { mapGetters } from 'vuex'
	export default {
	  name: 'questions',
	  data () {
	    return {
	      activePageNo: 1,
	      limit: 20
	    }
	  },
	  methods: {
	    ...mapActions({
	      loadQuestions: 'LOAD_QUESTION_LIST',
	      setLoader:'SET_LOADER'
	    }),
	    loadNewQuestions: function(){
	    	var self = this;

	    	self.setLoader(true);
	    	var query = {
		  		offset: (this.activePageNo-1)*this.limit,
		  		limit: this.limit
		  	}
		  	
		  	this.loadQuestions(query)
		  			.then( () => {
	            console.log('questions loaded');
	            self.setLoader(false);
	          })
	          .catch((e) => {
	            console.log("Error", e);
	            self.setLoader(false);
	          })
	    },
	    handlePageClick: function(event){
	    	event.preventDefault()
	    	this.activePageNo = parseInt(event.target.text)
	    	this.loadNewQuestions()
	    	document.getElementsByClassName('question-cards')[0].scrollIntoView()
	    },
	    prevNextClick: function(isIncrement,event){
	    	event.preventDefault()
	    	this.activePageNo = this.activePageNo + (isIncrement ? 1 : -1)
	    	this.loadNewQuestions()
	    	document.getElementsByClassName('question-cards')[0].scrollIntoView()
	    },
	    handleContentClick: function(questionId, questionTitle){
	    	const url = '/questions/'+questionId +'/'+questionTitle.split(' ').join('-');
	    	this.$router.push(url);
	    }
	  },
	  computed: {
	    ...mapGetters([
	      'questions',
	      'totalQuestions'
	    ]),
	    totalPages: function(){
	    	var count =this.totalQuestions / this.limit ;
	    	if(this.totalQuestions % this.limit != 0){
	    		count=count+1;
	    	}
	    	return parseInt(count);
	    }
	  },
	  created(){
	  	this.activePageNo = this.$route.params.pageNo ? this.$route.params.pageNo : 1
	  	this.loadNewQuestions()
	  }
	}
</script>
<style type="text/css">
	.no-padd{
		padding: 0;
	}
	.question-cards > .card{
		margin-bottom: 15px;
	}
	.question-cards > .card .content{
		min-height: 150px;
		max-height: 150px;
		overflow: hidden;
	}
</style>