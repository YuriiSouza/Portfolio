import { ChevronLeft, ChevronRight } from "lucide-react"

export function BlogPagination({ currentPage, totalPages }) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1)

  return (
    <div className="flex items-center justify-center gap-2 mt-8">
      <button
        disabled={currentPage === 1}
        className="flex items-center gap-2 px-4 py-2 bg-gray-800 border border-gray-700 text-white rounded-lg hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
      >
        <ChevronLeft className="h-4 w-4" />
        Anterior
      </button>

      <div className="flex gap-1">
        {pages.map((page) => (
          <button
            key={page}
            className={`px-4 py-2 rounded-lg transition-colors ${
              page === currentPage
                ? "bg-blue-600 text-white"
                : "bg-gray-800 border border-gray-700 text-gray-300 hover:bg-gray-700"
            }`}
          >
            {page}
          </button>
        ))}
      </div>

      <button
        disabled={currentPage === totalPages}
        className="flex items-center gap-2 px-4 py-2 bg-gray-800 border border-gray-700 text-white rounded-lg hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
      >
        Próxima
        <ChevronRight className="h-4 w-4" />
      </button>
    </div>
  )
}
