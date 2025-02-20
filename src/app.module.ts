import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DuacoderModule } from './application/use-cases/duacoder/duacoder.module';
import { DuacoderController } from './infrastructure/adapters/controllers/duacoder.controller';
import { databaseConfig } from './infrastructure/config/database.config';

@Module({
  imports: [TypeOrmModule.forRoot(databaseConfig), DuacoderModule],
  controllers: [DuacoderController],
})
export class AppModule {}