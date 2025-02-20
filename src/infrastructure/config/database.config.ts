import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { DuacoderEntity } from '../bbdd/entities/duacoder.entity';
import { DeadLetterEntity } from '../bbdd/entities/deadletter.entity';

export const databaseConfig: TypeOrmModuleOptions = {
  type: (process.env.DB_TYPE as 'mysql') || 'mysql', 
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT || '3306', 10),
  username: process.env.DB_USERNAME || 'root',
  password: process.env.DB_PASSWORD || 'password',
  database: process.env.DB_NAME || 'duacoder_db',
  entities: [DuacoderEntity, DeadLetterEntity],
  synchronize: true,
  migrations: ['./src/infrastructure/bbdd/migrations/*.ts'],
};
