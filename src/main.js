import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from 'firebase'
import vuetify from './plugins/vuetify';
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'

Vue.config.productionTip = false

const config = {
  apiKey: 'AIzaSyAeTUroNd7TgoYoGd9x5lA_XCCIosTYY5I',
  authDomain: '',
  databaseURL: '',
  projectId: 'to-do-list-39592',
  storageBucket: '',
  messagingSenderId: '47957096127'
}

firebase.initializeApp(config)

export const db = firebase.firestore()

new Vue({
  router,
  store,
  vuetify,
  render: function (h) { return h(App) }
}).$mount('#app')