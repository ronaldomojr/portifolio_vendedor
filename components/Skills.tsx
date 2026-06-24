import Reveal from "./Reveal";
import { SectionHeader } from "./Section";

const categories = [
  {
    title: "Técnicas de Vendas",
    items: [
      "Venda Consultiva",
      "Fechamento (Closing)",
      "Contorno de Objeções",
      "Spin Selling",
      "Sondagem Rápida",
      "Gatilhos de Urgência & Exclusividade",
    ],
  },
  {
    title: "Gestão de CRM & Funil",
    items: [
      "Qualificação de Leads (BANT/PQL)",
      "Gestão de Pipeline",
      "Follow-up Cirúrgico",
      "Trello CRM",
      "Recuperação de inativos/perdidos",
    ],
  },
  {
    title: "Tecnologia Comercial",
    items: [
      "Automação de pré-venda (n8n)",
      "WhatsApp Business Avançado",
      "Evolution API",
      "Dashboards de Meta",
    ],
  },
  {
    title: "Perfil Comportamental",
    items: [
      "Altíssima energia",
      "Foco agressivo em resultados",
      "Escuta ativa",
      "Poder de persuasão",
      "Resiliência à rejeição",
      "Tradução de fichas técnicas",
    ],
  },
];

const education = [
  {
    title: "Bacharelado em Sistemas de Informação",
    place: "UniFOA · Em andamento",
    text: "Ajuda no raciocínio lógico e na facilidade de entender produtos com bastante tecnologia, além de manter a carteira de clientes bem organizada.",
  },
  {
    title: "Técnico em Administração e Informática",
    place: "Formação técnica",
    text: "Boa base em matemática financeira: financiamento, cálculo de taxas e margem de negociação na hora de fechar.",
  },
];

export default function Skills() {
  return (
    <section id="competencias" className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
      <SectionHeader
        eyebrow="Competências"
        title={
          <>
            O que eu levo para a{" "}
            <span className="text-gradient">mesa de venda</span>
          </>
        }
        description="Técnica de vendas no dia a dia, somada a uma base que mantém a carteira organizada e dá agilidade em cada negociação."
      />

      <div className="grid gap-5 sm:grid-cols-2">
        {categories.map((cat, i) => (
          <Reveal key={cat.title} delay={i * 0.08}>
            <div className="h-full rounded-2xl border border-white/10 bg-surface/50 p-7">
              <h3 className="mb-4 flex items-center gap-2 text-base font-semibold">
                <span className="h-1.5 w-1.5 rounded-full bg-brand" />
                {cat.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-1.5 text-sm text-foreground/90 transition-colors hover:border-brand/40 hover:text-brand-bright"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      {/* Formação */}
      <div className="mt-16">
        <Reveal>
          <h3 className="mb-6 text-lg font-semibold text-muted">
            Formação & base aplicada
          </h3>
        </Reveal>
        <div className="grid gap-5 sm:grid-cols-2">
          {education.map((e, i) => (
            <Reveal key={e.title} delay={i * 0.08}>
              <div className="h-full rounded-2xl border border-white/10 bg-surface/50 p-6">
                <h4 className="font-semibold">{e.title}</h4>
                <p className="mt-1 text-xs font-medium text-brand-bright">
                  {e.place}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {e.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
