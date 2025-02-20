import { Inject, Injectable } from '@nestjs/common';
import { ErrorLog } from '../../../domain/models/error-log.model';
import { DeadletterLogRepository } from '../../../domain/repositories/deadletter.repository';

@Injectable()
export class DeadLetterService {
  constructor(
    @Inject('deadletterLogRepository')
    private readonly deadletterLogRepository: DeadletterLogRepository,
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
