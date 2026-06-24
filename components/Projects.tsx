"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const projects = [
  {
    name: "Pré-vendedor digital",
    org: "IVB EdTech",
    logo: "/logos/ivbedtech.jpeg",
    concept:
      "Um atendimento no WhatsApp para fazer o primeiro contato com quem chega interessado, antes do vendedor entrar na conversa.",
    impact:
      "Ele faz as perguntas iniciais, separa quem tem perfil de compra e me entrega o cliente já com o contexto na mão. O cliente não espera para ser atendido e eu chego na conversa pronto para fechar.",
    tags: ["Qualificação", "Atendimento", "Agendamento"],
  },
  {
    name: "Loja de informática",
    org: "E-commerce próprio",
    logo: "/logos/rmconnect.jpg",
    concept:
      "Minha própria loja de hardware e periféricos, do anúncio ao pós-venda.",
    impact:
      "Aprendi na prática a precificar para vender, montar ofertas que convertem, tirar dúvidas técnicas no chat e cuidar do pós-venda para o cliente voltar a comprar e indicar.",
    tags: ["Precificação", "Atendimento técnico", "Pós-venda"],
  },
  {
    name: "Evolution Store",
    org: "Vendas pelo chat",
    logo: "/logos/evolution.jpg",
    concept:
      "Uma forma de vender em que o cliente vê o produto e fecha a compra ali mesmo, na conversa.",
    impact:
      "Tirei do caminho os passos que faziam o cliente desistir. Quanto menos barreira entre o interesse e o pagamento, mais gente conclui a compra.",
    tags: ["Jornada de compra", "Menos atrito", "Conversão"],
  },
];

export default function Projects() {
  return (
    <section
      id="projetos"
      className="border-y border-white/10 bg-surface/30 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-14 max-w-2xl">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-brand" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-bright">
              Projetos de vendas & conversão
            </span>
          </div>
          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Coisas que construí para{" "}
            <span className="text-gradient">vender melhor</span>
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {projects.map((p, i) => (
            <motion.article
              key={p.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="group flex flex-col rounded-2xl border border-white/10 bg-background p-7 transition-colors hover:border-brand/40"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-white/5">
                  <Image
                    src={p.logo}
                    alt={p.org}
                    width={48}
                    height={48}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-semibold leading-tight">{p.name}</h3>
                  <p className="text-xs text-muted">{p.org}</p>
                </div>
              </div>

              <p className="mt-5 text-sm leading-relaxed text-foreground/90">
                {p.concept}
              </p>
              <div className="mt-4 rounded-xl border border-brand/20 bg-brand/5 p-4">
                <span className="text-[0.7rem] font-semibold uppercase tracking-wider text-brand-bright">
                  Impacto comercial
                </span>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">
                  {p.impact}
                </p>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-white/10 px-3 py-1 text-xs text-muted"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
