import { ArrowLeft, Rss, Search } from "lucide-react"
import Link from "next/link"

export function BlogHeader() {
  return (
    <header className="bg-gray-800 border-b border-gray-700">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors">
              <ArrowLeft className="h-5 w-5" />
              <span>Voltar ao Portfolio</span>
            </Link>
          </div>

          <div className="text-center">
            <h1 className="text-3xl font-bold text-white mb-2">Blog Técnico</h1>
            <p className="text-gray-400">Artigos sobre desenvolvimento backend e soluções de negócios</p>
          </div>

          <div className="flex items-center gap-4">
            <button className="p-2 text-gray-300 hover:text-white hover:bg-gray-700 rounded-lg transition-colors">
              <Search className="h-5 w-5" />
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
              <Rss className="h-4 w-4" />
              <span className="hidden sm:inline">RSS</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
