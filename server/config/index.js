// REDIS configuration
// -----------------------------------------------------------------------------
const IIOS_REDIS_PORT = process.env.IIOS_REDIS_PORT ? parseInt(process.env.IIOS_REDIS_PORT) : 6379
const IIOS_REDIS_DB = process.env.IIOS_REDIS_DB ? parseInt(process.env.IIOS_REDIS_DB) : 0
let IIOS_REDIS_SENTINELS

if (process.env.IIOS_REDIS_SENTINELS) {
  IIOS_REDIS_SENTINELS = []
  let sentinels = process.env.IIOS_REDIS_SENTINELS.split(',')
  for (let s of sentinels) {
    IIOS_REDIS_SENTINELS.push({ host: s.split(':')[0], port: s.split(':')[1] })
  }
}

// Main configuration structure
// -----------------------------------------------------------------------------
module.exports = {
  /* service name */
  name: process.env.IIOS_SERVICE_NAME || 'iiost',
  /* service namesapce */
  namespace: process.env.IIOS_NAMESPACE || 'ignitialio',
  /* heartbeat */
  heartbeatPeriod: 5000,
  /* PUB/SUB/KV connector */
  connector: {
    /* redis server connection */
    redis: {
      /* encoder to be used for packing/unpacking raw messages */
      encoder: process.env.IIOS_ENCODER || 'bson',
      master: process.env.IIOS_REDIS_MASTER || 'mymaster',
      sentinels: IIOS_REDIS_SENTINELS,
      host: process.env.IIOS_REDIS_HOST,
      port: IIOS_REDIS_PORT,
      db: IIOS_REDIS_DB
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
        encoder: process.env.IIOS_ENCODER || 'bson',
        master: process.env.IIOS_REDIS_MASTER || 'mymaster',
        sentinels: IIOS_REDIS_SENTINELS,
        host: process.env.IIOS_REDIS_HOST,
        port: IIOS_REDIS_PORT,
        db: IIOS_REDIS_ACCESSDB
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
        ],
        'Iiost Service view': [
          'Vue du service Iiost'
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
