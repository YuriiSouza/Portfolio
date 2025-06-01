import { ArrowRight } from "lucide-react"

const relatedPosts = [
  {
    id: 2,
    title: "Arquitetura de Microserviços para Sistemas de Gestão",
    excerpt: "Como dividir um monolito em microserviços mantendo a integridade dos processos de negócio.",
    image: "/placeholder.svg?height=200&width=300&text=Microservices",
    readTime: "12 min",
  },
  {
    id: 3,
    title: "Implementando Cache Redis em Aplicações Node.js",
    excerpt: "Guia completo para implementar cache distribuído com Redis em aplicações Node.js.",
    image: "/placeholder.svg?height=200&width=300&text=Redis+Cache",
    readTime: "9 min",
  },
  {
    id: 4,
    title: "Segurança em APIs REST: Melhores Práticas",
    excerpt: "Implementando autenticação, autorização e outras medidas de segurança em APIs REST.",
    image: "/placeholder.svg?height=200&width=300&text=API+Security",
    readTime: "11 min",
  },
]

export function RelatedPosts() {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold text-white mb-6">Artigos Relacionados</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {relatedPosts.map((post) => (
          <article
            key={post.id}
            className="bg-gray-800 border border-gray-700 rounded-lg overflow-hidden hover:border-gray-600 transition-colors group cursor-pointer"
          >
            <div className="h-32 overflow-hidden">
              <img
                src={post.image || "/placeholder.svg"}
                alt={post.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors line-clamp-2">
                {post.title}
              </h3>
              <p className="text-gray-400 text-sm mb-3 line-clamp-2">{post.excerpt}</p>
              <div className="flex items-center justify-between">
                <span className="text-gray-500 text-sm">{post.readTime}</span>
                <ArrowRight className="h-4 w-4 text-blue-400 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
