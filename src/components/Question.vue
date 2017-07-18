<template>
  <div class="question container-fluid">
    <div class="row">
      <div class="col-md-12">
        <div class="ques-desc card" v-if="question">
          <div class="card-header">
            <h1 class="card-title">{{question.title}}</h1>
          </div>
          <div class="card-block">
            <div v-html="question.html"></div>
            <div class="solve" v-if="!enableEditor" ><button class="btn btn-primary" @click="enableEditor = !enableEditor" >Solve</button></div>
          </div>
        </div>
      </div>
    </div>
    <my-editor v-if="enableEditor"></my-editor>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import { mapGetters } from 'vuex'
export default {
  name: 'question',
  data () {
    return {
      msg: 'Question page',
      enableEditor: false
    }
  },
  methods: {
    ...mapActions({
        loadQuestion: 'LOAD_QUESTION'
      })
  },
  computed: {
    ...mapGetters([
        'question'
      ]),
    title: function () {
      return this.$route.params.title && this.$route.params.title.indexOf('-') !== -1 ? this.$route.params.title.split('-').join(' ') : this.$route.params.title
    },
    questionId: function () {
      return this.$route.params.id
    }
  },
  created (){
    document.title = this.title
    this.loadQuestion(this.$route.params.id)
  },
  components:{
    'my-editor':() => import('./Editor')
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
