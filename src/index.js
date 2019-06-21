import Iiost from './components/Iiost.vue'

// function to be called when service loaded into web app:
// naming rule: iios_<service_unique_name>
//
global.iios_iiost = function(Vue) {
  // Warning: component name must be globally unique in your host app
  Vue.component('iiost', Iiost)

  // EXEAMPLE
  Vue.prototype.$services.emit('app:menu:add', [
    {
      path: '/myservicepath',
      title: 'Service view',
      icon: 'view',
      anonymousAccess: true,
      hideIfLogged: true,
      route: {
        path: '/myservicepath',
        component: Iiost
      }
    }
  ])
  
  let onServiceDestroy = () => {
    Vue.prototype.$services.emit('app:menu:remove', [
      {
        path: '/myservicepath'
      }
    ])
  }

  Vue.prototype.$services.once('service:destroy:iios', onServiceDestroy)
}
