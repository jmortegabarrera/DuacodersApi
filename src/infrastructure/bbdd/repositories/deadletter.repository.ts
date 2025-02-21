import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ErrorLog } from '../../../domain/models/error-log.model';
import { DeadLetterEntity } from '../entities/deadletter.entity';
import { DeadletterLogRepository } from '../../../domain/repositories/deadletter.repository';

@Injectable()
export class DeadletterLogRepositoryImpl implements DeadletterLogRepository {
  constructor(
    @InjectRepository(DeadLetterEntity)
    private readonly errorLogRepository: Repository<DeadLetterEntity>,
  ) {}

  async create(errorLog: ErrorLog): Promise<DeadLetterEntity> {
    const deadLetterLogEntity = new DeadLetterEntity();
    deadLetterLogEntity.message = errorLog.message;
    deadLetterLogEntity.stackTrace = errorLog.stackTrace;
    deadLetterLogEntity.type = errorLog.type;
    deadLetterLogEntity.createdAt = errorLog.createdAt;

    return await this.errorLogRepository.save(deadLetterLogEntity);
  }
}
