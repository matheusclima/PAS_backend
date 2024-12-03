import { IsNotEmpty, IsString } from 'class-validator';

export class CreateMusicianDto {
  @IsString()
  @IsNotEmpty({ message: 'This field cannot be empty' })
  name: string;

  @IsString()
  instruments: string[];
}
