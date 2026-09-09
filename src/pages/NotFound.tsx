import { ButtonLink } from "../components/ui/Button";
import { FloatingDecor } from "../components/ui/Decor";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[70vh] items-center overflow-hidden bg-cream py-24">
      <FloatingDecor src="/decor/el-9.svg" className="left-[10%] top-20 w-14 opacity-70" duration={7} />
      <FloatingDecor src="/decor/el-16.svg" className="right-[12%] bottom-24 w-16 opacity-70" duration={8} delay={0.8} />

      <div className="container-x text-center">
        <p className="font-[var(--font-display)] text-[110px] leading-none text-primary sm:text-[160px]">404</p>
        <h1 className="mt-4 text-[32px] sm:text-[44px]">Cette page a pris la clé des champs</h1>
        <p className="mx-auto mt-5 max-w-md text-[17px] leading-[1.75] text-ink/70">
          La page que vous cherchez n'existe pas ou a été déplacée.
        </p>
        <ButtonLink to="/" variant="primary" size="lg" className="mt-9">
          Retour à l'accueil
        </ButtonLink>
      </div>
    </section>
  );
}
