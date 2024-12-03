import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Band } from 'src/bands/bands.entity';
import { Repository } from 'typeorm';
import { BandMember } from './bandmembers.entity';
import { Musician } from 'src/musicians/musicians.entity';
import { CreateBandMemberDto } from './dto/create-bandmember.dto';

@Injectable()
export class BandmembersService {
  private readonly logger = new Logger(BandmembersService.name);
  constructor(
    @InjectRepository(Band)
    private readonly bandsRepository: Repository<Band>,

    @InjectRepository(BandMember)
    private readonly bandmembersRepository: Repository<BandMember>,

    @InjectRepository(Musician)
    private readonly musiciansRepository: Repository<Musician>,
  ) {}

  async getBandMembers(bandId: number) {
    const bandMembers = await this.bandmembersRepository.find({
      where: { band: { id: bandId } },
      relations: ['musician'],
    });
    if (!bandMembers) {
      throw new NotFoundException('Band members not found');
    }

    return bandMembers;
  }

  async getBands(musicianId: number) {
    const bands = await this.bandmembersRepository.find({
      where: { musician: { id: musicianId } },
      relations: ['band'],
    });

    if (!bands) {
      throw new NotFoundException('Bands not found');
    }

    return bands;
  }

  async addBandMember(
    bandId: number,
    musicianId: number,
    body: CreateBandMemberDto,
  ) {
    const band = await this.bandsRepository.findOne({ where: { id: bandId } });
    if (!band) {
      throw new NotFoundException('Band not found');
    }

    const musician = await this.musiciansRepository.findOne({
      where: { id: musicianId },
    });
    if (!musician) {
      throw new NotFoundException('Musician not found');
    }

    const bandMember = new BandMember();
    bandMember.band = band;
    bandMember.musician = musician;
    bandMember.role = body.role;

    return this.bandmembersRepository.save(bandMember);
  }
}
