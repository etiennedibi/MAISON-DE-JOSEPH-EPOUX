import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "motion/react";
import Logo from "./Logo";
import { ButtonLink } from "../ui/Button";
import { nav, org } from "../../data/site";
import { social, MapPin, Mail, Phone } from "../ui/Icons";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  // L'accueil ouvre sur un hero plein écran : l'en-tête vient se poser dessus.
  const overlay = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Referme le menu à chaque changement de page
  useEffect(() => setOpen(false), [pathname]);

  // Bloque le scroll quand le menu mobile est ouvert
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* Barre d'infos */}
      <div className="hidden bg-secondary text-white/80 lg:block">
        <div className="container-x flex items-center justify-between py-2.5 text-[13.5px]">
          <div className="flex items-center gap-7">
            <span className="flex items-center gap-2">
              <MapPin className="size-4 text-sun" /> {org.address}
            </span>
            <a href={`mailto:${org.email}`} className="flex items-center gap-2 transition-colors hover:text-sun">
              <Mail className="size-4 text-sun" /> {org.email}
            </a>
            <a href={`tel:${org.phone.replace(/\s/g, "")}`} className="flex items-center gap-2 transition-colors hover:text-sun">
              <Phone className="size-4 text-sun" /> {org.phone}
            </a>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-white/50">Suivez-nous</span>
            {org.socials.map((s) => {
              const Icon = social[s.icon as keyof typeof social];
              return (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="transition-all duration-300 hover:-translate-y-0.5 hover:text-sun"
                >
                  <Icon className="size-4" />
                </a>
              );
            })}
          </div>
        </div>
      </div>

      {/* Navigation principale.
          Sur l'accueil, l'en-tête flotte au-dessus du hero plein écran : la marge
          négative annule la place qu'il occupe dans le flux, l'image passe dessous. */}
      <header
        className={[
          "sticky top-0 z-50 w-full py-4 transition-colors duration-400",
          overlay ? "-mb-24" : "",
          scrolled
            ? "bg-white/95 shadow-[0_10px_40px_-18px_rgba(47,43,43,.35)] backdrop-blur-md"
            : overlay
              ? "bg-transparent"
              : "bg-white",
        ].join(" ")}
      >
        <div
          className={[
            "container-x flex h-16 items-center justify-between gap-6 transition-all duration-400",
            overlay && !scrolled
              ? "!max-w-[1330px] rounded-full bg-white px-5 shadow-[0_18px_50px_-22px_rgba(47,43,43,.5)] sm:px-8"
              : "",
          ].join(" ")}
        >
          <Logo />

          <nav className="hidden items-center gap-1 lg:flex">
            {nav.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  [
                    "relative isolate rounded-full px-5 py-2.5 font-[var(--font-heading)] text-[16px] font-medium transition-colors duration-300",
                    isActive ? "text-primary" : "text-secondary hover:text-primary",
                  ].join(" ")
                }
              >
                {({ isActive }) => (
                  <>
                    {item.label}
                    {isActive && (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-0 -z-10 rounded-full bg-primary-soft"
                        transition={{ type: "spring", stiffness: 380, damping: 32 }}
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            {/* Enveloppé : `hidden` sur le bouton lui-même entrerait en conflit
                avec son `inline-flex` de base. */}
            <span className="hidden sm:block">
              <ButtonLink to="/contact" variant="primary" size="sm">
                Faire un don
              </ButtonLink>
            </span>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
              aria-expanded={open}
              className="grid size-11 place-items-center rounded-full bg-cream text-secondary transition-colors hover:bg-primary hover:text-white lg:hidden"
            >
              <span className="relative block h-4 w-5">
                <span
                  className={[
                    "absolute left-0 h-0.5 w-5 rounded bg-current transition-all duration-300",
                    open ? "top-1.5 rotate-45" : "top-0",
                  ].join(" ")}
                />
                <span
                  className={[
                    "absolute left-0 top-1.5 h-0.5 w-5 rounded bg-current transition-all duration-300",
                    open ? "opacity-0" : "opacity-100",
                  ].join(" ")}
                />
                <span
                  className={[
                    "absolute left-0 h-0.5 w-5 rounded bg-current transition-all duration-300",
                    open ? "top-1.5 -rotate-45" : "top-3",
                  ].join(" ")}
                />
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Menu mobile plein écran */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-secondary/95 backdrop-blur-sm lg:hidden"
          >
            <div className="container-x flex h-full flex-col justify-center gap-2 pt-24">
              {nav.map((item, i) => (
                <motion.div
                  key={item.to}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.06 * i + 0.1, duration: 0.4 }}
                >
                  <NavLink
                    to={item.to}
                    className={({ isActive }) =>
                      [
                        "block py-3 font-[var(--font-display)] text-[34px] transition-colors",
                        isActive ? "text-sun" : "text-white hover:text-primary",
                      ].join(" ")
                    }
                  >
                    {item.label}
                  </NavLink>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45 }}
                className="mt-8"
              >
                <ButtonLink to="/contact" variant="accent" size="lg">
                  Faire un don
                </ButtonLink>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
