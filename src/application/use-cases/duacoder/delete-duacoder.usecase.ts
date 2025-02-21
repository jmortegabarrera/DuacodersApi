import { Inject, Injectable } from '@nestjs/common';
import { DuacoderRepository } from '../../../domain/repositories/duacoder.repository';

@Injectable()
export class DeleteDuacoderUseCase {
  constructor(
    @Inject('DuacoderRepository')
    private readonly duacoderRepository: DuacoderRepository,
  ) {}

  async execute(nifs: string[]): Promise<void> {
    await this.duacoderRepository.delete(nifs);
  }
}
