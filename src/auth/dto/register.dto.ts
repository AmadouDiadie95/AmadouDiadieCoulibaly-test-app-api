import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsIn,
  IsNotEmpty,
  IsObject,
  IsOptional,
  IsString,
  Matches,
  MinLength
} from 'class-validator';

export type app = 'BUSINESS' | 'ONLINE' | 'SOSIRA' | 'ADMIN';

export class RegisterDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({ required: true, description: 'Full name of the user.' })
  fullName: string;

  @IsOptional()
  @IsString()
  @IsEmail()
  @ApiProperty({ required: true, description: 'Email of the user.' })
  email: string;

  // Password is a required string that must contain at least 1 uppercase letter,
  // 1 lowercase letter, 1 number, and be at least 8 characters long
  @IsNotEmpty()
  @MinLength(6)
  @IsString()
  @ApiProperty({
    required: true,
    description: 'Password must be at least 6 characters long.'
  })
  password: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsIn(['BUSINESS', 'ONLINE', 'SOSIRA', 'ADMIN'])
  app: app = 'BUSINESS';
}
