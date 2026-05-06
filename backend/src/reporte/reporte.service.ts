import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Injectable()
export class ReporteService {
  constructor(private prisma: PrismaService) {}

  findAll(especie?: string) {
    return this.prisma.reporte.findMany({
      where: {
        ...(especie && {
          mascota: {
            especie: {
              nombre: { contains: especie, mode: 'insensitive' as any }
            }
          }
        }),
      },
      include: {
        mascota: { include: { especie: true } },
        zona: true,
        avistamientos: true,
      },
      orderBy: { createdAt: 'desc' },
    });
  }

  findOne(id: number) {
    return this.prisma.reporte.findUnique({
      where: { id },
      include: {
        mascota: { include: { especie: true } },
        zona: true,
        avistamientos: true,
        perdida: true,
      },
    });
  }

  async create(data: any) {
    // Buscar especie por nombre o usar la primera
    let especieId = 1;
    if (data.especie) {
      const especieEncontrada = await this.prisma.especie.findFirst({
        where: { nombre: { contains: data.especie, mode: 'insensitive' as any } }
      });
      if (especieEncontrada) especieId = especieEncontrada.id;
      else {
        const nueva = await this.prisma.especie.create({
          data: { nombre: data.especie }
        });
        especieId = nueva.id;
      }
    }

    const mascota = await this.prisma.mascota.create({
      data: {
        nombre: data.nombreMascota,
        color: data.colorMascota || 'No especificado',
        sexo: data.sexoMascota || 'DESCONOCIDO',
        especieId,
        duenioId: 1,
      }
    });

    return this.prisma.reporte.create({
      data: {
        descripcion: data.descripcion,
        fechaExtravio: new Date(data.fechaExtravio),
        direccionTexto: data.direccionTexto,
        telefono: data.telefono,
        estado: 'ACTIVO',
        mascotaId: mascota.id,
        zonaId: 1,
      }
    });
  }

  update(id: number, data: any) {
    return this.prisma.reporte.update({ where: { id }, data });
  }

  remove(id: number) {
    return this.prisma.reporte.delete({ where: { id } });
  }
}