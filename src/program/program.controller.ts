import { Controller, Post, Body, Get, Patch, Delete, Param, UseGuards } from '@nestjs/common';
import { ProgramService } from './program.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { ApiBearerAuth, ApiTags, ApiBody } from '@nestjs/swagger';
import { CreateProgramDto } from './dto/CreateProgramDto';
import { UpdateProgramDto } from './dto/UpdateProgramDto';

@ApiTags('Programs')
// @ApiBearerAuth()
// @UseGuards(JwtAuthGuard)
@Controller('programs')
export class ProgramController {
  constructor(private programService: ProgramService) {}

  @Post()
  @ApiBody({ type: CreateProgramDto })
  create(@Body() dto: CreateProgramDto) {
    return this.programService.create(dto);
  }

  @Get()
  findAll() {
    return this.programService.findAll();
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() dto: UpdateProgramDto) {
    return this.programService.update(+id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.programService.remove(+id);
  }
}
