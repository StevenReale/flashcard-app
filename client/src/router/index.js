import Vue from 'vue'
import VueRouter from 'vue-router'
import Admin from '../views/Admin.vue'
import AddCard from '../views/AddCard.vue'
import Study from '../views/Study.vue'
import EditCard from '../views/EditCard.vue'
import DeleteCard from '../views/DeleteCard.vue'

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
  },

  {
    path: '/delete/:cardId',
    name: 'Delete',
    component: DeleteCard
  }

]

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes
})

export default router
