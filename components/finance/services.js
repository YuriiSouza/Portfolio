import {
  Stethoscope,
  Wallet,
  TrendingDown,
  PiggyBank,
  Target,
  GraduationCap,
  LineChart,
  RefreshCw,
  Cpu,
} from "lucide-react"

const services = [
  {
    icon: Stethoscope,
    title: "Diagnóstico financeiro completo",
    desc: "Uma visão clara e honesta da sua situação atual: para onde o dinheiro está indo e o que está travando seu crescimento.",
  },
  {
    icon: Wallet,
    title: "Organização do orçamento",
    desc: "Estruturação do orçamento pessoal e familiar para você saber exatamente quanto entra, quanto sai e quanto sobra.",
  },
  {
    icon: TrendingDown,
    title: "Eliminação de dívidas",
    desc: "Um plano prático e realista para sair das dívidas e parar de perder dinheiro com juros.",
  },
  {
    icon: PiggyBank,
    title: "Reserva de emergência",
    desc: "Construção de uma reserva sólida que te dá segurança e tranquilidade para imprevistos.",
  },
  {
    icon: Target,
    title: "Metas de curto, médio e longo prazo",
    desc: "Definição de objetivos claros e um caminho sustentável para alcançá-los.",
  },
  {
    icon: GraduationCap,
    title: "Educação financeira aplicada",
    desc: "Conceitos traduzidos para uma linguagem simples e prática, adaptada à sua realidade.",
  },
  {
    icon: LineChart,
    title: "Investimentos e patrimônio",
    desc: "Análise de investimentos alinhada aos seus objetivos para construir patrimônio com consistência.",
  },
  {
    icon: RefreshCw,
    title: "Acompanhamento contínuo",
    desc: "Monitoramento da evolução das suas finanças, ajustando o plano conforme a vida muda.",
  },
  {
    icon: Cpu,
    title: "Tecnologia e automação",
    desc: "Uso de tecnologia para simplificar o controle financeiro e tornar o acompanhamento sem esforço.",
  },
]

export function FinanceServices() {
  return (
    <section id="servicos" className="bg-slate-50 py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-emerald-700">
            Como posso ajudar
          </span>
          <h2 className="mt-3 text-3xl font-bold text-slate-900 md:text-4xl">
            Um plano completo para sua vida financeira
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Do diagnóstico ao acompanhamento, cada etapa é pensada para gerar
            resultados concretos no seu dia a dia.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div
              key={s.title}
              className="group rounded-2xl border border-slate-200 bg-white p-6 transition-all hover:border-emerald-200 hover:shadow-md"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700 transition-colors group-hover:bg-emerald-600 group-hover:text-white">
                <s.icon className="h-6 w-6" />
              </span>
              <h3 className="mt-5 text-lg font-semibold text-slate-900">
                {s.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
