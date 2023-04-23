import { modifyPrototype } from './modify-prototype'

// Singleton
let logger

export function AutoLog() {
  function createInstance() {
    if (!logger) {
      logger = console
    }

    return logger
  }

  return function (target: any) {
    const preffix = target.prototype.constructor.name
    modifyPrototype(target, logger ? logger : createInstance(), `[${preffix}] `)
  }
}