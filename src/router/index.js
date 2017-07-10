import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: view('Questions')
    },
    {
      path: '/questions/:id/:title',
      name: 'Question',
      component: view('Question')
    },
    {
      path: '/questions/all',
      name: 'Questions',
      component: view('Questions')
    }
  ]
})

function view(name) {
  return resolve => require(['../components/' + name + '.vue'], resolve)
}