<template>
  <div class="question container-fluid">
    <div class="row">
      <div class="col-md-12">
        <div class="ques-desc card">
          <div class="card-header">
            <h1 class="card-title">{{title}}</h1>
          </div>
          <div class="card-block">
            <h2>Given an array of integers, find a subarray whose sum is maximum</h2>
            <h3>
              Ex: given an array arr=[-3,1,3,-2,4,-6,1,2]
              <br>
              Maximum sum subarray is arr[1:4] (0 based index) whose sum is 5 which is maximum amoung all the subarray sums
            </h3>
            <blockquote class="blockquote">
              <p class="mb-0">Subarray mean continous sequence</p>
            </blockquote>
            <div class="solve" v-if="!enableEditor" ><button class="btn btn-primary" @click="enableEditor = !enableEditor" >Solve</button></div>
          </div>
        </div>
      </div>
    </div>
    <my-editor v-if="enableEditor"></my-editor>
  </div>
</template>

<script>
import Editor from './Editor'
export default {
  name: 'question',
  data () {
    return {
      msg: 'Question page',
      enableEditor: false
    }
  },
  computed: {
    title: function () {
      return this.$route.params.title && this.$route.params.title.indexOf('-') !== -1 ? this.$route.params.title.split('-').join(' ') : this.$route.params.title
    },
    questionId: function () {
      return this.$route.params.id
    }
  },
  created (){
    document.title = this.title
  },
  components:{
    'my-editor':Editor
  }
}
</script>

<style scoped>
.ques-desc{
  margin-bottom: 10px;
}
h1{
  font-size: 1.7rem;
}
h2{
  font-size: 1.5rem;
}
h3{
  font-size: 1.3rem;
}
blockquote{
  background-color: rgba(128,128,128,0.05);
}
button.btn{
  cursor: pointer;
}
.solve{
  text-align: center;
}
</style>
