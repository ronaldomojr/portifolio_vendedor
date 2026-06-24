import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-surface/40">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row">
        <div className="flex items-center gap-2.5">
          <Image
            src="/logo.png"
            alt="Logo Ronaldo Medeiros"
            width={32}
            height={32}
            className="h-8 w-8 object-contain"
          />
          <span className="text-sm text-muted">
            Ronaldo Medeiros — Consultor de Vendas
          </span>
        </div>
        <p className="text-xs text-muted">
          © {new Date().getFullYear()} · Vamos fechar negócio.
        </p>
      </div>
    </footer>
  );
}
