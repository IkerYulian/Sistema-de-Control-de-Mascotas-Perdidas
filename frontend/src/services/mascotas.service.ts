import { api } from "@/lib/api";

export type SexoMascota = "MACHO" | "HEMBRA" | "DESCONOCIDO";

export interface Mascota {
  id: number;
  nombre: string;
  especieId: number;
  raza?: string;
  color: string;
  edad?: number;
  sexo: SexoMascota;
  descripcion?: string;
  fotoUrl?: string;
  duenioId: number;
}

export type CreateMascotaDto = Omit<Mascota, "id">;
export type UpdateMascotaDto = Partial<CreateMascotaDto>;

export const mascotasService = {
  findAll: () => api.get<Mascota[]>("/mascota"),
  findOne: (id: number) => api.get<Mascota>(`/mascota/${id}`),
  create: (data: CreateMascotaDto) => api.post<Mascota>("/mascota", data),
  update: (id: number, data: UpdateMascotaDto) => api.put<Mascota>(`/mascota/${id}`, data),
  remove: (id: number) => api.delete<void>(`/mascota/${id}`),
};