"use client" // Mantenha esta diretiva no topo do arquivo!

import { Mail, Send, Github, Linkedin, MapPin } from "lucide-react"
import { useForm, ValidationError } from '@formspree/react';

export function Contact() {
  const [state, handleSubmit] = useForm("xzzgbana"); 

  if (state.succeeded) {
    return (
      <section id="contact" className="py-10 pt-20">
        <div className="flex items-center gap-3 mb-6">
          <Mail className="h-6 w-6 text-blue-400" />
          <h2 className="text-3xl font-bold text-white">Contato</h2>
        </div>
        <div className="bg-gray-800 border border-gray-700 rounded-lg overflow-hidden p-6 text-center min-h-[300px] flex items-center justify-center">
          <p className="text-2xl font-bold text-white">
            Mensagem enviada com sucesso! Obrigado por entrar em contato.
          </p>
        </div>
      </section>
    );
  }

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
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent flex items-center p-6">
                <div>
                  <h3 className="text-2xl font-bold text-white">Vamos Trabalhar Juntos</h3>
                  <p className="text-gray-300">Preencha o formulário para iniciar uma conversa</p>
                </div>
              </div>
            </div>
            <div className="p-6">
              {/* O onSubmit do formulário agora usa o handleSubmit do Formspree */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Novo campo para o Nome */}
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-white">
                      Nome
                    </label>
                    <input
                      id="name"
                      type="text"
                      name="Nome"
                      placeholder="Seu nome"
                      className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required // Torna o campo obrigatório
                    />
                    {/* Exibe erros de validação para o campo 'Nome' */}
                    <ValidationError 
                      prefix="Nome" 
                      field="Nome" // O 'field' deve corresponder ao 'name' do input
                      errors={state.errors}
                      className="text-red-500 text-sm mt-1" 
                    />
                  </div>
                  
                  {/* Campo de Email */}
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-white">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="Email" // Adicione o atributo 'name' para o Formspree
                      placeholder="seu.email@exemplo.com"
                      className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required // Torna o campo obrigatório
                    />
                    {/* Exibe erros de validação para o campo 'Email' */}
                    <ValidationError 
                      prefix="Email" 
                      field="Email" 
                      errors={state.errors}
                      className="text-red-500 text-sm mt-1" 
                    />
                  </div>
                </div>

                {/* Campo de Assunto */}
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium text-white">
                    Assunto
                  </label>
                  <input
                    id="subject"
                    type="text"
                    name="Assunto"
                    placeholder="Assunto da mensagem"
                    className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  {/* Exibe erros de validação para o campo 'Assunto' */}
                  <ValidationError 
                    prefix="Assunto" 
                    field="Assunto" 
                    errors={state.errors}
                    className="text-red-500 text-sm mt-1" 
                  />
                </div>

                {/* Campo de Mensagem */}
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-white">
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    name="Mensagem" 
                    placeholder="Escreva sua mensagem aqui..."
                    className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                    required 
                  />
                  <ValidationError 
                    prefix="Mensagem" 
                    field="Mensagem" 
                    errors={state.errors}
                    className="text-red-500 text-sm mt-1" 
                  />
                </div>

                <div className="mt-6">
                  <button 
                    type="submit" 
                    disabled={state.submitting}
                    className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {state.submitting ? 'Enviando...' : 'Enviar Mensagem'}
                    {!state.submitting && <Send className="h-4 w-4" />}
                  </button>
                </div>
                <ValidationError 
                  errors={state.errors}
                  className="text-red-500 text-sm mt-4 text-center"
                />
              </form>
            </div>
          </div>
        </div>

        <div>
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-lg p-6 h-full">
            <h3 className="text-xl font-bold text-white mb-2">Informações de Contato</h3>
            <p className="text-gray-400 mb-6">Outras formas de entrar em contato comigo.</p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-blue-400" />
                <span className="text-gray-300">Goiás, Brasil</span>
              </div>

              <div className="pt-4">
                <h4 className="text-sm font-medium text-white mb-3">Redes Sociais</h4>
                <div className="flex flex-col gap-3">
                  <a
                    href="https://github.com/YuriiSouza"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-gray-300 hover:text-white hover:underline transition-colors"
                  >
                    <Github className="h-5 w-5 text-blue-400" />
                    <span>GitHub</span>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/yuri-souza-b33013215/"
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