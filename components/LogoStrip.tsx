import Image from "next/image";

const logos = [
  { src: "/logos/rmconnect.jpg", alt: "RMConnect" },
  { src: "/logos/ivbedtech.jpeg", alt: "IVB EdTech" },
  { src: "/logos/evolution.jpg", alt: "Evolution Store" },
];

// Repete as logos o suficiente para um grupo ficar mais largo que qualquer
// tela — assim o loop translateX(-50%) emenda sem deixar espaço vazio.
const REPEAT = 8;
const groupLogos = Array.from({ length: REPEAT }).flatMap(() => logos);

function Group() {
  return (
    <div className="flex shrink-0 items-center" aria-hidden="true">
      {groupLogos.map((logo, i) => (
        <div
          key={i}
          className="mr-5 h-24 w-24 shrink-0 overflow-hidden rounded-2xl border border-white/10 ring-1 ring-inset ring-white/5"
        >
          <Image
            src={logo.src}
            alt={logo.alt}
            width={160}
            height={160}
            className="h-full w-full object-cover"
          />
        </div>
      ))}
    </div>
  );
}

export default function LogoStrip() {
  return (
    <section className="border-y border-white/10 bg-surface/40 py-12">
      <p className="mb-8 text-center text-xs font-medium uppercase tracking-[0.2em] text-muted">
        Marcas e iniciativas onde construí resultados
      </p>
      <div className="group relative flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <div className="marquee flex w-max group-hover:[animation-play-state:paused]">
          <Group />
          <Group />
        </div>
      </div>
    </section>
  );
}
