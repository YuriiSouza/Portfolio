const steps = [
  {
    number: "01",
    title: "Diagnóstico",
    desc: "Entendemos juntos sua situação atual, seus hábitos e seus objetivos. É aqui que descobrimos para onde o dinheiro está indo.",
  },
  {
    number: "02",
    title: "Plano de ação",
    desc: "Monto um plano claro e prático, priorizando as ações de maior impacto para você ver resultados rápidos.",
  },
  {
    number: "03",
    title: "Acompanhamento",
    desc: "Acompanho sua evolução de perto, ajustando a estratégia conforme a vida muda e mantendo você no rumo certo.",
  },
]

export function FinanceProcess() {
  return (
    <section id="como-funciona" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-emerald-700">
            Como funciona
          </span>
          <h2 className="mt-3 text-3xl font-bold text-slate-900 md:text-4xl">
            Simples, prático e do seu lado
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Um processo direto, sem complicação, pensado para gerar resultado
            desde o início.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          {steps.map((step) => (
            <div key={step.number} className="relative">
              <span className="text-5xl font-bold text-emerald-100">
                {step.number}
              </span>
              <h3 className="mt-2 text-xl font-semibold text-slate-900">
                {step.title}
              </h3>
              <p className="mt-3 leading-relaxed text-slate-600">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
