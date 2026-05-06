import { api } from "@/lib/api";

export interface Zona {
  id: number;
  nombre: string;
  ciudad: string;
  departamento: string;
  descripcion?: string;
}

export type CreateZonaDto = Omit<Zona, "id">;
export type UpdateZonaDto = Partial<CreateZonaDto>;

export const zonasService = {
  findAll: () => api.get<Zona[]>("/zona"),
  findOne: (id: number) => api.get<Zona>(`/zona/${id}`),
  create: (data: CreateZonaDto) => api.post<Zona>("/zona", data),
  update: (id: number, data: UpdateZonaDto) => api.put<Zona>(`/zona/${id}`, data),
  remove: (id: number) => api.delete<void>(`/zona/${id}`),
};