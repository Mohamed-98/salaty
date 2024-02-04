import { Test, TestingModule } from '@nestjs/testing';
import { PrayerTimesController } from './prayer-times.controller';
import { PrayerTimesService } from './prayer-times.service';

describe('PrayerTimesController', () => {
  let controller: PrayerTimesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PrayerTimesController],
      providers: [PrayerTimesService],
    }).compile();

    controller = module.get<PrayerTimesController>(PrayerTimesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
