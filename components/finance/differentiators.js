import { Zap, BarChart3, MessageSquare, Layers } from "lucide-react"

const items = [
  {
    icon: Zap,
    title: "Resultados rápidos e práticos",
    desc: "Foco em ações que fazem diferença logo nos primeiros passos — nada de teoria distante da sua realidade.",
  },
  {
    icon: BarChart3,
    title: "Decisões baseadas em dados",
    desc: "Em vez de olhar só o saldo bancário, analiso os indicadores por trás dos resultados, como uma empresa faz.",
  },
  {
    icon: MessageSquare,
    title: "Linguagem simples e clara",
    desc: "Traduzo conceitos financeiros complexos para que você entenda sua situação e saiba exatamente o que fazer.",
  },
  {
    icon: Layers,
    title: "Visão sistêmica e única",
    desc: "Gestão de dados, tecnologia e finanças reunidas em um só profissional, identificando a causa-raiz dos problemas.",
  },
]

export function FinanceDifferentiators() {
  return (
    <section id="diferenciais" className="bg-slate-900 py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-emerald-400">
            Por que comigo
          </span>
          <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">
            Mais do que números, uma estratégia
          </h2>
          <p className="mt-4 text-lg text-slate-300">
            Meu objetivo não é apenas organizar planilhas, mas ajudar você a
            desenvolver inteligência financeira para uma vida com mais segurança e
            liberdade.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {items.map((item) => (
            <div
              key={item.title}
              className="flex gap-5 rounded-2xl border border-slate-800 bg-slate-800/50 p-6"
            >
              <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-emerald-600 text-white">
                <item.icon className="h-6 w-6" />
              </span>
              <div>
                <h3 className="text-lg font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
