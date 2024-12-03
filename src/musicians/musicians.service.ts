import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Musician } from './musicians.entity';
import { Repository } from 'typeorm';
import { CreateMusicianDto } from './dto/create-musician.dto';

@Injectable()
export class MusiciansService {
  private readonly logger = new Logger(MusiciansService.name);
  constructor(
    @InjectRepository(Musician)
    private readonly musiciansRepository: Repository<Musician>,
  ) {}

  async getMusicians() {
    this.logger.log('Fetching all musicians');
    const musicians = await this.musiciansRepository.find();
    if (!musicians) {
      throw new NotFoundException('No musicians found');
    }
    return musicians;
  }

  async createMusician(musician: CreateMusicianDto) {
    this.logger.log('Creating a musician');
    return this.musiciansRepository.save(musician);
  }
}
