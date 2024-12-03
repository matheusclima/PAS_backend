import {
  Body,
  Controller,
  Delete,
  Get,
  Logger,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { BandsService } from './bands.service';
import { CreateBandDto } from './dto/create-band.dto';
import { Band } from './bands.entity';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Bands')
@Controller('bands')
export class BandsController {
  private readonly logger = new Logger(BandsController.name);
  constructor(private readonly bandsService: BandsService) {}

  @Get()
  @ApiOperation({ summary: 'Get all bands' })
  @ApiResponse({ status: 200, description: 'Return all bands' })
  async getBands() {
    this.logger.log('Retrieving all bands');
    return this.bandsService.getBands();
  }

  @Post()
  @ApiOperation({ summary: 'Create a new band' })
  async createBand(@Body() body: CreateBandDto): Promise<Band> {
    this.logger.log('Creating a new band');
    return this.bandsService.createBand(body);
  }

  @Put('/:id')
  @ApiOperation({ summary: 'Update a band' })
  async updateBand(
    @Body() body: CreateBandDto,
    @Param('id') id: number,
  ): Promise<Band> {
    this.logger.log('Updating a band');
    return this.bandsService.updateBand(id, body);
  }

  @Delete('/:id')
  @ApiOperation({ summary: 'Delete a band' })
  async deleteBand(@Param('id') id: number) {
    this.logger.log('Deleting a band');
    return this.bandsService.deleteBand(id);
  }
}
