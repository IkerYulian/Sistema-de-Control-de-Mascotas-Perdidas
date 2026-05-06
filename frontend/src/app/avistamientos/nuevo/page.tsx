"use client";
import Link from "next/link";
import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { avistamientosService, type CreateAvistamientoDto } from "@/services";
import { Suspense } from "react";

function NuevoAvistamientoForm() {
  const searchParams = useSearchParams();
  const reporteId = Number(searchParams.get("reporteId")) || 1;

  const [form, setForm] = useState({
    observaciones: "",
    fechaAvistamiento: "",
    direccionTexto: "",
    reporteId,
    colaboradorId: 1,
  });
  const [enviado, setEnviado] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    const fecha = new Date(form.fechaAvistamiento);
    const hoy = new Date();
    if (!form.fechaAvistamiento || isNaN(fecha.getTime()) || fecha > hoy || fecha.getFullYear() < 2000) {
      setError("Por favor ingresa una fecha válida (entre el año 2000 y hoy).");
      return;
    }

    setLoading(true);
    try {
      await avistamientosService.create({
        ...form,
        fechaAvistamiento: fecha.toISOString(),
      } as CreateAvistamientoDto);
      setEnviado(true);
    } catch (err: any) {
      if (err?.message?.includes("fetch")) {
        setError("No se pudo conectar al servidor. ¿Está corriendo el backend?");
      } else {
        setError("Ocurrió un error al registrar el avistamiento. Intenta de nuevo.");
      }
    } finally {
      setLoading(false);
    }
  };

  if (enviado) return (
    <main className="min-h-screen bg-amber-50 flex items-center justify-center">
      <div className="bg-white rounded-2xl shadow p-10 text-center max-w-md">
        <div className="text-6xl mb-4">👁️</div>
        <h2 className="text-2xl font-bold text-orange-700 mb-2">¡Avistamiento registrado!</h2>
        <p className="text-gray-500 mb-6">Gracias por ayudar. Tu reporte puede hacer la diferencia.</p>
        <Link href="/reportes" className="bg-orange-600 text-white px-6 py-2 rounded-full hover:bg-orange-700">
          Ver reportes
        </Link>
      </div>
    </main>
  );

  return (
    <main className="min-h-screen bg-amber-50">
      <nav className="bg-orange-600 text-white px-6 py-4 flex items-center gap-2 shadow-md">
        <Link href="/reportes" className="flex items-center gap-2">
          <span className="text-2xl">🐾</span>
          <span className="font-bold text-xl">Mascotas Perdidas</span>
        </Link>
      </nav>

      <div className="max-w-xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold text-orange-700 mb-2">Registrar avistamiento</h1>
        <p className="text-gray-500 mb-6">Reporte #{reporteId} — ¿Viste esta mascota?</p>

        {error && (
          <div className="bg-red-100 border border-red-300 text-red-700 rounded-xl p-4 mb-6">
            ⚠️ {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow p-6 flex flex-col gap-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">¿Qué observaste? *</label>
            <textarea name="observaciones" required value={form.observaciones} onChange={handleChange} rows={3}
              className="w-full border border-gray-300 rounded-xl px-4 py-2 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400"
              placeholder="Describe lo que viste, comportamiento, estado de la mascota..." />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Fecha del avistamiento *</label>
            <input type="date" name="fechaAvistamiento" required value={form.fechaAvistamiento} onChange={handleChange}
              max={new Date().toISOString().split("T")[0]}
              min="2000-01-01"
              className="w-full border border-gray-300 rounded-xl px-4 py-2 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-orange-400" />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">¿Dónde la viste?</label>
            <input type="text" name="direccionTexto" value={form.direccionTexto} onChange={handleChange}
              className="w-full border border-gray-300 rounded-xl px-4 py-2 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400"
              placeholder="Ej: Parque central, Calle 10 con Carrera 5" />
          </div>
          <button type="submit" disabled={loading}
            className="bg-orange-600 text-white py-3 rounded-xl font-semibold hover:bg-orange-700 transition disabled:opacity-50">
            {loading ? "Registrando..." : "Registrar avistamiento"}
          </button>
        </form>
      </div>
    </main>
  );
}

export default function NuevoAvistamientoPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-amber-50 flex items-center justify-center text-gray-400">Cargando...</div>}>
      <NuevoAvistamientoForm />
    </Suspense>
  );
}