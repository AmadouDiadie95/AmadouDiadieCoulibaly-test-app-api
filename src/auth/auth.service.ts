// AuthService.ts
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { PrismaService } from '../prisma/prisma.service';
import { RegisterDto } from './dto/register.dto';
import { LoginAuthDto } from './dto/login-auth.dto';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private prisma: PrismaService
  ) {}

  async register(data: RegisterDto) {
    const hash = await bcrypt.hash(data.password, 10);
    const user = await this.prisma.user.create({
      data: { fullName: data.fullName, email: data.email, password: hash },
    });
    return { id: user.id, fullName: user.fullName, email: user.email };
  }

  async login(data: LoginAuthDto) {
    const user = await this.prisma.user.findUnique({ where: { email: data.email } });
    if (!user || !(await bcrypt.compare(data.password, user.password))) {
      throw new UnauthorizedException('Invalid credentials');
    }
    const payload = { sub: user.id, email: user.email };
    const token = await this.jwtService.signAsync(payload);
    return { access_token: token };
  }
}
