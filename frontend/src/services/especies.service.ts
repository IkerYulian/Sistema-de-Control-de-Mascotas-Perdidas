import { api } from "@/lib/api";

export interface Especie {
  id: number;
  nombre: string;
  descripcion?: string;
}

export type CreateEspecieDto = Omit<Especie, "id">;
export type UpdateEspecieDto = Partial<CreateEspecieDto>;

export const especiesService = {
  findAll: () => api.get<Especie[]>("/especie"),
  findOne: (id: number) => api.get<Especie>(`/especie/${id}`),
  create: (data: CreateEspecieDto) => api.post<Especie>("/especie", data),
  update: (id: number, data: UpdateEspecieDto) => api.put<Especie>(`/especie/${id}`, data),
  remove: (id: number) => api.delete<void>(`/especie/${id}`),
};