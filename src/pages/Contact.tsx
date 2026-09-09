import { useState } from "react";
import { motion } from "motion/react";
import PageHero from "../components/sections/PageHero";
import SectionHeading from "../components/ui/SectionHeading";
import Reveal, { Stagger, StaggerItem } from "../components/ui/Reveal";
import Accordion from "../components/ui/Accordion";
import { Button } from "../components/ui/Button";
import { FloatingDecor } from "../components/ui/Decor";
import { Clock, Mail, MapPin, Phone } from "../components/ui/Icons";
import { NewsletterSection, GallerySection, ValuesBand } from "../components/sections/Shared";
import { faq, offices, org } from "../data/site";

/* ------------------------------------------------------------
   Formulaire + coordonnées
   ------------------------------------------------------------ */
const field =
  "w-full rounded-[18px] border-2 border-line bg-white px-5 py-3.5 text-[16px] text-secondary transition-colors duration-300 placeholder:text-tertiary/70 focus:border-primary focus:outline-none";

function ContactForm() {
  const [sent, setSent] = useState(false);

  return (
    <section className="relative overflow-hidden bg-white py-24 lg:py-28">
      <FloatingDecor src="/decor/el-9.svg" className="left-[4%] top-16 w-12 opacity-60" duration={8} />
      <FloatingDecor src="/decor/el-16.svg" className="right-[5%] bottom-24 w-14 opacity-60" duration={7} delay={0.7} />

      <div className="container-x grid gap-14 lg:grid-cols-[1.15fr_1fr]">
        {/* Formulaire */}
        <Reveal from="right">
          <div className="rounded-[36px] bg-cream p-8 sm:p-12">
            <p className="font-[var(--font-heading)] text-[15px] font-semibold uppercase tracking-[0.2em] text-primary">
              Posez votre question
            </p>
            <h2 className="mt-4 text-[32px] sm:text-[42px]">Écrivez-nous</h2>
            <p className="mt-4 text-[16.5px] leading-[1.75] text-ink/70">
              Inscription, bénévolat, partenariat ou don : nous répondons sous 48 heures.
            </p>

            <form
              className="mt-9 grid gap-5 sm:grid-cols-2"
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
                (e.target as HTMLFormElement).reset();
              }}
            >
              <div>
                <label htmlFor="firstname" className="mb-2 block font-[var(--font-heading)] text-[15px] font-medium text-secondary">
                  Prénom <span className="text-coral">*</span>
                </label>
                <input id="firstname" name="firstname" required placeholder="Votre prénom" className={field} />
              </div>
              <div>
                <label htmlFor="lastname" className="mb-2 block font-[var(--font-heading)] text-[15px] font-medium text-secondary">
                  Nom
                </label>
                <input id="lastname" name="lastname" placeholder="Votre nom" className={field} />
              </div>
              <div>
                <label htmlFor="phone" className="mb-2 block font-[var(--font-heading)] text-[15px] font-medium text-secondary">
                  Téléphone <span className="text-coral">*</span>
                </label>
                <input id="phone" name="phone" type="tel" required placeholder="+225 ..." className={field} />
              </div>
              <div>
                <label htmlFor="email" className="mb-2 block font-[var(--font-heading)] text-[15px] font-medium text-secondary">
                  Adresse e-mail
                </label>
                <input id="email" name="email" type="email" placeholder="vous@exemple.com" className={field} />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="subject" className="mb-2 block font-[var(--font-heading)] text-[15px] font-medium text-secondary">
                  Votre demande
                </label>
                <select id="subject" name="subject" className={field} defaultValue="inscription">
                  <option value="inscription">Inscrire mon enfant</option>
                  <option value="benevolat">Devenir bénévole</option>
                  <option value="don">Faire un don</option>
                  <option value="partenariat">Proposer un partenariat</option>
                  <option value="autre">Autre</option>
                </select>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="message" className="mb-2 block font-[var(--font-heading)] text-[15px] font-medium text-secondary">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Comment pouvons-nous vous aider ?"
                  className={[field, "resize-none"].join(" ")}
                />
              </div>
              <div className="sm:col-span-2">
                <Button type="submit" variant="primary" size="lg">
                  Envoyer le message
                </Button>
                {sent && (
                  <motion.p
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-5 rounded-[18px] bg-primary-soft px-5 py-4 font-[var(--font-heading)] text-[15.5px] text-primary"
                  >
                    Merci, votre message a bien été envoyé. Nous vous recontactons rapidement.
                  </motion.p>
                )}
              </div>
            </form>
          </div>
        </Reveal>

        {/* Coordonnées */}
        <div>
          <SectionHeading
            align="left"
            eyebrow="Nous joindre"
            title={<>Prenons <span className="underline-sketch">contact</span></>}
            text="Le centre MAIJE accueille les familles sur rendez-vous, du lundi au samedi."
          />

          <Stagger className="mt-9 flex flex-col gap-4" gap={0.1}>
            {[
              { Icon: MapPin, label: "Adresse", value: org.address, href: undefined },
              { Icon: Phone, label: "Téléphone", value: org.phone, href: `tel:${org.phone.replace(/\s/g, "")}` },
              { Icon: Mail, label: "E-mail", value: org.email, href: `mailto:${org.email}` },
              { Icon: Clock, label: "Horaires", value: "Lun – Ven : 8h00 – 17h00", href: undefined },
            ].map(({ Icon, label, value, href }) => (
              <StaggerItem key={label}>
                <div className="group flex items-center gap-5 rounded-[24px] border-2 border-line p-5 transition-colors duration-400 hover:border-primary">
                  <span className="grid size-13 shrink-0 place-items-center rounded-full bg-primary-soft text-primary transition-colors duration-400 group-hover:bg-primary group-hover:text-white">
                    <Icon className="size-6" />
                  </span>
                  <div>
                    <p className="font-[var(--font-heading)] text-[14px] font-medium uppercase tracking-wide text-tertiary">
                      {label}
                    </p>
                    {href ? (
                      <a href={href} className="font-[var(--font-heading)] text-[18px] font-semibold text-secondary transition-colors hover:text-primary">
                        {value}
                      </a>
                    ) : (
                      <p className="font-[var(--font-heading)] text-[18px] font-semibold text-secondary">{value}</p>
                    )}
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>

          {/* Carte */}
          <Reveal delay={0.2} className="mt-6">
            <div className="overflow-hidden rounded-[28px] border-2 border-line">
              <iframe
                title="Localisation du centre MAIJE à Abidjan"
                src="https://www.google.com/maps?q=Abidjan,%20C%C3%B4te%20d'Ivoire&output=embed"
                loading="lazy"
                className="h-72 w-full grayscale-[35%] transition-all duration-500 hover:grayscale-0"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------
   Antennes
   ------------------------------------------------------------ */
function Offices() {
  return (
    <section className="bg-cream py-24 lg:py-28">
      <div className="container-x">
        <SectionHeading
          eyebrow="Nos points d'accueil"
          title={<>Où nous <span className="underline-sketch">trouver</span></>}
          text="Plusieurs espaces d'accueil pour les familles, les soins et les bénévoles."
        />

        <Stagger className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {offices.map((o) => (
            <StaggerItem key={o.city}>
              <div className="group h-full rounded-[30px] bg-white p-8 transition-all duration-500 hover:-translate-y-2 hover:bg-primary">
                <span className="grid size-12 place-items-center rounded-full bg-primary-soft text-primary transition-colors duration-500 group-hover:bg-white">
                  <MapPin className="size-6" />
                </span>
                <h3 className="mt-6 text-[20px] transition-colors duration-500 group-hover:text-white">{o.city}</h3>
                <p className="mt-3 text-[15.5px] leading-[1.7] text-ink/70 transition-colors duration-500 group-hover:text-white/80">
                  {o.address}
                </p>
                <p className="mt-4 flex items-center gap-2 font-[var(--font-heading)] text-[14.5px] font-medium text-tertiary transition-colors duration-500 group-hover:text-white/70">
                  <Clock className="size-4" />
                  {o.hours}
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
   FAQ
   ------------------------------------------------------------ */
function Faq() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="container-x">
        <SectionHeading
          eyebrow="Questions fréquentes"
          title={<>Vous vous demandez <span className="underline-sketch">peut-être</span>…</>}
        />
        <Reveal className="mx-auto mt-14 max-w-3xl">
          <Accordion items={[...faq]} />
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------
   Page
   ------------------------------------------------------------ */
export default function Contact() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Parlons-en"
        text="Une question sur l'accompagnement de votre enfant, un projet de partenariat ou l'envie d'aider ? Écrivez-nous."
        breadcrumb="Contact"
      />
      <ContactForm />
      <ValuesBand />
      <Offices />
      <Faq />
      <NewsletterSection />
      <GallerySection />
    </>
  );
}
