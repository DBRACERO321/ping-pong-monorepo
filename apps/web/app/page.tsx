"use client";

import { useEffect, useState } from "react";

export default function Page() {
  const [message, setMessage] = useState("Cargando...");

  useEffect(() => {
    fetch("http://localhost:3000")
      .then((res) => res.text())
      .then((data) => setMessage(data))
      .catch(() => setMessage("Error conectando a la API"));
  }, []);

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-900 text-white">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Ping-Pong Monorepo</h1>
        <p className="text-xl px-4 py-2 bg-gray-800 rounded-lg shadow-lg">
          Respuesta del servidor:{" "}
          <span className="text-green-400">{message}</span>
        </p>
      </div>
    </main>
  );
}
