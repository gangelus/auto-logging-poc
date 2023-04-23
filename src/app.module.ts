import { Module } from '@nestjs/common';
import { GreeterService } from './services/greeter.service';
import { TalkerService } from './services/talker.service';
import { LoggerService } from './services/logging';

@Module({
  imports: [],
  controllers: [],
  providers: [
    LoggerService,
    TalkerService,
    GreeterService,
  ],
})
export class AppModule {}
