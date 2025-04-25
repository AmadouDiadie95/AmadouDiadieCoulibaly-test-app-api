import { IsNotEmpty, IsString } from 'class-validator';

export class CreateProgramDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  sigle: string;

  @IsString()
  description: string;
}
