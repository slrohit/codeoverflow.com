<template>
  <div id="app" class="">
    <my-header></my-header>
    <router-view></router-view>
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
</style>
