import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const AboutUs = resolve => require(['../components/AboutUs.vue'], resolve);
const ArticleEditor = resolve => require(['../components/ArticleEditor.vue'], resolve);
const ContactUs = resolve => require(['../components/ContactUs.vue'], resolve);
const Editor = resolve => require(['../components/Editor.vue'], resolve);
const Footer = resolve => require(['../components/Footer.vue'], resolve);
const Header = resolve => require(['../components/Header.vue'], resolve);
const Question = resolve => require(['../components/Question.vue'], resolve);
const Questions = resolve => require(['../components/Questions.vue'], resolve);
const SignIn = resolve => require(['../components/SignIn.vue'], resolve);
const SignUp = resolve => require(['../components/SignUp.vue'], resolve);
const Loader = resolve => require(['../components/Loader.vue'], resolve);

export default new Router({
  mode: 'history',
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Questions
    },
    {
      path: '/index.html',
      name: 'Home2',
      component: Questions
    },
    {
      path: '/questions',
      name: 'Questions',
      component: Questions
    },
    {
      path: '/questions/page/:pageNo',
      name: 'QuestionsPage',
      component: Questions
    },
    {
      path: '/questions/:id/:title',
      name: 'Question',
      component: Question
    },
    {
      path: '/questions/all',
      name: 'QuestionsAll',
      component: Questions
    },
    {
      path: '/signin',
      name: 'SignIn',
      component: SignIn
    },
    {
      path: '/signup',
      name: 'SignUp',
      component: SignUp
    },
    {
      path: '/contact(-|_)?us',
      name: 'ContactUs',
      component: ContactUs
    },
    {
      path: '/about(-|_)?us',
      name: 'AboutUs',
      component: AboutUs
    },
    {
      path: '/article-editor',
      name: 'ArticleEditor',
      component: ArticleEditor
    },
    {
      path: '/code',
      name: 'Editor',
      component: Editor
    }
  ]
})
