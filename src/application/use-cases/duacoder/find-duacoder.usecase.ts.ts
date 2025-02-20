import { Injectable } from '@nestjs/common';
import { Duacoder } from '../../../domain/models/duacoder.model';
import { DuacoderRepositoryImpl } from '../../../infrastructure/bbdd/repositories/duacoder.repository';

@Injectable()
export class FindDuacoderUseCase {
  constructor(private readonly duacoderRepository: DuacoderRepositoryImpl) {}

  async execute(nif: string): Promise<Duacoder | null> {
    return await this.duacoderRepository.findById(nif);
  }
}
