import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "motion/react";
import PageHero from "../components/sections/PageHero";
import Reveal from "../components/ui/Reveal";
import { Button } from "../components/ui/Button";
import { FloatingDecor } from "../components/ui/Decor";
import { ArrowRight } from "../components/ui/Icons";
import { NewsletterSection, GallerySection, CtaSection } from "../components/sections/Shared";
import { posts } from "../data/site";

const PAGE_SIZE = 4;

/* ------------------------------------------------------------
   Article mis en avant
   ------------------------------------------------------------ */
function Featured() {
  const post = posts[0];
  return (
    <section className="relative overflow-hidden bg-white pt-20 pb-10">
      <FloatingDecor src="/decor/el-9.svg" className="right-[4%] top-10 w-12 opacity-60" duration={8} />

      <div className="container-x">
        <Reveal>
          <article className="group grid overflow-hidden rounded-[40px] bg-cream lg:grid-cols-2">
            <div className="relative aspect-[4/3] overflow-hidden lg:aspect-auto">
              <img
                src={post.img}
                alt={post.title}
                className="size-full object-cover transition-transform duration-[900ms] group-hover:scale-105"
              />
              <span className="absolute left-5 top-5 rounded-full bg-primary px-4 py-2 font-[var(--font-heading)] text-[13px] font-semibold uppercase tracking-wide text-white">
                À la une
              </span>
            </div>
            <div className="flex flex-col justify-center p-8 sm:p-12 lg:p-14">
              <div className="flex items-center gap-3 font-[var(--font-heading)] text-[14px] font-medium uppercase tracking-wide">
                <span className="text-primary">{post.category}</span>
                <span className="size-1 rounded-full bg-tertiary" />
                <time className="text-tertiary">{post.date}</time>
              </div>
              <h2 className="mt-5 text-[30px] leading-[1.15] sm:text-[38px]">
                <Link to="/blog" className="transition-colors duration-300 hover:text-primary">
                  {post.title}
                </Link>
              </h2>
              <p className="mt-5 text-[17px] leading-[1.75] text-ink/70">{post.excerpt}</p>
              <Link
                to="/blog"
                className="mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-primary px-7 py-3.5 font-[var(--font-heading)] text-[16px] font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-secondary"
              >
                Lire l'article <ArrowRight className="size-4" />
              </Link>
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------
   Liste filtrable + pagination progressive
   ------------------------------------------------------------ */
function PostList() {
  const rest = posts.slice(1);
  const categories = useMemo(
    () => ["Tout", ...Array.from(new Set(rest.map((p) => p.category)))],
    [rest],
  );

  const [category, setCategory] = useState("Tout");
  const [visible, setVisible] = useState(PAGE_SIZE);

  const filtered = useMemo(
    () => (category === "Tout" ? rest : rest.filter((p) => p.category === category)),
    [category, rest],
  );

  const shown = filtered.slice(0, visible);

  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="container-x">
        {/* Filtres par catégorie */}
        <Reveal>
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((c) => {
              const active = category === c;
              return (
                <button
                  key={c}
                  type="button"
                  onClick={() => {
                    setCategory(c);
                    setVisible(PAGE_SIZE);
                  }}
                  className={[
                    "relative isolate rounded-full px-5 py-2.5 font-[var(--font-heading)] text-[15px] font-semibold transition-colors duration-300",
                    active ? "text-white" : "text-secondary hover:text-primary",
                  ].join(" ")}
                >
                  {active ? (
                    <motion.span
                      layoutId="blog-pill"
                      className="absolute inset-0 -z-10 rounded-full bg-primary"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  ) : (
                    <span className="absolute inset-0 -z-10 rounded-full border-2 border-line bg-white" />
                  )}
                  {c}
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* Liste */}
        <div className="mt-14 flex flex-col gap-8">
          <AnimatePresence mode="popLayout">
            {shown.map((post, i) => (
              <motion.article
                key={post.slug}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.45, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
                className="group grid gap-8 rounded-[34px] border-2 border-line p-5 transition-all duration-500 hover:border-primary hover:shadow-[0_30px_60px_-36px_rgba(47,43,43,.5)] sm:grid-cols-[minmax(0,340px)_1fr] sm:p-6"
              >
                <Link to="/blog" className="relative block aspect-[4/3] overflow-hidden rounded-[26px]">
                  <img
                    src={post.img}
                    alt={post.title}
                    loading="lazy"
                    className="size-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </Link>
                <div className="flex flex-col justify-center py-2 pr-2">
                  <div className="flex items-center gap-3 font-[var(--font-heading)] text-[13.5px] font-medium uppercase tracking-wide">
                    <span className="text-primary">{post.category}</span>
                    <span className="size-1 rounded-full bg-tertiary" />
                    <time className="text-tertiary">{post.date}</time>
                  </div>
                  <h3 className="mt-3 text-[24px] leading-snug sm:text-[28px]">
                    <Link to="/blog" className="transition-colors duration-300 group-hover:text-primary">
                      {post.title}
                    </Link>
                  </h3>
                  <p className="mt-4 text-[16px] leading-[1.75] text-ink/70">{post.excerpt}</p>
                  <Link
                    to="/blog"
                    className="mt-6 inline-flex w-fit items-center gap-2 font-[var(--font-heading)] text-[15.5px] font-semibold text-primary transition-all duration-300 group-hover:gap-3"
                  >
                    Lire la suite <ArrowRight className="size-4" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>

        {visible < filtered.length && (
          <div className="mt-14 text-center">
            <Button variant="outline" size="lg" onClick={() => setVisible((v) => v + PAGE_SIZE)}>
              Charger plus d'articles
            </Button>
          </div>
        )}

        {filtered.length === 0 && (
          <p className="mt-14 text-center font-[var(--font-heading)] text-[17px] text-tertiary">
            Aucun article dans cette catégorie pour le moment.
          </p>
        )}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------
   Page
   ------------------------------------------------------------ */
export default function Blog() {
  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="Actualités"
        text="Les nouvelles de l'association, nos actions sur le terrain et des ressources pour les familles."
        breadcrumb="Blog"
      />
      <Featured />
      <PostList />
      <CtaSection
        title="Vous voulez agir avec nous ?"
        text="Suivre nos actualités, c'est bien. Y participer, c'est mieux."
      />
      <NewsletterSection />
      <GallerySection />
    </>
  );
}
