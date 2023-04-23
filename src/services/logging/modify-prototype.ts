import { performance } from 'perf_hooks';

export function modifyPrototype(target: any, logger: any, preffix: string = '') {
  const prototype = typeof target == 'object' ? Object.getPrototypeOf(target) : target.prototype;
  const methodNames = Object.getOwnPropertyNames(prototype).filter(method => method !== 'constructor');

  if (methodNames.includes('autoLogDecorated')) {
    return target
  }

  methodNames.forEach(methodName => {
    const originalMethod = prototype[methodName];
    prototype[methodName] = async function (...args: any[]) {
      const startTime = performance.now()
      const jsonArgs = args.map(a => typeof a == 'object' ? JSON.stringify(a) : a )
      logger.log(`${preffix}⚪ "${methodName}" method called with args: (${jsonArgs.join(', ')})`);

      try {
        let result = originalMethod.apply(this, args);

        if (typeof result.then == 'function') {
          result = await result
        }

        const endTime = performance.now()
        logger.log(`${preffix}🟢 "${methodName}" method resulted: ${result} in ${endTime - startTime} milliseconds`);
        return result;
      } catch (error) {
        const endTime = performance.now()
        logger.error(`${preffix}🔴 "${methodName}" method resulted error: ${error} in ${endTime - startTime} milliseconds`);
      }
    };
  });

  prototype['autoLogDecorated'] = true

  return prototype.constructor.name
}