const Lifecycle = require('./lifecycle')
const compose = require('../lib/middlewares/sc-compose')
const debug = require('debug')('instrument:application')

class Instrucment {
  constructor() {
    this.middlewares = []
    this.lifecycle = Lifecycle
  }

  use(middleware) {
    if (typeof fn !== 'function') throw new TypeError('middleware must be a function!')

    debug('use %s', middleware._name || middleware.name || '-')
    this.middlewares.push(middleware)

    return this
  }

  start() {
    const componsiteiddleware = compose(this.middlewares)


  }
} 

module.exports = Instrucment
