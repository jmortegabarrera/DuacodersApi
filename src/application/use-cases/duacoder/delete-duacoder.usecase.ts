import { Injectable } from '@nestjs/common';
import { DuacoderRepositoryImpl } from '../../../infrastructure/bbdd/repositories/duacoder.repository';

@Injectable()
export class DeleteDuacoderUseCase {
  constructor(private readonly duacoderRepository: DuacoderRepositoryImpl) {}

  async execute(nifs: string[]): Promise<void> {
    await this.duacoderRepository.delete(nifs);
  }
}
