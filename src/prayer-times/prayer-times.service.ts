import { Injectable } from '@nestjs/common';
const PrayerTimes = require('prayer-times');

@Injectable()
export class PrayerTimesService {
  getPrayerTimes(latitude: number, longitude: number): string[] {
    const prayerTimes = new PrayerTimes();
    const prayerTimesData = prayerTimes.getTimes(new Date(), [latitude, longitude], 'auto', 'auto', '12h');
    return Object.values(prayerTimesData);
  }

  getNextPrayerTime(prayerTimes: string[], currentTime: string): string | null {
    const currentTimeIndex = prayerTimes.findIndex(time => time >= currentTime);

    if (currentTimeIndex !== -1 && currentTimeIndex < prayerTimes.length) {
      return prayerTimes[currentTimeIndex];
    } else {
      return null;
    }
  }
}

  // create(createPrayerTimeDto: CreatePrayerTimeDto) {
  //   return 'This action adds a new prayerTime';
  // }

  // findAll() {
  //   return `This action returns all prayerTimes`;
  // }

  // findOne(id: number) {
  //   return `This action returns a #${id} prayerTime`;
  // }

  // update(id: number, updatePrayerTimeDto: UpdatePrayerTimeDto) {
  //   return `This action updates a #${id} prayerTime`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} prayerTime`;
  // }
