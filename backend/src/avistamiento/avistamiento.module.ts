import { Module } from '@nestjs/common';
import { AvistamientoController } from './avistamiento.controller';
import { AvistamientoService } from './avistamiento.service';

@Module({
  controllers: [AvistamientoController],
  providers: [AvistamientoService]
})
export class AvistamientoModule {}
