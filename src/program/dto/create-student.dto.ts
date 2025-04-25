import { IsEmail, IsEnum, IsNotEmpty, IsDateString, IsString, IsInt } from 'class-validator';

export class CreateStudentDto {
  @IsString()
  nom: string;

  @IsString()
  prenom: string;

  @IsEmail()
  email: string;

  @IsEnum(['H', 'F'])
  sexe: string;

  @IsDateString()
  dob: string;

  @IsString()
  phone: string;

  @IsInt()
  programId: number;

  @IsInt()
  levelId: number;
}
