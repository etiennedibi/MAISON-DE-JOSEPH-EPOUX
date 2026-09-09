import { Link } from "react-router-dom";
import { motion } from "motion/react";
import SectionHeading from "../components/ui/SectionHeading";
import Reveal, { Stagger, StaggerItem } from "../components/ui/Reveal";
import Counter from "../components/ui/Counter";
import Accordion from "../components/ui/Accordion";
import { ButtonLink } from "../components/ui/Button";
import { FloatingDecor, ParallaxImage } from "../components/ui/Decor";
import { ArrowRight, Quote } from "../components/ui/Icons";
import {
  ValuesBand,
  NewsSection,
  NewsletterSection,
  GallerySection,
} from "../components/sections/Shared";
import { activities, faq, org, pillars, programs, stats, team } from "../data/site";

/* ------------------------------------------------------------
   Hero
   ------------------------------------------------------------ */
function Hero() {
  return (
    <section className="relative flex min-h-[720px] items-center overflow-hidden pt-36 pb-40 lg:min-h-[880px] lg:pt-44 lg:pb-48">
      {/* Photo plein cadre + voile pour la lisibilité du texte */}
      <div aria-hidden className="absolute inset-0 -z-20">
        <img
          src="/img/hero.jpg"
          alt=""
          className="size-full object-cover object-center"
        />
      </div>
      {/* Double voile : dégradé vertical + halo central, pour que le texte
          reste lisible quelle que soit la photo placée en fond. */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-gradient-to-b from-secondary/65 via-secondary/45 to-secondary/75"
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_60%_50%_at_50%_45%,rgba(47,43,43,.55),transparent_70%)]"
      />

      {/* Griffonnages animés du modèle */}
      <img
        src="/decor/el-20.svg"
        alt=""
        aria-hidden
        className="pointer-events-none absolute left-[6%] top-[30%] hidden w-14 lg:block"
      />
      <img
        src="/decor/el-36.svg"
        alt=""
        aria-hidden
        className="pointer-events-none absolute right-[6%] top-[42%] hidden w-24 lg:block"
      />

      <div className="container-x relative text-center">
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-[var(--font-heading)] text-[15px] font-semibold uppercase tracking-[0.24em] text-sun"
        >
          {org.acronym} — {org.country}, depuis {org.founded}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mt-6 max-w-5xl text-[46px] leading-[0.98] text-white drop-shadow-[0_6px_30px_rgba(0,0,0,.35)] sm:text-[70px] lg:text-[92px]"
        >
          Un avenir inclusif pour chaque enfant
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.28 }}
          className="mx-auto mt-7 max-w-2xl font-[var(--font-heading)] text-[18px] leading-[1.6] font-medium text-white/90 sm:text-[21px]"
        >
          Éducation adaptée, suivi thérapeutique et inclusion scolaire pour les
          enfants à besoins spécifiques et leurs familles.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-10 flex flex-wrap justify-center gap-4"
        >
          <ButtonLink to="/contact" variant="primary" size="lg">
            Faire un don <ArrowRight className="size-4" />
          </ButtonLink>
          <ButtonLink to="/a-propos" variant="white" size="lg">
            Découvrir l'association
          </ButtonLink>
        </motion.div>

        {/* Chiffres clés */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="mx-auto mt-14 flex max-w-2xl flex-wrap items-center justify-center gap-y-8"
        >
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={[
                "min-w-[150px] flex-1 px-4",
                i > 0 ? "sm:border-l sm:border-white/25" : "",
              ].join(" ")}
            >
              <p className="font-[var(--font-display)] text-[38px] leading-none text-sun">
                <Counter value={s.value} suffix={s.suffix} />
              </p>
              <p className="mt-2 font-[var(--font-heading)] text-[14.5px] font-medium text-white/75">
                {s.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Vague de séparation vers la section suivante */}
      <svg
        aria-hidden
        viewBox="0 0 1000 100"
        preserveAspectRatio="none"
        className="absolute inset-x-0 bottom-[-1px] h-16 w-full text-white sm:h-24 lg:h-32"
      >
        <path
          fill="currentColor"
          d="M790.5,93.1c-59.3-5.3-116.8-18-192.6-50c-29.6-12.7-76.9-31-100.5-35.9c-23.6-4.9-52.6-7.8-75.5-5.3c-10.2,1.1-22.6,1.4-50.1,7.4c-27.2,6.3-58.2,16.6-79.4,24.7c-41.3,15.9-94.9,21.9-134,22.6C72,58.2,0,25.8,0,25.8V100h1000V65.3c0,0-51.5,19.4-106.2,25.7C839.5,97,814.1,95.2,790.5,93.1z"
        />
      </svg>
    </section>
  );
}

/* ------------------------------------------------------------
   4 piliers
   ------------------------------------------------------------ */
function Pillars() {
  return (
    <section className="relative bg-white py-24 lg:py-28">
      <div className="container-x">
        <SectionHeading
          eyebrow={`${org.acronym} — ${org.name}`}
          title={<>Une journée pensée pour <span className="underline-sketch">chaque enfant</span></>}
          text="Nous construisons avec chaque famille un accompagnement sur mesure, mêlant apprentissages, soins et vie collective."
        />

        <Stagger className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p) => (
            <StaggerItem key={p.title} className="h-full">
              <div className="group flex h-full flex-col rounded-[32px] border-2 border-line bg-white p-8 transition-all duration-500 hover:-translate-y-3 hover:border-transparent hover:shadow-[0_34px_70px_-38px_rgba(47,43,43,.55)]">
                <span
                  className={[
                    "grid size-20 place-items-center rounded-[26px] transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110",
                    p.tint,
                  ].join(" ")}
                >
                  <img src={p.icon} alt="" className="size-11" aria-hidden />
                </span>
                <h3 className="mt-7 text-[23px]">{p.title}</h3>
                <ul className="mt-5 flex flex-1 flex-col gap-2.5">
                  {p.items.map((it) => (
                    <li key={it} className="flex items-start gap-2.5 text-[15.5px] text-ink/75">
                      <svg viewBox="0 0 16 16" className="mt-1.5 size-3.5 shrink-0 text-primary" fill="currentColor" aria-hidden>
                        <circle cx="8" cy="8" r="8" opacity=".2" />
                        <path d="m4.5 8.2 2.3 2.3 4.7-4.9" stroke="currentColor" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      {it}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/activites"
                  className="mt-7 inline-flex items-center gap-2 font-[var(--font-heading)] text-[15px] font-semibold text-primary transition-all duration-300 group-hover:gap-3"
                >
                  En savoir plus <ArrowRight className="size-4" />
                </Link>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------
   Mission — image + texte
   ------------------------------------------------------------ */
function MissionSplit() {
  return (
    <section className="relative overflow-hidden bg-white py-24 lg:py-28">
      <FloatingDecor src="/decor/el-9.svg" className="right-[6%] top-16 w-12 opacity-60" duration={7} />

      <div className="container-x grid items-center gap-14 lg:grid-cols-2">
        <Reveal from="right">
          <div className="relative">
            <ParallaxImage
              src="/img/home-32.jpg"
              alt="Atelier d'éveil avec les enfants"
              className="blob-2 aspect-[5/5.4]"
              range={40}
            />
            <div
              aria-hidden
              className="absolute -bottom-8 -right-4 -z-10 size-48 rounded-full bg-sun/30 blur-2xl"
            />
          </div>
        </Reveal>

        <div>
          <SectionHeading
            align="left"
            eyebrow="Notre mission"
            title={<>Grandir par le <span className="underline-sketch">jeu</span> et par l'inclusion</>}
            text={org.mission}
          />

          <Stagger className="mt-9 flex flex-col gap-5" gap={0.1}>
            {[
              {
                t: "Un protocole par enfant",
                d: "Bilan initial, objectifs concrets, réévaluation régulière avec la famille.",
              },
              {
                t: "Des parents accompagnés",
                d: "Ateliers, écoute et outils pour prolonger le travail à la maison.",
              },
              {
                t: "Un retour vers l'école",
                d: "Passerelles avec les établissements pour une inclusion scolaire durable.",
              },
            ].map((row, i) => (
              <StaggerItem key={row.t}>
                <div className="flex gap-5 rounded-[24px] bg-cream p-5 transition-colors duration-400 hover:bg-primary-soft">
                  <span className="grid size-11 shrink-0 place-items-center rounded-full bg-primary font-[var(--font-display)] text-[17px] text-white">
                    {i + 1}
                  </span>
                  <div>
                    <p className="font-[var(--font-heading)] text-[18px] font-semibold text-secondary">{row.t}</p>
                    <p className="mt-1 text-[15.5px] leading-[1.7] text-ink/70">{row.d}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>

          <Reveal delay={0.2}>
            <ButtonLink to="/a-propos" variant="primary" className="mt-9">
              Notre histoire <ArrowRight className="size-4" />
            </ButtonLink>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------
   Programmes
   ------------------------------------------------------------ */
function Programs() {
  return (
    <section className="bg-cream py-24 lg:py-32">
      <div className="container-x">
        <SectionHeading
          eyebrow="Nos programmes"
          title={<>Qui accompagnons-<span className="underline-sketch">nous</span> ?</>}
          text="Des enfants vulnérables ou à besoins spécifiques, de la petite enfance à l'entrée dans la vie active."
        />

        <Stagger className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {programs.map((p) => (
            <StaggerItem key={p.title}>
              <Link
                to="/activites"
                className="group relative block overflow-hidden rounded-[30px] bg-secondary"
              >
                <div className="aspect-[4/3.2] overflow-hidden">
                  <img
                    src={p.img}
                    alt={p.title}
                    loading="lazy"
                    className="size-full object-cover opacity-90 transition-all duration-700 group-hover:scale-110 group-hover:opacity-70"
                  />
                </div>
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-secondary via-secondary/70 to-transparent p-6 pt-16">
                  <span className="inline-block rounded-full bg-primary px-3 py-1 font-[var(--font-heading)] text-[12.5px] font-semibold uppercase tracking-wide text-white">
                    {p.age}
                  </span>
                  <h3 className="mt-3 text-[24px] text-white transition-transform duration-500 group-hover:translate-x-1">
                    {p.title}
                  </h3>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------
   Comment nous travaillons
   ------------------------------------------------------------ */
function HowWeWork() {
  return (
    <section className="relative overflow-hidden bg-white py-24 lg:py-32">
      <div className="container-x grid items-start gap-14 lg:grid-cols-[1fr_1.1fr]">
        <div className="lg:sticky lg:top-32">
          <SectionHeading
            align="left"
            eyebrow="Comment nous travaillons"
            title={<>Diverse. Inclusive. <span className="underline-sketch">Inspirante.</span></>}
            text="Notre plan triennal 2023-2026 vise un changement systémique : agir sur l'enfant, la famille, l'école et les institutions."
          />
          <Reveal delay={0.2}>
            <div className="mt-9 rounded-[30px] bg-primary-soft p-7">
              <p className="font-[var(--font-heading)] text-[18px] font-semibold text-secondary">Notre vision</p>
              <p className="mt-3 text-[16px] leading-[1.75] text-ink/75">{org.vision}</p>
            </div>
          </Reveal>
        </div>

        <Reveal from="left" delay={0.1}>
          <Accordion items={[...faq].slice(0, 5)} />
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------
   Activités
   ------------------------------------------------------------ */
function Activities() {
  return (
    <section className="relative overflow-hidden bg-white pb-24 lg:pb-32">
      <FloatingDecor src="/decor/el-10.svg" className="left-[5%] top-8 w-11 opacity-60" duration={8} />

      <div className="container-x">
        <SectionHeading
          eyebrow="Nos ateliers"
          title={<>Révéler les <span className="underline-sketch">talents</span> de chaque enfant</>}
          text="Six ateliers hebdomadaires, encadrés par des éducateurs et des thérapeutes formés."
        />

        <Stagger className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {activities.map((a) => (
            <StaggerItem key={a.slug}>
              <Link
                to="/activites"
                className="group block overflow-hidden rounded-[30px] border-2 border-line transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_30px_60px_-32px_rgba(47,43,43,.5)]"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={a.img}
                    alt={a.title}
                    loading="lazy"
                    className="size-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <span
                    className="absolute inset-x-0 bottom-0 h-1.5 origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100"
                    style={{ background: a.color }}
                  />
                </div>
                <div className="flex items-center justify-between gap-4 bg-white p-6">
                  <h3 className="text-[21px] transition-colors duration-300 group-hover:text-primary">
                    {a.title}
                  </h3>
                  <span
                    className="grid size-10 shrink-0 place-items-center rounded-full text-white transition-transform duration-400 group-hover:rotate-45"
                    style={{ background: a.color }}
                  >
                    <ArrowRight className="size-4" />
                  </span>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------
   Citation de la fondatrice
   ------------------------------------------------------------ */
function FounderQuote() {
  return (
    <section className="relative overflow-hidden bg-secondary py-24 lg:py-32">
      <div aria-hidden className="pointer-events-none absolute -right-24 -top-24 size-96 rounded-full bg-primary/20 blur-3xl" />
      <FloatingDecor src="/decor/el-16.svg" className="left-[6%] bottom-16 w-14 opacity-15 brightness-0 invert" duration={7} />

      <div className="container-x grid items-center gap-14 lg:grid-cols-[1fr_1.2fr]">
        <Reveal from="right">
          <div className="blob-3 aspect-square overflow-hidden">
            <img
              src="/img/home-2.jpg"
              alt="Mme Marie-Claire Epoux, fondatrice de MAIJE"
              loading="lazy"
              className="size-full object-cover"
            />
          </div>
        </Reveal>

        <div>
          <Reveal from="left">
            <Quote className="mb-7 w-14 text-primary" />
            <blockquote className="font-[var(--font-heading)] text-[26px] font-medium leading-[1.4] text-white sm:text-[36px]">
              « Bâtir les adultes de demain en favorisant l'école inclusive sans
              discrimination. »
            </blockquote>
          </Reveal>
          <Reveal from="left" delay={0.15}>
            <div className="mt-8 flex items-center gap-4">
              <span className="h-px w-12 bg-primary" />
              <div>
                <p className="font-[var(--font-heading)] text-[19px] font-semibold text-white">
                  Mme Marie-Claire Epoux
                </p>
                <p className="text-[15px] text-white/60">Fondatrice & Présidente</p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------
   Équipe
   ------------------------------------------------------------ */
function Team() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="container-x">
        <SectionHeading
          eyebrow="Notre équipe"
          title={<>Celles et ceux qui font <span className="underline-sketch">vivre</span> MAIJE</>}
          text="Une équipe restreinte et engagée, appuyée par des bénévoles et des partenaires thérapeutiques."
        />

        <Stagger className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((m) => (
            <StaggerItem key={m.name}>
              <div className="group text-center">
                <div className={["overflow-hidden rounded-[32px] p-4 transition-colors duration-500", m.tint].join(" ")}>
                  <div className="aspect-[4/4.4] overflow-hidden rounded-[24px]">
                    <img
                      src={m.img}
                      alt={m.name}
                      loading="lazy"
                      className="size-full object-cover transition-transform duration-700 group-hover:scale-108"
                    />
                  </div>
                </div>
                <h3 className="mt-6 text-[21px] transition-colors duration-300 group-hover:text-primary">
                  {m.name}
                </h3>
                <p className="mt-1.5 font-[var(--font-heading)] text-[15px] text-tertiary">{m.role}</p>
              </div>
            </StaggerItem>
          ))}

          {/* Carte d'appel au bénévolat */}
          <StaggerItem className="h-full">
            <Link
              to="/contact"
              className="group flex h-full flex-col items-center justify-center rounded-[32px] border-2 border-dashed border-primary/40 bg-primary-soft p-8 text-center transition-all duration-500 hover:-translate-y-2 hover:border-primary hover:bg-primary"
            >
              <span className="grid size-16 place-items-center rounded-full bg-white text-primary transition-transform duration-500 group-hover:rotate-90">
                <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" className="size-6">
                  <path d="M10 4v12M4 10h12" />
                </svg>
              </span>
              <h3 className="mt-6 text-[21px] transition-colors duration-300 group-hover:text-white">
                Rejoignez l'équipe
              </h3>
              <p className="mt-2 text-[15px] text-ink/70 transition-colors duration-300 group-hover:text-white/80">
                Devenez bénévole ou partenaire
              </p>
            </Link>
          </StaggerItem>
        </Stagger>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------
   Chiffres clés
   ------------------------------------------------------------ */
function Stats() {
  return (
    <section className="relative overflow-hidden bg-cream py-24 lg:py-28">
      <div className="container-x">
        <SectionHeading
          eyebrow="Notre impact"
          title="Des résultats concrets, famille après famille"
          text="Nous donnons aux parents la tranquillité d'esprit d'un accompagnement sérieux, chaleureux et suivi."
        />

        <Stagger className="mt-16 grid gap-6 sm:grid-cols-3">
          {stats.map((s) => (
            <StaggerItem key={s.label}>
              <div className="group rounded-[32px] bg-white p-10 text-center transition-all duration-500 hover:-translate-y-2 hover:bg-primary">
                <p className="font-[var(--font-display)] text-[58px] leading-none text-primary transition-colors duration-500 group-hover:text-white">
                  <Counter value={s.value} suffix={s.suffix} />
                </p>
                <p className="mt-4 font-[var(--font-heading)] text-[17px] font-medium text-secondary transition-colors duration-500 group-hover:text-white">
                  {s.label}
                </p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------
   Page
   ------------------------------------------------------------ */
export default function Home() {
  return (
    <>
      <Hero />
      <Pillars />
      <ValuesBand />
      <MissionSplit />
      <Programs />
      <HowWeWork />
      <Activities />
      <FounderQuote />
      <Team />
      <Stats />
      <NewsSection />
      <NewsletterSection />
      <GallerySection />
    </>
  );
}
