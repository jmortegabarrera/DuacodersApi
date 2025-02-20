import { validate } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { IsValidDNI } from './isValidDni.decorator';

class CreateDuacoderDTO {
  @ApiProperty()
  @IsValidDNI()
  nif: string;
}

describe('IsValidDNI', () => {
  it('should validate a correct DNI', async () => {
    const dto = new CreateDuacoderDTO();
    dto.nif = '10218725D'; 

    const errors = await validate(dto);
    expect(errors.length).toBe(0); 
  });

  it('should invalidate an incorrect DNI', async () => {
    const dto = new CreateDuacoderDTO();
    dto.nif = '646545616'; 

    const errors = await validate(dto);
    expect(errors?.length).toBeGreaterThan(0); 
    if (errors && errors.length > 0 && errors[0].constraints) {
      expect(errors[0].constraints.isValidDNI).toBe('El NIF no es válido. Debe ser un DNI español.');
    }
  });

  it('should invalidate an empty string', async () => {
    const dto = new CreateDuacoderDTO();
    dto.nif = '';

    const errors = await validate(dto);
    expect(errors?.length).toBeGreaterThan(0); 
  });
});
