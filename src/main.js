import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './router'
import '@/styles/base.scss';
import '@fortawesome/fontawesome-free/css/all.css' // Ensure you are using css-loader
// import 'material-design-icons-iconfont/dist/material-design-icons.css'

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')

export default new Vuetify({
  icons: {
    iconfont: 'fa',
  },
})