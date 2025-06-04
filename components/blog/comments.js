import { MessageCircle, Heart, Reply, MoreHorizontal } from "lucide-react"

const comments = [
  {
    id: 1,
    author: "Maria Santos",
    avatar: "/placeholder.svg?height=40&width=40&text=MS",
    date: "2024-01-16",
    content:
      "Excelente artigo! As dicas sobre índices compostos foram muito úteis. Consegui melhorar a performance das minhas consultas em 60%.",
    likes: 12,
    replies: [
      {
        id: 2,
        author: "João Silva",
        avatar: "/placeholder.svg?height=40&width=40&text=JS",
        date: "2024-01-16",
        content:
          "Fico feliz que tenha ajudado, Maria! Índices compostos realmente fazem uma diferença enorme em consultas complexas.",
        likes: 5,
      },
    ],
  },
  {
    id: 3,
    author: "Carlos Oliveira",
    avatar: "/placeholder.svg?height=40&width=40&text=CO",
    date: "2024-01-15",
    content:
      "Muito bom! Você poderia fazer um artigo sobre otimização específica para PostgreSQL? Tenho alguns casos específicos que gostaria de entender melhor.",
    likes: 8,
    replies: [],
  },
  {
    id: 4,
    author: "Ana Costa",
    avatar: "/placeholder.svg?height=40&width=40&text=AC",
    date: "2024-01-15",
    content:
      "Salvei este artigo nos favoritos. As explicações estão muito claras e os exemplos práticos ajudam muito no entendimento.",
    likes: 6,
    replies: [],
  },
]

export function BlogComments() {
  return (
    <section className="mb-8">
      <div className="flex items-center gap-2 mb-6">
        <MessageCircle className="h-6 w-6 text-blue-400" />
        <h2 className="text-2xl font-bold text-white">Comentários ({comments.length})</h2>
      </div>

      {/* Comment Form */}
      <div className="bg-gray-800 border border-gray-700 rounded-lg p-6 mb-8">
        <h3 className="text-lg font-semibold text-white mb-4">Deixe seu comentário</h3>
        <div className="space-y-4">
          <textarea
            placeholder="Escreva seu comentário..."
            rows={4}
            className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
          />
          <div className="flex justify-between items-center">
            <p className="text-gray-400 text-sm">Seja respeitoso e construtivo nos comentários.</p>
            <button className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
              Comentar
            </button>
          </div>
        </div>
      </div>

      {/* Comments List */}
      <div className="space-y-6">
        {comments.map((comment) => (
          <div key={comment.id} className="bg-gray-800 border border-gray-700 rounded-lg p-6">
            <div className="flex items-start gap-4">
              <img src={comment.avatar || "/placeholder.svg"} alt={comment.author} className="w-10 h-10 rounded-full" />
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <h4 className="font-semibold text-white">{comment.author}</h4>
                  <span className="text-gray-500 text-sm">{new Date(comment.date).toLocaleDateString("pt-BR")}</span>
                </div>
                <p className="text-gray-300 mb-4">{comment.content}</p>
                <div className="flex items-center gap-4">
                  <button className="flex items-center gap-2 text-gray-400 hover:text-red-400 transition-colors">
                    <Heart className="h-4 w-4" />
                    <span>{comment.likes}</span>
                  </button>
                  <button className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors">
                    <Reply className="h-4 w-4" />
                    <span>Responder</span>
                  </button>
                  <button className="text-gray-400 hover:text-white transition-colors">
                    <MoreHorizontal className="h-4 w-4" />
                  </button>
                </div>

                {/* Replies */}
                {comment.replies.length > 0 && (
                  <div className="mt-6 pl-6 border-l-2 border-gray-700 space-y-4">
                    {comment.replies.map((reply) => (
                      <div key={reply.id} className="flex items-start gap-4">
                        <img
                          src={reply.avatar || "/placeholder.svg"}
                          alt={reply.author}
                          className="w-8 h-8 rounded-full"
                        />
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <h5 className="font-semibold text-white text-sm">{reply.author}</h5>
                            <span className="text-gray-500 text-xs">
                              {new Date(reply.date).toLocaleDateString("pt-BR")}
                            </span>
                          </div>
                          <p className="text-gray-300 text-sm mb-2">{reply.content}</p>
                          <div className="flex items-center gap-4">
                            <button className="flex items-center gap-1 text-gray-400 hover:text-red-400 transition-colors text-sm">
                              <Heart className="h-3 w-3" />
                              <span>{reply.likes}</span>
                            </button>
                            <button className="flex items-center gap-1 text-gray-400 hover:text-blue-400 transition-colors text-sm">
                              <Reply className="h-3 w-3" />
                              <span>Responder</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Load More Comments */}
      <div className="text-center mt-8">
        <button className="px-6 py-3 bg-gray-800 hover:bg-gray-700 border border-gray-700 text-white rounded-lg transition-colors">
          Carregar mais comentários
        </button>
      </div>
    </section>
  )
}
