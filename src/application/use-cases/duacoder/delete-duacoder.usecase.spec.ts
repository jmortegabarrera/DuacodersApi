import { Test, TestingModule } from '@nestjs/testing';
import { DeleteDuacoderUseCase } from './delete-duacoder.usecase';
import { DuacoderRepositoryImpl } from '../../../infrastructure/bbdd/repositories/duacoder.repository';

describe('DeleteDuacoderUseCase', () => {
  let deleteDuacoderUseCase: DeleteDuacoderUseCase;
  let duacoderRepository: DuacoderRepositoryImpl;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        DeleteDuacoderUseCase,
        {
          provide: DuacoderRepositoryImpl,
          useValue: {
            delete: jest.fn(),  
          },
        },
      ],
    }).compile();

    deleteDuacoderUseCase = module.get<DeleteDuacoderUseCase>(DeleteDuacoderUseCase);
    duacoderRepository = module.get<DuacoderRepositoryImpl>(DuacoderRepositoryImpl);
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
