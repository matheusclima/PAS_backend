import { Body, Controller, Get, Logger, Param, Post } from '@nestjs/common';
import { BandmembersService } from './bandmembers.service';
import { CreateBandMemberDto } from './dto/create-bandmember.dto';

@Controller('bandmembers')
export class BandmembersController {
  private readonly logger = new Logger(BandmembersController.name);
  constructor(private readonly bandmembersService: BandmembersService) {}

  @Get('/bands/:bandId')
  async getBandMembers(@Param('bandId') bandId: number) {
    this.logger.log('Retrieving all band members');
    return this.bandmembersService.getBandMembers(bandId);
  }

  @Get('/musicians/:musicianId')
  async getBands(@Param('musicianId') musicianId: number) {
    this.logger.log('Retrieving all bands');
    return this.bandmembersService.getBands(musicianId);
  }

  @Post('/bands/:bandId/musicians/:musicianId')
  async addBandMember(
    @Param() bandId: number,
    @Param() musicianId: number,
    @Body() body: CreateBandMemberDto,
  ) {
    this.logger.log('Adding a band member');
    return this.bandmembersService.addBandMember(bandId, musicianId, body);
  }
}
