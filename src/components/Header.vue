<template>

	<header id="pageHeader">
	<my-loader v-if="showMainLoader"></my-loader>
	<nav class="navbar navbar-toggleable-md navbar-light bg-faded my-navbar">
	  <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
	    <span class="navbar-toggler-icon"></span>
	  </button>
	  <router-link class="navbar-brand bg-logo" to='/'>Nav bar</router-link>
	  <div class="collapse navbar-collapse" id="navbarSupportedContent">
	    <ul class="navbar-nav navbar-left">
	      <li class="nav-item">
	        <router-link class="nav-link" to="/">Home</router-link>
	      </li>
	    </ul>
	    <form class="form-inline my-2 my-lg-0 search-form" @submit="handleSubmit">
	      <div class="input-group stylish-input-group search-cont">
	          <input
	          	autocomplete="off"
	          	v-model="query"
	          	@focus="focused = true"
	          	@blur="handleBlur"
	          	@keyup="handleKeyUp"
        			type="text" 
      				class="form-control my-search"  
      				placeholder="Search"
	          >
	          <ul class="dropdown-menu search-result list-group" :class="{active:focused}" style="width:100%">
	          		<li class="list-group-item">Search Result</li>
				        <li v-for="suggestion in questionSuggest" @click="goToUrl(suggestion.url)" class="list-group-item">
				            <router-link :to="suggestion.url">{{ suggestion.title }}</router-link>
				            <i style="font-size: 13px;margin-left: 5px;">{{getDesc(suggestion.desc)}}</i>
				        </li>
				    </ul>
            <span class="input-group-addon">
                <button type="submit">
                    <i class="fa fa-search" aria-hidden="true"></i>
                </button>  
            </span>
	      </div>
	    </form>
	    <ul class="nav navbar-nav navbar-right ml-auto" style="margin-right: 2rem;">
	    	<li class="nav-item" v-if="loggedInUser">
	    		<div class="dropdown">
					  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
					    Hi {{loggedInUser}}
					  </button>
					  <div class="dropdown-menu"  style="min-width: 8rem" aria-labelledby="dropdownMenuButton">
					    <a class="dropdown-item" style="cursor: pointer;"  @click="logout" >Logout</a>
					  </div>
					</div>
	    	</li>
        <li class="nav-item" v-else><router-link class="nav-link" to="/signin">Login</router-link></li>
      </ul>
	  </div>
	</nav>
	<div class="padd-1"></div>
	<!-- <nav class="breadcrumb">
	  <router-link class="breadcrumb-item" to="/">questions</router-link>
	</nav> -->
	<div class="padd"></div>
	<div v-if="$route.query.signup == 'success' && loggedInUser " style="width: 80%;margin: 10px auto;" class="alert alert-success alert-dismissable in">
    <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
    <strong>Hello {{loggedInUser}}</strong> Welcome to codeoverflow, Happy coding :)
  </div>
	</header>
</template>
<script>
	import '../assets/js/vendor/bootstrap/collapse'
	import '../assets/js/vendor/bootstrap/dropdown'
	import '../assets/js/vendor/bootstrap/alert'
	import debounce from 'lodash/debounce'

	import { mapGetters } from 'vuex'
	import { mapActions } from 'vuex'
	export default {
	  name: 'my-header',
	  data (){
	  	return {
	  		query: "",
	  		focused: false
	  	}
	  },
	  methods: {
	  	...mapActions({
	      searchQuestion: 'SEARCH_QUESTION',
	      logout:'LOGOUT',
	      setUser:'SET_USER'
	    }),
	    handleSubmit: function(e){
	    	e.preventDefault()
	    	const url = this.$route.path+'?q='+this.query
	    	this.$router.push(url)
	    },
	  	handleKeyUp: debounce(function (e) {
			    if(this.query.length > 3){
		  			this.searchQuestion(this.query)
	      	}
			}, 500),
	  	handleBlur: function(event){
	  		setTimeout( ()=>{
	  			this.focused = false;
	  		},300)
	  	},
	  	goToUrl: function(url){
	  		this.$router.push(url);
	  	},
	  	getDesc: function(desc){
	  		desc= desc.trim();
	  		var ret = desc.substr(0,12)+'...';
	  		var idx = desc.indexOf(this.query);
	  		return idx > 12  ? ret+desc.substr(idx-5,5)+desc.substr(idx,8) : ret
	  	}
	  },
	  computed: {
	  	...mapGetters([
	      'questionSuggest',
	      'loggedInUser',
	      'showMainLoader'
	    ])
	  },
	  created: function(){
	  	this.setUser()
	  	this.query = this.$route.query.q ? this.$route.query.q : "";
	  	if(this.query.length > 3){
		  	this.searchQuestion(this.query)
	    }
	  },
	  components:{
    	'my-loader':() => import('./Loader')
  	}
	}
</script>
<style type="scoped">
	.bg-logo{
		background-image: url(data:image/jpeg;base64,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);
	    background-size: 50px;
	    background-repeat: no-repeat;
	    background-position: center;
	    border-radius: 50%;
	    background-clip: border-box;
	    transition: background-size 0.2s;
	    transition-timing-function: cubic-bezier(.07,1.41,.82,1.41);
	    display: block;
	    width: 50px;
	    height: 50px;
	    text-decoration: none;
	    cursor: pointer;
	    overflow: hidden;
	    text-indent: 100%;
	    white-space:nowrap;
	}
	.my-navbar{
		background-color:#00e2ff;
	}
	#app .my-navbar .nav-link{
		color:#fff;
	}
	#app .my-navbar:hover{
		background-color: #fff;
	}
	#app .my-navbar:hover .nav-link{
		color:#333;
	}
	#app .my-navbar:hover input.form-control{
		background-color: #f1f1f1;
		color:#000;
	}
	#app .my-navbar input.form-control{
		background-color: #68eeff ;
		color:#fff;
	}
	#app .my-navbar .input-group-addon{
		background-color: #68eeff ;
		color: #fff;
	}
	#app .my-navbar:hover .input-group-addon{
		background-color: #f1f1f1;
		color:#000;
	}
	#app .fa.fa-search{
		color: #fff;
	}
	#app .my-navbar:hover .fa.fa-search{
		color: #000;
	}
	
	.form-control::-webkit-input-placeholder { color: white;}
	.form-control:-moz-placeholder { color: white;}
	.form-control::-moz-placeholder { color: white;}
	.form-control:-ms-input-placeholder { color: white;}

	#app .my-navbar:hover input.form-control::-webkit-input-placeholder { color: #333;}
	#app .my-navbar:hover input.form-control:-moz-placeholder { color: #333;}
	#app .my-navbar:hover input.form-control::-moz-placeholder { color: #333;}
	#app .my-navbar:hover input.form-control:-ms-input-placeholder { color: #333;}
	.search-result
	.navbar-right {
    	margin-right: 0px;
	}
	.search-form{
		width: 40%;
	}

	.padd-1{
		height: 1px;
		background-color: #fff;
	}
	.padd{
		padding: 7px;
	}
	.stylish-input-group .input-group-addon{
	    background: #f1f1f1;
	    border: none; 
	}
	.input-group.stylish-input-group{
		width: 100%;
		border: none;
	}
	@media (max-width:600px){
		.search-form{
			width: 100%;
		}
		.input-group.stylish-input-group{
			width: 100%;
			border: none;
		}
	}
	.stylish-input-group .form-control{
		border-right:0; 
		box-shadow:0 0 0; 
		border-color:#ccc;
		border: none;
	}
	.stylish-input-group button{
	    border:0;
	    background:transparent;
	}
	.dropdown-menu.search-result{
		display: none;
	}
	.dropdown-menu.active.search-result{
		display: block;
		margin-top:7px;
		padding: 0
	}
	.search-cont .dropdown-menu:before {
	  position: absolute;
	  top: -8px;
	  left: 49.8%;
	  display: inline-block;
	  border-right: 9px solid transparent;
	  border-bottom: 9px solid #ccc;
	  border-left: 9px solid transparent;
	  border-bottom-color: rgba(0, 0, 0, 0.2);
	  content: '';
	}

	.search-cont .dropdown-menu:after {
	  position: absolute;
	  top: -7px;
	  left: 50%;
	  display: inline-block;
	  border-right: 8px solid transparent;
	  border-bottom: 8px solid #ffffff;
	  border-left: 8px solid transparent;
	  content: '';
	}
	.search-result .list-group-item{
		cursor: pointer;
	}
	.search-result a:hover{
    text-decoration: none;
	}
</style>