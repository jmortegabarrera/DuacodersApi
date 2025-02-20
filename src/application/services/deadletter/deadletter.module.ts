import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DeadLetterEntity } from '../../../infrastructure/bbdd/entities/deadletter.entity';
import { DeadletterLogRepositoryImpl } from '../../../infrastructure/bbdd/repositories/deadletter.repository';

@Module({
  imports: [TypeOrmModule.forFeature([DeadLetterEntity])],
  providers: [DeadletterLogRepositoryImpl],
  exports: [DeadletterLogRepositoryImpl],
})
export class DeadletterModule {}
