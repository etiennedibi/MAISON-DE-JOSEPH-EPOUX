import { Link } from "react-router-dom";
import Logo from "./Logo";
import { org, nav, programs, activities } from "../../data/site";
import { social, MapPin, Mail, Phone } from "../ui/Icons";
import { FloatingDecor } from "../ui/Decor";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-secondary pt-24 pb-10 text-white/70">
      <FloatingDecor src="/decor/el-9.svg" className="left-[4%] top-16 w-14 opacity-15 brightness-0 invert" duration={9} />
      <FloatingDecor src="/decor/el-16.svg" className="right-[7%] top-28 w-12 opacity-15 brightness-0 invert" duration={7} delay={1} />

      <div className="container-x">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          {/* Présentation */}
          <div>
            <Logo light />
            <p className="mt-6 max-w-sm text-[16px] leading-[1.8]">
              Association humanitaire apolitique et non confessionnelle créée en {org.founded},
              MAIJE accompagne les enfants à besoins spécifiques et leurs familles en {org.country}.
            </p>
            <div className="mt-7 flex items-center gap-3">
              {org.socials.map((s) => {
                const Icon = social[s.icon as keyof typeof social];
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    className="grid size-11 place-items-center rounded-full bg-white/10 text-white transition-all duration-300 hover:-translate-y-1 hover:bg-primary"
                  >
                    <Icon className="size-[18px]" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="mb-6 font-[var(--font-heading)] text-[19px] font-semibold text-white">Pages</h4>
            <ul className="flex flex-col gap-3">
              {nav.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="inline-block transition-all duration-300 hover:translate-x-1 hover:text-sun"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programmes */}
          <div>
            <h4 className="mb-6 font-[var(--font-heading)] text-[19px] font-semibold text-white">Programmes</h4>
            <ul className="flex flex-col gap-3">
              {programs.slice(0, 5).map((p) => (
                <li key={p.title}>
                  <Link
                    to="/activites"
                    className="inline-block transition-all duration-300 hover:translate-x-1 hover:text-sun"
                  >
                    {p.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Coordonnées */}
          <div>
            <h4 className="mb-6 font-[var(--font-heading)] text-[19px] font-semibold text-white">Informations</h4>
            <ul className="flex flex-col gap-4">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 size-5 shrink-0 text-primary" />
                <span>{org.address}</span>
              </li>
              <li className="flex gap-3">
                <Mail className="mt-0.5 size-5 shrink-0 text-primary" />
                <a href={`mailto:${org.email}`} className="transition-colors hover:text-sun">
                  {org.email}
                </a>
              </li>
              <li className="flex gap-3">
                <Phone className="mt-0.5 size-5 shrink-0 text-primary" />
                <a href={`tel:${org.phone.replace(/\s/g, "")}`} className="transition-colors hover:text-sun">
                  {org.phone}
                </a>
              </li>
            </ul>
            <div className="mt-6 flex flex-wrap gap-2">
              {activities.slice(0, 4).map((a) => (
                <Link
                  key={a.slug}
                  to="/activites"
                  className="rounded-full border border-white/15 px-3.5 py-1.5 text-[13px] transition-colors hover:border-primary hover:bg-primary hover:text-white"
                >
                  {a.title}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-[14px] sm:flex-row">
          <p>
            © {year} {org.acronym} — {org.name}. Tous droits réservés.
          </p>
          <div className="flex gap-6">
            <Link to="/contact" className="transition-colors hover:text-sun">Mentions légales</Link>
            <Link to="/contact" className="transition-colors hover:text-sun">Confidentialité</Link>
            <Link to="/contact" className="transition-colors hover:text-sun">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
