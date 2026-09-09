import { Link } from "react-router-dom";

/**
 * Logo MAIJE : une "maison" arrondie qui abrite trois enfants,
 * accompagnée du sigle et du nom complet.
 */
export default function Logo({
  light = false,
  className = "",
}: {
  light?: boolean;
  className?: string;
}) {
  return (
    <Link
      to="/"
      aria-label="MAIJE — Maison de Joseph Epoux, accueil"
      className={["group flex items-center gap-3", className].join(" ")}
    >
      <span className="relative grid size-12 shrink-0 place-items-center rounded-[16px] bg-primary transition-transform duration-500 group-hover:rotate-[-8deg]">
        <svg viewBox="0 0 32 32" className="size-7 text-white" fill="none" aria-hidden>
          <path
            d="M4 14.6 16 5l12 9.6"
            stroke="currentColor"
            strokeWidth="2.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6.6 14.2V25a2 2 0 0 0 2 2h14.8a2 2 0 0 0 2-2V14.2"
            stroke="currentColor"
            strokeWidth="2.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="12" cy="20.4" r="1.9" fill="currentColor" />
          <circle cx="20" cy="20.4" r="1.9" fill="currentColor" />
        </svg>
        <span className="absolute -right-1.5 -top-1.5 size-3.5 rounded-full bg-sun transition-transform duration-500 group-hover:scale-125" />
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={[
            "font-[var(--font-display)] text-[24px] tracking-tight",
            light ? "text-white" : "text-secondary",
          ].join(" ")}
        >
          MAIJE
        </span>
        <span
          className={[
            "mt-1 hidden font-[var(--font-heading)] text-[10.5px] font-medium whitespace-nowrap uppercase tracking-[0.14em] min-[420px]:block",
            light ? "text-white/60" : "text-tertiary",
          ].join(" ")}
        >
          Maison de Joseph Epoux
        </span>
      </span>
    </Link>
  );
}
