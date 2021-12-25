import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import TextToSpeech from 'text-to-speech-js'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  TextToSpeech,
  render: h => h(App)
}).$mount('#app')
