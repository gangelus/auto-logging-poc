import { Injectable } from '@nestjs/common';
import { AutoLog } from './logging'

@Injectable()
@AutoLog()
export class TalkerService {
  talk(): string {
    return `Hi, how are you?`;
  }
}
