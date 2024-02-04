import { PartialType } from '@nestjs/mapped-types';
import { CreatePrayerTimeDto } from './create-prayer-time.dto';

export class UpdatePrayerTimeDto extends PartialType(CreatePrayerTimeDto) {}
