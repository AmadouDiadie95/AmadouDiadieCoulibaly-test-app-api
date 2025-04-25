import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateStudentDto } from '../program/dto/create-student.dto';

@Injectable()
export class StudentService {
  constructor(private prisma: PrismaService) {}

  async create(createStudentDto: CreateStudentDto) {
    return this.prisma.student.create({
      // @ts-ignore
      data: {
        ...createStudentDto,
        program: { connect: { id: createStudentDto.programId } },
        level: { connect: { id: createStudentDto.levelId } },
      },
    });
  }

  async findAll() {
    return this.prisma.student.findMany({
      include: {
        program: true,
        level: true,
      },
    });
  }

  async findOne(id: number) {
    const student = await this.prisma.student.findUnique({
      where: { id },
      include: { program: true, level: true },
    });
    if (!student) throw new NotFoundException('Student not found');
    return student;
  }
}
