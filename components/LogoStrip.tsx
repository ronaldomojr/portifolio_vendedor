import Image from "next/image";

const logos = [
  { src: "/logos/rmconnect.jpg", alt: "RMConnect" },
  { src: "/logos/ivbedtech.jpeg", alt: "IVB EdTech" },
  { src: "/logos/evolution.jpg", alt: "Evolution Store" },
];

export default function LogoStrip() {
  const row = [...logos, ...logos, ...logos, ...logos];

  return (
    <section className="border-y border-white/10 bg-surface/40 py-10">
      <p className="mb-7 text-center text-xs font-medium uppercase tracking-[0.2em] text-muted">
        Marcas e iniciativas onde construí resultados
      </p>
      <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
        <div className="flex w-max animate-marquee items-center gap-16 pr-16">
          {row.map((logo, i) => (
            <div
              key={i}
              className="flex h-14 w-32 shrink-0 items-center justify-center grayscale transition hover:grayscale-0"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={128}
                height={56}
                className="max-h-14 w-auto object-contain opacity-80"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
