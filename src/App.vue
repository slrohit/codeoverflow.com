<template>
  <div id="app" class="">
    <my-header></my-header>
    <transition name="fade" mode="out-in">
      <router-view :key="$route.fullPath"></router-view>
    </transition>
    <my-footer></my-footer>
  </div>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'
export default {
  name: 'app',
  components:{
    'my-header':Header,
    'my-footer':Footer
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background-color: #f0f9ff;
}
@media (min-width: 1200px){
  .container-fluid {
    padding-right: 35px;
    padding-left: 35px;
  }
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .4s ease
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0
}
</style>
<style src="./assets/css/bootstrap.css"></style>
<style src="./assets/css/font-awesome.css"></style>
