"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function Home() {
  const [nombre, setNombre] = useState("");
  const [mensaje, setMensaje] = useState("");

  return (
    <main className="min-h-screen bg-black text-white flex flex-col">

      {/* NAVBAR */}
      <div className="flex justify-between items-center p-6 border-b border-gray-800">
        <h1 className="text-xl font-bold text-green-500">AGROLAB</h1>
        <span className="text-sm text-yellow-400 animate-pulse">
          En desarrollo 🚧
        </span>
      </div>

      {/* HERO */}
      <section className="flex flex-col items-center justify-center text-center py-20 px-6">

        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold mb-6"
        >
          Sistema Agro-Tecnológico
        </motion.h2>

        <p className="text-gray-400 max-w-xl">
          Plataforma educativa para gestión de proyectos, registro de datos de campo y automatización rural.
        </p>

        <motion.a
          href="/dashboard"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="mt-8 bg-green-500 text-black px-6 py-3 rounded-lg font-semibold"
        >
          Probar sistema
        </motion.a>

      </section>

      {/* TARJETAS */}
      <section className="grid md:grid-cols-3 gap-6 px-6 py-10">

        <motion.div
          whileHover={{ scale: 1.05 }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gray-800 p-6 rounded-xl"
        >
          <h3 className="text-xl font-bold text-green-400">Proyectos</h3>
          <p className="text-gray-400 mt-2">
            Gestión de actividades agropecuarias reales.
          </p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-gray-800 p-6 rounded-xl"
        >
          <h3 className="text-xl font-bold text-green-400">Datos</h3>
          <p className="text-gray-400 mt-2">
            Registro de humedad, temperatura y producción.
          </p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-gray-800 p-6 rounded-xl"
        >
          <h3 className="text-xl font-bold text-green-400">Automatización</h3>
          <p className="text-gray-400 mt-2">
            Integración futura con sensores inteligentes.
          </p>
        </motion.div>

      </section>

      {/* GRÁFICO SIMPLE */}
      <section className="px-6 py-10">
        <h3 className="text-2xl font-bold mb-6 text-center">
          Producción (ejemplo)
        </h3>

        <div className="bg-gray-800 p-6 rounded-xl">
          <div className="flex items-end gap-4 h-40">

            <motion.div
              className="bg-green-500 w-10"
              initial={{ height: 0 }}
              animate={{ height: 80 }}
              transition={{ duration: 0.5 }}
            />

            <motion.div
              className="bg-green-500 w-10"
              initial={{ height: 0 }}
              animate={{ height: 120 }}
              transition={{ duration: 0.6 }}
            />

            <motion.div
              className="bg-green-500 w-10"
              initial={{ height: 0 }}
              animate={{ height: 60 }}
              transition={{ duration: 0.7 }}
            />

            <motion.div
              className="bg-green-500 w-10"
              initial={{ height: 0 }}
              animate={{ height: 140 }}
              transition={{ duration: 0.8 }}
            />

          </div>

          <p className="text-gray-400 mt-4 text-center">
            Datos simulados de producción semanal
          </p>
        </div>
      </section>

      {/* FORMULARIO */}
      <section className="px-6 py-10 max-w-xl mx-auto">
        <h3 className="text-2xl font-bold mb-6 text-center">
          Contacto
        </h3>

        <div className="bg-gray-800 p-6 rounded-xl space-y-4">

          <input
            type="text"
            placeholder="Tu nombre"
            className="w-full p-3 rounded bg-gray-900 border border-gray-700"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />

          <textarea
            placeholder="Tu mensaje"
            className="w-full p-3 rounded bg-gray-900 border border-gray-700"
            value={mensaje}
            onChange={(e) => setMensaje(e.target.value)}
          />

          <motion.button
            whileHover={{ scale: 1.05 }}
            onClick={() => alert(`Gracias ${nombre}, recibimos tu mensaje`)}
            className="w-full bg-green-500 text-black py-3 rounded font-semibold"
          >
            Enviar
          </motion.button>

        </div>
      </section>

      {/* FOOTER */}
      <div className="text-center text-gray-600 text-sm pb-6">
        © {new Date().getFullYear()} AGROLAB
      </div>

    </main>
  );
}