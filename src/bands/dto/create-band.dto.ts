import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateBandDto {
  @ApiProperty({ example: 'Metallica', description: 'The name of the band' })
  @IsString()
  @IsNotEmpty({ message: 'This field cannot be empty' })
  name: string;

  @ApiProperty({ example: 'Metal', description: 'The genre of the band' })
  @IsString()
  genre: string;

  @ApiProperty({ example: 1981, description: 'The year the band was formed' })
  @IsNumber()
  formationYear: number;
}
