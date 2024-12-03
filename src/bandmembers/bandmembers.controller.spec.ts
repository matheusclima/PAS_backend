import { Test, TestingModule } from '@nestjs/testing';
import { BandmembersController } from './bandmembers.controller';

describe('BandmembersController', () => {
  let controller: BandmembersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BandmembersController],
    }).compile();

    controller = module.get<BandmembersController>(BandmembersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
