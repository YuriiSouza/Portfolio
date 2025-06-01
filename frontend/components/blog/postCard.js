import { Calendar, Clock, ArrowRight } from "lucide-react"


export function BlogPostCard({ post }) {
  return (
    <article className="bg-gray-800 border border-gray-700 rounded-lg overflow-hidden hover:border-gray-600 transition-colors group">
      <div className="h-48 overflow-hidden">
        <img
          src={post.image || "/placeholder.svg"}
          alt={post.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      <div className="p-6">
        <div className="flex items-center gap-2 mb-3">
          <span className="px-2 py-1 bg-blue-600/20 text-blue-400 rounded text-sm">{post.category}</span>
        </div>

        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors cursor-pointer line-clamp-2">
          {post.title}
        </h3>

        <p className="text-gray-400 mb-4 line-clamp-3">{post.excerpt}</p>

        <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
          <span className="flex items-center gap-1">
            <Calendar className="h-4 w-4" />
            {new Date(post.date).toLocaleDateString("pt-BR")}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            {post.readTime}
          </span>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags.slice(0, 2).map((tag, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-gray-700 text-gray-300 rounded text-sm hover:bg-gray-600 transition-colors cursor-pointer"
            >
              #{tag}
            </span>
          ))}
        </div>

        <button className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors group">
          Ler mais
          <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </article>
  )
}
