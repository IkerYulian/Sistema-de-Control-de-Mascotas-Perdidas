import { api } from "@/lib/api";

export interface Avistamiento {
  id: number;
  reporteId: number;
  colaboradorId: number;
  fechaAvistamiento: string;
  latitud?: number;
  longitud?: number;
  direccionTexto?: string;
  observaciones: string;
  fotoUrl?: string;
}

export type CreateAvistamientoDto = Omit<Avistamiento, "id">;
export type UpdateAvistamientoDto = Partial<CreateAvistamientoDto>;

export const avistamientosService = {
  findAll: () => api.get<Avistamiento[]>("/avistamiento"),
  findOne: (id: number) => api.get<Avistamiento>(`/avistamiento/${id}`),
  findByReporte: (reporteId: number) => api.get<Avistamiento[]>(`/avistamiento/reporte/${reporteId}`),
  create: (data: CreateAvistamientoDto) => api.post<Avistamiento>("/avistamiento", data),
  update: (id: number, data: UpdateAvistamientoDto) => api.put<Avistamiento>(`/avistamiento/${id}`, data),
  remove: (id: number) => api.delete<void>(`/avistamiento/${id}`),
};