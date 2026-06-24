"use client";

import { motion } from "framer-motion";
import confetti from "canvas-confetti";

const contacts = [
  {
    label: "WhatsApp",
    value: "+55 24 99854-2327",
    href: "https://wa.me/5524998542327",
  },
  {
    label: "E-mail",
    value: "junioroliveira060@gmail.com",
    href: "mailto:junioroliveira060@gmail.com",
  },
  {
    label: "Telefone",
    value: "+55 24 99854-2327",
    href: "tel:+5524998542327",
  },
];

export default function Contact() {
  const fire = () => {
    confetti({
      particleCount: 120,
      spread: 75,
      origin: { y: 0.7 },
      colors: ["#cc0000", "#ff1e1e", "#ffffff"],
    });
  };

  return (
    <section
      id="contato"
      className="relative overflow-hidden px-6 py-28 sm:py-36"
    >
      <div className="grid-bg absolute inset-0 -z-20 opacity-40" />
      <div className="absolute left-1/2 top-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/15 blur-[140px]" />

      <div className="mx-auto max-w-3xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-brand/40 bg-brand/10 px-4 py-1.5 text-xs font-medium text-brand-bright">
            Vamos conversar
          </span>
          <h2 className="mt-6 text-3xl font-bold leading-tight tracking-tight sm:text-5xl">
            Topo o desafio de{" "}
            <span className="text-gradient">vender e fidelizar</span> na sua
            equipe
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted">
            Gosto de atender bem, fechar negócio e ver o cliente voltar. Se a sua
            equipe procura alguém para somar nas vendas, ficarei feliz em
            conversar e mostrar como posso ajudar.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="https://wa.me/5524998542327"
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={fire}
              className="rounded-full bg-brand px-8 py-4 text-sm font-semibold text-white transition-all hover:bg-brand-bright hover:shadow-xl hover:shadow-brand/40"
            >
              Chamar no WhatsApp
            </a>
            <a
              href="mailto:junioroliveira060@gmail.com"
              className="rounded-full border border-white/15 px-8 py-4 text-sm font-semibold transition-all hover:border-white/40 hover:bg-white/5"
            >
              Enviar e-mail
            </a>
          </div>
        </motion.div>

        <div className="mt-14 grid gap-4 sm:grid-cols-3">
          {contacts.map((c, i) => (
            <motion.a
              key={c.label}
              href={c.href}
              target={c.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl border border-white/10 bg-surface/50 p-5 text-left transition-all hover:border-brand/40 hover:bg-surface"
            >
              <div className="text-xs uppercase tracking-wider text-muted">
                {c.label}
              </div>
              <div className="mt-1.5 text-sm font-medium text-foreground">
                {c.value}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
