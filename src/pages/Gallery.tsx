import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import PageHero from "../components/sections/PageHero";
import Reveal from "../components/ui/Reveal";
import Lightbox from "../components/ui/Lightbox";
import { FloatingDecor } from "../components/ui/Decor";
import { CtaSection, NewsletterSection } from "../components/sections/Shared";
import {
  galleryCategories,
  photos,
  thumbSrc,
  type GalleryCategory,
} from "../data/gallery";

function Grid() {
  const [filter, setFilter] = useState<GalleryCategory>("all");
  const [open, setOpen] = useState<number | null>(null);

  // La visionneuse navigue dans la sélection affichée, pas dans tout le fonds.
  const visible = useMemo(
    () => (filter === "all" ? photos : photos.filter((p) => p.category === filter)),
    [filter],
  );

  return (
    <section className="relative overflow-hidden bg-white py-20 lg:py-24">
      <FloatingDecor src="/decor/el-9.svg" className="right-[4%] top-10 w-12 opacity-60" duration={8} />

      <div className="container-x">
        {/* Filtres */}
        <Reveal>
          <div className="flex flex-wrap justify-center gap-3">
            {galleryCategories.map((c) => {
              const active = filter === c.id;
              const count =
                c.id === "all" ? photos.length : photos.filter((p) => p.category === c.id).length;
              return (
                <button
                  key={c.id}
                  type="button"
                  onClick={() => {
                    setFilter(c.id);
                    setOpen(null);
                  }}
                  className={[
                    "relative isolate rounded-full px-5 py-2.5 font-[var(--font-heading)] text-[15px] font-semibold transition-colors duration-300",
                    active ? "text-white" : "text-secondary hover:text-primary",
                  ].join(" ")}
                >
                  {active ? (
                    <motion.span
                      layoutId="gallery-pill"
                      className="absolute inset-0 -z-10 rounded-full bg-primary"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  ) : (
                    <span className="absolute inset-0 -z-10 rounded-full border-2 border-line bg-white" />
                  )}
                  {c.label}
                  <span className={active ? "ml-2 text-white/60" : "ml-2 text-tertiary"}>{count}</span>
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* Mosaïque : les portraits occupent deux rangées */}
        <motion.div
          layout
          className="mt-12 grid auto-rows-[150px] grid-cols-2 gap-3 sm:auto-rows-[190px] sm:gap-4 md:grid-cols-3 lg:auto-rows-[220px] lg:grid-cols-4"
        >
          <AnimatePresence mode="popLayout">
            {visible.map((photo, i) => (
              <motion.button
                key={photo.file}
                layout
                type="button"
                onClick={() => setOpen(i)}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                aria-label={`Agrandir : ${photo.caption}`}
                className={[
                  "group relative overflow-hidden rounded-[22px] bg-cream focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-primary",
                  photo.tall ? "row-span-2" : "",
                ].join(" ")}
              >
                <img
                  src={thumbSrc(photo)}
                  alt={photo.caption}
                  loading="lazy"
                  decoding="async"
                  className="size-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Voile + légende au survol */}
                <span className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/10 to-transparent opacity-0 transition-opacity duration-400 group-hover:opacity-100 group-focus-visible:opacity-100" />
                <span className="absolute inset-x-0 bottom-0 translate-y-3 p-4 text-left opacity-0 transition-all duration-400 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100">
                  <span className="block font-[var(--font-heading)] text-[15px] font-semibold leading-snug text-white">
                    {photo.caption}
                  </span>
                </span>
                <span className="absolute right-3 top-3 grid size-9 scale-50 place-items-center rounded-full bg-primary text-white opacity-0 transition-all duration-400 group-hover:scale-100 group-hover:opacity-100 group-focus-visible:scale-100 group-focus-visible:opacity-100">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="size-4">
                    <circle cx="11" cy="11" r="7" />
                    <path d="m16.5 16.5 4 4M11 8v6M8 11h6" />
                  </svg>
                </span>
              </motion.button>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <Lightbox photos={visible} index={open} onClose={() => setOpen(null)} onChange={setOpen} />
    </section>
  );
}

export default function Gallery() {
  return (
    <>
      <PageHero
        eyebrow="Galerie"
        title="En images"
        text="Ateliers, vie du centre, sport et moments de fête : le quotidien des enfants accompagnés par MAIJE."
        breadcrumb="Galerie"
      />
      <Grid />
      <CtaSection
        title="Ces sourires ont un coût"
        text="Chaque atelier, chaque repas, chaque séance de thérapie repose sur la générosité de nos donateurs."
      />
      <NewsletterSection />
    </>
  );
}
