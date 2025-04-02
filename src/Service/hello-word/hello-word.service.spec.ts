import { Test, TestingModule } from '@nestjs/testing';
import { HelloWordService } from './hello-word.service';

describe('HelloWordService', () => {
  let service: HelloWordService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HelloWordService],
    }).compile();

    service = module.get<HelloWordService>(HelloWordService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return "Hello Word!"', () => {
    expect(service.getHelloWord()).toBe('Hello Word!');
  });
});
