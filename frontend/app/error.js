"use client"

import { useEffect } from "react"
import Link from "next/link"
import { AlertCircle, ArrowLeft, Home, RefreshCw } from "lucide-react"


export default function Error({ error, reset }) {
  useEffect(() => {
    // Opcional: Log do erro para serviços de monitoramento
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-4">
      <div className="max-w-md w-full mx-auto text-center">
        <div className="mb-6 flex justify-center">
          <div className="h-24 w-24 rounded-full bg-amber-500/20 flex items-center justify-center">
            <AlertCircle className="h-12 w-12 text-amber-500" />
          </div>
        </div>

        <h1 className="text-4xl font-bold mb-4">Algo deu errado</h1>
        <p className="text-gray-400 mb-2">Desculpe, ocorreu um erro ao carregar esta página.</p>
        <p className="text-gray-500 text-sm mb-8">
          Erro: {error.message || "Erro desconhecido"}
          {error.digest && <span className="block mt-1">ID: {error.digest}</span>}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={reset}
            className="flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
          >
            <RefreshCw className="h-5 w-5" />
            Tentar novamente
          </button>

          <Link
            href="/blog"
            className="flex items-center justify-center gap-2 px-6 py-3 bg-gray-800 hover:bg-gray-700 border border-gray-700 text-white rounded-lg transition-colors"
          >
            <ArrowLeft className="h-5 w-5" />
            Voltar ao Blog
          </Link>

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
  )
}
