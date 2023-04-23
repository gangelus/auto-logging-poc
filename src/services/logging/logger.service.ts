import { Injectable} from '@nestjs/common';
import { modifyPrototype } from '.'

@Injectable()
export class LoggerService {
  preffix: string = '[CustomLoggerService]'

  autolog(classContext: any) {
    const preffix = modifyPrototype(classContext, this)
    this.preffix += ` [${preffix}]`
  }

  log(message: string) {
    console.log(`${this.preffix} INFO  ${message}`)
  }

  warn(message: string) {
    console.warn(`${this.preffix} WARN  ${message}`)
  }

  error(message: string) {
    console.error(`${this.preffix} ERROR ${message}`)
  }
}