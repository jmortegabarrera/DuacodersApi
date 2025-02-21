import { Inject, Injectable } from '@nestjs/common';
import { Duacoder } from '../../../domain/models/duacoder.model';
import { DuacoderRepository } from '../../../domain/repositories/duacoder.repository';

@Injectable()
export class UpdateDuacoderUseCase {
  constructor(
    @Inject('DuacoderRepository')
    private readonly duacoderRepository: DuacoderRepository,
  ) {}

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
