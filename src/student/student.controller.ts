import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { StudentService } from './student.service';
import { CreateStudentDto } from '../program/dto/create-student.dto';

@ApiTags('Students')
// @ApiBearerAuth()
// @UseGuards(JwtAuthGuard)
@Controller('students')
export class StudentController {
  constructor(private readonly service: StudentService) {}

  @Post()
  create(@Body() dto: CreateStudentDto) {
    return this.service.create(dto);
  }

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.service.findOne(+id);
  }
}

