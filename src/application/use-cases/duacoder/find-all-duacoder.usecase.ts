import { Injectable } from '@nestjs/common';
import { Duacoder } from '../../../domain/models/duacoder.model';
import { DuacoderRepositoryImpl } from '../../../infrastructure/bbdd/repositories/duacoder.repository';
import { FindAllDuacoderDTO } from './dtos/findAll.duacoder.dto.ts';

@Injectable()
export class FindAllDuacoderUseCase {
  constructor(private readonly duacoderRepository: DuacoderRepositoryImpl) {}

  async execute(query: FindAllDuacoderDTO): Promise<Duacoder[]> {
    const { page, pageSize, skills,nif, name, department, position } = query;
    const skip = (page - 1) * pageSize;
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
