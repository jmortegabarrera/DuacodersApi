import { Test, TestingModule } from '@nestjs/testing';
import { DuacoderRepository } from '../../../domain/repositories/duacoder.repository';
import { DeleteDuacoderUseCase } from './delete-duacoder.usecase';

describe('DeleteDuacoderUseCase', () => {
  let deleteDuacoderUseCase: DeleteDuacoderUseCase;
  let duacoderRepository: DuacoderRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        DeleteDuacoderUseCase,
        {
          provide: 'DuacoderRepository',
          useValue: {
            delete: jest.fn(),
          },
        },
      ],
    }).compile();

    deleteDuacoderUseCase = module.get<DeleteDuacoderUseCase>(
      DeleteDuacoderUseCase,
    );
    duacoderRepository = module.get<DuacoderRepository>('DuacoderRepository');
  });

  it('should be defined', () => {
    expect(deleteDuacoderUseCase).toBeDefined();
  });

  it('should call duacoderRepository.delete() when executing the use case', async () => {
    const nifs = ['12345678A', '87654321B'];

    duacoderRepository.delete = jest.fn().mockResolvedValue(undefined);

    await deleteDuacoderUseCase.execute(nifs);

    expect(duacoderRepository.delete).toHaveBeenCalledWith(nifs);
  });
});
