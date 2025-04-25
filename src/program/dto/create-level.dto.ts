import { IsInt, IsNotEmpty, IsString } from 'class-validator';

export class CreateLevelDto {
  @IsString()
  name: string;

  @IsString()
  sigle: string;

  @IsInt()
  index: number;

  @IsInt()
  programId: number;
}
