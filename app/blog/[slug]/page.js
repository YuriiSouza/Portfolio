import { BlogHeader } from "@/components/blog/header"
import { BlogSidebar } from "@/components/blog/sidebar"
import { RelatedPosts } from "@/components/blog/posts"
import { BlogComments } from "@/components/blog/comments"
import { Calendar, User, Clock, Tag, Share2, Bookmark, Heart } from "lucide-react"

// Mock data - em um app real, isso viria de uma API ou CMS
const blogPost = {
  id: 1,
  title: "Otimizando Consultas SQL para Grandes Volumes de Dados",
  content: `
    <p>Quando trabalhamos com bancos de dados que contêm milhões ou bilhões de registros, a performance das consultas SQL se torna crítica para o sucesso da aplicação. Neste artigo, vou compartilhar técnicas avançadas que aprendi ao longo dos anos otimizando sistemas de grande escala.</p>

    <h2>1. Entendendo o Problema</h2>
    <p>Antes de otimizar qualquer consulta, é fundamental entender onde estão os gargalos. O primeiro passo é sempre analisar o plano de execução da query.</p>

    <pre><code>EXPLAIN ANALYZE SELECT * FROM orders WHERE customer_id = 12345;</code></pre>

    <p>Este comando nos mostra exatamente como o banco de dados está executando nossa consulta e onde estão os pontos de lentidão.</p>

    <h2>2. Índices: A Base da Otimização</h2>
    <p>Os índices são fundamentais para consultas rápidas. Aqui estão os tipos mais importantes:</p>

    <h3>Índices Simples</h3>
    <p>Para consultas que filtram por uma única coluna:</p>
    <pre><code>CREATE INDEX idx_customer_id ON orders(customer_id);</code></pre>

    <h3>Índices Compostos</h3>
    <p>Para consultas que filtram por múltiplas colunas:</p>
    <pre><code>CREATE INDEX idx_customer_date ON orders(customer_id, order_date);</code></pre>

    <h2>3. Particionamento de Tabelas</h2>
    <p>Para tabelas muito grandes, o particionamento pode melhorar drasticamente a performance:</p>

    <pre><code>CREATE TABLE orders_2024 PARTITION OF orders
    FOR VALUES FROM ('2024-01-01') TO ('2025-01-01');</code></pre>

    <h2>4. Otimização de JOINs</h2>
    <p>JOINs mal otimizados são uma das principais causas de lentidão. Algumas dicas:</p>
    
    <ul>
      <li>Sempre use índices nas colunas de JOIN</li>
      <li>Prefira INNER JOINs quando possível</li>
      <li>Considere desnormalização para consultas críticas</li>
    </ul>

    <h2>5. Monitoramento Contínuo</h2>
    <p>A otimização não é um processo único. É importante monitorar continuamente:</p>
    
    <ul>
      <li>Tempo de execução das consultas</li>
      <li>Uso de CPU e memória</li>
      <li>Bloqueios e deadlocks</li>
    </ul>

    <h2>Conclusão</h2>
    <p>Otimizar consultas SQL é uma arte que requer prática e conhecimento profundo do banco de dados. As técnicas apresentadas aqui são apenas o começo - cada sistema tem suas particularidades e requer uma abordagem específica.</p>

    <p>Lembre-se: sempre meça antes e depois das otimizações para garantir que realmente houve melhoria na performance.</p>
  `,
  author: "João Silva",
  date: "2024-01-15",
  readTime: "8 min",
  category: "Backend",
  tags: ["SQL", "Performance", "Banco de Dados", "Otimização"],
  image: "/placeholder.svg?height=400&width=800&text=SQL+Optimization",
  views: 1250,
  likes: 89,
  bookmarks: 34,
}

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

export default function BlogPostPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <BlogHeader />

      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <article className="lg:col-span-3">
            {/* Post Header */}
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-4">
                <span className="px-3 py-1 bg-blue-600 text-white rounded-full text-sm">{blogPost.category}</span>
              </div>

              <h1 className="text-4xl font-bold text-white mb-6 leading-tight">{blogPost.title}</h1>

              <div className="flex items-center gap-6 text-gray-400 mb-6">
                <div className="flex items-center gap-2">
                  <User className="h-5 w-5" />
                  <span>{blogPost.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  <span>{new Date(blogPost.date).toLocaleDateString("pt-BR")}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  <span>{blogPost.readTime} de leitura</span>
                </div>
              </div>

              {/* Social Actions */}
              <div className="flex items-center gap-4 mb-8">
                <button className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 border border-gray-700 rounded-lg transition-colors">
                  <Heart className="h-4 w-4" />
                  <span>{blogPost.likes}</span>
                </button>
                <button className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 border border-gray-700 rounded-lg transition-colors">
                  <Bookmark className="h-4 w-4" />
                  <span>{blogPost.bookmarks}</span>
                </button>
                <button className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 border border-gray-700 rounded-lg transition-colors">
                  <Share2 className="h-4 w-4" />
                  <span>Compartilhar</span>
                </button>
              </div>
            </div>

            {/* Featured Image */}
            <div className="mb-8 rounded-lg overflow-hidden">
              <img
                src={blogPost.image || "/placeholder.svg"}
                alt={blogPost.title}
                className="w-full h-64 md:h-96 object-cover"
              />
            </div>

            {/* Post Content */}
            <div className="prose prose-invert prose-lg max-w-none mb-12">
              <div className="text-gray-300 leading-relaxed" dangerouslySetInnerHTML={{ __html: blogPost.content }} />
            </div>

            {/* Tags */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <Tag className="h-5 w-5 text-blue-400" />
                Tags
              </h3>
              <div className="flex flex-wrap gap-2">
                {blogPost.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gray-800 border border-gray-700 text-gray-300 rounded-full hover:bg-blue-600 hover:text-white transition-colors cursor-pointer"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Author Bio */}
            <div className="bg-gray-800 border border-gray-700 rounded-lg p-6 mb-8">
              <div className="flex items-start gap-4">
                <img
                  src="/placeholder.svg?height=80&width=80&text=Author"
                  alt={blogPost.author}
                  className="w-16 h-16 rounded-full"
                />
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2">{blogPost.author}</h3>
                  <p className="text-gray-400 mb-4">
                    Desenvolvedor Backend Sênior com mais de 8 anos de experiência em sistemas de grande escala.
                    Especialista em otimização de performance e arquitetura de dados.
                  </p>
                  <div className="flex gap-2">
                    <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
                      Seguir
                    </button>
                    <button className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors">
                      Ver perfil
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Related Posts */}
            <RelatedPosts />

            {/* Comments */}
            <BlogComments />
          </article>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <BlogSidebar categories={categories} popularTags={popularTags} />
          </div>
        </div>
      </main>
    </div>
  )
}
