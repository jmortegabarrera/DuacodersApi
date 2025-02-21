import { Inject, Injectable } from '@nestjs/common';
import { Duacoder } from '../../../domain/models/duacoder.model';
import { DuacoderRepository } from '../../../domain/repositories/duacoder.repository';
import { CreateDuacoderDTO } from './dtos/create-duacoder.dto';

@Injectable()
export class CreateDuacoderUseCase {
  constructor(
    @Inject('DuacoderRepository')
    private readonly duacoderRepository: DuacoderRepository,
  ) {}

  async execute(createDuacoderDTO: CreateDuacoderDTO): Promise<Duacoder> {
    const duacoder: Duacoder = {} as Duacoder;
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
