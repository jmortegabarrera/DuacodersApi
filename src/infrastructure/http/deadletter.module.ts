import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DeadletterLogRepositoryImpl } from '../bbdd/repositories/deadletter.repository';
import { DeadLetterEntity } from '../bbdd/entities/deadletter.entity';

@Module({
  imports: [TypeOrmModule.forFeature([DeadLetterEntity])],
  providers: [DeadletterLogRepositoryImpl],
  exports: [DeadletterLogRepositoryImpl], 
})
export class DeadletterModule {}
