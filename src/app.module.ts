import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DeadletterModule } from './application/services/deadletter/deadletter.module';
import { AuthModule } from './application/use-cases/auth/auth.module';
import { DuacoderModule } from './application/use-cases/duacoder/duacoder.module';
import { ExportModule } from './infrastructure/adapters/services/export.module';
import { databaseConfig } from './infrastructure/bbdd/config/database.config';

@Module({
  imports: [
    TypeOrmModule.forRoot(databaseConfig),
    DuacoderModule,
    DeadletterModule,
    AuthModule,
    ExportModule,
    ConfigModule.forRoot({ isGlobal: true, envFilePath: '.env' }),
  ],
})
export class AppModule {}
