
import { IsString, IsArray, IsBoolean, IsOptional, IsDate, IsNotEmpty } from 'class-validator';
import { IsValidDNI } from '../../../utils/isValidDni.decorator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class DuacoderDTO {
  @IsNotEmpty()
  @IsString()
  @IsValidDNI()
  @ApiProperty()
  nif: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  name: string;

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  biography?: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  department: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  position: string;

  @IsArray()
  @IsString({ each: true })
  @ApiProperty()
  skills: string[];

  @IsOptional()
  @IsString()
  @ApiPropertyOptional()
  photoUrl?: string;

  @IsNotEmpty()
  @IsBoolean()
  @ApiProperty()
  likesOnionTortilla: boolean;

  @IsOptional()
  @IsDate()
  @ApiPropertyOptional()
  birthDate?: Date;
}
