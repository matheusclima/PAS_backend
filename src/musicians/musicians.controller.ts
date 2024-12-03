import { Body, Controller, Get, Logger, Post } from '@nestjs/common';
import { MusiciansService } from './musicians.service';
import { CreateMusicianDto } from './dto/create-musician.dto';

@Controller('musicians')
export class MusiciansController {
  private readonly logger = new Logger(MusiciansController.name);
  constructor(private readonly musiciansService: MusiciansService) {}

  @Get()
  async getMusicians() {
    this.logger.log('Fetching all musicians');
    return this.musiciansService.getMusicians();
  }

  @Post()
  async createMusician(@Body() body: CreateMusicianDto) {
    this.logger.log('Creating a musician');
    return this.musiciansService.createMusician(body);
  }
}
