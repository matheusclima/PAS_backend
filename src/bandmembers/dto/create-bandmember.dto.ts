import { IsNotEmpty, IsString } from 'class-validator';

export class CreateBandMemberDto {
  @IsString()
  @IsNotEmpty({ message: 'This field cannot be empty' })
  role: string;
}
