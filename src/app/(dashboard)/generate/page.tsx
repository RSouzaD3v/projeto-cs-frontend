"use client";

import { useState } from "react";

export default function GeneratePage() {
  const [niche, setNiche] = useState("");
  const [style, setStyle] = useState("moderno");
  const [companyName, setCompanyName] = useState("");
  const [loading, setLoading] = useState(false);
  const [site, setSite] = useState<{ fileName: string; url: string } | null>(null);

  async function handleGenerate() {
    if (!niche.trim()) return alert("Informe o nicho do site");

    setLoading(true);
    setSite(null);

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/generate`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          niche,
          style,
          companyName
        }),
      });

      if (!res.ok) throw new Error("Erro ao gerar site");

      const data = await res.json();
      setSite(data); // { fileName, url }
    } catch (err) {
      console.error(err);
      alert("Erro ao gerar site");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Gerar Novo Site</h1>

      <div className="space-y-4 max-w-lg">
        <input
          type="text"
          placeholder="Nicho (ex: Barbearia, Restaurante...)"
          value={niche}
          onChange={(e) => setNiche(e.target.value)}
          className="w-full border rounded p-3"
        />
        <input
          type="text"
          placeholder="Nome da empresa"
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
          className="w-full border rounded p-3"
        />
        <select
          value={style}
          onChange={(e) => setStyle(e.target.value)}
          className="w-full border rounded p-3"
        >
          <option value="moderno">Moderno</option>
          <option value="minimalista">Minimalista</option>
          <option value="clássico">Clássico</option>
        </select>

        <button
          onClick={handleGenerate}
          disabled={loading}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
        >
          {loading ? "Gerando..." : "Gerar Site"}
        </button>
      </div>

      {site && (
        <div className="mt-6">
          <h2 className="font-semibold mb-2">Preview:</h2>
          <iframe
            src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${site.url}`}
            className="w-full h-96 border rounded"
          />
          <a
            href={`${process.env.NEXT_PUBLIC_BACKEND_URL}${site.url}`}
            target="_blank"
            rel="noopener noreferrer"
            className="block mt-3 text-blue-600 hover:underline"
          >
            Abrir em nova aba →
          </a>
        </div>
      )}
    </div>
  );
}
