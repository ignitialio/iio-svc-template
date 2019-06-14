const Service = require('@ignitial/iio-services').Service
const config = require('./config')

class Iiost extends Service {
  constructor(options) {
    // set service name before calling super
    options.name = 'iiost'
    super(options)
  }

  // provides some services here
  oneServiceMethod(args) {
    return new Promise((resolve, reject) => {
      resolve({ somedata: 'some value' })
    })
  }
}

// instantiate service with its configuration
let iiost = new Iiost(config)

iiost._init().then(() => {
  console.log('service [' + this._name + '] initialization done')
}).catch(err => {
  console.error('initialization failed', err)
  process.exit(1)
})
