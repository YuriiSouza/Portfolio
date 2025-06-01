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
                  <h3 className="text-2xl font-bold text-white">Automatização de Processos para Rede de Varejo</h3>
                </div>
              </div>
            </div>

            <div className="p-6 space-y-6">
              <div>
                <h3 className="text-xl font-medium mb-3 text-blue-400">O Desafio</h3>
                <p className="text-gray-400">
                  Uma rede de varejo com mais de 50 lojas físicas enfrentava problemas significativos com a gestão
                  manual de estoque, resultando em rupturas frequentes, excesso de produtos em algumas lojas e falta em
                  outras. O processo de transferência entre lojas era burocrático e lento, causando perda de vendas
                  estimada em 15%.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-medium mb-3 text-blue-400">A Solução</h3>
                <p className="text-gray-400 mb-4">Desenvolvi um sistema integrado que automatizou:</p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">
                      Monitoramento em tempo real do estoque de todas as lojas com alertas automáticos
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">
                      Sistema de sugestão de transferências entre lojas baseado em histórico de vendas e sazonalidade
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">Integração com o ERP existente e com o e-commerce da empresa</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-medium mb-3 text-blue-400">Resultados</h3>
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-green-900/20 border border-green-800/30 rounded-lg p-4 text-center">
                    <TrendingUp className="h-8 w-8 text-green-500 mb-2 mx-auto" />
                    <p className="text-2xl font-bold text-green-500">40%</p>
                    <p className="text-sm text-gray-400">Redução em rupturas</p>
                  </div>

                  <div className="bg-blue-900/20 border border-blue-800/30 rounded-lg p-4 text-center">
                    <TrendingUp className="h-8 w-8 text-blue-500 mb-2 mx-auto" />
                    <p className="text-2xl font-bold text-blue-500">22%</p>
                    <p className="text-sm text-gray-400">Aumento nas vendas</p>
                  </div>

                  <div className="bg-purple-900/20 border border-purple-800/30 rounded-lg p-4 text-center">
                    <TrendingUp className="h-8 w-8 text-purple-500 mb-2 mx-auto" />
                    <p className="text-2xl font-bold text-purple-500">85%</p>
                    <p className="text-sm text-gray-400">Redução no tempo</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Caso 2 */}
        <div className="bg-gray-800 border border-gray-700 rounded-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            <div className="relative h-64 lg:h-auto overflow-hidden order-1 lg:order-2">
              <img
                src="/placeholder.svg?height=600&width=800&text=Fintech+Case+Study"
                alt="Estudo de caso de fintech"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                <div>
                  <span className="px-3 py-1 bg-blue-600 text-white rounded-full text-sm mb-2 inline-block">
                    Finanças
                  </span>
                  <h3 className="text-2xl font-bold text-white">Sistema de Automação Financeira para Fintech</h3>
                </div>
              </div>
            </div>

            <div className="p-6 space-y-6 order-2 lg:order-1">
              <div>
                <h3 className="text-xl font-medium mb-3 text-blue-400">O Desafio</h3>
                <p className="text-gray-400">
                  Uma fintech em crescimento processava mais de 50.000 transações mensais e enfrentava dificuldades na
                  conciliação bancária e gestão de fluxo de caixa. O processo manual consumia cerca de 120 horas/mês da
                  equipe financeira e apresentava uma taxa de erro de aproximadamente 5%.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-medium mb-3 text-blue-400">A Solução</h3>
                <p className="text-gray-400 mb-4">Desenvolvi uma plataforma completa que:</p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">Integrou-se com múltiplos bancos e adquirentes via APIs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">Automatizou a conciliação bancária com algoritmos de matching</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">Implementou previsão de fluxo de caixa com machine learning</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-medium mb-3 text-blue-400">Resultados</h3>
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-green-900/20 border border-green-800/30 rounded-lg p-4 text-center">
                    <TrendingUp className="h-8 w-8 text-green-500 mb-2 mx-auto" />
                    <p className="text-2xl font-bold text-green-500">95%</p>
                    <p className="text-sm text-gray-400">Redução no tempo</p>
                  </div>

                  <div className="bg-blue-900/20 border border-blue-800/30 rounded-lg p-4 text-center">
                    <TrendingUp className="h-8 w-8 text-blue-500 mb-2 mx-auto" />
                    <p className="text-2xl font-bold text-blue-500">99.8%</p>
                    <p className="text-sm text-gray-400">Precisão</p>
                  </div>

                  <div className="bg-purple-900/20 border border-purple-800/30 rounded-lg p-4 text-center">
                    <TrendingUp className="h-8 w-8 text-purple-500 mb-2 mx-auto" />
                    <p className="text-2xl font-bold text-purple-500">3x</p>
                    <p className="text-sm text-gray-400">Capacidade</p>
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
