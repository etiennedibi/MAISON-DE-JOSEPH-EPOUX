import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

/** Petit élément décoratif SVG qui flotte doucement. */
export function FloatingDecor({
  src,
  className = "",
  delay = 0,
  duration = 7,
  amplitude = 18,
  rotate = 6,
}: {
  src: string;
  className?: string;
  delay?: number;
  duration?: number;
  amplitude?: number;
  rotate?: number;
}) {
  return (
    <motion.img
      src={src}
      alt=""
      aria-hidden
      className={["pointer-events-none absolute select-none", className].join(" ")}
      animate={{ y: [0, -amplitude, 0], rotate: [-rotate, rotate, -rotate] }}
      transition={{ duration, delay, repeat: Infinity, ease: "easeInOut" }}
    />
  );
}

/** Tache de couleur organique en fond de section. */
export function Blob({
  color,
  className = "",
  shape = "blob-1",
}: {
  color: string;
  className?: string;
  shape?: "blob-1" | "blob-2" | "blob-3";
}) {
  return (
    <div
      aria-hidden
      className={["pointer-events-none absolute -z-10 blur-[2px]", shape, className].join(" ")}
      style={{ background: color }}
    />
  );
}

/** Bandeau de texte défilant en continu. */
export function Marquee({
  words,
  className = "",
  speed = 28,
}: {
  words: string[];
  className?: string;
  speed?: number;
}) {
  const line = [...words, ...words];
  return (
    <div className={["overflow-hidden py-6", className].join(" ")}>
      <div
        className="flex w-max items-center gap-10"
        style={{ animation: `marquee ${speed}s linear infinite` }}
      >
        {line.map((w, i) => (
          <span key={i} className="flex items-center gap-10">
            <span className="font-[var(--font-display)] text-[28px] whitespace-nowrap sm:text-[40px]">
              {w}
            </span>
            <svg width="26" height="26" viewBox="0 0 24 24" className="shrink-0 opacity-70">
              <path
                d="M12 0c.6 6 5.4 10.8 12 12-6.6 1.2-11.4 6-12 12-.6-6-5.4-10.8-12-12C6.6 10.8 11.4 6 12 0Z"
                fill="currentColor"
              />
            </svg>
          </span>
        ))}
      </div>
    </div>
  );
}

/** Image avec un léger effet de parallaxe verticale au scroll. */
export function ParallaxImage({
  src,
  alt,
  className = "",
  imgClassName = "",
  range = 60,
}: {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  range?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [range, -range]);

  return (
    <div ref={ref} className={["overflow-hidden", className].join(" ")}>
      <motion.img
        src={src}
        alt={alt}
        style={{ y }}
        loading="lazy"
        className={["h-full w-full scale-110 object-cover", imgClassName].join(" ")}
      />
    </div>
  );
}
