import { BlogHeader } from "@/components/blog/header"
import { BlogSidebar } from "@/components/blog/sidebar"
import { BlogPostCard } from "@/components/blog/postCard"
import { BlogPagination } from "@/components/blog/pagination"
import { Search, Calendar, User } from "lucide-react"

const blogPosts = [
  {
    id: 1,
    title: "Otimizando Consultas SQL para Grandes Volumes de Dados",
    excerpt:
      "Técnicas avançadas para melhorar a performance de consultas SQL em bancos de dados com milhões de registros. Aprenda sobre índices, particionamento e otimização de queries.",
    content: "Conteúdo completo do post...",
    author: "João Silva",
    date: "2024-01-15",
    readTime: "8 min",
    category: "Backend",
    tags: ["SQL", "Performance", "Banco de Dados", "Otimização"],
    image: "/placeholder.svg?height=400&width=600&text=SQL+Optimization",
    featured: true,
  },
  {
    id: 2,
    title: "Arquitetura de Microserviços para Sistemas de Gestão",
    excerpt:
      "Como dividir um monolito em microserviços mantendo a integridade dos processos de negócio. Estratégias, padrões e melhores práticas.",
    content: "Conteúdo completo do post...",
    author: "João Silva",
    date: "2024-01-10",
    readTime: "12 min",
    category: "Arquitetura",
    tags: ["Microserviços", "Arquitetura", "Backend", "Escalabilidade"],
    image: "/placeholder.svg?height=400&width=600&text=Microservices",
    featured: false,
  },
  {
    id: 3,
    title: "Integrando ERPs Legados com APIs Modernas",
    excerpt:
      "Estratégias e padrões para conectar sistemas legados com novas tecnologias sem interromper operações críticas de negócio.",
    content: "Conteúdo completo do post...",
    author: "João Silva",
    date: "2024-01-05",
    readTime: "10 min",
    category: "Integração",
    tags: ["Integração", "API", "ERP", "Sistemas Legados"],
    image: "/placeholder.svg?height=400&width=600&text=API+Integration",
    featured: false,
  },
  {
    id: 4,
    title: "Análise Preditiva para Gestão de Estoque",
    excerpt:
      "Como usar machine learning para prever demanda e otimizar níveis de estoque em empresas de varejo. Implementação prática com Python.",
    content: "Conteúdo completo do post...",
    author: "João Silva",
    date: "2023-12-28",
    readTime: "15 min",
    category: "Data Science",
    tags: ["Machine Learning", "Análise de Dados", "Varejo", "Python"],
    image: "/placeholder.svg?height=400&width=600&text=Predictive+Analysis",
    featured: false,
  },
  {
    id: 5,
    title: "Implementando Cache Redis em Aplicações Node.js",
    excerpt:
      "Guia completo para implementar cache distribuído com Redis em aplicações Node.js. Estratégias de invalidação e padrões de uso.",
    content: "Conteúdo completo do post...",
    author: "João Silva",
    date: "2023-12-20",
    readTime: "9 min",
    category: "Backend",
    tags: ["Redis", "Cache", "Node.js", "Performance"],
    image: "/placeholder.svg?height=400&width=600&text=Redis+Cache",
    featured: false,
  },
  {
    id: 6,
    title: "Segurança em APIs REST: Melhores Práticas",
    excerpt:
      "Implementando autenticação, autorização e outras medidas de segurança em APIs REST. JWT, OAuth2 e proteção contra ataques comuns.",
    content: "Conteúdo completo do post...",
    author: "João Silva",
    date: "2023-12-15",
    readTime: "11 min",
    category: "Segurança",
    tags: ["Segurança", "API", "JWT", "OAuth2"],
    image: "/placeholder.svg?height=400&width=600&text=API+Security",
    featured: false,
  },
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

export default function BlogPage() {
  const featuredPost = blogPosts.find((post) => post.featured)
  const regularPosts = blogPosts.filter((post) => !post.featured)

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <BlogHeader />

      <main className="container mx-auto px-4 py-8">
        {/* Search Bar */}
        <div className="mb-8">
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Buscar artigos..."
              className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Featured Post */}
            {featuredPost && (
              <div className="mb-12">
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-3 py-1 bg-blue-600 text-white rounded-full text-sm font-medium">Destaque</span>
                </div>
                <div className="bg-gray-800 border border-gray-700 rounded-lg overflow-hidden">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                    <div className="h-64 md:h-auto">
                      <img
                        src={featuredPost.image || "/placeholder.svg"}
                        alt={featuredPost.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center gap-4 text-sm text-gray-400 mb-3">
                          <span className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            {new Date(featuredPost.date).toLocaleDateString("pt-BR")}
                          </span>
                          <span className="flex items-center gap-1">
                            <User className="h-4 w-4" />
                            {featuredPost.author}
                          </span>
                          <span>{featuredPost.readTime} de leitura</span>
                        </div>
                        <h2 className="text-2xl font-bold text-white mb-3 hover:text-blue-400 transition-colors cursor-pointer">
                          {featuredPost.title}
                        </h2>
                        <p className="text-gray-300 mb-4">{featuredPost.excerpt}</p>
                        <div className="flex flex-wrap gap-2">
                          {featuredPost.tags.slice(0, 3).map((tag, index) => (
                            <span
                              key={index}
                              className="px-2 py-1 bg-gray-700 text-gray-300 rounded text-sm hover:bg-gray-600 transition-colors cursor-pointer"
                            >
                              #{tag}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="mt-4">
                        <button className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
                          Ler artigo completo
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Regular Posts Grid */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-6">Artigos Recentes</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {regularPosts.map((post) => (
                  <BlogPostCard key={post.id} post={post} />
                ))}
              </div>
            </div>

            {/* Pagination */}
            <BlogPagination currentPage={1} totalPages={5} />
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
