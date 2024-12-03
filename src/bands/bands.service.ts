import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Band } from './bands.entity';
import { CreateBandDto } from './dto/create-band.dto';

@Injectable()
export class BandsService {
  private readonly logger = new Logger(BandsService.name);
  constructor(
    @InjectRepository(Band)
    private readonly bandsRepository: Repository<Band>,
  ) {}

  async getBands() {
    return this.bandsRepository.find();
  }

  async createBand(body: CreateBandDto) {
    const band = new Band();
    band.name = body.name;
    band.genre = body.genre;
    band.formationYear = body.formationYear;
    return await this.bandsRepository.save(band);
  }

  async updateBand(id: number, body: CreateBandDto) {
    const band = await this.bandsRepository.findOne({ where: { id } });
    band.name = body.name;
    band.genre = body.genre;
    band.formationYear = body.formationYear;
    return await this.bandsRepository.save(band);
  }

  async deleteBand(id: number) {
    return await this.bandsRepository.delete(id);
  }
}
