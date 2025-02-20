import { Injectable } from '@nestjs/common';
import { ErrorLog } from '../../../domain/models/error-log.model';
import { DeadletterLogRepositoryImpl } from '../../../infrastructure/bbdd/repositories/deadletter.repository';

@Injectable()
export class RegisterErrorLogUseCase {
  constructor(
    private readonly deadletterLogRepository: DeadletterLogRepositoryImpl,
  ) {}

  async execute(
    message: string,
    stackTrace: object | null,
    type: string,
  ): Promise<ErrorLog> {
    const errorLog = new ErrorLog(message, stackTrace, type);
    return this.deadletterLogRepository.create(errorLog);
  }
}
