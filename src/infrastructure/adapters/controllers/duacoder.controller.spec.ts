import { Test, TestingModule } from '@nestjs/testing';
import { DuacoderController } from './duacoder.controller';
import { CreateDuacoderDTO } from '../../../application/use-cases/duacoder/dtos/create-duacoder.dto';
import { CreateDuacoderUseCase } from '../../../application/use-cases/duacoder/create-duacoder.usecase';
import { UpdateDuacoderUseCase } from '../../../application/use-cases/duacoder/update-duacoder.usecase';
import { DeleteDuacoderUseCase } from '../../../application/use-cases/duacoder/delete-duacoder.usecase';
import { FindAllDuacoderUseCase } from '../../../application/use-cases/duacoder/find-all-duacoder.usecase';
import { FindDuacoderUseCase } from '../../../application/use-cases/duacoder/find-duacoder.usecase.ts';

describe('DuacoderController', () => {
  let controller: DuacoderController;
  let createUseCase: CreateDuacoderUseCase;
  let findAllUseCase: FindAllDuacoderUseCase;
  let findOneUseCase: FindDuacoderUseCase;
  let updateUseCase: UpdateDuacoderUseCase;
  let deleteUseCase: DeleteDuacoderUseCase;

  beforeEach(async () => {
    const mockCreateUseCase = { execute: jest.fn().mockResolvedValue({ nif: '123456789', name: 'John Doe' }) };
    const mockFindAllUseCase = { execute: jest.fn().mockResolvedValue([{ nif: '123456789', name: 'John Doe' }]) };
    const mockFindOneUseCase = { execute: jest.fn().mockResolvedValue({ nif: '123456789', name: 'John Doe' }) };
    const mockUpdateUseCase = { execute: jest.fn().mockResolvedValue({ nif: '123456789', name: 'Jane Doe' }) };
    const mockDeleteUseCase = { execute: jest.fn().mockResolvedValue(undefined) };

    const module: TestingModule = await Test.createTestingModule({
      controllers: [DuacoderController],
      providers: [
        { provide: CreateDuacoderUseCase, useValue: mockCreateUseCase },
        { provide: FindAllDuacoderUseCase, useValue: mockFindAllUseCase },
        { provide: FindDuacoderUseCase, useValue: mockFindOneUseCase },
        { provide: UpdateDuacoderUseCase, useValue: mockUpdateUseCase },
        { provide: DeleteDuacoderUseCase, useValue: mockDeleteUseCase },
      ],
    }).compile();

    controller = module.get<DuacoderController>(DuacoderController);
    createUseCase = module.get<CreateDuacoderUseCase>(CreateDuacoderUseCase);
    findAllUseCase = module.get<FindAllDuacoderUseCase>(FindAllDuacoderUseCase);
    findOneUseCase = module.get<FindDuacoderUseCase>(FindDuacoderUseCase);
    updateUseCase = module.get<UpdateDuacoderUseCase>(UpdateDuacoderUseCase);
    deleteUseCase = module.get<DeleteDuacoderUseCase>(DeleteDuacoderUseCase);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should create a duacoder', async () => {
    const dto: CreateDuacoderDTO = { nif: '123456789', name: 'Jane Doe', department: 'IT', position: 'Developer', likesOnionTortilla: true, skills: ['TypeScript', 'Angular'] };
    const result = await controller.create(dto);
    expect(result).toHaveProperty('nif', '123456789');
    expect(result).toHaveProperty('name', 'John Doe');
    expect(createUseCase.execute).toHaveBeenCalledWith(dto);
  });

  it('should return all duacoders', async () => {
    const result = await controller.findAll();
    expect(result).toEqual([{ nif: '123456789', name: 'John Doe' }]);
    expect(findAllUseCase.execute).toHaveBeenCalled();
  });

  it('should return one duacoder', async () => {
    const result = await controller.findOne('123456789');
    expect(result).toEqual({ nif: '123456789', name: 'John Doe' });
    expect(findOneUseCase.execute).toHaveBeenCalledWith('123456789');
  });

  it('should update a duacoder', async () => {
    const dto = { nif: '123456789', name: 'Jane Doe', department: 'IT', position: 'Developer', likesOnionTortilla: true, skills: ['TypeScript', 'Angular'] };
    const result = await controller.update('123456789', dto);
    expect(result).toHaveProperty('name', 'Jane Doe');
    expect(updateUseCase.execute).toHaveBeenCalledWith('123456789', dto);
  });

  it('should delete a duacoder', async () => {
    await controller.delete('123456789');
    expect(deleteUseCase.execute).toHaveBeenCalledWith('123456789');
  });
});
