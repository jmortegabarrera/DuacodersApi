import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FindAllDuacoderUseCase } from '../../../application/use-cases/duacoder/find-all-duacoder.usecase';
import { DuacoderEntity } from '../../bbdd/entities/duacoder.entity';
import { ExportController } from '../controllers/export.controller';
import { ExcelService } from './excel.service';
import { DuacoderRepositoryImpl } from '../../bbdd/repositories/duacoder.repository';

@Module({
  imports: [TypeOrmModule.forFeature([DuacoderEntity])],
  controllers: [ExportController],
  providers: [ExcelService, FindAllDuacoderUseCase, DuacoderRepositoryImpl],
  exports: [ExcelService, FindAllDuacoderUseCase],
})
export class ExportModule {}
