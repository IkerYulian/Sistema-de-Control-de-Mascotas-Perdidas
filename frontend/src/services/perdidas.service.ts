import { api } from "@/lib/api";

export interface Perdida {
  id: number;
  reporteId: number;
  fotoUrl?: string;
  circunstancias?: string;
  recompensa?: number;
  contactoUrgente?: string;
}

export type CreatePerdidaDto = Omit<Perdida, "id">;
export type UpdatePerdidaDto = Partial<CreatePerdidaDto>;

export const perdidasService = {
  findAll: () => api.get<Perdida[]>("/perdida"),
  findOne: (id: number) => api.get<Perdida>(`/perdida/${id}`),
  findByReporte: (reporteId: number) => api.get<Perdida>(`/perdida/reporte/${reporteId}`),
  create: (data: CreatePerdidaDto) => api.post<Perdida>("/perdida", data),
  update: (id: number, data: UpdatePerdidaDto) => api.put<Perdida>(`/perdida/${id}`, data),
  remove: (id: number) => api.delete<void>(`/perdida/${id}`),
};