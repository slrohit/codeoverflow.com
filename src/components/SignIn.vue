<template v-if="loggedInUser == '' ">
	<div class="container" style="padding: 0">
    <div id="loginbox" style="margin:0 auto;padding: 0" class="mainbox col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">
        <div class="card">
            <div class="card-header">
                <div class="card-title">Sign In</div>
                <!-- <div style="float:right; font-size: 80%; position: relative; top:-10px"><a href="#">Forgot password?</a>
                </div> -->
            </div>

            <div style="padding-top:30px" class="card-block">

                <div style="display:none" id="login-alert" class="alert alert-danger col-sm-12"></div>

                <form id="loginform" class="form-horizontal" role="form">

                    <div style="margin-bottom: 25px" class="input-group" :class="{ 'has-danger':userNameErr}">
                        <span class="input-group-addon"><i class="fa fa-user" aria-hidden="true"></i></span>
                        <input id="login-username" type="text" class="form-control" name="username" v-model="userName" @keyup="checkUsername" @blur="checkUsername" placeholder="username or email">
                    </div>
                    <small v-if="userNameErr" style="position: relative;top: -23px; color: #d9534f;">{{userNameErr}}</small>

                    <div style="margin-bottom: 25px" class="input-group" :class="{ error:passwordErr}" >
                        <span class="input-group-addon"><i class="fa fa-lock" aria-hidden="true"></i></span>
                        <input id="login-password" type="password" class="form-control" name="password" v-model="password" @keyup="checkPassword" @blur="checkPassword" placeholder="password">
                    </div>
                    <small v-if="passwordErr" style="position: relative;top: -23px; color: #d9534f;">{{passwordErr}}</small>


                    <!-- <div class="input-group">
                        <div class="checkbox">
                            <label>
                                <input id="login-remember" type="checkbox" name="remember" value="1"> Remember me
                            </label>
                        </div>
                    </div> -->


                    <div style="margin-top:10px" class="form-group">
                        <!-- Button -->

                        <div class="col-sm-12 controls">
                            <button id="btn-login" @click="handleSubmit" class="btn btn-success">Login  </button>
                            <!-- <a id="btn-fblogin" href="#" class="btn btn-primary">Login with Facebook</a> -->

                        </div>
                        <small v-if="loginErr" style="color: #d9534f;">{{loginErr}}</small>
                    </div>


                    <div class="form-group">
                        <div class="col-md-12 control">
                            <div style="border-top: 1px solid#888; padding-top:15px; font-size:85%">
                                Don't have an account!
                              <router-link to="/signup">Sign Up Here</router-link>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
  </div>
</template>
<script>
import debounce from 'lodash/debounce'
import { mapActions } from 'vuex'
import { mapGetters } from 'vuex'
export default {
  name: 'my-signin',
  data (){
    return {
        userName:"",
        password:"",
        userNameErr:"",
        passwordErr:"",
        loginErr:""
    }
  },
  methods: {
    ...mapActions({
      login: 'LOGIN'
    }),
    checkUsername : debounce( function(){
      if(this.userName.length < 5 ){
        this.userNameErr ="Invalid userName";
      }else{
        this.userNameErr = "";
      }
    },500),
    checkPassword: debounce( function(){
      if(e.key && e.key == 'Tab')return;
      if(this.password.length < 5 ){
        this.passwordErr ="Invalid password";
      }else{
        this.passwordErr = "";
      }
    },500),
    handleSubmit: function(e){
      e.preventDefault()
      if(this.isValid){
        const params = {"userName":this.userName,"password":this.password};
        this.login(params)
            .then( (resp ) => {
              console.log('resp', resp);
              //debugger;
              if(resp.status == 'ok'){
                this.$router.push('/')
              }else{
                this.loginErr="Wrong username or password"
              }
            })
            .catch((err) => {
              this.loginErr="Wrong username or password"
            })
      }
    }
  },
  computed: {
    ...mapGetters([
      'loggedInUser'
    ]),
    isValid: function(){
      return !(this.userNameErr || this.passwordErr)
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
</style>