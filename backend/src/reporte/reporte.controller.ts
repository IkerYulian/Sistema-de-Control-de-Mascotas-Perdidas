import { Controller, Get, Post, Put, Delete, Param, Body, Query } from '@nestjs/common';
import { ReporteService } from './reporte.service';

@Controller('reporte')
export class ReporteController {
  constructor(private readonly reporteService: ReporteService) {}

  @Get()
  findAll(@Query('especie') especie?: string) {
    return this.reporteService.findAll(especie);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.reporteService.findOne(+id);
  }

  @Post()
  create(@Body() body: any) {
    return this.reporteService.create(body);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() body: any) {
    return this.reporteService.update(+id, body);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.reporteService.remove(+id);
  }
}