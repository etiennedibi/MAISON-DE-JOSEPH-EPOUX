import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import SectionHeading from "../ui/SectionHeading";
import Reveal, { Stagger, StaggerItem } from "../ui/Reveal";
import { Button, ButtonLink } from "../ui/Button";
import { FloatingDecor, Marquee } from "../ui/Decor";
import { ArrowRight, Quote } from "../ui/Icons";
import { posts, testimonials } from "../../data/site";
import { photos, thumbSrc } from "../../data/gallery";

/* ------------------------------------------------------------
   Bandeau de valeurs défilant
   ------------------------------------------------------------ */
export function ValuesBand() {
  return (
    <div className="bg-primary text-white">
      <Marquee
        words={["Inclusion", "Bienveillance", "Autonomie", "Dignité", "Éducation", "Solidarité"]}
      />
    </div>
  );
}

/* ------------------------------------------------------------
   Actualités (aperçu)
   ------------------------------------------------------------ */
export function NewsSection({ limit = 4 }: { limit?: number }) {
  return (
    <section className="relative overflow-hidden bg-white py-24 lg:py-32">
      <FloatingDecor src="/decor/el-10.svg" className="right-[5%] top-20 w-12 opacity-60" duration={8} />

      <div className="container-x">
        <div className="flex flex-col items-end justify-between gap-8 md:flex-row">
          <SectionHeading
            align="left"
            eyebrow="Actualités"
            title={<>Ce qui se passe <span className="underline-sketch">chez MAIJE</span></>}
            text="Programmes, événements, partenariats : suivez la vie de l'association et de nos familles."
          />
          <Reveal from="left">
            <ButtonLink to="/blog" variant="outline">
              Tout le blog <ArrowRight className="size-4" />
            </ButtonLink>
          </Reveal>
        </div>

        <Stagger className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {posts.slice(0, limit).map((post) => (
            <StaggerItem key={post.slug}>
              <PostCard post={post} />
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

export function PostCard({ post }: { post: (typeof posts)[number] }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[30px] border-2 border-line bg-white transition-all duration-500 hover:-translate-y-2 hover:border-primary hover:shadow-[0_30px_60px_-30px_rgba(47,43,43,.4)]">
      <Link to="/blog" className="relative block aspect-[4/3] overflow-hidden">
        <img
          src={post.img}
          alt={post.title}
          loading="lazy"
          className="size-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3.5 py-1.5 font-[var(--font-heading)] text-[12.5px] font-semibold uppercase tracking-wide text-primary backdrop-blur">
          {post.category}
        </span>
      </Link>
      <div className="flex flex-1 flex-col p-6">
        <time className="font-[var(--font-heading)] text-[13.5px] font-medium uppercase tracking-wide text-tertiary">
          {post.date}
        </time>
        <h3 className="mt-3 text-[21px] leading-snug transition-colors duration-300 group-hover:text-primary">
          <Link to="/blog">{post.title}</Link>
        </h3>
        <p className="mt-3 flex-1 text-[15.5px] leading-[1.7] text-ink/70">{post.excerpt}</p>
        <Link
          to="/blog"
          className="mt-5 inline-flex items-center gap-2 font-[var(--font-heading)] text-[15px] font-semibold text-primary transition-all duration-300 group-hover:gap-3"
        >
          Lire la suite <ArrowRight className="size-4" />
        </Link>
      </div>
    </article>
  );
}

/* ------------------------------------------------------------
   Témoignages
   ------------------------------------------------------------ */
export function TestimonialsSection() {
  return (
    <section className="relative overflow-hidden bg-cream py-24 lg:py-32">
      <FloatingDecor src="/decor/el-16.svg" className="left-[6%] top-24 w-14 opacity-60" duration={7} />

      <div className="container-x">
        <SectionHeading
          eyebrow="Témoignages"
          title={<>Des familles qui <span className="underline-sketch">retrouvent espoir</span></>}
        />

        <Stagger className="mt-16 grid gap-8 lg:grid-cols-2">
          {testimonials.map((t) => (
            <StaggerItem key={t.author}>
              <figure className="flex h-full flex-col rounded-[34px] bg-white p-8 shadow-[0_24px_50px_-34px_rgba(47,43,43,.5)] sm:p-10">
                <Quote className="mb-6 w-10 text-primary/30" />
                <blockquote className="flex-1 font-[var(--font-heading)] text-[20px] leading-[1.55] font-medium text-secondary sm:text-[23px]">
                  « {t.quote} »
                </blockquote>
                <figcaption className="mt-8 flex items-center gap-4 border-t border-line pt-6">
                  <img
                    src={t.img}
                    alt=""
                    loading="lazy"
                    className="size-14 rounded-full object-cover ring-3 ring-primary/25"
                  />
                  <div>
                    <p className="font-[var(--font-heading)] text-[17px] font-semibold text-secondary">{t.author}</p>
                    <p className="text-[14.5px] text-tertiary">{t.role}</p>
                  </div>
                </figcaption>
              </figure>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------
   Newsletter
   ------------------------------------------------------------ */
export function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  return (
    <section className="relative overflow-hidden bg-secondary py-20 lg:py-24">
      <div aria-hidden className="pointer-events-none absolute -left-16 -top-16 size-72 rounded-full bg-primary/25 blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute -bottom-20 right-0 size-80 rounded-full bg-accent/20 blur-3xl" />
      <FloatingDecor src="/decor/el-9.svg" className="left-[8%] bottom-10 w-12 opacity-15 brightness-0 invert" duration={9} />

      <div className="container-x relative grid items-center gap-10 lg:grid-cols-2">
        <Reveal from="right">
          <p className="mb-3 font-[var(--font-heading)] text-[15px] font-semibold uppercase tracking-[0.2em] text-sun">
            Newsletter
          </p>
          <h2 className="text-[32px] text-white sm:text-[42px]">
            Restez informé de nos actions
          </h2>
          <p className="mt-4 max-w-md text-[17px] leading-[1.75] text-white/70">
            Une lettre courte, quelques fois par an : nos avancées, nos événements et nos besoins concrets.
          </p>
        </Reveal>

        <Reveal from="left">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
              setEmail("");
            }}
            className="flex flex-col gap-3 sm:flex-row"
          >
            <label htmlFor="newsletter-email" className="sr-only">Adresse e-mail</label>
            <input
              id="newsletter-email"
              type="email"
              required
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setSent(false);
              }}
              placeholder="Votre adresse e-mail"
              className="w-full rounded-full border-2 border-white/15 bg-white/5 px-6 py-4 text-white placeholder:text-white/40 transition-colors focus:border-primary focus:outline-none"
            />
            <Button type="submit" variant="primary" size="md" className="shrink-0">
              Je m'inscris
            </Button>
          </form>
          {sent && (
            <motion.p
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-4 font-[var(--font-heading)] text-[15px] text-sun"
            >
              Merci ! Votre inscription est bien enregistrée.
            </motion.p>
          )}
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------
   Galerie
   ------------------------------------------------------------ */
/** Aperçu de la galerie : six vignettes qui renvoient vers la page complète. */
export function GallerySection() {
  const preview = photos.slice(0, 6);

  return (
    <section className="bg-white py-20 lg:py-24">
      <div className="container-x">
        <SectionHeading
          eyebrow="Galerie"
          title="Des moments de vie"
          text="Ateliers, sorties, fêtes : quelques instants partagés avec les enfants et leurs familles."
        />
      </div>

      <Stagger className="mt-14 grid grid-cols-2 gap-3 px-3 sm:grid-cols-3 lg:grid-cols-6" gap={0.08}>
        {preview.map((photo) => (
          <StaggerItem key={photo.file}>
            <Link
              to="/galerie"
              className="group relative block aspect-square overflow-hidden rounded-[24px]"
            >
              <img
                src={thumbSrc(photo)}
                alt={photo.caption}
                loading="lazy"
                className="size-full object-cover transition-transform duration-700 group-hover:scale-115"
              />
              <span className="absolute inset-0 grid place-items-center bg-primary/0 transition-colors duration-500 group-hover:bg-primary/70">
                <svg
                  viewBox="0 0 24 24"
                  className="size-8 scale-50 text-white opacity-0 transition-all duration-500 group-hover:scale-100 group-hover:opacity-100"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                >
                  <circle cx="11" cy="11" r="7" />
                  <path d="m16.5 16.5 4 4M11 8v6M8 11h6" />
                </svg>
              </span>
            </Link>
          </StaggerItem>
        ))}
      </Stagger>

      <Reveal className="mt-12 text-center">
        <ButtonLink to="/galerie" variant="outline">
          Voir les {photos.length} photos <ArrowRight className="size-4" />
        </ButtonLink>
      </Reveal>
    </section>
  );
}

/* ------------------------------------------------------------
   Appel à l'action
   ------------------------------------------------------------ */
export function CtaSection({
  title = "Prêt à soutenir un enfant ?",
  text = "Un don, un peu de temps, une compétence : chaque geste change une trajectoire.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="bg-white py-20 lg:py-24">
      <div className="container-x">
        <Reveal>
          <div className="relative overflow-hidden rounded-[40px] bg-primary px-8 py-16 text-center sm:px-16 lg:py-20">
            <div aria-hidden className="pointer-events-none absolute -left-10 -top-10 size-56 rounded-full bg-white/10" />
            <div aria-hidden className="pointer-events-none absolute -bottom-16 -right-10 size-72 rounded-full bg-secondary/10" />
            <FloatingDecor src="/decor/el-16.svg" className="right-[8%] top-10 w-12 opacity-50" duration={6} />

            <div className="relative">
              <h2 className="mx-auto max-w-2xl text-[32px] text-white sm:text-[46px]">{title}</h2>
              <p className="mx-auto mt-5 max-w-xl text-[17px] leading-[1.75] text-white/80">{text}</p>
              <div className="mt-9 flex flex-wrap justify-center gap-4">
                <ButtonLink to="/contact" variant="white" size="lg">Faire un don</ButtonLink>
                <ButtonLink to="/contact" variant="dark" size="lg">Devenir bénévole</ButtonLink>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
