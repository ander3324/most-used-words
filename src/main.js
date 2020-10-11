import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false

new Vue({
    vuetify,
    render: h => h(App)
}).$mount('#app')

//Para este proyecto:
// npm i -g @vue/cli - una sola vez de forma global
// vue add vuetify
// vue add electron-builder