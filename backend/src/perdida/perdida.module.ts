import { Module } from '@nestjs/common';
import { PerdidaController } from './perdida.controller';
import { PerdidaService } from './perdida.service';

@Module({
  controllers: [PerdidaController],
  providers: [PerdidaService]
})
export class PerdidaModule {}
