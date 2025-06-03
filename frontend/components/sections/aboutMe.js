import { User, MapPin, Code } from "lucide-react"

export function AboutMe() {
  return (
    <section id="about" className="relative py-10 pt-20">
      <div className="flex items-center gap-3 mb-6">
        <User className="h-6 w-6 text-blue-400" />
        <h2 className="text-3xl font-bold text-white">Sobre Mim</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-1 order-1 md:order-none">
          <div className="rounded-lg overflow-hidden aspect-square relative mb-4">
            <img
              src="/me.jpeg"
              alt="Foto de perfil"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-blue-400" />
                <span className="text-gray-300">Goias, Brasil</span>
              </div>
              <div className="flex items-center gap-2">
                <Code className="h-5 w-5 text-blue-400" />
                <span className="text-gray-300">5+ anos de experiência</span>
              </div>
              <div className="mt-4">
                <h3 className="font-medium mb-2 text-white">Objetivos</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-400">
                  <li>Desenvolver soluções de alto impacto</li>
                  <li>Especialização em sistemas de gestão</li>
                  <li>Aprimorar habilidades em análise de dados</li>
                  <li>Criação de Websites</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="md:col-span-2">
          <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
            <p className="text-lg mb-4 text-gray-300">
              Desenvolvedor de software com foco em backend e dados, apaixonado por criar soluções que otimizam
              processos de gestão e negócios. Experiência com ERP, sistemas internos e automações que geram valor para
              empresas.
            </p>
            <p className="mb-4 text-gray-300">
              Especializado em desenvolver soluções robustas para problemas complexos de negócios, com foco em
              escalabilidade, segurança e performance. Minha abordagem combina conhecimento técnico com entendimento de
              processos de negócio para entregar sistemas que realmente fazem diferença.
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              <span className="px-3 py-1 bg-blue-600/20 text-blue-400 border border-blue-600/30 rounded-full text-sm">
                Backend
              </span>
              <span className="px-3 py-1 bg-blue-600/20 text-blue-400 border border-blue-600/30 rounded-full text-sm">
                Automação
              </span>
              <span className="px-3 py-1 bg-blue-600/20 text-blue-400 border border-blue-600/30 rounded-full text-sm">
                Sistemas de Gestão
              </span>
              <span className="px-3 py-1 bg-blue-600/20 text-blue-400 border border-blue-600/30 rounded-full text-sm">
                Análise de Dados
              </span>
              <span className="px-3 py-1 bg-blue-600/20 text-blue-400 border border-blue-600/30 rounded-full text-sm">
                Integração de APIs
              </span>
              <span className="px-3 py-1 bg-blue-600/20 text-blue-400 border border-blue-600/30 rounded-full text-sm">
                WebSites
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
