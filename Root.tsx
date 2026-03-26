import { Outlet, Link, useLocation } from "react-router";
import { Sparkles } from "lucide-react";
import { useState } from "react";
import { AIAssistant } from "./AIAssistant";

export function Root() {
  const location = useLocation();
  const [isAIOpen, setIsAIOpen] = useState(false);

  const isActive = (path: string) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };

  return (
    <div className="min-h-screen bg-[#F9F8F6] flex flex-col font-sans">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-stone-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 bg-green-800 rounded-lg flex items-center justify-center shadow-sm">
                <span className="text-white text-base">🌱</span>
              </div>
              <h1 className="text-2xl font-semibold tracking-tight text-stone-800 font-heading">EcoTech</h1>
            </div>

            <nav className="hidden md:flex gap-8">
              <Link
                to="/"
                className={`transition-colors text-sm font-medium tracking-wide ${
                  isActive("/") && location.pathname === "/"
                    ? "text-green-800"
                    : "text-stone-500 hover:text-green-700"
                }`}
              >
                Início
              </Link>
              <Link
                to="/compostagem"
                className={`transition-colors text-sm font-medium tracking-wide ${
                  isActive("/compostagem")
                    ? "text-green-800"
                    : "text-stone-500 hover:text-green-700"
                }`}
              >
                Compostagem
              </Link>
              <Link
                to="/automatizacao"
                className={`transition-colors text-sm font-medium tracking-wide ${
                  isActive("/automatizacao")
                    ? "text-green-800"
                    : "text-stone-500 hover:text-green-700"
                }`}
              >
                Automatização
              </Link>
              <Link
                to="/blog"
                className={`transition-colors text-sm font-medium tracking-wide ${
                  isActive("/blog")
                    ? "text-green-800"
                    : "text-stone-500 hover:text-green-700"
                }`}
              >
                Blog
              </Link>
            </nav>

            <button
              onClick={() => setIsAIOpen(true)}
              className="bg-amber-900 text-amber-50 px-5 py-2.5 rounded-full flex items-center gap-2 hover:bg-amber-800 transition-all text-sm font-medium shadow-sm"
            >
              <Sparkles size={16} className="text-amber-200" />
              IA
            </button>
          </div>

          {/* Mobile Navigation */}
          <nav className="md:hidden flex gap-4 pb-4 overflow-x-auto no-scrollbar">
            <Link
              to="/"
              className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                isActive("/") && location.pathname === "/"
                  ? "bg-green-800 text-white"
                  : "bg-stone-100 text-stone-600"
              }`}
            >
              Início
            </Link>
            <Link
              to="/compostagem"
              className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                isActive("/compostagem")
                  ? "bg-green-800 text-white"
                  : "bg-stone-100 text-stone-600"
              }`}
            >
              Compostagem
            </Link>
            <Link
              to="/automatizacao"
              className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                isActive("/automatizacao")
                  ? "bg-green-800 text-white"
                  : "bg-stone-100 text-stone-600"
              }`}
            >
              Automatização
            </Link>
            <Link
              to="/blog"
              className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                isActive("/blog")
                  ? "bg-green-800 text-white"
                  : "bg-stone-100 text-stone-600"
              }`}
            >
              Blog
            </Link>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-[#EFEBE4] border-t border-stone-200 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <p className="text-stone-500 text-sm font-medium tracking-wide">
              © 2026 EcoTech Escolar
            </p>
          </div>
        </div>
      </footer>

      {/* AI Assistant Modal */}
      <AIAssistant isOpen={isAIOpen} onClose={() => setIsAIOpen(false)} />
    </div>
  );
}
