import { Test, TestingModule } from '@nestjs/testing';
import { FindAllDuacoderUseCase } from './find-all-duacoder.usecase';
import { DuacoderRepositoryImpl } from '../../../infrastructure/bbdd/repositories/duacoder.repository';
import { FindAllDuacoderDTO } from './dtos/findAll.duacoder.dto.ts';
import { Duacoder } from '../../../domain/models/duacoder.model';

describe('FindAllDuacoderUseCase', () => {
  let findAllDuacoderUseCase: FindAllDuacoderUseCase;
  let duacoderRepository: DuacoderRepositoryImpl;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        FindAllDuacoderUseCase,
        {
          provide: DuacoderRepositoryImpl,
          useValue: {
            findAll: jest.fn(),
          },
        },
      ],
    }).compile();

    findAllDuacoderUseCase = module.get<FindAllDuacoderUseCase>(FindAllDuacoderUseCase);
    duacoderRepository = module.get<DuacoderRepositoryImpl>(DuacoderRepositoryImpl);
  });

  it('should be defined', () => {
    expect(findAllDuacoderUseCase).toBeDefined();
  });

  it('should call duacoderRepository.findAll() when executing the use case', async () => {
    const query: FindAllDuacoderDTO = {
      page: 1,
      pageSize: 10,
      skills: ['Node.js'],
      nif: '12345678A',
      name: 'John Doe',
      department: 'IT',
      position: 'Developer',
    };

    const duacoderList: Duacoder[] = [
      {
        nif: '12345678A',
        name: 'John Doe',
        department: 'IT',
        position: 'Developer',
        skills: ['Node.js'],
        biography: 'Some biography',
        photoUrl: 'some-url',
        likesOnionTortilla: true,
        birthDate: new Date(),
      },
    ];

    duacoderRepository.findAll = jest.fn().mockResolvedValue(duacoderList);

    const result = await findAllDuacoderUseCase.execute(query);

    expect(duacoderRepository.findAll).toHaveBeenCalledWith(
      expect.objectContaining({
        nif: '12345678A',
        name: 'John Doe',
        skills: ['Node.js'],
        department: 'IT',
        position: 'Developer',
      }),
      0,
      10
    );
    expect(result).toEqual(duacoderList);
  });

  it('should return an empty array when no duacoders match the filter', async () => {
    const query: FindAllDuacoderDTO = {
      page: 1,
      pageSize: 10,
      skills: ['Python'],
      nif: '98765432B',
      name: 'Jane Doe',
      department: 'HR',
      position: 'Manager',
    };

    duacoderRepository.findAll = jest.fn().mockResolvedValue([]);

    const result = await findAllDuacoderUseCase.execute(query);

    expect(duacoderRepository.findAll).toHaveBeenCalledWith(
      expect.objectContaining({
        nif: '98765432B',
        name: 'Jane Doe',
        skills: ['Python'],
        department: 'HR',
        position: 'Manager',
      }),
      0,
      10
    );
    expect(result).toEqual([]);
  });

  it('should throw an error if repository fails', async () => {
    const query: FindAllDuacoderDTO = {
      page: 1,
      pageSize: 10,
      skills: ['Node.js'],
      nif: '12345678A',
      name: 'John Doe',
      department: 'IT',
      position: 'Developer',
    };

    duacoderRepository.findAll = jest.fn().mockRejectedValue(new Error('Database error'));

    await expect(findAllDuacoderUseCase.execute(query)).rejects.toThrow('Database error');
  });

  it('should return empty array if no filters are provided', async () => {
    const query: FindAllDuacoderDTO = {
      page: 1,
      pageSize: 10,
    };

    duacoderRepository.findAll = jest.fn().mockResolvedValue([]);

    const result = await findAllDuacoderUseCase.execute(query);

    expect(duacoderRepository.findAll).toHaveBeenCalledWith({}, 0, 10);
    expect(result).toEqual([]);
  });
});
