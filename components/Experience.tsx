import Reveal from "./Reveal";
import { SectionHeader } from "./Section";

type Job = {
  role: string;
  company: string;
  period: string;
  points: string[];
  letter?: { href: string; label: string };
};

const jobs: Job[] = [
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
    role: "Consultor de Vendas",
    company: "IVB EdTech",
    period: "2025 — 2026",
    points: [
      "Vendi agentes de IA, um produto de ticket alto, prospectando ativamente novos clientes por telemarketing.",
      "Qualifiquei contas corporativas com faturamento a partir de R$ 30 mil, focando energia em quem realmente tinha perfil de compra.",
      "Conduzi o atendimento do primeiro contato ao fechamento, com follow-up de todos os contatos e nenhum cliente esquecido na base.",
    ],
    letter: {
      href: "/carta-recomendacao-ivb.pdf",
      label: "Carta de recomendação",
    },
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
                {job.letter && (
                  <a
                    href={job.letter.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/btn mt-5 inline-flex items-center gap-2 rounded-full border border-brand/40 bg-brand/10 px-4 py-2 text-sm font-medium text-brand-bright transition-all hover:bg-brand hover:text-white"
                  >
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <rect x="5" y="3" width="14" height="18" rx="2" />
                      <path d="M9 8h6M9 12h6M9 16h4" />
                    </svg>
                    {job.letter.label}
                    <span className="transition-transform group-hover/btn:translate-x-0.5">
                      ↗
                    </span>
                  </a>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
