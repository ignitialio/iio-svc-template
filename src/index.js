import Iiost from './components/Iiost.vue'

// function to be called when service loaded into web app:
// naming rule: iios_<service_unique_name>
//
global.iios_iiost = function(Vue) {
  // Warning: component name must be globally unique in your host app
  Vue.component('iiost', Iiost)

  let register = () => {
    // EXEAMPLE
    Vue.prototype.$services.emit('app:menu:add', [
      {
        path: '/service-iiost',
        title: 'Iiost Service view',
        svgIcon: '$$service(iiost)/assets/iiost.svg',
        section: 'Services',
        anonymousAccess: true,
        hideIfLogged: false,
        route: {
          name: 'Iiost',
          path: '/service-iiost',
          component: Iiost
        }
      }
    ])

    let onServiceDestroy = () => {
      Vue.prototype.$services.emit('app:menu:remove', [{
        path: '/service-iiost'
      }])

      Vue.prototype.$services.emit('service:destroy:iiost:done')
    }

    Vue.prototype.$services.once('service:destroy:iiost', onServiceDestroy)
  }

  if (Vue.prototype.$services.appReady) {
    register()
  } else {
    Vue.prototype.$services.once('app:ready', register)
  }
}
