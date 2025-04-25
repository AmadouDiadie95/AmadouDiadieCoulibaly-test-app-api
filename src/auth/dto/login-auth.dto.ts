// Import necessary modules
import { ApiProperty } from '@nestjs/swagger'; // Used for generating Swagger documentation
import { IsEmail, IsIn, IsNotEmpty, IsOptional, IsString } from 'class-validator'; // Used for validating class properties

// Define a class for the LoginAuthDto data transfer object
export class LoginAuthDto {
  @IsOptional()
  @IsString()
  @IsEmail()
  @ApiProperty({ required: true, description: 'Email of the user.' })
  email: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    required: true,
    description:
      'The user password (at least 8 characters with at least 1 uppercase, 1 lowercase, and 1 number)'
  })
  password: string;

}
