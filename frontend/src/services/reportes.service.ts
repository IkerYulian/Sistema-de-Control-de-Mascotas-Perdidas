import { api } from "@/lib/api";

export type EstadoReporte = "ACTIVO" | "RESUELTO" | "CERRADO";

export interface Reporte {
  id: number;
  mascotaId: number;
  zonaId: number;
  descripcion: string;
  fechaExtravio: string;
  latitud?: number;
  longitud?: number;
  direccionTexto?: string;
  estado: EstadoReporte;
}

export type CreateReporteDto = Omit<Reporte, "id" | "estado">;
export type UpdateReporteDto = Partial<CreateReporteDto> & { estado?: EstadoReporte };

export const reportesService = {
  findAll: () => api.get<Reporte[]>("/reporte"),
  findOne: (id: number) => api.get<Reporte>(`/reporte/${id}`),
  findActivos: () => api.get<Reporte[]>("/reporte?estado=ACTIVO"),
  findByZona: (zonaId: number) => api.get<Reporte[]>(`/reporte?zonaId=${zonaId}`),
  create: (data: CreateReporteDto) => api.post<Reporte>("/reporte", data),
  update: (id: number, data: UpdateReporteDto) => api.put<Reporte>(`/reporte/${id}`, data),
  marcarResuelto: (id: number) => api.put<Reporte>(`/reporte/${id}`, { estado: "RESUELTO" }),
  remove: (id: number) => api.delete<void>(`/reporte/${id}`),
};