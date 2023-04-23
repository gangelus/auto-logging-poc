import { Injectable } from '@nestjs/common';
import { LoggerService } from './logging'

@Injectable()
export class GreeterService {
  constructor (private logger: LoggerService) {
    this.logger.autolog(this)
  }

  sayHelloTo(firstname: string, lastname: string): string {
    throw new Error(`Cannot sayHelloTo ${firstname} ${lastname}!`)
  }

  sayGoodbyeTo(firstname: string, lastname: string, payload?: { seeYou: string }) {
    this.logger.warn(`Manually logging goodbye to ${firstname}`)

    return `Bye bye ${firstname} ${lastname}, see you ${payload.seeYou}.`
  }

  async asyncGreet() {
    return new Promise(resolve => resolve('This was async'))
  }
}
