import { Mail, Send, Github, Linkedin, MapPin } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="py-10 pt-20">
      <div className="flex items-center gap-3 mb-6">
        <Mail className="h-6 w-6 text-blue-400" />
        <h2 className="text-3xl font-bold text-white">Contato</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <div className="bg-gray-800 border border-gray-700 rounded-lg overflow-hidden">
            <div className="relative h-40">
              <img
                src="/placeholder.svg?height=400&width=1200&text=Contact+Me"
                alt="Contato"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent flex items-center p-6">
                <div>
                  <h3 className="text-2xl font-bold text-white">Vamos Trabalhar Juntos</h3>
                  <p className="text-gray-300">Preencha o formulário para iniciar uma conversa</p>
                </div>
              </div>
            </div>
            <div className="p-6">
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-white">
                      Nome
                    </label>
                    <input
                      id="name"
                      type="text"
                      placeholder="Seu nome"
                      className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-white">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="seu.email@exemplo.com"
                      className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium text-white">
                    Assunto
                  </label>
                  <input
                    id="subject"
                    type="text"
                    placeholder="Assunto da mensagem"
                    className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-white">
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    placeholder="Escreva sua mensagem aqui..."
                    className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  />
                </div>
              </form>
              <div className="mt-6">
                <button className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors">
                  <Send className="h-4 w-4" />
                  Enviar Mensagem
                </button>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-lg p-6 h-full">
            <h3 className="text-xl font-bold text-white mb-2">Informações de Contato</h3>
            <p className="text-gray-400 mb-6">Outras formas de entrar em contato comigo.</p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-blue-400" />
                <a
                  href="mailto:seu.email@exemplo.com"
                  className="text-gray-300 hover:text-white hover:underline transition-colors"
                >
                  seu.email@exemplo.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-blue-400" />
                <span className="text-gray-300">São Paulo, Brasil</span>
              </div>

              <div className="pt-4">
                <h4 className="text-sm font-medium text-white mb-3">Redes Sociais</h4>
                <div className="flex flex-col gap-3">
                  <a
                    href="https://github.com/seu-usuario"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-gray-300 hover:text-white hover:underline transition-colors"
                  >
                    <Github className="h-5 w-5 text-blue-400" />
                    <span>GitHub</span>
                  </a>
                  <a
                    href="https://linkedin.com/in/seu-usuario"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-gray-300 hover:text-white hover:underline transition-colors"
                  >
                    <Linkedin className="h-5 w-5 text-blue-400" />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
