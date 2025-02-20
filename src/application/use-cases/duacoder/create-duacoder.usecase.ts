import { Injectable } from '@nestjs/common';
import { DuacoderEntity } from '../../../infrastructure/bbdd/entities/duacoder.entity';
import { DuacoderRepositoryImpl } from '../../../infrastructure/bbdd/repositories/duacoder.repository';
import { CreateDuacoderDTO } from './dtos/create-duacoder.dto';

@Injectable()
export class CreateDuacoderUseCase {
  constructor(private readonly duacoderRepository: DuacoderRepositoryImpl) {}

  async execute(createDuacoderDTO: CreateDuacoderDTO): Promise<DuacoderEntity> {
    const duacoder = new DuacoderEntity();
    duacoder.nif = createDuacoderDTO.nif;
    duacoder.name = createDuacoderDTO.name;
    duacoder.biography = createDuacoderDTO.biography;
    duacoder.department = createDuacoderDTO.department;
    duacoder.position = createDuacoderDTO.position;
    duacoder.skills = createDuacoderDTO.skills;
    duacoder.photoUrl = createDuacoderDTO.photoUrl;
    duacoder.likesOnionTortilla = createDuacoderDTO.likesOnionTortilla;
    duacoder.birthDate = createDuacoderDTO.birthDate;

    return this.duacoderRepository.create(duacoder);
  }
}
