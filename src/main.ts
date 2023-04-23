import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { GreeterService } from './services/greeter.service';
import { TalkerService } from './services/talker.service';

async function bootstrap() {
  const app = await NestFactory.createApplicationContext(AppModule)

  const greeterService = app.get(GreeterService)
  greeterService.sayHelloTo('Gabriel', 'Angelus');
  greeterService.sayGoodbyeTo('Heloísa', 'Matos', { seeYou: 'tomorrow' });
  await greeterService.asyncGreet();

  const talkerService = app.get(TalkerService)
  talkerService.talk()
}

bootstrap();
