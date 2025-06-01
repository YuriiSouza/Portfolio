import { FileText, Calendar, ArrowRight } from "lucide-react"
import Link from "next/link"

const posts = [
  {
    title: "Otimizando Consultas SQL para Grandes Volumes de Dados",
    excerpt:
      "Técnicas avançadas para melhorar a performance de consultas SQL em bancos de dados com milhões de registros.",
    date: "10 Mai 2023",
    tags: ["SQL", "Performance", "Banco de Dados"],
    readTime: "8 min",
    image: "/placeholder.svg?height=400&width=600&text=SQL+Optimization",
  },
  {
    title: "Arquitetura de Microserviços para Sistemas de Gestão",
    excerpt: "Como dividir um monolito em microserviços mantendo a integridade dos processos de negócio.",
    date: "22 Mar 2023",
    tags: ["Microserviços", "Arquitetura", "Backend"],
    readTime: "12 min",
    image: "/placeholder.svg?height=400&width=600&text=Microservices",
  },
  {
    title: "Integrando ERPs Legados com APIs Modernas",
    excerpt: "Estratégias e padrões para conectar sistemas legados com novas tecnologias sem interromper operações.",
    date: "05 Fev 2023",
    tags: ["Integração", "API", "ERP"],
    readTime: "10 min",
    image: "/placeholder.svg?height=400&width=600&text=API+Integration",
  },
  {
    title: "Análise Preditiva para Gestão de Estoque",
    excerpt: "Como usar machine learning para prever demanda e otimizar níveis de estoque em empresas de varejo.",
    date: "18 Dez 2022",
    tags: ["Machine Learning", "Análise de Dados", "Varejo"],
    readTime: "15 min",
    image: "/placeholder.svg?height=400&width=600&text=Predictive+Analysis",
  },
]

export function Blog() {
  return (
    <section id="blog" className="py-10 pt-20">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <FileText className="h-6 w-6 text-blue-400" />
          <h2 className="text-3xl font-bold text-white">Blog Técnico</h2>
        </div>
        <Link href="/blog" className="flex items-center gap-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white border border-gray-600 rounded-lg transition-colors">
          Ver todos os artigos
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {posts.map((post, index) => (
          <div
            key={index}
            className="bg-gray-800 border border-gray-700 rounded-lg overflow-hidden flex flex-col h-full"
          >
            <div className="h-48 overflow-hidden">
              <img src={post.image || "/placeholder.svg"} alt={post.title} className="w-full h-full object-cover" />
            </div>
            <div className="p-6 flex-grow flex flex-col">
              <h3 className="text-xl font-bold text-white mb-2">{post.title}</h3>
              <div className="flex items-center gap-2 text-sm text-gray-400 mb-4">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  {post.date}
                </div>
                <span>•</span>
                <span>{post.readTime} de leitura</span>
              </div>
              <p className="text-gray-400 mb-4 flex-grow">{post.excerpt}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.map((tag, i) => (
                  <span key={i} className="px-2 py-1 bg-gray-700 text-gray-300 rounded text-sm">
                    {tag}
                  </span>
                ))}
              </div>
              <button className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors">
                Ler artigo completo
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
