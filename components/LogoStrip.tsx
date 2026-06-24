import Image from "next/image";

const logos = [
  { src: "/logos/rmconnect.jpg", alt: "RMConnect" },
  { src: "/logos/ivbedtech.jpeg", alt: "IVB EdTech" },
  { src: "/logos/evolution.jpg", alt: "Evolution Store" },
];

function Track() {
  return (
    <ul className="flex shrink-0 items-center gap-5 px-2.5" aria-hidden="true">
      {logos.map((logo, i) => (
        <li
          key={i}
          className="h-24 w-24 shrink-0 overflow-hidden rounded-2xl border border-white/10 ring-1 ring-inset ring-white/5 transition-transform duration-300 hover:scale-105 hover:ring-brand/40"
        >
          <Image
            src={logo.src}
            alt={logo.alt}
            width={160}
            height={160}
            className="h-full w-full object-cover"
          />
        </li>
      ))}
    </ul>
  );
}

export default function LogoStrip() {
  return (
    <section className="border-y border-white/10 bg-surface/40 py-12">
      <p className="mb-8 text-center text-xs font-medium uppercase tracking-[0.2em] text-muted">
        Marcas e iniciativas onde construí resultados
      </p>
      <div className="group relative flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <div className="marquee flex items-center group-hover:[animation-play-state:paused]">
          <Track />
          <Track />
          <Track />
          <Track />
        </div>
      </div>
    </section>
  );
}
