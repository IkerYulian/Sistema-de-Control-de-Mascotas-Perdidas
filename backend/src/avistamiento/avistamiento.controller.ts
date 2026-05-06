import { Controller, Get, Post, Put, Delete, Param, Body, Query } from '@nestjs/common';
import { AvistamientoService } from './avistamiento.service';

@Controller('avistamiento')
export class AvistamientoController {
  constructor(private readonly avistamientoService: AvistamientoService) {}

  @Get()
  findAll(@Query('reporteId') reporteId?: string) {
    if (reporteId) return this.avistamientoService.findByReporte(+reporteId);
    return this.avistamientoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.avistamientoService.findOne(+id);
  }

  @Post()
  create(@Body() body: any) {
    return this.avistamientoService.create(body);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() body: any) {
    return this.avistamientoService.update(+id, body);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.avistamientoService.remove(+id);
  }
}