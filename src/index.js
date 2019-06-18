import Iiost from './components/Iiost.vue'

// function to be called when service loaded into web app:
// naming rule: iios_<service_unique_name>
//
global.iios_iiost = function(Vue) {
  // Warning: component name must be globally unique in your host app
  Vue.component('iiost', Iiost)
}
