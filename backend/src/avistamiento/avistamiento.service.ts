import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Injectable()
export class AvistamientoService {
  constructor(private prisma: PrismaService) {}

  findAll() {
    return this.prisma.avistamiento.findMany({
      include: { reporte: true, colaborador: true },
    });
  }

  findByReporte(reporteId: number) {
    return this.prisma.avistamiento.findMany({
      where: { reporteId: Number(reporteId) },
    });
  }

  findOne(id: number) {
    return this.prisma.avistamiento.findUnique({ where: { id } });
  }

  create(data: any) {
    return this.prisma.avistamiento.create({
      data: {
        observaciones: data.observaciones,
        fechaAvistamiento: new Date(data.fechaAvistamiento),
        direccionTexto: data.direccionTexto,
        reporteId: Number(data.reporteId),
        colaboradorId: Number(data.colaboradorId),
      }
    });
  }

  update(id: number, data: any) {
    return this.prisma.avistamiento.update({ where: { id }, data });
  }

  remove(id: number) {
    return this.prisma.avistamiento.delete({ where: { id } });
  }
}