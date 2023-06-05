import { Test, TestingModule } from '@nestjs/testing';
import { InsumooController } from './insumoo.controller';
import { InsumooService } from './insumoo.service';

describe('InsumooController', () => {
  let controller: InsumooController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InsumooController],
      providers: [InsumooService],
    }).compile();

    controller = module.get<InsumooController>(InsumooController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
