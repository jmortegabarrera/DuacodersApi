import { Inject, Injectable } from '@nestjs/common';
import { DuacoderRepository } from '../../../domain/repositories/duacoder.repository';
import { DuacoderEntity } from '../../../infrastructure/bbdd/entities/duacoder.entity';
import { CreateDuacoderDTO } from './dtos/create-duacoder.dto';

@Injectable()
export class CreateDuacoderUseCase {
  constructor(
    @Inject('DuacoderRepository')
    private readonly duacoderRepository: DuacoderRepository,
  ) {}

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
