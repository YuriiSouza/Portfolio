import { Briefcase, Calendar } from "lucide-react"

const experiences = [
  {
    company: "TechSolutions Brasil",
    position: "Desenvolvedor Backend Sênior",
    period: "2021 - Presente",
    description:
      "Lidero o desenvolvimento de sistemas de gestão empresarial e automação de processos para clientes de médio e grande porte.",
    responsibilities: [
      "Arquitetura e desenvolvimento de APIs RESTful para integração de sistemas legados com novas soluções",
      "Implementação de microserviços para processamento de dados em larga escala",
      "Otimização de consultas SQL complexas, melhorando performance em 60%",
      "Mentoria de desenvolvedores júnior e pleno",
    ],
    technologies: ["Node.js", "Python", "PostgreSQL", "Docker", "AWS", "Kafka"],
    logo: "/placeholder.svg?height=200&width=200&text=TS",
  },
  {
    company: "FinTech Inovações",
    position: "Engenheiro de Software",
    period: "2018 - 2021",
    description:
      "Trabalhei no desenvolvimento de soluções financeiras para automatização de processos bancários e sistemas de pagamento.",
    responsibilities: [
      "Desenvolvimento de sistema de conciliação bancária processando 100.000+ transações/dia",
      "Implementação de gateway de pagamento com integração a múltiplos adquirentes",
      "Criação de dashboard para análise de dados financeiros em tempo real",
      "Implementação de testes automatizados, aumentando a cobertura para 90%",
    ],
    technologies: ["Java", "Spring Boot", "MySQL", "RabbitMQ", "Docker", "Jenkins"],
    logo: "/placeholder.svg?height=200&width=200&text=FT",
  },
  {
    company: "Retail Systems",
    position: "Desenvolvedor Backend",
    period: "2016 - 2018",
    description:
      "Participei do desenvolvimento de sistemas de gestão para o setor de varejo, com foco em controle de estoque e vendas.",
    responsibilities: [
      "Desenvolvimento de módulos para ERP proprietário utilizado por 50+ lojas",
      "Implementação de integração com e-commerce e marketplaces",
      "Automação de relatórios de vendas diários com Python e Excel",
      "Migração de sistema legado para arquitetura moderna baseada em APIs",
    ],
    technologies: ["C#", ".NET", "SQL Server", "Python", "Azure"],
    logo: "/placeholder.svg?height=200&width=200&text=RS",
  },
]

export function Experience() {
  return (
    <section id="experience" className="py-10 pt-20">
      <div className="flex items-center gap-3 mb-6">
        <Briefcase className="h-6 w-6 text-blue-400" />
        <h2 className="text-3xl font-bold text-white">Experiência Profissional</h2>
      </div>

      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <div key={index} className="bg-gray-800 border border-gray-700 rounded-lg overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-0">
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 flex items-center justify-center">
                <img src={exp.logo || "/placeholder.svg"} alt={exp.company} className="w-24 h-24 rounded-full" />
              </div>
              <div className="md:col-span-3 p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white">{exp.position}</h3>
                    <p className="text-lg font-medium text-gray-400 mt-1">{exp.company}</p>
                  </div>
                  <div className="flex items-center gap-1 text-gray-400">
                    <Calendar className="h-4 w-4" />
                    <span>{exp.period}</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <p className="text-gray-300">{exp.description}</p>

                  <div>
                    <h4 className="font-medium mb-2 text-white">Responsabilidades:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-400">
                      {exp.responsibilities.map((resp, i) => (
                        <li key={i}>{resp}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-medium mb-2 text-white">Tecnologias:</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 bg-gray-700 text-gray-300 border border-gray-600 rounded text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
