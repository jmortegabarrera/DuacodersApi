import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as dotenv from 'dotenv';
import { AppModule } from './app.module';
import { DeadLetterService } from './application/services/deadletter/deadletter.service';
import { DeadletterLogRepositoryImpl } from './infrastructure/bbdd/repositories/deadletter.repository';
import { AllExceptionsFilter } from './infrastructure/http/filters/exceptions.filter';
dotenv.config({ path: './.env' });

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const deadletterLogRepository = new DeadletterLogRepositoryImpl(
    app.get('DeadLetterEntityRepository'),
  );
  const registerErrorLogUseCase = new DeadLetterService(
    deadletterLogRepository,
  );

  const config = new DocumentBuilder()
    .setTitle('Duacode API')
    .setDescription('API for managing duacoders')
    .setVersion('1.0')
    .addBearerAuth(
      {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
      },
      'access-token',
    )
    .build();

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
    }),
  );
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  app.useGlobalFilters(new AllExceptionsFilter(registerErrorLogUseCase));

  await app.listen(3000);
}
bootstrap();
