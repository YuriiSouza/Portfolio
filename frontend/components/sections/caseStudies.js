import { BarChart2, CheckCircle, TrendingUp } from "lucide-react"

export function CaseStudies() {
  return (
    <section id="case-studies" className="py-10 pt-20">
      <div className="flex items-center gap-3 mb-6">
        <BarChart2 className="h-6 w-6 text-blue-400" />
        <h2 className="text-3xl font-bold text-white">Estudos de Caso</h2>
      </div>

      <div className="space-y-12">
        {/* Caso 1 */}
        <div className="bg-gray-800 border border-gray-700 rounded-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            <div className="relative h-64 lg:h-auto overflow-hidden">
              <img
                src="/placeholder.svg?height=600&width=800&text=Varejo+Case+Study"
                alt="Estudo de caso de varejo"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                <div>
                  <span className="px-3 py-1 bg-blue-600 text-white rounded-full text-sm mb-2 inline-block">
                    Varejo
                  </span>
                  <h3 className="text-2xl font-bold text-white">Análise de processos internos.</h3>
                </div>
              </div>
            </div>

            <div className="p-6 space-y-6">
              <div>
                <h3 className="text-xl font-medium mb-3 text-blue-400">O Desafio</h3>
                <p className="text-gray-400">
                  Uma revenda Ambev credenciada enfrentava desafios significativos na visualização e análise de suas verificações de processos internos. A empresa utilizava um questionário para avaliar o conhecimento dos colaboradores sobre a execução correta dos procedimentos, mas as respostas ficavam dispersas, dificultando a análise de resultados e a identificação dos principais pontos de impacto nos processos.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-medium mb-3 text-blue-400">A Solução</h3>
                <p className="text-gray-400 mb-4">Desenvolvi um sistema integrado que automatizou:</p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">
                      Criamos uma ferramenta para reunir todas as respostas dos questionários em um único local.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">
                      A ferramenta agora apresenta os dados de forma visual e direta aos líderes.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">Com os resultados claros, ficou mais fácil criar estratégias para corrigir as falhas nos processos.</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-medium mb-3 text-blue-400">Resultados</h3>
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-green-900/20 border border-green-800/30 rounded-lg p-4 text-center">
                    <TrendingUp className="h-8 w-8 text-green-500 mb-2 mx-auto" />
                    <p className="text-sm text-gray-400">Processos Otimizados e Redução de Falhas</p>
                  </div>

                  <div className="bg-blue-900/20 border border-blue-800/30 rounded-lg p-4 text-center">
                    <TrendingUp className="h-8 w-8 text-blue-500 mb-2 mx-auto" />
                    <p className="text-sm text-gray-400">Aumento da Produtividade e Qualidade</p>
                  </div>

                  <div className="bg-purple-900/20 border border-purple-800/30 rounded-lg p-4 text-center">
                    <TrendingUp className="h-8 w-8 text-purple-500 mb-2 mx-auto" />
                    <p className="text-sm text-gray-400">Tomada de Decisão Baseada em Dados</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
