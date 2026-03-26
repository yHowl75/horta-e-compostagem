import { Link } from "react-router";
import { Home } from "lucide-react";

export function NotFound() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
      <div className="text-8xl mb-4">🌱</div>
      <h1 className="text-6xl mb-4 text-gray-800">404</h1>
      <p className="text-2xl text-gray-600 mb-8">
        Ops! Página não encontrada
      </p>
      <p className="text-gray-500 mb-8">
        A página que você está procurando não existe ou foi movida.
      </p>
      <Link
        to="/"
        className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
      >
        <Home size={20} />
        Voltar para Início
      </Link>
    </div>
  );
}
