import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import axios from 'axios'

Vue.config.productionTip = false

/* import fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faEdit, faTrashCan } 
  from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faEdit);
library.add(faTrashCan);

/* add font awesome icon component */
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false
axios.defaults.baseURL = process.env.VUE_APP_REMOTE_API;

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
