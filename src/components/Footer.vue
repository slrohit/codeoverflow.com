<template>
	<footer id="myFooter">
    <div class="container">
      <div class="row">
        <div class="col-sm-3">
            <h2 class="logo">
            	<router-link class="navbar-brand bg-logo" to='/'>Nav bar</router-link>
            	Codeoverflow
            </h2>
        </div>
        <div class="col-sm-2">
            <h5>Get started</h5>
            <ul>
                <li><router-link  to="/">Home</router-link ></li>
                <li><router-link  to="/signup">Sign up</router-link ></li>
            </ul>
        </div>
        <div class="col-sm-2">
            <h5>About us</h5>
            <ul>
                <li><router-link to="/about-us">About us</router-link></li>
                <li><router-link to="/contact-us">Contact us</router-link></li>
            </ul>
        </div>
        <div class="col-sm-2">
            <h5>Support</h5>
            <ul>
                <li><a href="#">FAQ</a></li>
                <li><a href="#">Forums</a></li>
            </ul>
        </div>
        <div class="col-sm-3">
            <div class="social-networks">
                <a href="https://twitter.com/rohit_slrohit" target="_blank"  rel="noopener" class="twitter"><i title="twitter" class="fa fa-twitter"></i></a>
                <a href="https://www.facebook.com/codeover" target="_blank"  rel="noopener" class="facebook"><i title="facebook" class="fa fa-facebook"></i></a>
                <a href="https://plus.google.com/collection/YEJWHE" target="_blank"  rel="noopener" class="google"><i title="google" class="fa fa-google-plus"></i></a>
            </div>
        </div>
      </div>
    </div>
    <div class="footer-copyright">
        <p>© 2016 Copyright Text </p>
    </div>
  </footer>
</template>
<style scoped>
#myFooter {
    background-color: #3c3d41;
    color: white;
    padding-top: 30px;
    margin-top: 60px;
}

#myFooter .footer-copyright {
    background-color: #333333;
    padding-top: 3px;
    padding-bottom: 3px;
    text-align: center;
}

#myFooter .row {
    margin-bottom: 60px;
}

#myFooter .navbar-brand {
    margin-top: 45px;
    height: 65px;
}

#myFooter .footer-copyright p {
    margin: 10px;
    color: #ccc;
}

#myFooter ul {
    list-style-type: none;
    padding-left: 0;
    line-height: 1.7;
}

#myFooter h5 {
    font-size: 18px;
    color: white;
    font-weight: bold;
    margin-top: 30px;
}

#myFooter h2 a{
    font-size: 50px;
    text-align: center;
    color: #fff;
}

#myFooter a {
    color: #d2d1d1;
    text-decoration: none;
}

#myFooter a:hover,
#myFooter a:focus {
    text-decoration: none;
    color: white;
}

#myFooter .social-networks {
    text-align: center;
    padding-top: 30px;
    padding-bottom: 16px;
}

#myFooter .social-networks a {
    font-size: 32px;
    color: #f9f9f9;
    padding: 10px;
    transition: 0.2s;
}

#myFooter .social-networks a:hover {
    text-decoration: none;
}

#myFooter .facebook:hover {
    color: #0077e2;
}

#myFooter .google:hover {
    color: #ef1a1a;
}

#myFooter .twitter:hover {
    color: #00aced;
}

#myFooter .btn {
    color: white;
    background-color: #d84b6b;
    border-radius: 20px;
    border: none;
    width: 150px;
    display: block;
    margin: 0 auto;
    margin-top: 10px;
    line-height: 25px;
}

@media screen and (max-width: 767px) {
    #myFooter {
        text-align: center;
    }
}

.content{
   flex: 1 0 auto;
   -webkit-flex: 1 0 auto;
   min-height: 200px;
}

#myFooter{
   flex: 0 0 auto;
   -webkit-flex: 0 0 auto;
}
#myFooter .logo{
	text-align: center;
}
#myFooter .bg-logo{
    background-size: 64px;
    border-radius: 50%;
    width: 64px;
    height: 64px;
	  margin: 0 auto;
	}
</style>