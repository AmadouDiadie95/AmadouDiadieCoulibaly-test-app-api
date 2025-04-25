import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class UpdateProgramDto {
  @IsNumber()
  @IsNotEmpty()
  id: number;


  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  sigle: string;

  @IsString()
  description: string;
}

