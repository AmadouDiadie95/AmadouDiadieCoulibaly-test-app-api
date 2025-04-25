import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ProgramService {
  constructor(private prisma: PrismaService) {}

  create(data) {
    return this.prisma.program.create({ data });
  }

  findAll() {
    return this.prisma.program.findMany();
  }

  update(id: number, data) {
    return this.prisma.program.update({ where: { id }, data });
  }

  remove(id: number) {
    return this.prisma.program.delete({ where: { id } });
  }
}
