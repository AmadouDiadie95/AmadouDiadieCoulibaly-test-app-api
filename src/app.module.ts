import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { ProgramModule } from './program/program.module';
import { LevelModule } from './level/level.module';
import { StudentModule } from './student/student.module';
import { AppController } from './app.controller';

@Module({
  imports: [ PrismaModule, AuthModule, ProgramModule, LevelModule, StudentModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
