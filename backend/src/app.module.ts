import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { ZonaModule } from './zona/zona.module';
import { EspecieModule } from './especie/especie.module';
import { UsuarioModule } from './usuario/usuario.module';
import { MascotaModule } from './mascota/mascota.module';
import { ReporteModule } from './reporte/reporte.module';
import { PerdidaModule } from './perdida/perdida.module';
import { AvistamientoModule } from './avistamiento/avistamiento.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }), // Lee .env automáticamente
    PrismaModule, ZonaModule, EspecieModule, UsuarioModule, MascotaModule, ReporteModule, PerdidaModule, AvistamientoModule,                             // Conexión a la BD
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}