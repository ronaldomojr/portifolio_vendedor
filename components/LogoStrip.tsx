import Image from "next/image";

const logos = [
  { src: "/logos/rmconnect.jpg", alt: "RMConnect" },
  { src: "/logos/ivbedtech.jpeg", alt: "IVB EdTech" },
  { src: "/logos/evolution.jpg", alt: "Evolution Store" },
];

function Track() {
  return (
    <ul className="flex shrink-0 items-center gap-6 px-3">
      {logos.map((logo, i) => (
        <li
          key={i}
          className="flex h-20 w-40 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white p-4 shadow-lg shadow-black/30 transition-transform hover:scale-105"
        >
          <Image
            src={logo.src}
            alt={logo.alt}
            width={160}
            height={80}
            className="max-h-12 w-auto object-contain"
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
      <div className="group relative flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
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
