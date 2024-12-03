import { Module } from '@nestjs/common';
import { MusiciansController } from './musicians.controller';
import { MusiciansService } from './musicians.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Musician } from './musicians.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Musician])],
  controllers: [MusiciansController],
  providers: [MusiciansService],
  exports: [TypeOrmModule],
})
export class MusiciansModule {}
