import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-amber-50">
      <nav className="bg-orange-600 text-white px-6 py-4 flex items-center justify-between shadow-md">
        <div className="flex items-center gap-2">
          <span className="text-2xl">🐾</span>
          <span className="font-bold text-xl">Mascotas Perdidas</span>
        </div>
        <div className="flex gap-4">
          <Link href="/reportes" className="hover:underline">Ver reportes</Link>
          <Link href="/reportes/nuevo" className="bg-white text-orange-600 px-4 py-1 rounded-full font-semibold hover:bg-orange-100">
            + Reportar mascota
          </Link>
        </div>
      </nav>

      <section className="text-center py-16 px-4">
        <h1 className="text-5xl font-bold text-orange-700 mb-4">¿Perdiste a tu mascota?</h1>
        <p className="text-lg text-gray-600 max-w-xl mx-auto mb-8">
          Publica un reporte, registra avistamientos y reúnete con tu compañero. La comunidad te ayuda.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <Link href="/reportes/nuevo" className="bg-orange-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-orange-700 transition">
            Reportar mascota perdida
          </Link>
          <Link href="/reportes" className="border-2 border-orange-600 text-orange-600 px-8 py-3 rounded-full text-lg font-semibold hover:bg-orange-50 transition">
            Ver reportes activos
          </Link>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 pb-16 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-2xl p-6 shadow text-center">
          <div className="text-4xl mb-3">📋</div>
          <h3 className="font-bold text-lg text-gray-800 mb-2">Publica tu reporte</h3>
          <p className="text-gray-500 text-sm">Sube la descripción de tu mascota e indica dónde se perdió.</p>
        </div>
        <div className="bg-white rounded-2xl p-6 shadow text-center">
          <div className="text-4xl mb-3">👁️</div>
          <h3 className="font-bold text-lg text-gray-800 mb-2">Registra avistamientos</h3>
          <p className="text-gray-500 text-sm">¿Viste una mascota perdida? Ayuda indicando dónde y cuándo.</p>
        </div>
        <div className="bg-white rounded-2xl p-6 shadow text-center">
          <div className="text-4xl mb-3">🏠</div>
          <h3 className="font-bold text-lg text-gray-800 mb-2">Marca como encontrada</h3>
          <p className="text-gray-500 text-sm">Cuando la mascota aparezca, marca el reporte como resuelto.</p>
        </div>
      </section>
    </main>
  );
}