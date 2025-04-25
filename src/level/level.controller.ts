import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { LevelService } from './level.service';
import { CreateLevelDto } from '../program/dto/create-level.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@ApiTags('Levels')
// @ApiBearerAuth()
// @UseGuards(JwtAuthGuard)
@Controller('levels')
export class LevelController {
  constructor(private readonly service: LevelService) {}

  @Post()
  create(@Body() dto: CreateLevelDto) {
    return this.service.create(dto);
  }

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() dto: any) {
    return this.service.update(+id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.service.remove(+id);
  }
}
