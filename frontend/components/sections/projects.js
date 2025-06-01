import { Database, ExternalLink, Github } from "lucide-react"

const projects = [
  {
    name: "Sistema de Controle de Estoque com Dashboard de Indicadores",
    description:
      "Otimiza controle de produtos com baixa rotatividade e gera alertas automáticos para reposição. Implementa análise preditiva para sugerir compras baseadas em sazonalidade.",
    tech: ["Python", "Flask", "PostgreSQL", "Dash", "Docker"],
    highlights: [
      "Redução de 30% em produtos obsoletos",
      "Dashboard em tempo real",
      "Alertas automáticos via email e SMS",
      "Integração com fornecedores",
    ],
    github: "https://github.com/username/estoque-dashboard",
    image: "/placeholder.svg?height=600&width=800&text=Dashboard+de+Estoque",
  },
  {
    name: "Módulo de Faturamento e Integração com ERP",
    description:
      "Automatiza emissão de NF-e e cálculo de impostos conforme a legislação brasileira. Integra-se com múltiplos ERPs e sistemas legados.",
    tech: ["Node.js", "MySQL", "API SEFAZ", "RabbitMQ"],
    highlights: [
      "Processamento de 10.000+ notas/mês",
      "Validação automática de tributos",
      "Redução de 95% em erros fiscais",
      "Integração com SAP e Totvs",
    ],
    github: "https://github.com/username/faturamento-erp",
    image: "/placeholder.svg?height=600&width=800&text=Sistema+de+Faturamento",
  },
  {
    name: "API de Integração para Marketplace",
    description:
      "Sistema que conecta ERPs de varejistas com múltiplos marketplaces, sincronizando estoque, preços e pedidos em tempo real.",
    tech: ["C#", ".NET Core", "MongoDB", "Redis", "Azure"],
    highlights: [
      "Processamento de 500+ pedidos/hora",
      "Sincronização em tempo real",
      "Escalabilidade horizontal",
      "Monitoramento e alertas",
    ],
    github: "https://github.com/username/marketplace-integration",
    image: "/placeholder.svg?height=600&width=800&text=API+Marketplace",
  },
  {
    name: "Sistema de Análise de Crédito Automatizado",
    description:
      "Plataforma que automatiza análise de crédito para pequenas empresas utilizando machine learning e dados financeiros.",
    tech: ["Python", "Django", "PostgreSQL", "Scikit-learn", "Docker"],
    highlights: [
      "Redução de 70% no tempo de análise",
      "Integração com bureaus de crédito",
      "Dashboard para gestores",
      "Modelos de ML com 92% de precisão",
    ],
    github: "https://github.com/username/credit-analysis",
    image: "/placeholder.svg?height=600&width=800&text=Análise+de+Crédito",
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-10 pt-20">
      <div className="flex items-center gap-3 mb-6">
        <Database className="h-6 w-6 text-blue-400" />
        <h2 className="text-3xl font-bold text-white">Projetos Destacados</h2>
      </div>

      <div className="space-y-12">
        {projects.map((project, index) => (
          <div key={index} className="bg-gray-800 border border-gray-700 rounded-lg overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
              <div className="h-64 md:h-auto">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-white mb-2">{project.name}</h3>
                  <p className="text-gray-400">{project.description}</p>
                </div>
                <div className="flex-grow">
                  <div className="mb-4">
                    <h4 className="text-sm font-medium mb-2 text-white">Tecnologias:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 bg-gray-700 text-gray-300 border border-gray-600 rounded text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium mb-2 text-white">Destaques:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-400">
                      {project.highlights.map((highlight, i) => (
                        <li key={i}>{highlight}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="flex justify-between mt-6">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white border border-gray-600 rounded-lg transition-colors"
                  >
                    <Github className="h-4 w-4" />
                    GitHub
                  </a>
                  <button className="flex items-center gap-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white border border-gray-600 rounded-lg transition-colors">
                    <ExternalLink className="h-4 w-4" />
                    Demo
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
