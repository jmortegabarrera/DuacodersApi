import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DuacoderController } from '../../../infrastructure/http/controllers/duacoder.controller';
import { DuacoderEntity } from '../../../infrastructure/bbdd/entities/duacoder.entity';
import { DuacoderRepositoryImpl } from '../../../infrastructure/bbdd/repositories/duacoder.repository';
import { CreateDuacoderUseCase } from './create-duacoder.usecase';
import { DeleteDuacoderUseCase } from './delete-duacoder.usecase';
import { FindAllDuacoderUseCase } from './find-all-duacoder.usecase';
import { UpdateDuacoderUseCase } from './update-duacoder.usecase';
import { FindDuacoderUseCase } from './find-duacoder.usecase';

@Module({
  imports: [TypeOrmModule.forFeature([DuacoderEntity])],
  controllers: [DuacoderController],
  providers: [
    CreateDuacoderUseCase,
    DeleteDuacoderUseCase,
    FindAllDuacoderUseCase,
    FindDuacoderUseCase,
    UpdateDuacoderUseCase,
    { provide: 'DuacoderRepository', useClass: DuacoderRepositoryImpl },
  ],
  exports: [
    CreateDuacoderUseCase,
    DeleteDuacoderUseCase,
    FindAllDuacoderUseCase,
    FindDuacoderUseCase,
    UpdateDuacoderUseCase,
    'DuacoderRepository',
  ],
})
export class DuacoderModule {}
