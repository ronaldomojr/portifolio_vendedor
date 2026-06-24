import Reveal from "./Reveal";
import { SectionHeader } from "./Section";

const pillars = [
  {
    title: "Entender antes de oferecer",
    text: "Toda venda começa com boas perguntas. Identifico o perfil do cliente, o que ele realmente precisa e em que momento de decisão está antes de apresentar qualquer proposta.",
  },
  {
    title: "Explicar de forma simples",
    text: "Sei traduzir ficha técnica e financiamento em uma linguagem que o cliente entende. Quando ele compreende o que está comprando, decide com mais segurança.",
  },
  {
    title: "Conduzir até o fechamento",
    text: "Lido bem com objeções de preço e condições. Em vez de empurrar, mostro o caminho — e acompanho a negociação do primeiro contato até a assinatura.",
  },
  {
    title: "Organização que sustenta o resultado",
    text: "Uso CRM e automação para manter a carteira em ordem e nenhum cliente sem retorno. A tecnologia cuida do processo; eu cuido do relacionamento.",
  },
];

export default function About() {
  return (
    <section id="sobre" className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
      <SectionHeader
        eyebrow="Quem sou"
        title={
          <>
            Vender é <span className="text-gradient">ouvir e resolver</span>
          </>
        }
        description="Sou consultor de vendas e gosto de negociações em que o cliente sai seguro da decisão que tomou. Tenho facilidade de comunicação, paciência para entender cada caso e uma base técnica em CRM e automação que me ajuda a manter a carteira organizada e a não perder oportunidade nenhuma pelo caminho."
      />

      <div className="grid gap-5 sm:grid-cols-2">
        {pillars.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.08}>
            <div className="group h-full rounded-2xl border border-white/10 bg-surface/50 p-7 transition-all hover:border-brand/40 hover:bg-surface">
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand/15 text-sm font-bold text-brand-bright">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-lg font-semibold">{p.title}</h3>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {p.text}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
