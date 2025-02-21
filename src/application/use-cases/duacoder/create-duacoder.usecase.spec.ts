import { Test, TestingModule } from '@nestjs/testing';
import { DuacoderRepository } from '../../../domain/repositories/duacoder.repository';
import { DuacoderEntity } from '../../../infrastructure/bbdd/entities/duacoder.entity';
import { CreateDuacoderUseCase } from './create-duacoder.usecase';
import { CreateDuacoderDTO } from './dtos/create-duacoder.dto';

describe('CreateDuacoderUseCase', () => {
  let createDuacoderUseCase: CreateDuacoderUseCase;
  let duacoderRepository: DuacoderRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CreateDuacoderUseCase,
        {
          provide: 'DuacoderRepository',
          useValue: {
            create: jest.fn(),
          },
        },
      ],
    }).compile();

    createDuacoderUseCase = module.get<CreateDuacoderUseCase>(
      CreateDuacoderUseCase,
    );
    duacoderRepository = module.get<DuacoderRepository>('DuacoderRepository');
  });

  it('should be defined', () => {
    expect(createDuacoderUseCase).toBeDefined();
  });

  it('should call duacoderRepository.create() when executing the use case', async () => {
    const createDuacoderDTO: CreateDuacoderDTO = {
      nif: '12345678A',
      name: 'Baldomero',
      biography: 'Biography of Baldomero',
      department: 'HR',
      position: 'Manager',
      skills: ['Angular', 'NodeJS'],
      photoUrl: 'https://photo.url',
      likesOnionTortilla: true,
      birthDate: new Date('1990-01-01'),
    };

    const duacoderEntity: DuacoderEntity = {
      ...createDuacoderDTO,
    };

    duacoderRepository.create = jest.fn().mockResolvedValue(duacoderEntity);

    const result = await createDuacoderUseCase.execute(createDuacoderDTO);

    expect(duacoderRepository.create).toHaveBeenCalledWith(
      expect.objectContaining(createDuacoderDTO),
    );
    expect(result).toEqual(duacoderEntity);
  });
});
