import { Module } from '@nestjs/common';
import { AvistamientoService } from './avistamiento.service';
import { AvistamientoController } from './avistamiento.controller';
import { PrismaService } from '../prisma.service';

@Module({
  controllers: [AvistamientoController],
  providers: [AvistamientoService, PrismaService],
})
export class AvistamientoModule {}