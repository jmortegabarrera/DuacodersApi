import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsString } from 'class-validator';

export class DeleteDuacoderDTO {
  @IsArray()
  @IsString({ each: true })
  @ApiProperty({ type: [String] })
  nifs: string[];
}
