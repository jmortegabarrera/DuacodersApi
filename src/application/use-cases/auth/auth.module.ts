import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthController } from '../../../infrastructure/adapters/controllers/auth.controller';
import { UserEntity } from '../../../infrastructure/bbdd/entities/user.entity';
import { UserRepositoryImpl } from '../../../infrastructure/bbdd/repositories/user.repository';
import { JwtStrategy } from '../../../infrastructure/security/jwt.strategy';
import { AuthUseCase } from './auth.usecase';

@Module({
  imports: [
    ConfigModule,
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        secret: configService.get<string>('JWT_SECRET'),
        signOptions: { expiresIn: '1h' },
      }),
      inject: [ConfigService],
    }),
    TypeOrmModule.forFeature([UserEntity]),
  ],
  controllers: [AuthController],
  providers: [AuthUseCase, JwtStrategy, { provide: 'UserRepository', useClass: UserRepositoryImpl }],
})
export class AuthModule {}
