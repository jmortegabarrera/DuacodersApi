import { Test, TestingModule } from '@nestjs/testing';
import { Duacoder } from '../../../domain/models/duacoder.model';
import { DuacoderRepository } from '../../../domain/repositories/duacoder.repository';
import { UpdateDuacoderUseCase } from './update-duacoder.usecase';

describe('UpdateDuacoderUseCase', () => {
  let updateDuacoderUseCase: UpdateDuacoderUseCase;
  let duacoderRepository: DuacoderRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UpdateDuacoderUseCase,
        {
          provide: 'DuacoderRepository',
          useValue: {
            findById: jest.fn(),
            update: jest.fn(),
          },
        },
      ],
    }).compile();

    updateDuacoderUseCase = module.get<UpdateDuacoderUseCase>(
      UpdateDuacoderUseCase,
    );
    duacoderRepository = module.get<DuacoderRepository>('DuacoderRepository');
  });

  it('should be defined', () => {
    expect(updateDuacoderUseCase).toBeDefined();
  });

  it('should update a duacoder when it exists', async () => {
    const nif = '12345678A';
    const duacoderData: Partial<Duacoder> = { name: 'Updated Name' };

    const existingDuacoder: Duacoder = {
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

    const updatedDuacoder: Duacoder = { ...existingDuacoder, ...duacoderData };

    duacoderRepository.findById = jest.fn().mockResolvedValue(existingDuacoder);
    duacoderRepository.update = jest.fn().mockResolvedValue(updatedDuacoder);

    const result = await updateDuacoderUseCase.execute(nif, duacoderData);

    expect(duacoderRepository.findById).toHaveBeenCalledWith(nif);
    expect(duacoderRepository.update).toHaveBeenCalledWith(
      nif,
      updatedDuacoder,
    );
    expect(result).toEqual(updatedDuacoder);
  });

  it('should return null if no duacoder is found to update', async () => {
    const nif = '98765432B';
    const duacoderData: Partial<Duacoder> = { name: 'Updated Name' };

    duacoderRepository.findById = jest.fn().mockResolvedValue(null);

    const result = await updateDuacoderUseCase.execute(nif, duacoderData);

    expect(duacoderRepository.findById).toHaveBeenCalledWith(nif);
    expect(result).toBeNull();
  });

  it('should throw an error if repository fails while updating', async () => {
    const nif = '12345678A';
    const duacoderData: Partial<Duacoder> = { name: 'Updated Name' };

    const existingDuacoder: Duacoder = {
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

    duacoderRepository.findById = jest.fn().mockResolvedValue(existingDuacoder);
    duacoderRepository.update = jest
      .fn()
      .mockRejectedValue(new Error('Database error'));

    await expect(
      updateDuacoderUseCase.execute(nif, duacoderData),
    ).rejects.toThrow('Database error');
  });
});
