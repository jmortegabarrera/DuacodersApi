import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Duacoder } from 'src/domain/models/duacoder.model';
import { DuacoderRepository } from '../../../domain/repositories/duacoder.repository';
import { DuacoderEntity } from '../../../infrastructure/bbdd/entities/duacoder.entity';
import { FindOptionsWhere, Like, Repository } from 'typeorm';

@Injectable()
export class DuacoderRepositoryImpl implements DuacoderRepository {
  constructor(
    @InjectRepository(DuacoderEntity)
    private readonly duacoderRepository: Repository<DuacoderEntity>,
  ) {}

  async create(duacoder: Duacoder): Promise<DuacoderEntity> {
    const duacoderEntity = new DuacoderEntity();
    duacoderEntity.nif = duacoder.nif;
    duacoderEntity.name = duacoder.name;
    duacoderEntity.biography = duacoder.biography;
    duacoderEntity.department = duacoder.department;
    duacoderEntity.position = duacoder.position;
    duacoderEntity.skills = duacoder.skills;
    duacoderEntity.photoUrl = duacoder.photoUrl;
    duacoderEntity.likesOnionTortilla = duacoder.likesOnionTortilla;
    duacoderEntity.birthDate = duacoder.birthDate;

    return await this.duacoderRepository.save(duacoderEntity);
  }

  async findAll(filter: any, skip: number, take: number): Promise<DuacoderEntity[]> {    
    const where: FindOptionsWhere<DuacoderEntity> = {};

    if (filter.name) {
      where.name = Like(`%${filter.name}%`);  
    }
  
    if (filter.nif) {
      where.nif = Like(`%${filter.nif}%`);  
    }

    if (filter.skills?.length) {
      where.skills = Like(`%${filter.skills.join('%')}%`);
    }
  
    if (filter.department) {
      where.department = Like(`%${filter.department}%`);
    }
  
    if (filter.position) {
      where.position = Like(`%${filter.position}%`);
    }
    return this.duacoderRepository.find({
      where: where,  
      skip,          
      take,           
    });
  }

  async findById(nif: string): Promise<DuacoderEntity | null> {
    return this.duacoderRepository.findOne({ where: { nif } });
  }

  async update(nif: string, duacoderData: Partial<DuacoderEntity>): Promise<DuacoderEntity | null> {
    await this.duacoderRepository.update(nif, duacoderData);
    return this.duacoderRepository.findOne({ where: { nif } });
  }

  async delete(nifs: string[]): Promise<void> {
    await this.duacoderRepository.delete(nifs);
  }
}
