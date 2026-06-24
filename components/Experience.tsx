import Reveal from "./Reveal";
import { SectionHeader } from "./Section";

const jobs = [
  {
    role: "Diretor Comercial & Fundador",
    company: "RMConnect",
    period: "2022 — Presente",
    points: [
      "Cuido de todo o ciclo de vendas, da prospecção ao fechamento, incluindo contratos de maior valor.",
      "Negocio diretamente com donos de empresa e decisores dos setores de serviços e varejo.",
      "Montei um atendimento por WhatsApp que encurtou o tempo de venda e baixou o custo de aquisição de clientes.",
    ],
  },
  {
    role: "Inside Sales & Inteligência Comercial",
    company: "IVB EdTech",
    period: "2025 — 2026",
    points: [
      "Qualifiquei contas corporativas com faturamento a partir de R$ 30 mil, filtrando quem realmente tinha perfil de compra.",
      "Reorganizei a pré-venda no WhatsApp e o time passou a converter 30% melhor.",
      "Mantive o pipeline em dia, com follow-up de todos os contatos e nenhum cliente esquecido na base.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="trajetoria" className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
      <SectionHeader
        eyebrow="Trajetória"
        title={
          <>
            Onde aprendi a{" "}
            <span className="text-gradient">vender de verdade</span>
          </>
        }
        description="Do próprio negócio à operação de inside sales, sempre na linha de frente do cliente e da negociação."
      />

      <div className="relative">
        <div className="absolute left-0 top-2 hidden h-full w-px bg-gradient-to-b from-brand via-white/10 to-transparent sm:block" />
        <div className="flex flex-col gap-12">
          {jobs.map((job, i) => (
            <Reveal key={job.company} delay={i * 0.1}>
              <div className="relative sm:pl-12">
                <span className="absolute left-[-5px] top-1.5 hidden h-2.5 w-2.5 rounded-full bg-brand ring-4 ring-brand/20 sm:block" />
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-xl font-semibold">
                    {job.role}{" "}
                    <span className="text-brand-bright">· {job.company}</span>
                  </h3>
                  <span className="rounded-full border border-white/10 px-3 py-1 text-xs font-medium text-muted">
                    {job.period}
                  </span>
                </div>
                <ul className="mt-4 flex flex-col gap-2.5">
                  {job.points.map((p, j) => (
                    <li
                      key={j}
                      className="flex gap-3 text-sm leading-relaxed text-muted"
                    >
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brand-bright" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
