"use client";

import CountUp from "react-countup";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const metrics = [
  {
    value: 30,
    suffix: "%",
    label: "A mais de conversão",
    sub: "foi o ganho de conversão que ajudei a entregar como consultor de vendas na IVB EdTech.",
  },
  {
    value: 100,
    suffix: "%",
    label: "Da base com follow-up",
    sub: "controlo o pipeline de perto para que nenhum cliente fique sem resposta.",
  },
  {
    value: 30,
    suffix: "k+",
    label: "Ticket que qualifico",
    sub: "atendimento de contas corporativas com faturamento a partir de R$ 30 mil.",
  },
  {
    value: 2022,
    suffix: "",
    label: "À frente da RMConnect",
    sub: "desde então respondo por toda a operação comercial da empresa.",
    plain: true,
  },
];

export default function Metrics() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [60, -60]);

  return (
    <section
      id="resultados"
      ref={ref}
      className="relative overflow-hidden border-y border-white/10 bg-surface/30 py-24 sm:py-28"
    >
      <motion.div
        style={{ y }}
        className="pointer-events-none absolute -right-20 top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-brand/10 blur-[120px]"
      />
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-14 flex items-center gap-3">
          <span className="h-px w-8 bg-brand" />
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-bright">
            Alguns números do meu trabalho
          </span>
        </div>

        <div className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <div className="text-5xl font-bold tracking-tight text-foreground sm:text-6xl">
                <CountUp
                  end={m.value}
                  duration={2.2}
                  separator=""
                  enableScrollSpy
                  scrollSpyOnce
                />
                <span className="text-brand-bright">{m.suffix}</span>
              </div>
              <div className="mt-3 text-base font-semibold">{m.label}</div>
              <p className="mt-1.5 text-sm leading-relaxed text-muted">
                {m.sub}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
