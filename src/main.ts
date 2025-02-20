import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { RegisterErrorLogUseCase } from './application/use-cases/deadletter/deadletter.usecase';
import { AllExceptionsFilter } from './infrastructure/http/filters/exceptions.filter';
import { DeadletterLogRepositoryImpl } from './infrastructure/bbdd/repositories/deadletter.repository';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const deadletterLogRepository = new DeadletterLogRepositoryImpl(
    app.get('DeadLetterEntityRepository'),
  );
  const registerErrorLogUseCase = new RegisterErrorLogUseCase(deadletterLogRepository);
  
  const config = new DocumentBuilder()
    .setTitle('Duacode API')
    .setDescription('API for managing duacoders')
    .setVersion('1.0')
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
