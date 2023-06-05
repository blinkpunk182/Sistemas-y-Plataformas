import { Test, TestingModule } from '@nestjs/testing';
import { InsumooService } from './insumoo.service';

describe('InsumooService', () => {
  let service: InsumooService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InsumooService],
    }).compile();

    service = module.get<InsumooService>(InsumooService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
