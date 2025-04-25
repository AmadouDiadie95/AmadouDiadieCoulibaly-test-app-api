import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { RegisterDto } from './dto/register.dto';
import { LoginAuthDto } from './dto/login-auth.dto';

@Controller('auth')
@ApiTags('Authentication')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('register')
  @ApiOperation({
    summary: 'Register a new User',
    description: 'Register a new User using the provided data'
  })
  register(@Body() body: RegisterDto) {
    return this.authService.register(body);
  }

  @Post('login')
  @ApiOperation({
    summary: 'Authenticates a user',
    description: `Authenticates a user and returns their token (JWT) <br/>
      Demo credentials:<br/>
      email: <strong><em>amadou@gmail.com</em></strong> <br/>
      password: <strong><em>Test1234</em></strong>`
  })
  login(@Body() body: LoginAuthDto) {
    return this.authService.login(body);
  }
}