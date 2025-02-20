import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FindAllDuacoderUseCase } from '../../../application/use-cases/duacoder/find-all-duacoder.usecase';
import { DuacoderEntity } from '../../bbdd/entities/duacoder.entity';
import { ExportController } from '../controllers/export.controller';
import { ExcelService } from './excel.service';
import { DuacoderRepositoryImpl } from '../../bbdd/repositories/duacoder.repository';
import { FindDuacoderUseCase } from '../../../application/use-cases/duacoder/find-duacoder.usecase.ts';
import { PdfService } from './pdf.service';

@Module({
  imports: [TypeOrmModule.forFeature([DuacoderEntity])],
  controllers: [ExportController],
  providers: [ExcelService, FindAllDuacoderUseCase, DuacoderRepositoryImpl, FindDuacoderUseCase, PdfService],
  exports: [ExcelService, FindAllDuacoderUseCase, FindDuacoderUseCase, PdfService],
})
export class ExportModule {}
