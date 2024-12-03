import { Test, TestingModule } from '@nestjs/testing';
import { BandmembersService } from './bandmembers.service';

describe('BandmembersService', () => {
  let service: BandmembersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BandmembersService],
    }).compile();

    service = module.get<BandmembersService>(BandmembersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
