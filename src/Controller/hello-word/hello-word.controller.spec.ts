import { Test, TestingModule } from '@nestjs/testing';
import { HelloWordController } from './hello-word.controller';
import { HelloWordService } from './../../Service/hello-word/hello-word.service';

describe('HelloWordController', () => {
  let controllerHelloWord: HelloWordController;
  let serviceHelloWord: HelloWordService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HelloWordController],
      providers: [
        {
          provide: HelloWordService,
          useValue: {
            getHelloWord: jest.fn().mockReturnValue('Hello, World!'),
          },
        },
      ],
    }).compile();

    controllerHelloWord = module.get<HelloWordController>(HelloWordController);
    serviceHelloWord = module.get<HelloWordService>(HelloWordService);
  });

  it('should be defined', () => {
    expect(controllerHelloWord).toBeDefined();
  });

  it('should return "Hello Word!"', () => {
    expect(controllerHelloWord.getHelloWord()).toBe('Hello, World!');
    expect(serviceHelloWord.getHelloWord).toHaveBeenCalledTimes(1);
  });
});
