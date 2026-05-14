export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col justify-center items-center text-center px-6">

      {/* LOGO */}
      <h1 className="text-5xl font-bold text-green-500 tracking-wide">
        AGROLAB
      </h1>

      {/* MENSAJE */}
      <h2 className="text-2xl mt-6 font-semibold">
        Estamos trabajando en la plataforma 🚧
      </h2>

      <p className="text-gray-400 mt-4 max-w-md">
        Muy pronto vas a poder acceder a un sistema técnico-educativo agropecuario
        para la gestión de proyectos, registros de campo y automatización rural.
      </p>

      {/* BOTÓN */}
      <a
        href="/dashboard"
        className="mt-8 bg-green-500 text-black px-6 py-3 rounded-lg font-semibold hover:bg-green-400 transition"
      >
        Ir a la versión de prueba
      </a>

      {/* FOOTER */}
      <p className="text-gray-600 text-sm mt-10">
        © {new Date().getFullYear()} AGROLAB — Proyecto educativo
      </p>

    </main>
  );
}