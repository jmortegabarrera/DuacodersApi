import { DeadLetterEntity } from '../../infrastructure/bbdd/entities/deadletter.entity';
import { ErrorLog } from '../models/error-log.model';

export interface DeadletterLogRepository {
  create(errorLog: ErrorLog): Promise<DeadLetterEntity>;
}
