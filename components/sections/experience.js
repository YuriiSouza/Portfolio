import { Briefcase, Calendar } from "lucide-react"

const experiences = [
  {
    company: "Shopee Express Brasil",
    position: "Analista de Transporte e Dados Operacionais",
    period: "2024 - Presente",
    description:
      "Responsável pela análise e gestão operacional da malha logística de última milha, atuando diretamente no monitoramento de indicadores, gestão de motoristas parceiros, otimização de processos e desenvolvimento de soluções baseadas em dados para aumentar a eficiência operacional. Atuo na identificação de gargalos logísticos, análise de desempenho de motoristas, gestão de capacidade operacional e elaboração de planos de ação orientados por indicadores, contribuindo para a melhoria contínua da operação e redução de falhas nas entregas.",
    responsibilities: [
      "Monitoramento e análise de indicadores operacionais (KPIs) relacionados à distribuição e entrega de encomendas.",
      "Gestão e acompanhamento da convocação de motoristas parceiros para atendimento da demanda operacional.",
      "Desenvolvimento de dashboards, relatórios e análises para suporte à tomada de decisão.",
      "Investigação de causas-raiz utilizando metodologias estruturadas para redução de falhas operacionais.",
      "Planejamento e execução de ações para melhoria da aderência de rotas e redução de no-shows.",
      "Automação de processos operacionais utilizando ferramentas de análise de dados.",
      "Análise de produtividade, desempenho e eficiência de motoristas e regiões operacionais.",
      "Apoio à liderança na definição de estratégias operacionais baseadas em dados.",
      "Criação de controles operacionais e sistemas internos para aumento da produtividade da equipe."
    ],
    technologies: ["Python", "SQL", "PostgreSQL", "Google Sheets", "Power BI", "Looker Studio", "Git", "Docker", "Linux", "Análise de Dados", "Business Intelligence (BI)", "Gestão de Indicadores"],
    logo: "/shopee.png",
  },
  {
    company: "ReGra Logística em Distribuição Ltda.",
    position: "Analista de dados",
    period: "2023 - Presente",
    description: "Realizo o desenvolvimento de ferramentas de gestão empresarial e automação de processos, **especializado em otimização logística através de análise detalhada de dados operacionais**. Meu foco é **reduzir custos e aumentar a lucratividade**, aplicando tecnologias de ponta para eficiência e tomada de decisões estratégicas.",
    responsibilities: [
      "Otimização de consultas SQL complexas, melhorando performance em 60%",
      "**Elaboração de planos de ação baseados em dados operacionais para otimizar processos logísticos.**"
    ],
    technologies: ["Python", "PostgreSQL", "Power"],
    logo: "/logo-Ambev.png",
  },
  {
    company: "Fábrica de Tecnologias Turing (FTT) - UniEVANGÉLICA",
    position: "Engenheiro de Software",
    period: "2021 - 2023",
    description:
      "Trabalhei no desenvolvimento de soluções de gestão para uma clinica veterinária",
    responsibilities: [
      "**Desenvolvimento e implementação de uma API RESTful para o gerenciamento completo de clínica veterinária.**",
      "Engenharia e modelagem de dados para armazenamento eficiente de informações de pacientes, agendamentos, estoque de medicamentos e transações financeiras.",
      "Criação de endpoints para manipulação de dados de clientes, animais, serviços, produtos e agendamentos.",
      "Integração com sistemas de terceiros para funcionalidades específicas, como envio de notificações.",
      "Implementação de lógica de negócios robusta para processamento de consultas, vacinações e vendas.",
      "Otimização de performance do banco de dados para garantir respostas rápidas e escalabilidade."
  ],
    technologies: [ "**Node.js**",
    "**MongoDB**", "Nest.js", "Prisma", "Redis", "Postman/Insomnia","Git"],
    logo: "/logo-ftt.png",
  },
]

export function Experience() {
  return (
    <section id="experience" className="py-10 pt-20">
      <div className="flex items-center gap-3 mb-6">
        <Briefcase className="h-6 w-6 text-blue-400" />
        <h2 className="text-3xl font-bold">Experiência Profissional</h2>
      </div>

      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <div key={index} className="card border border-gray-700 rounded-lg overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-0">
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 flex items-center justify-center">
                {exp.logo ? (
                  <img src={exp.logo} alt={exp.company} className="w-24 h-24 rounded-full" />
                ) : (
                  <div className="w-24 h-24 rounded-full bg-blue-600/20 border border-blue-600/30 flex items-center justify-center">
                    <span className="text-3xl font-bold text-blue-300">
                      {exp.company.charAt(0)}
                    </span>
                  </div>
                )}
              </div>
              <div className="md:col-span-3 p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold ">{exp.position}</h3>
                    <p className="text-lg font-medium muted mt-1">{exp.company}</p>
                  </div>
                  <div className="flex items-center gap-1 muted">
                    <Calendar className="h-4 w-4" />
                    <span>{exp.period}</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <p className="">{exp.description}</p>

                  <div>
                    <h4 className="font-medium mb-2">Responsabilidades:</h4>
                    <ul className="list-disc list-inside space-y-1">
                      {exp.responsibilities.map((resp, i) => (
                        <li key={i}>{resp}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-medium mb-2">Tecnologias:</h4>
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
