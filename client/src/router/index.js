import Vue from 'vue'
import VueRouter from 'vue-router'
import Admin from '../views/Admin.vue'
import AddCard from '../views/AddCard.vue'
import Study from '../views/Study.vue'
import EditCard from '../views/EditCard.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Admin',
    component: Admin
  },

  {
    path: '/create',
    name: 'Create',
    component: AddCard
  },

  {
    path: '/study',
    name: 'Study',
    component: Study
  },

  {
    path: '/edit/:cardId',
    name: 'Edit',
    component: EditCard
  }
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
