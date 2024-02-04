import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrayerTimesModule } from './prayer-times/prayer-times.module';
import { PrayerTimesController } from './prayer-times/prayer-times.controller';
import { PrayerTimesService } from './prayer-times/prayer-times.service';

@Module({
  imports: [],
  controllers: [AppController, PrayerTimesController],
  providers: [AppService,PrayerTimesService],
})
export class AppModule {}
