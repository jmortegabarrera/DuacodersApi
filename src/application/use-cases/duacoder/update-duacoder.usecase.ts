import { Injectable } from '@nestjs/common';
import { Duacoder } from '../../../domain/models/duacoder.model';
import { DuacoderRepositoryImpl } from '../../../infrastructure/bbdd/repositories/duacoder.repository';

@Injectable()
export class UpdateDuacoderUseCase {
  constructor(private readonly duacoderRepository: DuacoderRepositoryImpl) {}

  async execute(
    nif: string,
    duacoderData: Partial<Duacoder>,
  ): Promise<Duacoder | null> {
    const existingDuacoder = await this.duacoderRepository.findById(nif);
    if (!existingDuacoder) {
      return null;
    }
    const updatedDuacoder = { ...existingDuacoder, ...duacoderData };
    return this.duacoderRepository.update(nif, updatedDuacoder);
  }
}
