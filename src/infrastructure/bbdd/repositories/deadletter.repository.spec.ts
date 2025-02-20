import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DeadLetterEntity } from '../entities/deadletter.entity';

describe('DeadLetterEntity Repository', () => {
  let repository: Repository<DeadLetterEntity>;
  let mockDb: DeadLetterEntity[] = []; 
  beforeEach(async () => {
    mockDb = []; 
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        {
          provide: getRepositoryToken(DeadLetterEntity),
          useValue: {
            create: jest.fn((data) => data),
            save: jest.fn(async (data) => {
              const savedEntity = { id: mockDb.length + 1, ...data };
              mockDb.push(savedEntity);
              return savedEntity;
            }),
            findOne: jest.fn(async ({ where }) => mockDb.find((entity) => entity.id === where.id)),
          },
        },
      ],
    }).compile();

    repository = module.get<Repository<DeadLetterEntity>>(getRepositoryToken(DeadLetterEntity));
  });

  it('should save and retrieve stackTrace as JSON', async () => {
    const errorData = {
      message: 'Test Error',
      stackTrace: { line: 42, file: 'app.ts', reason: 'SyntaxError' },
    };

    const savedEntity = await repository.save(repository.create(errorData));
    const foundEntity = await repository.findOne({ where: { id: savedEntity.id } });

    expect(savedEntity).toBeDefined();
    expect(savedEntity.stackTrace).toEqual(errorData.stackTrace); 
    expect(foundEntity?.stackTrace).toEqual(errorData.stackTrace); 
  });
});
