import { MessageCircle, Zap, BarChart3, ShieldCheck } from "lucide-react"
import { whatsappLink } from "@/lib/config"

const highlights = [
  { icon: Zap, label: "Resultados rápidos e práticos" },
  { icon: BarChart3, label: "Decisões baseadas em dados" },
  { icon: ShieldCheck, label: "Acompanhamento contínuo" },
]

export function FinanceHero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-gradient-to-b from-emerald-50 via-white to-white pt-28 pb-20"
    >
      <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-emerald-200/40 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-4">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-emerald-600/10 px-4 py-1.5 text-sm font-semibold text-emerald-700">
            Planejamento Financeiro Pessoal
          </span>
          <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-slate-900 md:text-5xl lg:text-6xl">
            Assuma o controle da sua{" "}
            <span className="text-emerald-600">vida financeira</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-slate-600 md:text-xl">
            Organizo suas finanças, elimino desperdícios e construo com você um
            plano claro para alcançar seus objetivos — com uma abordagem baseada
            em dados, planejamento e acompanhamento contínuo.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-7 py-3.5 text-base font-medium text-white shadow-lg shadow-emerald-600/25 transition-all hover:bg-emerald-700 hover:shadow-emerald-600/40"
            >
              <MessageCircle className="h-5 w-5" />
              Agendar uma conversa
            </a>
            <a
              href="#servicos"
              className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-7 py-3.5 text-base font-medium text-slate-700 transition-colors hover:border-slate-400 hover:bg-slate-50"
            >
              Como posso ajudar
            </a>
          </div>

          <div className="mt-12 flex flex-wrap gap-x-8 gap-y-4">
            {highlights.map((h) => (
              <div key={h.label} className="flex items-center gap-2.5">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-100 text-emerald-700">
                  <h.icon className="h-5 w-5" />
                </span>
                <span className="text-sm font-medium text-slate-700">
                  {h.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
