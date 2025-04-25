import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateLevelDto } from '../program/dto/create-level.dto';

@Injectable()
export class LevelService {
  constructor(private prisma: PrismaService) {}

  async create(createLevelDto: CreateLevelDto) {
    return this.prisma.level.create({
      data: createLevelDto,
    });
  }

  async findAll() {
    return this.prisma.level.findMany({
      include: { program: true }, // pour avoir le programme lié
    });
  }

  async findOne(id: number) {
    const level = await this.prisma.level.findUnique({ where: { id } });
    if (!level) throw new NotFoundException('Level not found');
    return level;
  }

  async update(id: number, updateLevelDto: any) {
    return this.prisma.level.update({
      where: { id },
      data: updateLevelDto,
    });
  }

  async remove(id: number) {
    return this.prisma.level.delete({ where: { id } });
  }
}
