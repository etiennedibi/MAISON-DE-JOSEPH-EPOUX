import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import PageHero from "../components/sections/PageHero";
import SectionHeading from "../components/ui/SectionHeading";
import Reveal, { Stagger, StaggerItem } from "../components/ui/Reveal";
import { ButtonLink } from "../components/ui/Button";
import { FloatingDecor } from "../components/ui/Decor";
import { ArrowRight, Clock } from "../components/ui/Icons";
import { ValuesBand, CtaSection, NewsletterSection, GallerySection } from "../components/sections/Shared";
import { activities, days, timetable } from "../data/site";

const byslug = Object.fromEntries(activities.map((a) => [a.slug, a]));

/* ------------------------------------------------------------
   Cartes des ateliers
   ------------------------------------------------------------ */
const details: Record<string, string> = {
  eveil: "Découverte sensorielle, langage et premiers apprentissages, en tout petit groupe.",
  psychomotricite: "Équilibre, coordination et schéma corporel, dans notre salle dédiée.",
  arts: "Dessin, peinture et modelage pour exprimer ce que les mots ne disent pas encore.",
  musique: "Rythme, chant et percussions : un formidable levier d'attention et de mémoire.",
  orthophonie: "Séances individuelles pour la parole, la déglutition et la communication alternative.",
  sport: "Jeux collectifs adaptés pour la confiance en soi et la vie de groupe.",
};

function ActivityCards() {
  return (
    <section className="relative overflow-hidden bg-white py-24 lg:py-28">
      <FloatingDecor src="/decor/el-9.svg" className="right-[5%] top-12 w-12 opacity-60" duration={8} />

      <div className="container-x">
        <SectionHeading
          eyebrow="Nos ateliers"
          title={<>Six ateliers, une même <span className="underline-sketch">exigence</span></>}
          text="Tous les ateliers sont conçus de manière ludique pour capter l'attention des enfants et respecter leur rythme."
        />

        <Stagger className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {activities.map((a) => (
            <StaggerItem key={a.slug}>
              <article className="group flex h-full flex-col overflow-hidden rounded-[30px] border-2 border-line bg-white transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_32px_64px_-34px_rgba(47,43,43,.5)]">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={a.img}
                    alt={a.title}
                    loading="lazy"
                    className="size-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <span
                    className="absolute left-4 top-4 rounded-full px-3.5 py-1.5 font-[var(--font-heading)] text-[12.5px] font-semibold uppercase tracking-wide text-white"
                    style={{ background: a.color }}
                  >
                    Atelier
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <h3 className="text-[22px] transition-colors duration-300 group-hover:text-primary">{a.title}</h3>
                  <p className="mt-3 flex-1 text-[15.5px] leading-[1.7] text-ink/70">{details[a.slug]}</p>
                  <p className="mt-5 flex items-center gap-2 font-[var(--font-heading)] text-[14.5px] font-medium text-tertiary">
                    <Clock className="size-4" />
                    {timetable.filter((t) => t.slug === a.slug).length} séances par semaine
                  </p>
                </div>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------
   Emploi du temps filtrable
   ------------------------------------------------------------ */
function Timetable() {
  const [filter, setFilter] = useState<string>("all");

  const rows = useMemo(
    () => (filter === "all" ? timetable : timetable.filter((t) => t.slug === filter)),
    [filter],
  );

  return (
    <section className="relative overflow-hidden bg-cream py-24 lg:py-32">
      <FloatingDecor src="/decor/el-16.svg" className="left-[5%] top-16 w-14 opacity-60" duration={7} />

      <div className="container-x">
        <SectionHeading
          eyebrow="Emploi du temps"
          title={<>La semaine <span className="underline-sketch">type</span></>}
          text="Du lundi au samedi, de 8h à 17h. Les créneaux sont ajustés au protocole de chaque enfant."
        />

        {/* Filtres */}
        <Reveal className="mt-12">
          <div className="flex flex-wrap justify-center gap-3">
            {[{ slug: "all", title: "Tout voir", color: "#2f2b2b" }, ...activities].map((a) => {
              const active = filter === a.slug;
              return (
                <button
                  key={a.slug}
                  type="button"
                  onClick={() => setFilter(a.slug)}
                  className={[
                    "relative isolate rounded-full px-5 py-2.5 font-[var(--font-heading)] text-[15px] font-semibold transition-colors duration-300",
                    active ? "text-white" : "text-secondary hover:text-primary",
                  ].join(" ")}
                >
                  {active ? (
                    <motion.span
                      layoutId="tt-pill"
                      className="absolute inset-0 -z-10 rounded-full"
                      style={{ background: a.color }}
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  ) : (
                    <span className="absolute inset-0 -z-10 rounded-full border-2 border-line bg-white" />
                  )}
                  {a.title}
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* Grille */}
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {days.map((day) => {
            const items = rows.filter((r) => r.day === day);
            return (
              <div key={day} className="flex flex-col">
                <div className="rounded-t-[24px] bg-secondary px-5 py-4 text-center">
                  <h3 className="font-[var(--font-heading)] text-[17px] font-semibold text-white">{day}</h3>
                </div>
                <div className="flex flex-1 flex-col gap-3 rounded-b-[24px] bg-white p-3">
                  <AnimatePresence mode="popLayout">
                    {items.length === 0 && (
                      <motion.p
                        key={`${day}-empty`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="py-8 text-center font-[var(--font-heading)] text-[14.5px] text-tertiary"
                      >
                        Aucune séance
                      </motion.p>
                    )}
                    {items.map((it) => {
                      const a = byslug[it.slug];
                      return (
                        <motion.div
                          key={`${day}-${it.slug}-${it.start}`}
                          layout
                          initial={{ opacity: 0, scale: 0.92, y: 12 }}
                          animate={{ opacity: 1, scale: 1, y: 0 }}
                          exit={{ opacity: 0, scale: 0.92 }}
                          transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                          className="group cursor-default rounded-[18px] p-4 transition-all duration-400 hover:-translate-y-1"
                          style={{ background: `${a.color}1a` }}
                        >
                          <span
                            className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 font-[var(--font-heading)] text-[12px] font-semibold text-white"
                            style={{ background: a.color }}
                          >
                            <Clock className="size-3" />
                            {it.start} – {it.end}
                          </span>
                          <p className="mt-2.5 font-[var(--font-heading)] text-[16px] font-semibold text-secondary">
                            {a.title}
                          </p>
                          <p className="mt-1 text-[13.5px] text-ink/60">{it.room}</p>
                        </motion.div>
                      );
                    })}
                  </AnimatePresence>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------
   Inscription
   ------------------------------------------------------------ */
function Enroll() {
  return (
    <section className="relative overflow-hidden bg-white py-24 lg:py-28">
      <div className="container-x">
        <Reveal>
          <div className="relative overflow-hidden rounded-[40px] bg-secondary px-8 py-14 sm:px-14 lg:px-16 lg:py-20">
            <div aria-hidden className="pointer-events-none absolute -right-20 -top-20 size-80 rounded-full bg-primary/25 blur-3xl" />
            <FloatingDecor src="/decor/el-10.svg" className="left-[6%] bottom-8 w-11 opacity-15 brightness-0 invert" duration={8} />

            <div className="relative grid items-center gap-10 lg:grid-cols-[1.2fr_1fr]">
              <div>
                <p className="font-[var(--font-heading)] text-[15px] font-semibold uppercase tracking-[0.2em] text-sun">
                  Inscriptions ouvertes
                </p>
                <h2 className="mt-4 text-[32px] text-white sm:text-[44px]">
                  Rejoignez nos ateliers dès maintenant
                </h2>
                <p className="mt-5 max-w-lg text-[17px] leading-[1.75] text-white/70">
                  Laissez-nous vos coordonnées : nous vous rappelons sous 48 h pour un
                  premier rendez-vous d'évaluation, gratuit et sans engagement.
                </p>
              </div>
              <div className="flex flex-wrap gap-4 lg:justify-end">
                <ButtonLink to="/contact" variant="primary" size="lg">
                  Inscrire mon enfant <ArrowRight className="size-4" />
                </ButtonLink>
                <ButtonLink to="/contact" variant="white" size="lg">
                  Poser une question
                </ButtonLink>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------
   Page
   ------------------------------------------------------------ */
export default function Activities() {
  return (
    <>
      <PageHero
        eyebrow="Activités"
        title="Nos activités"
        text="Tous les ateliers de MAIJE sont organisés de façon ludique pour engager les enfants et éveiller leur curiosité."
        breadcrumb="Activités"
      />
      <ActivityCards />
      <ValuesBand />
      <Timetable />
      <Enroll />
      <CtaSection
        title="Un atelier vous intéresse ?"
        text="Nous étudions chaque demande individuellement et adaptons les créneaux au rythme de l'enfant."
      />
      <NewsletterSection />
      <GallerySection />
    </>
  );
}
