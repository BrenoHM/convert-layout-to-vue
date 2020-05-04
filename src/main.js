import Vue from 'vue'
import App from './App.vue'
import router from './router'

import './assets/css/open-iconic-bootstrap.min.css'
import './assets/css/animate.css'
import './assets/css/owl.carousel.min.css'
import './assets/css/magnific-popup.css'
import './assets/css/aos.css'
import './assets/css/ionicons.min.css'
import './assets/css/bootstrap-datepicker.css'
import './assets/css/jquery.timepicker.css'
import './assets/css/flaticon.css'
import './assets/css/icomoon.css'
import './assets/css/style.css'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
