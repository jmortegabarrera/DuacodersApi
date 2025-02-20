import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UserRepositoryImpl } from '../../../infrastructure/bbdd/repositories/user.repository';

@Injectable()
export class AuthUseCase {
  constructor(
    private readonly userRepository: UserRepositoryImpl,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(username: string, pass: string) {
    const user = await this.userRepository.findByUsername(username);
    if (user && (await bcrypt.compare(pass, user.password))) return user;
    throw new UnauthorizedException('Invalid credentials');
  }

  async login(user: { username: string; id: string }) {
    const payload = { username: user.username };
    const token = this.jwtService.sign(payload);
    return { access_token: token };
  }
}
