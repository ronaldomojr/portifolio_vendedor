"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const stats = [
  { value: "+30%", label: "Ganho de conversão no funil" },
  { value: "R$30k+", label: "Ticket das contas que qualifico" },
  { value: "100%", label: "Cobertura de follow-up" },
];

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Parallax layers
  const yPhoto = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const yText = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const yGrid = useTransform(scrollYProgress, [0, 1], [0, 200]);

  return (
    <section
      id="top"
      ref={ref}
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      {/* Background layers */}
      <motion.div
        style={{ y: yGrid }}
        className="grid-bg absolute inset-0 -z-20 opacity-60"
      />
      <div className="absolute -right-40 top-0 -z-10 h-[600px] w-[600px] rounded-full bg-brand/20 blur-[140px]" />
      <div className="absolute -left-40 bottom-0 -z-10 h-[500px] w-[500px] rounded-full bg-brand/10 blur-[120px]" />

      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 px-6 pt-28 pb-16 md:grid-cols-[1.1fr_0.9fr] md:pt-20">
        {/* Text */}
        <motion.div style={{ y: yText, opacity }}>
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-brand/40 bg-brand/10 px-4 py-1.5 text-xs font-medium tracking-wide text-brand-bright"
          >
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-brand-bright" />
            Aberto a novas oportunidades em vendas
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08 }}
            className="mt-6 text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl"
          >
            Ronaldo <span className="text-gradient">Medeiros</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.16 }}
            className="mt-4 max-w-xl text-lg leading-relaxed text-muted"
          >
            Consultor de vendas com foco em negociações de alto valor. Trabalho a
            venda como uma conversa: entendo a necessidade do cliente, respondo
            objeções com clareza e conduzo o negócio até o fechamento — apoiado em
            um processo organizado de prospecção e follow-up.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.24 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <a
              href="#contato"
              className="group rounded-full bg-brand px-7 py-3.5 text-sm font-semibold text-white transition-all hover:bg-brand-bright hover:shadow-xl hover:shadow-brand/40"
            >
              Vamos conversar
              <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">
                →
              </span>
            </a>
            <a
              href="#projetos"
              className="rounded-full border border-white/15 px-7 py-3.5 text-sm font-semibold text-foreground transition-all hover:border-white/40 hover:bg-white/5"
            >
              Ver meu trabalho
            </a>
          </motion.div>

          {/* Quick stats */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.32 }}
            className="mt-12 grid max-w-md grid-cols-3 gap-4"
          >
            {stats.map((s) => (
              <div key={s.label}>
                <div className="text-2xl font-bold text-brand-bright sm:text-3xl">
                  {s.value}
                </div>
                <div className="mt-1 text-xs leading-snug text-muted">
                  {s.label}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Photo */}
        <motion.div
          style={{ y: yPhoto }}
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-sm"
        >
          <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-tr from-brand/40 to-transparent blur-2xl" />
          <div className="glow-red overflow-hidden rounded-[1.75rem] border border-white/10">
            <Image
              src="/images/ronaldo-hero.jpeg"
              alt="Ronaldo Medeiros — Consultor de Vendas"
              width={500}
              height={720}
              priority
              className="h-full w-full object-cover object-top"
            />
          </div>
          {/* Floating badge */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="glass absolute -bottom-5 -left-5 rounded-2xl px-5 py-3"
          >
            <div className="text-xs text-muted">Fundador</div>
            <div className="text-sm font-semibold">RMConnect</div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="glass absolute -right-4 top-8 rounded-2xl px-4 py-2.5"
          >
            <div className="text-xs text-muted">Foco</div>
            <div className="text-sm font-semibold text-brand-bright">
              Venda consultiva
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        style={{ opacity }}
        className="absolute bottom-7 left-1/2 -translate-x-1/2"
      >
        <div className="flex h-9 w-5 items-start justify-center rounded-full border border-white/20 p-1.5">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.6, repeat: Infinity }}
            className="h-1.5 w-1.5 rounded-full bg-brand-bright"
          />
        </div>
      </motion.div>
    </section>
  );
}
