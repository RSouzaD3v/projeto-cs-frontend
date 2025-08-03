// app/page.tsx
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 flex flex-col">
      {/* Hero Section */}
      <section className="flex-1 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 mb-4">
          Construa Seu Site em Minutos 🚀
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mb-8">
          Com nosso construtor de sites inteligente, você cria páginas modernas
          e responsivas sem precisar escrever uma linha de código.
        </p>

        <Link
          href="/generate"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-medium shadow hover:bg-blue-700 transition"
        >
          Começar Agora
        </Link>
      </section>

      {/* Features Section */}
      <section className="bg-white py-16 px-6 sm:px-10 lg:px-20 border-t">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-10">
          <div className="text-center">
            <div className="text-blue-600 text-4xl mb-3">⚡</div>
            <h3 className="text-xl font-semibold mb-2">Rápido</h3>
            <p className="text-gray-600">
              Gere sites completos em segundos usando tecnologia de ponta.
            </p>
          </div>
          <div className="text-center">
            <div className="text-green-600 text-4xl mb-3">🎨</div>
            <h3 className="text-xl font-semibold mb-2">Personalizável</h3>
            <p className="text-gray-600">
              Ajuste cores, textos e imagens para o seu gosto.
            </p>
          </div>
          <div className="text-center">
            <div className="text-purple-600 text-4xl mb-3">📱</div>
            <h3 className="text-xl font-semibold mb-2">Responsivo</h3>
            <p className="text-gray-600">
              Seu site perfeito em qualquer dispositivo.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center text-gray-500 text-sm border-t">
        © {new Date().getFullYear()} Construtor de Sites - Todos os direitos reservados.
      </footer>
    </main>
  );
}
