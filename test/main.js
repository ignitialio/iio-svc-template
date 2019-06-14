import Vue from 'vue'
import Iiost from '../src/components/Iiost.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(Iiost),
}).$mount('#app')
