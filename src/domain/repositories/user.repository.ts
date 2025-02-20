import { UserEntity } from '../../infrastructure/bbdd/entities/user.entity';

export interface UserRepository {
  findByUsername(username: string): Promise<UserEntity | null>;
  save(user: UserEntity): Promise<UserEntity>;
}
