import { Tag, Folder, TrendingUp, Calendar } from "lucide-react"


const recentPosts = [
  {
    title: "Otimizando Consultas SQL",
    date: "2024-01-15",
    image: "/placeholder.svg?height=100&width=100&text=SQL",
  },
  {
    title: "Microserviços na Prática",
    date: "2024-01-10",
    image: "/placeholder.svg?height=100&width=100&text=Micro",
  },
  {
    title: "APIs Seguras com JWT",
    date: "2024-01-05",
    image: "/placeholder.svg?height=100&width=100&text=JWT",
  },
]

export function BlogSidebar({ categories, popularTags }) {
  return (
    <aside className="space-y-8">
      {/* About */}
      <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
        <h3 className="text-xl font-bold text-white mb-4">Sobre o Blog</h3>
        <div className="mb-4">
          <img
            src="/placeholder.svg?height=100&width=100&text=Avatar"
            alt="João Silva"
            className="w-16 h-16 rounded-full mx-auto mb-3"
          />
        </div>
        <p className="text-gray-400 text-sm mb-4">
          Compartilho conhecimentos sobre desenvolvimento backend, arquitetura de sistemas e soluções de negócios.
        </p>
        <div className="flex gap-2">
          <button className="px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white rounded text-sm transition-colors">
            Seguir
          </button>
          <button className="px-3 py-1 bg-gray-700 hover:bg-gray-600 text-white rounded text-sm transition-colors">
            Newsletter
          </button>
        </div>
      </div>

      {/* Recent Posts */}
      <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
        <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
          <TrendingUp className="h-5 w-5 text-blue-400" />
          Posts Populares
        </h3>
        <div className="space-y-4">
          {recentPosts.map((post, index) => (
            <div key={index} className="flex gap-3 group cursor-pointer">
              <img src={post.image || "/placeholder.svg"} alt={post.title} className="w-12 h-12 rounded object-cover" />
              <div className="flex-1">
                <h4 className="text-white text-sm font-medium group-hover:text-blue-400 transition-colors line-clamp-2">
                  {post.title}
                </h4>
                <p className="text-gray-500 text-xs flex items-center gap-1 mt-1">
                  <Calendar className="h-3 w-3" />
                  {new Date(post.date).toLocaleDateString("pt-BR")}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Categories */}
      <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
        <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
          <Folder className="h-5 w-5 text-blue-400" />
          Categorias
        </h3>
        <div className="space-y-2">
          {categories.map((category, index) => (
            <div
              key={index}
              className="flex items-center justify-between py-2 px-3 rounded hover:bg-gray-700 transition-colors cursor-pointer group"
            >
              <span className="text-gray-300 group-hover:text-white transition-colors">{category.name}</span>
              <span className="text-gray-500 text-sm bg-gray-700 px-2 py-1 rounded">{category.count}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Popular Tags */}
      <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
        <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
          <Tag className="h-5 w-5 text-blue-400" />
          Tags Populares
        </h3>
        <div className="flex flex-wrap gap-2">
          {popularTags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm hover:bg-blue-600 hover:text-white transition-colors cursor-pointer"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>

      {/* Newsletter */}
      <div className="bg-gradient-to-br from-blue-900/20 to-blue-800/10 border border-blue-800/30 rounded-lg p-6">
        <h3 className="text-xl font-bold text-white mb-2">Newsletter</h3>
        <p className="text-gray-400 text-sm mb-4">Receba os novos artigos diretamente no seu email.</p>
        <div className="space-y-3">
          <input
            type="email"
            placeholder="Seu email"
            className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <button className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded transition-colors">
            Inscrever-se
          </button>
        </div>
      </div>
    </aside>
  )
}
