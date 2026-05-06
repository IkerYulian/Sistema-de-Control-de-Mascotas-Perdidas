"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function ReportesPage() {
  const [reportes, setReportes] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [avistamientosModal, setAvistamientosModal] = useState<any[] | null>(null);
  const [filtroEspecie, setFiltroEspecie] = useState("");

  const cargarReportes = (especie?: string) => {
    setLoading(true);
    const params = especie ? `?especie=${especie}` : "";
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/reporte${params}`)
      .then(r => r.json())
      .then((data: any) => setReportes(Array.isArray(data) ? data : data?.data ?? []))
      .catch(() => setError("No se pudo conectar al servidor."))
      .finally(() => setLoading(false));
  };

  useEffect(() => { cargarReportes(); }, []);

  const marcarResuelto = async (id: number) => {
    try {
      await fetch(`${process.env.NEXT_PUBLIC_API_URL}/reporte/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ estado: "RESUELTO" }),
      });
      cargarReportes(filtroEspecie || undefined);
    } catch {
      alert("No se pudo marcar como resuelto.");
    }
  };

  const reportesActivos = reportes.filter((r: any) => r.estado === "ACTIVO");
  const reportesResueltos = reportes.filter((r: any) => r.estado === "RESUELTO");

  const ModalAvistamientos = () => !avistamientosModal ? null : (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4">
      <div className="bg-white rounded-2xl shadow-xl p-6 max-w-lg w-full max-h-[80vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-orange-700">👁️ Avistamientos registrados</h2>
          <button onClick={() => setAvistamientosModal(null)} className="text-gray-400 hover:text-gray-600 text-2xl font-bold">×</button>
        </div>
        <div className="flex flex-col gap-4">
          {avistamientosModal.map((av: any, i: number) => (
            <div key={av.id} className="border border-orange-100 rounded-xl p-4 bg-amber-50">
              <p className="text-orange-600 text-xs font-semibold mb-2">Avistamiento #{i + 1}</p>
              <p className="text-gray-800 text-sm mb-2"><span className="font-semibold">📝 </span>{av.observaciones}</p>
              <p className="text-gray-600 text-xs mb-1"><span className="font-semibold">📍 Lugar: </span>{av.direccionTexto ?? "No especificado"}</p>
              <p className="text-gray-600 text-xs mb-1"><span className="font-semibold">📅 Fecha: </span>{new Date(av.fechaAvistamiento).toLocaleDateString("es-CO")}</p>
              <p className="text-gray-600 text-xs"><span className="font-semibold">🕐 Hora: </span>{new Date(av.fechaAvistamiento).toLocaleTimeString("es-CO", { hour: "2-digit", minute: "2-digit" })}</p>
            </div>
          ))}
        </div>
        <button onClick={() => setAvistamientosModal(null)}
          className="mt-4 w-full bg-orange-600 text-white py-2 rounded-xl hover:bg-orange-700">Cerrar</button>
      </div>
    </div>
  );

  const TarjetaReporte = ({ reporte, resuelto }: { reporte: any, resuelto: boolean }) => (
    <div className={`bg-white rounded-2xl shadow p-5 flex flex-col gap-2 ${resuelto ? "opacity-80" : ""}`}>
      <div className={`w-full h-40 ${resuelto ? "bg-green-100" : "bg-orange-100"} rounded-xl mb-2 flex items-center justify-center text-5xl`}>
        {resuelto ? "🏠" : "🐶"}
      </div>
      <div className="flex justify-between items-center">
        <p className="text-gray-800 font-semibold">{reporte.mascota?.nombre ?? "Sin nombre"}</p>
        {reporte.mascota?.especie && (
          <span className={`${resuelto ? "bg-green-100 text-green-600" : "bg-orange-100 text-orange-600"} text-xs px-2 py-1 rounded-full`}>
            {reporte.mascota.especie.nombre}
          </span>
        )}
      </div>
      <p className="text-gray-600 text-sm">{reporte.descripcion}</p>
      <p className="text-gray-400 text-xs">📍 {reporte.direccionTexto ?? "Ubicación no especificada"}</p>
      <p className="text-gray-400 text-xs">📅 {new Date(reporte.fechaExtravio).toLocaleDateString("es-CO")}</p>
      {reporte.telefono && <p className="text-gray-400 text-xs">📞 {reporte.telefono}</p>}

      {reporte.avistamientos?.length > 0 ? (
        <button onClick={() => setAvistamientosModal(reporte.avistamientos)}
          className="text-orange-600 text-xs font-semibold text-left hover:underline">
          👁️ {reporte.avistamientos.length} avistamiento{reporte.avistamientos.length > 1 ? "s" : ""} — ver detalles
        </button>
      ) : (
        <p className="text-gray-300 text-xs">Sin avistamientos aún</p>
      )}

      {!resuelto && (
        <div className="flex flex-col gap-2 mt-2">
          <Link href={`/avistamientos/nuevo?reporteId=${reporte.id}`}
            className="text-center border border-orange-400 text-orange-600 text-sm py-2 rounded-xl hover:bg-orange-50">
            👁️ Reportar avistamiento
          </Link>
          <button onClick={() => marcarResuelto(reporte.id)}
            className="text-center bg-green-500 text-white text-sm py-2 rounded-xl hover:bg-green-600">
            ✅ Marcar como encontrada
          </button>
        </div>
      )}
      {resuelto && (
        <span className="bg-green-100 text-green-700 text-xs px-3 py-1 rounded-full font-semibold w-fit">✅ ENCONTRADA</span>
      )}
    </div>
  );

  return (
    <main className="min-h-screen bg-amber-50">
      <nav className="bg-orange-600 text-white px-6 py-4 flex items-center justify-between shadow-md">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl">🐾</span>
          <span className="font-bold text-xl">Mascotas Perdidas</span>
        </Link>
        <Link href="/reportes/nuevo" className="bg-white text-orange-600 px-4 py-1 rounded-full font-semibold hover:bg-orange-100">
          + Nuevo reporte
        </Link>
      </nav>

      <div className="max-w-5xl mx-auto px-4 py-10">

        {/* FILTRO POR ESPECIE */}
        <div className="bg-white rounded-2xl shadow p-4 mb-8 flex gap-4 items-end flex-wrap">
          <div className="flex-1 min-w-48">
            <label className="block text-sm font-semibold text-gray-700 mb-1">Buscar por especie</label>
            <input type="text" value={filtroEspecie}
              onChange={(e) => setFiltroEspecie(e.target.value)}
              placeholder="Ej: Perro, Gato, Ave..."
              className="w-full border border-gray-300 rounded-xl px-3 py-2 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400" />
          </div>
          <button onClick={() => cargarReportes(filtroEspecie || undefined)}
            className="bg-orange-600 text-white px-5 py-2 rounded-xl text-sm hover:bg-orange-700">
            Buscar
          </button>
          <button onClick={() => { setFiltroEspecie(""); cargarReportes(); }}
            className="border border-gray-300 text-gray-600 px-4 py-2 rounded-xl text-sm hover:bg-gray-50">
            Limpiar
          </button>
        </div>

        {loading && <div className="text-center py-20 text-gray-400 text-lg">Cargando reportes...</div>}
        {error && <div className="bg-red-100 border border-red-300 text-red-700 rounded-xl p-4 mb-6">⚠️ {error}</div>}

        <h1 className="text-3xl font-bold text-orange-700 mb-6">Mascotas perdidas 🔍</h1>

        {!loading && reportesActivos.length === 0 && (
          <div className="text-center py-10 text-gray-400">
            <div className="text-5xl mb-4">🐾</div>
            <p>No hay mascotas perdidas reportadas.</p>
            <Link href="/reportes/nuevo" className="mt-4 inline-block bg-orange-600 text-white px-6 py-2 rounded-full hover:bg-orange-700">
              Crear reporte
            </Link>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {reportesActivos.map((r: any) => <TarjetaReporte key={r.id} reporte={r} resuelto={false} />)}
        </div>

        {reportesResueltos.length > 0 && (
          <>
            <h2 className="text-2xl font-bold text-green-700 mb-6">Mascotas encontradas 🎉</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {reportesResueltos.map((r: any) => <TarjetaReporte key={r.id} reporte={r} resuelto={true} />)}
            </div>
          </>
        )}
      </div>

      <ModalAvistamientos />
    </main>
  );
}