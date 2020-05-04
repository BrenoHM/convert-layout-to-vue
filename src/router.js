import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home.vue'
import Doctor from './components/Doctor.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  //base: process.env.BASE_URL,
  //base: 'http://localhost:8080',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
        path: '/doctor',
        name: 'doctor',
        component: Doctor
      },
    
  ]
})