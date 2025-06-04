import Link from "next/link"
import { AlertTriangle, ArrowLeft, Home, Search } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col">
      <div className="container mx-auto px-4 py-8 flex-grow flex flex-col items-center justify-center">
        <div className="max-w-md w-full mx-auto text-center">
          <div className="mb-6 flex justify-center">
            <div className="h-24 w-24 rounded-full bg-red-500/20 flex items-center justify-center">
              <AlertTriangle className="h-12 w-12 text-red-500" />
            </div>
          </div>

          <h1 className="text-4xl font-bold mb-4">Página não encontrada</h1>
          <p className="text-gray-400 mb-8">
            Desculpe, não conseguimos encontrar a página que você está procurando. Ela pode ter sido movida ou não
            existe mais.
          </p>

          <div className="mb-8">
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Buscar no blog..."
                className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="flex items-center justify-center gap-2 px-6 py-3 bg-gray-800 hover:bg-gray-700 border border-gray-700 text-white rounded-lg transition-colors"
            >
              <Home className="h-5 w-5" />
              Página Inicial
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
