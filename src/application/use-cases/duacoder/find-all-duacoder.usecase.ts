import { Inject, Injectable } from '@nestjs/common';
import { Duacoder } from '../../../domain/models/duacoder.model';
import { DuacoderRepository } from '../../../domain/repositories/duacoder.repository';
import { FindAllDuacoderDTO } from './dtos/findAll.duacoder.dto.ts';

@Injectable()
export class FindAllDuacoderUseCase {
  constructor(
    @Inject('DuacoderRepository')
    private readonly duacoderRepository: DuacoderRepository,
  ) {}

  async execute(query: FindAllDuacoderDTO): Promise<Duacoder[]> {
    const { page, pageSize, skills, nif, name, department, position } = query;
    if (page && pageSize) {
      const skip = (page - 1) * pageSize;
    }
    const skip = 0;
    const take = pageSize;

    const filter: any = {};
    if (nif) filter.nif = nif;
    if (name) filter.name = name;
    if (skills) filter.skills = skills;
    if (department) filter.department = department;
    if (position) filter.position = position;

    return this.duacoderRepository.findAll(filter, skip, take);
  }
}
