import { Database, ExternalLink, Github } from "lucide-react"

const projects = [
  {
    "name": "ERP + CRM Personalizado",
    "description": "Desenvolvimento e implementação de um sistema ERP (Enterprise Resource Planning) e CRM (Customer Relationship Management) completo, atendendo a 3 clientes com landing pages dedicadas. A solução integra gestão de usuários, pedidos e estoque, além de funcionalidades para o envio de pedidos e comunicação via WhatsApp API oficial. O projeto foca em otimizar operações, centralizar informações e aprimorar o relacionamento com o cliente.",
    "tech": ["Node.js", "Next.js", "NestJS", "Prisma", "Git", "MySQL", "WhatsApp API Oficial"],
    "highlights": [
      "Criação de soluções ERP e CRM escaláveis para múltiplos clientes.",
      "Desenvolvimento de landing pages personalizadas para captação e envio de pedidos.",
      "Implementação de funcionalidades de gestão de usuários, pedidos e estoque.",
      "Integração com WhatsApp API oficial para comunicação e automação de processos."
    ],
    "github": "https://github.com/YuriiSouza/pumock",
    "image": "/crm-image.png",
    "demo": null
  },
  {
    "name": "Portfolio",
    "description": "Plataforma de portfólio pessoal para exibição e compartilhamento organizado de projetos, artigos, pesquisas e ideias. Oferece uma interface intuitiva e profissional para destacar trabalhos e experiências.",
    "tech": ["JavaScript", "Git"],
    "highlights": [
      "Desenvolvido para organizar e profissionalizar a apresentação de projetos.",
      "Interface intuitiva para facilitar a exibição de trabalhos e experiências."
    ],
    "github": "https://github.com/YuriiSouza/Portfolio",
    "image": "/portfolio-image.png",
    "demo": "https://yuripeixoto.com"
  },
  {
    "name": "SeuInvestimento",
    "description": "Projeto que visa fornecer uma solução completa e acessível para melhorar a experiência de investimento dos usuários, capacitando-os a tomar decisões financeiras mais inteligentes. Oferece informações claras, orientação personalizada e acompanhamento detalhado da carteira de investimentos.",
    "tech": ["Git", "PostgreSQL", "Docker", "Prisma", "UI/UX", "Angular", "NestJS", "Gestão de Projetos", "CSS"],
    "highlights": [
      "Solução completa para otimizar a experiência do usuário com investimentos.",
      "Capacita usuários a tomar decisões financeiras inteligentes.",
      "Oferece orientação personalizada e acompanhamento detalhado de portfólio."
    ],
    "github": "https://github.com/YuriiSouza/seuinvestimento_frontend",
    "image": "/seuInvestimento-image.png",
    "demo": null
  },
  {
    "name": "E-commerce de Joias",
    "description": "Desenvolvimento completo de uma plataforma de e-commerce focada em joias, utilizando as últimas tecnologias para garantir uma experiência de usuário fluida e responsiva. O projeto inclui funcionalidades como catálogo de produtos, carrinho de compras, checkout e integração com sistemas de pagamento, com otimização para alta performance e SEO.",
    "tech": ["React", "Next.js", "Tailwind", "Context API", "API de pagamento"],
    "highlights": [
      "Criação de interface de usuário moderna e otimizada para e-commerce.",
      "Implementação de catálogo de produtos detalhado com funcionalidades de busca e filtro.",
      "Fluxo de carrinho de compras e checkout intuitivo e seguro.",
      "Foco em performance e SEO, essenciais para plataformas de vendas online."
    ],
    "github": "https://github.com/YuriiSouza/jackson_pratas",
    "image": "joias-image.jpeg",
    "demo": null
  },
  {
    "name": "Plataforma de Venda de Ebooks",
    "description": "Plataforma completa para comercialização de ebooks, integrando autenticação, pagamentos e área do cliente. Desenvolvida com foco em performance, segurança e usabilidade, oferecendo fluxo de checkout otimizado e desconto automático para pagamentos via PIX.",
    "tech": ["Next.js", "TypeScript", "Tailwind CSS", "NextAuth", "MongoDB", "Prisma", "Mercado Pago API"],
    "highlights": [
      "Autenticação com NextAuth (Google e Email/Password).",
      "Integração com Mercado Pago para PIX e cartão de crédito.",
      "Área do cliente com histórico de compras e downloads.",
      "Preenchimento automático de endereço via consulta de CEP.",
      "Arquitetura limpa e boas práticas de desenvolvimento."
    ],
    "github": "https://github.com/YuriiSouza/smartcash",
    "image": "smartcash-image.png",
    "demo": "https://smartcash-black.vercel.app"
  }
]



export function Projects() {
  return (
    <section id="projects" className="py-10 pt-20">
      <div className="flex items-center gap-3 mb-6">
        <Database className="h-6 w-6 text-blue-400" />
        <h2 className="text-3xl font-bold">Projetos Destacados</h2>
      </div>

      <div className="space-y-12">
        {projects.map((project, index) => (
          <div key={index} className="card border border-gray-700 rounded-lg overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
              <div className="h-64 md:h-auto">
                <img
                  src={project.image}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-bold mb-2">{project.name}</h3>
                  <p className="muted">{project.description}</p>
                </div>
                <div className="flex-grow">
                  <div className="mb-4">
                    <h4 className="text-sm font-medium mb-2 ">Tecnologias:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="techCard px-2 py-1 border border-gray-600 rounded text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium mb-2 ">Destaques:</h4>
                    <ul className="muted list-disc list-inside space-y-1">
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
                  {project.demo && 
                    <button className="flex items-center gap-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white border border-gray-600 rounded-lg transition-colors">
                      <ExternalLink className="h-4 w-4" />
                      Demo
                    </button>
                  }
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
