import { api } from "@/lib/api";

export type RolUsuario = "DUENO" | "COLABORADOR";

export interface Usuario {
  id: number;
  nombres: string;
  apellidos: string;
  correo: string;
  telefono: string;
  rol: RolUsuario;
  zonaId: number;
  activo: boolean;
}

export type CreateUsuarioDto = Omit<Usuario, "id"> & { contrasena: string };
export type UpdateUsuarioDto = Partial<Omit<CreateUsuarioDto, "contrasena">>;

export const usuariosService = {
  findAll: () => api.get<Usuario[]>("/usuario"),
  findOne: (id: number) => api.get<Usuario>(`/usuario/${id}`),
  create: (data: CreateUsuarioDto) => api.post<Usuario>("/usuario", data),
  update: (id: number, data: UpdateUsuarioDto) => api.put<Usuario>(`/usuario/${id}`, data),
  remove: (id: number) => api.delete<void>(`/usuario/${id}`),
};