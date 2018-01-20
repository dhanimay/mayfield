import Vue from 'vue'
import App from './app.vue'

require('../sass/index.sass')

new Vue({
  el: '#app',
  // components: { App }
  render: function(createElement) {
    return createElement(
      App
    )
  }
})