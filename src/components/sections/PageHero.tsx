import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { FloatingDecor } from "../ui/Decor";

type Props = {
  eyebrow: string;
  title: string;
  text?: string;
  breadcrumb?: string;
};

/** En-tête de page interne : fond crème, formes flottantes, fil d'Ariane. */
export default function PageHero({ eyebrow, title, text, breadcrumb }: Props) {
  return (
    <section className="relative overflow-hidden bg-cream pt-20 pb-28">
      {/* Formes de fond */}
      <div aria-hidden className="pointer-events-none absolute -left-24 -top-24 size-80 rounded-full bg-primary/10 blur-2xl" />
      <div aria-hidden className="pointer-events-none absolute -right-20 top-10 size-72 rounded-full bg-accent/15 blur-2xl" />
      <FloatingDecor src="/decor/el-9.svg" className="left-[6%] top-24 w-12 opacity-70" duration={8} />
      <FloatingDecor src="/decor/el-16.svg" className="right-[10%] top-16 w-14 opacity-70" duration={6} delay={0.6} />
      <FloatingDecor src="/decor/el-10.svg" className="bottom-14 left-[18%] w-10 opacity-60" duration={7} delay={1.2} />

      <div className="container-x relative text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-4 font-[var(--font-heading)] text-[15px] font-semibold uppercase tracking-[0.2em] text-primary"
        >
          {eyebrow}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="text-[42px] sm:text-[62px] lg:text-[78px]"
        >
          {title}
        </motion.h1>

        {text && (
          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.18 }}
            className="mx-auto mt-6 max-w-2xl text-[18px] leading-[1.75] text-ink/75"
          >
            {text}
          </motion.p>
        )}

        <motion.nav
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          aria-label="Fil d'Ariane"
          className="mt-8 flex items-center justify-center gap-2 font-[var(--font-heading)] text-[15px] text-tertiary"
        >
          <Link to="/" className="transition-colors hover:text-primary">Accueil</Link>
          <span className="text-primary">/</span>
          <span className="text-secondary">{breadcrumb ?? title}</span>
        </motion.nav>
      </div>

      {/* Vague de séparation */}
      <div aria-hidden className="wave-bottom absolute inset-x-0 bottom-0 h-16 bg-white" />
    </section>
  );
}
