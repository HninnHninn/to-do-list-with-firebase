import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from 'firebase'

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
  render: function (h) { return h(App) }
}).$mount('#app')