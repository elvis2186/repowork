import Vue from 'vue/dist/vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery/src/jquery.js'
import 'bootstrap/dist/js/bootstrap.min.js'

Vue.config.productionTip = false


Vue.component('gridv-component', require('./components/layout/GridV.vue').default);


new Vue({ 
  el: '#app'
})

