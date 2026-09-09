import type { ReactNode } from "react";
import Reveal from "./Reveal";

type Props = {
  eyebrow?: string;
  title: ReactNode;
  text?: ReactNode;
  align?: "left" | "center";
  light?: boolean;
  className?: string;
};

/**
 * Titre de section : sur-titre coloré, gros titre Fredoka, paragraphe.
 * Reprend la hiérarchie typographique du modèle.
 */
export default function SectionHeading({
  eyebrow,
  title,
  text,
  align = "center",
  light = false,
  className = "",
}: Props) {
  const centered = align === "center";
  return (
    <div
      className={[
        centered ? "mx-auto max-w-3xl text-center" : "max-w-2xl text-left",
        className,
      ].join(" ")}
    >
      {eyebrow && (
        <Reveal from="up">
          <p
            className={[
              "mb-4 font-[var(--font-heading)] text-[15px] font-semibold uppercase tracking-[0.18em]",
              light ? "text-sun" : "text-primary",
            ].join(" ")}
          >
            {eyebrow}
          </p>
        </Reveal>
      )}
      <Reveal from="up" delay={0.08}>
        <h2
          className={[
            "text-[32px] leading-[1.1] sm:text-[42px] lg:text-[52px]",
            light ? "text-white" : "text-secondary",
          ].join(" ")}
        >
          {title}
        </h2>
      </Reveal>
      {text && (
        <Reveal from="up" delay={0.16}>
          <p
            className={[
              "mt-5 text-[17px] leading-[1.75]",
              light ? "text-white/75" : "text-ink/75",
            ].join(" ")}
          >
            {text}
          </p>
        </Reveal>
      )}
    </div>
  );
}
