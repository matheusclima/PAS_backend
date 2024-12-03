import { Module } from '@nestjs/common';
import { BandsService } from './bands.service';
import { BandsController } from './bands.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Band } from './bands.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Band])],
  providers: [BandsService],
  controllers: [BandsController],
  exports: [TypeOrmModule],
})
export class BandsModule {}
