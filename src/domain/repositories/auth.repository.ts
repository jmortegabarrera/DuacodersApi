import { UserEntity } from '../../infrastructure/bbdd/entities/user.entity';

export interface AuthRepository {
  validateUser(username: string, password: string): Promise<UserEntity | null>;
  login(user: UserEntity): Promise<string>;
}
