import { useCallback, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "motion/react";
import { categoryLabel, fullSrc, type Photo } from "../../data/gallery";

type Props = {
  photos: Photo[];
  /** Index de la photo ouverte, ou null si la visionneuse est fermée. */
  index: number | null;
  onClose: () => void;
  onChange: (index: number) => void;
};

/**
 * Visionneuse plein écran : navigation clavier (← → Échap), boutons,
 * compteur, légende, et préchargement des images voisines.
 */
export default function Lightbox({ photos, index, onClose, onChange }: Props) {
  const open = index !== null;
  const photo = open ? photos[index] : null;
  const closeRef = useRef<HTMLButtonElement>(null);

  const prev = useCallback(() => {
    if (index === null) return;
    onChange((index - 1 + photos.length) % photos.length);
  }, [index, photos.length, onChange]);

  const next = useCallback(() => {
    if (index === null) return;
    onChange((index + 1) % photos.length);
  }, [index, photos.length, onChange]);

  // Raccourcis clavier
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowLeft") prev();
      else if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose, prev, next]);

  // Blocage du défilement de la page en arrière-plan
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);

  // Préchargement des images voisines pour une navigation sans attente
  useEffect(() => {
    if (index === null || photos.length < 2) return;
    for (const i of [(index + 1) % photos.length, (index - 1 + photos.length) % photos.length]) {
      const img = new Image();
      img.src = fullSrc(photos[i]);
    }
  }, [index, photos]);

  return (
    <AnimatePresence>
      {open && photo && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label={`Photo ${index + 1} sur ${photos.length} : ${photo.caption}`}
          className="fixed inset-0 z-[70] flex flex-col bg-secondary/95 backdrop-blur-sm"
        >
          {/* Barre supérieure */}
          <div
            className="flex shrink-0 items-center justify-between gap-4 px-5 py-4 sm:px-8"
            onClick={(e) => e.stopPropagation()}
          >
            <span className="font-[var(--font-heading)] text-[15px] font-semibold text-white/70">
              {String(index + 1).padStart(2, "0")}
              <span className="mx-1.5 text-white/35">/</span>
              {String(photos.length).padStart(2, "0")}
            </span>
            <button
              ref={closeRef}
              type="button"
              onClick={onClose}
              aria-label="Fermer la visionneuse"
              className="grid size-11 place-items-center rounded-full bg-white/10 text-white transition-colors hover:bg-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" className="size-5">
                <path d="M5 5l10 10M15 5L5 15" />
              </svg>
            </button>
          </div>

          {/* Image */}
          <div className="relative flex min-h-0 flex-1 items-center justify-center px-4 sm:px-20">
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              aria-label="Photo précédente"
              className="absolute left-2 z-10 grid size-12 place-items-center rounded-full bg-white/10 text-white transition-colors hover:bg-primary sm:left-6 sm:size-14"
            >
              <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="size-6">
                <path d="M12.5 4.5 7 10l5.5 5.5" />
              </svg>
            </button>

            <AnimatePresence mode="wait">
              <motion.img
                key={photo.file}
                src={fullSrc(photo)}
                alt={photo.caption}
                onClick={(e) => e.stopPropagation()}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                className="max-h-full max-w-full rounded-[20px] object-contain shadow-[0_40px_90px_-30px_rgba(0,0,0,.8)]"
              />
            </AnimatePresence>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              aria-label="Photo suivante"
              className="absolute right-2 z-10 grid size-12 place-items-center rounded-full bg-white/10 text-white transition-colors hover:bg-primary sm:right-6 sm:size-14"
            >
              <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="size-6">
                <path d="M7.5 4.5 13 10l-5.5 5.5" />
              </svg>
            </button>
          </div>

          {/* Légende */}
          <div className="shrink-0 px-5 py-6 text-center sm:px-8" onClick={(e) => e.stopPropagation()}>
            <p className="font-[var(--font-heading)] text-[13px] font-semibold uppercase tracking-[0.2em] text-sun">
              {categoryLabel(photo.category)}
            </p>
            <p className="mt-2 font-[var(--font-heading)] text-[19px] font-medium text-white sm:text-[22px]">
              {photo.caption}
            </p>
            <p className="mt-3 hidden text-[13.5px] text-white/45 sm:block">
              Naviguez avec les flèches ← → · Échap pour fermer
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
