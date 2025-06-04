"use client"

import { ArrowDown } from "lucide-react"

export function Hero() {
  const scrollToAbout = () => {
    const element = document.getElementById("about")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="home" className="h-screen flex items-center pt-20">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">
            Desenvolvedor FullStack & <span className="text-blue-400">Especialista em Soluções de Negócios</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300">
            Transformando processos de negócios com automação, sistemas de gestão e análise de dados
          </p>
          <div className="flex flex-wrap gap-4">
            <button
              onClick={scrollToAbout}
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
            >
              Conheça meu trabalho
            </button>
            <a
              href="#contact"
              className="px-6 py-3 border border-gray-600 hover:border-gray-500 text-white font-medium rounded-lg transition-colors hover:bg-gray-800"
            >
              Entre em contato
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button onClick={scrollToAbout} className="p-2 text-white hover:text-blue-400 transition-colors">
          <ArrowDown className="h-6 w-6" />
        </button>
      </div>
    </section>
  )
}
