import { Body, Controller, Post } from '@nestjs/common';
import { AuthUseCase } from '../../../application/use-cases/auth/auth.usecase';
import { LoginDto } from '../../../application/use-cases/auth/dtos/login.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authUseCase: AuthUseCase) {}

  @Post('login')
  async login(@Body() loginDto: LoginDto) {
    const { username, password } = loginDto;
    const user = await this.authUseCase.validateUser(username, password);
    const token = await this.authUseCase.login(user);
    return { token };
  }
}
