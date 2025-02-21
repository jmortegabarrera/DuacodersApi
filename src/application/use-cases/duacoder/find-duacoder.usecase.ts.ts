import { Inject, Injectable } from '@nestjs/common';
import { Duacoder } from '../../../domain/models/duacoder.model';
import { DuacoderRepository } from '../../../domain/repositories/duacoder.repository';

@Injectable()
export class FindDuacoderUseCase {
  constructor(
    @Inject('DuacoderRepository')
    private readonly duacoderRepository: DuacoderRepository,
  ) {}

  async execute(nif: string): Promise<Duacoder | null> {
    return await this.duacoderRepository.findById(nif);
  }
}
