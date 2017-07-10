<template>
	<header>
	<nav class="navbar navbar-toggleable-md navbar-light bg-faded my-navbar">
	  <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
	    <span class="navbar-toggler-icon"></span>
	  </button>
	  <router-link class="navbar-brand bg-logo" to='/foo'>Nav bar</router-link>
	  <div class="collapse navbar-collapse" id="navbarSupportedContent">
	    <ul class="navbar-nav navbar-left">
	      <li class="nav-item">
	        <router-link class="nav-link" to="/">Home</router-link>
	      </li>
	      <li class="nav-item">
	      	<router-link class="nav-link" to='/questions/1234/maximum-subarray-sum'>Question</router-link>
	      </li>
	      <li class="nav-item">
	        <a class="nav-link disabled" href="#">Disabled</a>
	      </li>
	    </ul>
	    <form class="form-inline my-2 my-lg-0 search-form">
	      <div class="input-group stylish-input-group">
	          <input type="text" class="form-control my-search"  placeholder="Search" >
            <span class="input-group-addon">
                <button type="submit">
                    <i class="fa fa-search" aria-hidden="true"></i>
                </button>  
            </span>
	      </div>
	    </form>
	    <ul class="nav navbar-nav navbar-right ml-auto">
        <li class="nav-item"><a class="nav-link" href="#"><span class="glyphicon glyphicon-user"></span> Sign Up</a></li>
        <li class="nav-item"><a class="nav-link" href="#"><span class="glyphicon glyphicon-log-in"></span> Login</a></li>
      </ul>
	  </div>
	</nav>
	<div class="padd-1"></div>
	<div class="padd"></div>
	</header>
</template>
<script>
	import '../assets/js/vendor/bootstrap/collapse'
	export default {
	  name: 'my-header'
	}
</script>
<style type="scoped">
	.bg-logo{
		background-image: url('../assets/img/logo_64.jpg');
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
		width: 60%;
		border: none;
	}
	@media (max-width:600px){
		.search-form{
			width: 60%;
		}
		.input-group.stylish-input-group{
			width: 100%;
			border: none;
		}
	}
	.input-group.stylish-input-group:hover{
	  width:100%;
	  -webkit-transition:width 0.5s ease-in-out;
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
</style>