import { Module } from '@nestjs/common';
import { BandmembersController } from './bandmembers.controller';
import { BandmembersService } from './bandmembers.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BandMember } from './bandmembers.entity';
import { BandsModule } from 'src/bands/bands.module';
import { MusiciansModule } from 'src/musicians/musicians.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([BandMember]),
    MusiciansModule,
    BandsModule,
  ],
  controllers: [BandmembersController],
  providers: [BandmembersService],
  exports: [TypeOrmModule],
})
export class BandmembersModule {}
