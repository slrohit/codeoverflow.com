<template>
	<div class="container" style="padding: 0">
    <div id="signupbox" style="margin:0 auto;padding: 0" class="mainbox col-md-7 col-md-offset-3 col-sm-8 col-sm-offset-2">
        <div class="card">
            <div class="card-header" style="color: #31708f;background-color: #d9edf7;border-color: #bce8f1;padding-bottom: 0;">
                <div class="card-title" style="margin-bottom: 0;">Sign Up</div>
                <div style="float:right; font-size: 85%; position: relative; top:-10px"><router-link to="/signin">Sign In</router-link>
                </div>
            </div>
            <div class="card-block">
                <form id="signupform" class="form" role="form">

                    <div id="signupalert" v-if="signUpErr" class="alert alert-danger">
                        <p>Error:</p>
                        <span>{{ signUpErr}}</span>
                    </div>
                    <div class="form-group row">
                        <label for="email" class="col-md-3 control-label">Email</label>
                        <div class="col-md-8">
                            <input  v-model="userData.email" @keyup="checkEmail" @blur="checkEmail" autocomplete="off" type="text" class="form-control" name="email" placeholder="Email Address">
                        </div>
                        <div class="col-md-1">
                          <i class="fa fa-close" v-if="emailErr" aria-hidden="true"></i>
                          <i class="fa fa-check" v-else-if="userData.email" aria-hidden="true"></i>
                        </div>
                    </div>
                    <small v-if="emailErr" style="position: relative;top: -23px; color: #d9534f;">{{emailErr}}</small>
                    <div class="form-group row">
                        <label for="email" class="col-md-3 control-label">Username</label>
                        <div class="col-md-8">
                            <input @keyup="checkUserName" @blur="checkUserName" v-model="userData.userName" autocomplete="off" type="text" class="form-control" name="username" placeholder="User name">
                        </div>
                        <div class="col-md-1">
                          <i class="fa fa-close" v-if="userNameErr" aria-hidden="true"></i>
                          <i class="fa fa-check" v-else-if="userData.userName"  aria-hidden="true"></i>
                          
                        </div>
                    </div>
                    <small v-if="userNameErr" style="position: relative;top: -23px; color: #d9534f;">{{userNameErr}}</small>
                    <div class="form-group row">
                        <label for="password" class="col-md-3 control-label">Password</label>
                        <div class="col-md-8">
                            <input v-model="userData.password" @keyup="checkPassword" @blur="checkPassword" autocomplete="off" type="password" class="form-control" name="passwd" placeholder="Password">
                        </div>
                        <div class="col-md-1">
                          
                          <i class="fa fa-close" v-if="passwordErr" aria-hidden="true"></i>
                          <i class="fa fa-check" v-else-if="userData.password" aria-hidden="true"></i>
                        </div>
                        
                    </div>
                    <small v-if="passwordErr" style="position: relative;top: -23px; color: #d9534f;">{{passwordErr}}</small>


                    <div class="form-group row">
                        <!-- Button -->
                        <div class="col-md-3"></div>
                        <div class="col-md-9">
                            <button @click="handleSubmit" id="btn-signup" type="button" class="btn btn-info"><i class="fa fa-sign-in" aria-hidden="true"></i> Sign Up</button>
                        </div>
                    </div>

                    <div style="border-top: 1px solid #999; padding-top:20px" class="form-group row">

                        <div class="col-md-offset-3 col-md-9">
                            <!-- <button id="btn-fbsignup" type="button" class="btn btn-primary"><i class="icon-facebook"></i>   Sign Up with Facebook</button> -->
                        </div>

                    </div>
                </form>
            </div>
        </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
import config from '../store/config'
import debounce from 'lodash/debounce'
import { mapActions } from 'vuex'
import { mapGetters } from 'vuex'
import { isValidEmail } from '../utils/validators' 
export default {
  name: 'my-signin',
  data (){
    return {
        userData: {
          userName:"",
          email:"",
          password:""
        },
        signUpErr:"",
        userNameErr:"",
        passwordErr:"",
        emailErr:""
    }
  },
  methods: {
    ...mapActions({
      signUp: 'SIGN_UP'
    }),
    checkUserName: debounce(function(e){
      if(e.key && e.key == 'Tab')return;

      if(this.userData.userName.length < 5){
        this.userNameErr ="Invalid userName";
        return;
      }
      this.userNameErr ="";
      const url = config.getBaseUrl() + config.resources.checkUsername+'/'+this.userData.userName;
      axios.get(url)
            .then((resp)=>{
              if(!resp.data.isValid){
                this.userNameErr="Username already exist"
              }
            },(err)=>{
              this.userNameErr="Username already exist"
            })
    }, 500),
    checkPassword:debounce(function(e){
      if(e.key && e.key == 'Tab')return;
      if(this.userData.password.length < 5 ){
        this.passwordErr ="Invalid password";
      }else{
        this.passwordErr = "";
      }
    },500),
    checkEmail:debounce(function(e){
      if( isValidEmail(this.userData.email) ){
        this.emailErr ="";
      }else{
        this.emailErr ="Invalid Email id";
      }
    },800),
    handleSubmit: function(e){
      e.preventDefault()
      console.log(this.isValid)
      if(this.isValid){
        const params = this.userData;
        var invalidData = false;
        if(params.userName.length == 0){
          this.userNameErr ="Invalid Username"
          invalidData = true;
        }
        if(params.email.length == 0){
          this.emailErr ="Invalid Email"
          invalidData = true;
        }
        if(params.password.length == 0){
          this.passwordErr ="Invalid Password"
          invalidData = true;
        }
        if(invalidData){
          return;
        }
        this.signUp(params)
            .then( (resp ) => {
              console.log('resp', resp);
              //debugger;
              if(resp.code == 201){
                this.$router.push('/?signup=success')
              }else{
                this.signUpErr="Username or email already exist"
              }
            })
            .catch((err) => {
              this.signUpErr="Username or email already exist"
            })
      }
    }
  },
  computed: {
    ...mapGetters([
      'loggedInUser'
    ]),
    isValid: function(){
      return !(this.userNameErr || this.passwordErr || this.emailErr)
    }
  },
  created: function(){
    if(this.loggedInUser){
      this.$router.push('/')
    }
  }
}
</script>
<style scoped>
	::-webkit-input-placeholder {
	  color: #d0d0d0;
	}
	::-moz-placeholder {
	  color: #d0d0d0;
	}
	:-ms-input-placeholder {
	  color: #d0d0d0;
	}
	:-moz-placeholder {
	  color: #d0d0d0;
	}
  #signupform .fa-check{
    color: green;
  }
  #signupform .fa-close{
    color: #d9534f;
  }
</style>