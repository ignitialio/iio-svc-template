
// REDIS configuration
// -----------------------------------------------------------------------------
const REDIS_PORT = process.env.REDIS_PORT ? parseInt(process.env.REDIS_PORT) : 6379
const REDIS_DB = process.env.REDIS_DB ? parseInt(process.env.REDIS_DB) : 0
let REDIS_SENTINELS

if (process.env.REDIS_SENTINELS) {
  REDIS_SENTINELS = []
  let sentinels = process.env.REDIS_SENTINELS.split(',')
  for (let s of sentinels) {
    REDIS_SENTINELS.push({ host: s.split(':')[0], port: s.split(':')[1] })
  }
}

// Main configuration structure
// -----------------------------------------------------------------------------
module.exports = {
  /* service name */
  name: process.env.SERVICE_NAME || 'iiost',
  /* service namesapce */
  namespace: process.env.IIOS_NAMESPACE || 'ignitialio',
  /* heartbeat */
  heartbeatPeriod: 5000,
  /* PUB/SUB/KV connector */
  connector: {
    /* redis server connection */
    redis: {
      /* encoder to be used for packing/unpacking raw messages */
      encoder: process.env.ENCODER || 'bson',
      master: process.env.REDIS_MASTER || 'mymaster',
      sentinels: REDIS_SENTINELS,
      host: process.env.REDIS_HOST,
      port: REDIS_PORT,
      db: REDIS_DB
    },
  },
  /* access control: if present, acces control enabled */
  accesscontrol: {
    /* access control namespace */
    namespace: process.env.IIOS_NAMESPACE || 'iios',
    /* grants for current service: auto-fill */
    grants: {
      admin: {
        'create:any': [ '*' ],
        'read:any': [ '*' ],
        'update:any': [ '*' ],
        'delete:any': [ '*' ]
      },
      user: {
        'read:any': [ '*' ],
        'update:any': [ '*' ],
        'delete:any': [ '*' ]
      },
      anonymous: {
        'read:any': [ '*' ]
      }
    },
    /* connector configuration: optional, default same as global connector, but
       on DB 1 */
    connector: {
      /* redis server connection */
      redis: {
        master: process.env.REDIS_MASTER || 'mymaster',
        sentinels: REDIS_SENTINELS,
        host: process.env.REDIS_HOST,
        port: REDIS_PORT,
        db: 1,
        ipFamily: 4
      }
    }
  },
  /* HTTP server declaration */
  server: {
    /* server host */
    host: process.env.IIOS_SERVER_HOST,
    /* server port */
    port: process.env.IIOS_SERVER_PORT,
    /* path to statically serve (at least one asset for icons for example) */
    path: process.env.IIOS_SERVER_PATH_TO_SERVE || './dist',
    /* indicates that service is behind an HTTPS proxy */
    https: false,
  },
  /* options published through discovery mechanism */
  publicOptions: {
    /* declares component injection */
    uiComponentInjection: true,
    /* service description */
    description: {
      /* service icon */
      icon: 'assets/iiost-64.png',
      /* Internationalization: see Ignitial.io Web App */
      i18n: {
        'My amazing component': [ 'Mon super composant' ],
        'Provides uber crazy services':  [
          'Fournit des services super hyper dingues'
        ],
        'Insert here your own UI components': [
          'Insérer ici vos propres composants'
        ]
      },
      /* eventually any other data */
      title: 'My amazing component',
      info: 'Provides uber crazy services'
    },
    /* domain related public options: could be any JSON object*/
    myPublicOption: {
      someOptions: {}
    }
  }
}
