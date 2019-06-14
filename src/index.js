import Iiost from './components/Iiost.vue'

global.iios_iiost = function(Vue) {
  // Warning: component name must be globally unique in your host app
  Vue.component('iiost', Iiost)
}
