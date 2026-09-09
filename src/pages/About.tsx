import PageHero from "../components/sections/PageHero";
import SectionHeading from "../components/ui/SectionHeading";
import Reveal, { Stagger, StaggerItem } from "../components/ui/Reveal";
import Counter from "../components/ui/Counter";
import { ButtonLink } from "../components/ui/Button";
import { FloatingDecor, ParallaxImage } from "../components/ui/Decor";
import { ArrowRight } from "../components/ui/Icons";
import {
  ValuesBand,
  NewsSection,
  TestimonialsSection,
  GallerySection,
  CtaSection,
} from "../components/sections/Shared";
import { milestones, org, skills, stats, team } from "../data/site";

/* ------------------------------------------------------------
   Deux blocs image + texte
   ------------------------------------------------------------ */
function Intro() {
  return (
    <section className="relative overflow-hidden bg-white py-24 lg:py-28">
      <FloatingDecor src="/decor/el-9.svg" className="right-[5%] top-14 w-12 opacity-60" duration={8} />

      <div className="container-x flex flex-col gap-24 lg:gap-32">
        {/* Bloc 1 */}
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <Reveal from="right">
            <ParallaxImage
              src="/img/home-31.jpg"
              alt="Écolières accompagnées par MAIJE"
              className="blob-1 aspect-[5/5.2]"
              range={45}
            />
          </Reveal>
          <div>
            <SectionHeading
              align="left"
              eyebrow="Qui sommes-nous"
              title={<>Une communauté <span className="underline-sketch">diverse</span> et inclusive</>}
              text={`Créée en ${org.founded} à Abidjan, ${org.acronym} — ${org.name} — est une organisation humanitaire apolitique et non confessionnelle, entièrement dédiée à la défense des droits de l'enfant et à la promotion d'une école réellement inclusive.`}
            />
            <Reveal delay={0.2}>
              <div className="mt-8 flex flex-wrap gap-3">
                {["Apolitique", "Non confessionnelle", "Sans but lucratif", "100% inclusion"].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border-2 border-line px-4 py-2 font-[var(--font-heading)] text-[14.5px] font-medium text-secondary transition-colors hover:border-primary hover:text-primary"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
        </div>

        {/* Bloc 2 (inversé) */}
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div className="lg:order-2">
            <SectionHeading
              align="left"
              eyebrow="Notre approche"
              title={<>Une maison pensée pour les <span className="underline-sketch">jeunes enfants</span></>}
              text="Nous accueillons chaque enfant quelles que soient ses capacités physiques ou cognitives. Compassion, croissance, courage d'agir, responsabilité, appartenance et curiosité guident notre travail au quotidien."
            />
            <Stagger className="mt-8 grid gap-4 sm:grid-cols-2" gap={0.1}>
              {[
                { t: "Enfants avec autisme", d: "Accompagnement sensoriel et social." },
                { t: "Enfants porteurs de trisomie", d: "Programmes psychomoteurs adaptés." },
                { t: "Handicaps moteurs", d: "Rééducation et matériel adapté." },
                { t: "Handicaps cognitifs", d: "Inclusion scolaire accélérée." },
              ].map((c) => (
                <StaggerItem key={c.t}>
                  <div className="h-full rounded-[22px] bg-cream p-5 transition-colors duration-400 hover:bg-primary-soft">
                    <p className="font-[var(--font-heading)] text-[16.5px] font-semibold text-secondary">{c.t}</p>
                    <p className="mt-1.5 text-[15px] leading-[1.65] text-ink/70">{c.d}</p>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
          <Reveal from="left" className="lg:order-1">
            <ParallaxImage
              src="/img/home-18.jpg"
              alt="Encadrement individualisé d'un enfant"
              className="blob-2 aspect-[5/5.2]"
              range={45}
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------
   Mission / Vision
   ------------------------------------------------------------ */
function MissionVision() {
  return (
    <section className="bg-cream py-24 lg:py-28">
      <div className="container-x grid gap-6 lg:grid-cols-2">
        {[
          { title: "Notre mission", text: org.mission, tint: "bg-white", accent: "text-primary" },
          { title: "Notre vision", text: org.vision, tint: "bg-secondary", accent: "text-sun" },
        ].map((b, i) => (
          <Reveal key={b.title} from={i === 0 ? "right" : "left"}>
            <div className={["h-full rounded-[36px] p-10 lg:p-12", b.tint].join(" ")}>
              <p className={["font-[var(--font-heading)] text-[15px] font-semibold uppercase tracking-[0.2em]", b.accent].join(" ")}>
                {b.title}
              </p>
              <p
                className={[
                  "mt-6 font-[var(--font-heading)] text-[21px] leading-[1.55] font-medium sm:text-[24px]",
                  i === 1 ? "text-white" : "text-secondary",
                ].join(" ")}
              >
                {b.text}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------
   Historique
   ------------------------------------------------------------ */
function Timeline() {
  return (
    <section className="relative overflow-hidden bg-white py-24 lg:py-32">
      <FloatingDecor src="/decor/el-16.svg" className="left-[6%] top-20 w-14 opacity-60" duration={7} />

      <div className="container-x">
        <SectionHeading
          eyebrow="Notre histoire"
          title={<>Le chemin parcouru <span className="underline-sketch">ensemble</span></>}
          text="Du premier atelier au centre de psychomotricité : quatre années portées par les familles, les bénévoles et nos partenaires."
        />

        <div className="relative mt-20">
          {/* Ligne verticale */}
          <span
            aria-hidden
            className="absolute left-[19px] top-2 h-[calc(100%-1rem)] w-0.5 bg-line lg:left-1/2 lg:-translate-x-1/2"
          />

          <Stagger className="flex flex-col gap-12" gap={0.16}>
            {milestones.map((m, i) => (
              <StaggerItem key={m.year}>
                <div
                  className={[
                    "relative flex items-start gap-6 pl-14 lg:w-1/2 lg:pl-0",
                    i % 2 === 0 ? "lg:ml-0 lg:pr-14 lg:text-right" : "lg:ml-auto lg:pl-14",
                  ].join(" ")}
                >
                  <span
                    aria-hidden
                    className={[
                      "absolute top-3 grid size-10 place-items-center rounded-full border-4 border-white bg-primary text-white shadow-lg",
                      "left-0",
                      i % 2 === 0 ? "lg:left-auto lg:-right-5" : "lg:-left-5",
                    ].join(" ")}
                  >
                    <span className="size-2.5 rounded-full bg-white" />
                  </span>

                  <div className="rounded-[28px] bg-cream p-7 transition-colors duration-400 hover:bg-primary-soft">
                    <p className="font-[var(--font-display)] text-[34px] leading-none text-primary">{m.year}</p>
                    <p className="mt-3 text-[16.5px] leading-[1.7] text-ink/75">{m.text}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------
   Compétences visées
   ------------------------------------------------------------ */
function Skills() {
  return (
    <section className="bg-cream py-24 lg:py-32">
      <div className="container-x">
        <SectionHeading
          eyebrow="Le programme vise à"
          title={<>Développer les compétences <span className="underline-sketch">essentielles</span></>}
          text="Quatre axes travaillés dans chaque atelier, avec des objectifs mesurables pour chaque enfant."
        />

        <Stagger className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((s, i) => (
            <StaggerItem key={s.title}>
              <div className="group h-full rounded-[32px] bg-white p-8 transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_34px_70px_-38px_rgba(47,43,43,.55)]">
                <span
                  className="grid size-16 place-items-center rounded-[22px] font-[var(--font-display)] text-[24px] text-white transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110"
                  style={{ background: s.color }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-6 text-[22px]">{s.title}</h3>
                <p className="mt-3 text-[15.5px] leading-[1.7] text-ink/70">{s.text}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------
   Équipe + chiffres
   ------------------------------------------------------------ */
function TeamAndStats() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="container-x">
        <div className="grid items-center gap-6 sm:grid-cols-3">
          {stats.map((s) => (
            <Reveal key={s.label}>
              <div className="rounded-[30px] border-2 border-line p-8 text-center transition-colors duration-400 hover:border-primary">
                <p className="font-[var(--font-display)] text-[50px] leading-none text-primary">
                  <Counter value={s.value} suffix={s.suffix} />
                </p>
                <p className="mt-3 font-[var(--font-heading)] text-[16px] font-medium text-secondary">{s.label}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <SectionHeading
          className="mt-24"
          eyebrow="Notre équipe"
          title={<>Une équipe <span className="underline-sketch">engagée</span></>}
        />

        <Stagger className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((m) => (
            <StaggerItem key={m.name}>
              <div className="group text-center">
                <div className={["overflow-hidden rounded-[32px] p-4", m.tint].join(" ")}>
                  <div className="aspect-[4/4.2] overflow-hidden rounded-[24px]">
                    <img
                      src={m.img}
                      alt={m.name}
                      loading="lazy"
                      className="size-full object-cover transition-transform duration-700 group-hover:scale-108"
                    />
                  </div>
                </div>
                <h3 className="mt-6 text-[21px] transition-colors duration-300 group-hover:text-primary">{m.name}</h3>
                <p className="mt-1.5 font-[var(--font-heading)] text-[15px] text-tertiary">{m.role}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal className="mt-14 text-center">
          <ButtonLink to="/contact" variant="primary" size="lg">
            Devenir bénévole <ArrowRight className="size-4" />
          </ButtonLink>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------
   Page
   ------------------------------------------------------------ */
export default function About() {
  return (
    <>
      <PageHero
        eyebrow="À propos"
        title="Notre histoire"
        text="Notre histoire, notre vision et notre mission au service des enfants à besoins spécifiques."
        breadcrumb="À propos"
      />
      <Intro />
      <ValuesBand />
      <MissionVision />
      <Timeline />
      <Skills />
      <TeamAndStats />
      <NewsSection limit={4} />
      <TestimonialsSection />
      <CtaSection />
      <GallerySection />
    </>
  );
}
