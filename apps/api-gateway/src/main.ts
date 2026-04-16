import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors(); // Разрешаем запросы с других доменов
  await app.listen(3001); // Бэкенд будет на 3001
}
bootstrap();
