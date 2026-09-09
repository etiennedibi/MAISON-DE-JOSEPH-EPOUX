import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

export type AccordionItem = { q: string; a: string };

type Props = {
  items: AccordionItem[];
  defaultOpen?: number | null;
  className?: string;
};

/** Accordéon animé (hauteur + fondu), un seul panneau ouvert à la fois. */
export default function Accordion({ items, defaultOpen = 0, className = "" }: Props) {
  const [open, setOpen] = useState<number | null>(defaultOpen);

  return (
    <div className={["flex flex-col gap-4", className].join(" ")}>
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div
            key={item.q}
            className={[
              "overflow-hidden rounded-[26px] border-2 transition-colors duration-300",
              isOpen ? "border-primary bg-primary-soft" : "border-line bg-white hover:border-primary/40",
            ].join(" ")}
          >
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left sm:px-8 sm:py-6"
            >
              <span className="font-[var(--font-heading)] text-[18px] font-semibold text-secondary sm:text-[21px]">
                {item.q}
              </span>
              <span
                className={[
                  "grid size-9 shrink-0 place-items-center rounded-full transition-all duration-300",
                  isOpen ? "rotate-45 bg-primary text-white" : "bg-cream text-secondary",
                ].join(" ")}
                aria-hidden
              >
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                  <path d="M7.5 1v13M1 7.5h13" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
                </svg>
              </span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
                >
                  <p className="px-6 pb-6 text-[16px] leading-[1.75] text-ink/80 sm:px-8 sm:pb-8">
                    {item.a}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
