import { BlogHeader } from "@/components/blog/header"
import { BlogSidebar } from "@/components/blog/sidebar"
import { BlogPostCard } from "@/components/blog/postCard"
import { BlogPagination } from "@/components/blog/pagination"
import { Folder } from "lucide-react"

// Mock data para posts da categoria
const categoryPosts = [
  {
    id: 1,
    title: "Otimizando Consultas SQL para Grandes Volumes de Dados",
    excerpt:
      "Técnicas avançadas para melhorar a performance de consultas SQL em bancos de dados com milhões de registros.",
    author: "João Silva",
    date: "2024-01-15",
    readTime: "8 min",
    category: "Backend",
    tags: ["SQL", "Performance", "Banco de Dados"],
    image: "/placeholder.svg?height=400&width=600&text=SQL+Optimization",
  },
  {
    id: 5,
    title: "Implementando Cache Redis em Aplicações Node.js",
    excerpt: "Guia completo para implementar cache distribuído com Redis em aplicações Node.js.",
    author: "João Silva",
    date: "2023-12-20",
    readTime: "9 min",
    category: "Backend",
    tags: ["Redis", "Cache", "Node.js", "Performance"],
    image: "/placeholder.svg?height=400&width=600&text=Redis+Cache",
  },
  // Mais posts...
]

const categories = [
  { name: "Backend", count: 12 },
  { name: "Arquitetura", count: 8 },
  { name: "Data Science", count: 6 },
  { name: "Integração", count: 5 },
  { name: "Segurança", count: 4 },
  { name: "DevOps", count: 3 },
]

const popularTags = [
  "SQL",
  "Node.js",
  "Python",
  "API",
  "Microserviços",
  "Performance",
  "Machine Learning",
  "Docker",
  "AWS",
  "PostgreSQL",
  "Redis",
  "JWT",
]

export default function CategoryPage({ params }) {
  const categoryName = decodeURIComponent(params.category)

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <BlogHeader />

      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Category Header */}
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <Folder className="h-6 w-6 text-blue-400" />
                <h1 className="text-3xl font-bold text-white">Categoria: {categoryName}</h1>
              </div>
              <p className="text-gray-400">
                Todos os artigos da categoria {categoryName} ({categoryPosts.length} artigos)
              </p>
            </div>

            {/* Posts Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {categoryPosts.map((post) => (
                <BlogPostCard key={post.id} post={post} />
              ))}
            </div>

            {/* Pagination */}
            <BlogPagination currentPage={1} totalPages={3} />
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <BlogSidebar categories={categories} popularTags={popularTags} />
          </div>
        </div>
      </main>
    </div>
  )
}
