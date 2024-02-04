import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PrayerTimesService } from './prayer-times.service';
import { CreatePrayerTimeDto } from './dto/create-prayer-time.dto';
import { UpdatePrayerTimeDto } from './dto/update-prayer-time.dto';

@Controller('prayer-times')
export class PrayerTimesController {
  constructor(private readonly prayerTimesService: PrayerTimesService) {}

  @Get(':latitude/:longitude')
  getPrayerTimes(@Param('latitude') latitude: number, @Param('longitude') longitude: number): string[] {
    console.log(latitude,longitude);
    
    return this.prayerTimesService.getPrayerTimes(latitude, longitude);
  }
  
  @Get('next/:latitude/:longitude/:currentTime')
  getNextPrayerTime(
    @Param('latitude') latitude: number,
    @Param('longitude') longitude: number,
    @Param('currentTime') currentTime: string,
  ): string | null {
    const prayerTimes = this.prayerTimesService.getPrayerTimes(latitude, longitude);
    return this.prayerTimesService.getNextPrayerTime(prayerTimes, currentTime);
  }
  
  // @Post()
  // create(@Body() createPrayerTimeDto: CreatePrayerTimeDto) {
  //   return this.prayerTimesService.create(createPrayerTimeDto);
  // }

  // @Get()
  // findAll() {
  //   return this.prayerTimesService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.prayerTimesService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updatePrayerTimeDto: UpdatePrayerTimeDto) {
  //   return this.prayerTimesService.update(+id, updatePrayerTimeDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.prayerTimesService.remove(+id);
  // }
}
