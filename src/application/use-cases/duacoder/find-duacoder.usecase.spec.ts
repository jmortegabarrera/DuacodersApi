import { Test, TestingModule } from '@nestjs/testing';
import { Duacoder } from '../../../domain/models/duacoder.model';
import { FindDuacoderUseCase } from './find-duacoder.usecase.ts';
import { DuacoderRepository } from '../../../domain/repositories/duacoder.repository';

describe('FindDuacoderUseCase', () => {
  let findDuacoderUseCase: FindDuacoderUseCase;
  let duacoderRepository: DuacoderRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        FindDuacoderUseCase,
        {
          provide: 'DuacoderRepository',
          useValue: {
            findById: jest.fn(),
          },
        },
      ],
    }).compile();

    findDuacoderUseCase = module.get<FindDuacoderUseCase>(FindDuacoderUseCase);
    duacoderRepository = module.get<DuacoderRepository>('DuacoderRepository');
  });

  it('should be defined', () => {
    expect(findDuacoderUseCase).toBeDefined();
  });

  it('should call duacoderRepository.findById() when executing the use case', async () => {
    const nif = '12345678A';

    const duacoder: Duacoder = {
      nif: '12345678A',
      name: 'John Doe',
      department: 'IT',
      position: 'Developer',
      skills: ['Node.js'],
      biography: 'Some biography',
      photoUrl: 'some-url',
      likesOnionTortilla: true,
      birthDate: new Date(),
    };

    duacoderRepository.findById = jest.fn().mockResolvedValue(duacoder);

    const result = await findDuacoderUseCase.execute(nif);

    expect(duacoderRepository.findById).toHaveBeenCalledWith(nif);
    expect(result).toEqual(duacoder);
  });

  it('should return null if no duacoder matches the given nif', async () => {
    const nif = '98765432B';

    duacoderRepository.findById = jest.fn().mockResolvedValue(null);

    const result = await findDuacoderUseCase.execute(nif);

    expect(duacoderRepository.findById).toHaveBeenCalledWith(nif);
    expect(result).toBeNull();
  });

  it('should throw an error if repository fails', async () => {
    const nif = '12345678A';

    duacoderRepository.findById = jest.fn().mockRejectedValue(new Error('Database error'));

    await expect(findDuacoderUseCase.execute(nif)).rejects.toThrow('Database error');
  });
});
