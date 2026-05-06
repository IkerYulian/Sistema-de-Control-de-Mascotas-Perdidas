"use client";
import Link from "next/link";
import { useState } from "react";

export default function NuevoReportePage() {
  const [form, setForm] = useState({
    nombreMascota: "",
    especie: "",
    colorMascota: "",
    sexoMascota: "DESCONOCIDO",
    descripcion: "",
    fechaExtravio: "",
    direccionTexto: "",
    telefono: "",
    zonaId: 1,
    mascotaId: 1,
  });
  const [enviado, setEnviado] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!form.nombreMascota.trim()) {
      setError("El nombre de la mascota es obligatorio.");
      return;
    }

    const fecha = new Date(form.fechaExtravio);
    const hoy = new Date();
    if (!form.fechaExtravio || isNaN(fecha.getTime()) || fecha.getFullYear() < 2000 || fecha > hoy) {
      setError("Por favor ingresa una fecha válida (entre el año 2000 y hoy).");
      return;
    }

    setLoading(true);
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/reporte`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          fechaExtravio: fecha.toISOString(),
        }),
      });
      if (response.ok) setEnviado(true);
      else setError("Ocurrió un error al publicar el reporte. Intenta de nuevo.");
    } catch {
      setError("No se pudo conectar al servidor. ¿Está corriendo el backend?");
    } finally {
      setLoading(false);
    }
  };

  if (enviado) return (
    <main className="min-h-screen bg-amber-50 flex items-center justify-center">
      <div className="bg-white rounded-2xl shadow p-10 text-center max-w-md">
        <div className="text-6xl mb-4">✅</div>
        <h2 className="text-2xl font-bold text-orange-700 mb-2">¡Reporte creado!</h2>
        <p className="text-gray-500 mb-6">Tu reporte fue publicado. La comunidad te ayudará a encontrar a tu mascota.</p>
        <Link href="/reportes" className="bg-orange-600 text-white px-6 py-2 rounded-full hover:bg-orange-700">
          Ver reportes
        </Link>
      </div>
    </main>
  );

  return (
    <main className="min-h-screen bg-amber-50">
      <nav className="bg-orange-600 text-white px-6 py-4 flex items-center justify-between shadow-md">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl">🐾</span>
          <span className="font-bold text-xl">Mascotas Perdidas</span>
        </Link>
      </nav>

      <div className="max-w-xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold text-orange-700 mb-6">Reportar mascota perdida</h1>

        {error && (
          <div className="bg-red-100 border border-red-300 text-red-700 rounded-xl p-4 mb-6">⚠️ {error}</div>
        )}

        <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow p-6 flex flex-col gap-4">

          <p className="text-orange-600 font-semibold text-sm border-b border-orange-100 pb-2">Información de la mascota</p>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Nombre de la mascota *</label>
            <input type="text" name="nombreMascota" required value={form.nombreMascota} onChange={handleChange}
              className="w-full border border-gray-300 rounded-xl px-4 py-2 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400"
              placeholder="Ej: Max, Luna, Toby..." />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Especie</label>
              <input type="text" name="especie" value={form.especie} onChange={handleChange}
                className="w-full border border-gray-300 rounded-xl px-4 py-2 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400"
                placeholder="Ej: Perro, Gato, Ave..." />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Sexo</label>
              <select name="sexoMascota" value={form.sexoMascota} onChange={handleChange}
                className="w-full border border-gray-300 rounded-xl px-4 py-2 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-orange-400">
                <option value="DESCONOCIDO">No sé</option>
                <option value="MACHO">Macho</option>
                <option value="HEMBRA">Hembra</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Color</label>
            <input type="text" name="colorMascota" value={form.colorMascota} onChange={handleChange}
              className="w-full border border-gray-300 rounded-xl px-4 py-2 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400"
              placeholder="Ej: Café con blanco, Negro, Amarillo..." />
          </div>

          <p className="text-orange-600 font-semibold text-sm border-b border-orange-100 pb-2 mt-2">Información del extravío</p>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Descripción adicional</label>
            <textarea name="descripcion" required value={form.descripcion} onChange={handleChange} rows={3}
              className="w-full border border-gray-300 rounded-xl px-4 py-2 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400"
              placeholder="Collar, cicatrices, comportamiento, características especiales..." />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Fecha del extravío *</label>
            <input type="date" name="fechaExtravio" required value={form.fechaExtravio} onChange={handleChange}
              max={new Date().toISOString().split("T")[0]} min="2000-01-01"
              className="w-full border border-gray-300 rounded-xl px-4 py-2 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-orange-400" />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Lugar del extravío</label>
            <input type="text" name="direccionTexto" value={form.direccionTexto} onChange={handleChange}
              className="w-full border border-gray-300 rounded-xl px-4 py-2 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400"
              placeholder="Ej: Parque principal, Calle 5 con Carrera 8" />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Teléfono de contacto</label>
            <input type="tel" name="telefono" value={form.telefono} onChange={handleChange}
              className="w-full border border-gray-300 rounded-xl px-4 py-2 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400"
              placeholder="Ej: 3001234567" />
          </div>

          <button type="submit" disabled={loading}
            className="bg-orange-600 text-white py-3 rounded-xl font-semibold hover:bg-orange-700 transition disabled:opacity-50">
            {loading ? "Publicando..." : "Publicar reporte"}
          </button>
        </form>
      </div>
    </main>
  );
}