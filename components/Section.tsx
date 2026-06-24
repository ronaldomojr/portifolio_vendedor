import { ReactNode } from "react";
import Reveal from "./Reveal";

type SectionHeaderProps = {
  eyebrow: string;
  title: ReactNode;
  description?: string;
};

export function SectionHeader({
  eyebrow,
  title,
  description,
}: SectionHeaderProps) {
  return (
    <Reveal>
      <div className="mb-14 max-w-2xl">
        <div className="flex items-center gap-3">
          <span className="h-px w-8 bg-brand" />
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-bright">
            {eyebrow}
          </span>
        </div>
        <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
          {title}
        </h2>
        {description && (
          <p className="mt-4 text-base leading-relaxed text-muted">
            {description}
          </p>
        )}
      </div>
    </Reveal>
  );
}
