"use client";

import { useEffect, useState } from "react";

interface Site {
  name: string;
  url: string;
  preview: string;
  fileName: string;
}

export default function SitesPage() {
  const [sites, setSites] = useState<Site[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchSites() {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/sites`);
        const data = await res.json();
        setSites(data);
      } catch (err) {
        console.error("Erro ao buscar sites:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchSites();
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Sites Gerados</h1>

      {loading ? (
        <p>Carregando...</p>
      ) : sites.length === 0 ? (
        <p className="text-gray-600">Nenhum site encontrado.</p>
      ) : (
        <div className="flex items-center justify-center flex-wrap gap-6">
          {sites.map((site) => (
            <div
              key={site.name}
              className="border md:min-w-[800px] min-w-[150px] rounded-lg p-4 shadow-sm bg-white"
            >
              <h2 className="text-lg font-semibold mb-2">{site.name}</h2>
              <iframe
                src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/preview/${site.fileName}`}
                className="w-full h-48 border rounded"
              />
              <a
                href={`${process.env.NEXT_PUBLIC_BACKEND_URL}${site.url}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block mt-3 text-blue-600 hover:underline"
              >
                Abrir site →
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
