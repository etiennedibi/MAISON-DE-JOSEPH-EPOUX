type P = { className?: string };

export const Facebook = ({ className }: P) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
    <path d="M13.5 21v-8h2.7l.4-3.1h-3.1V7.9c0-.9.25-1.5 1.55-1.5h1.65V3.6c-.29-.04-1.27-.12-2.4-.12-2.38 0-4.01 1.45-4.01 4.12V9.9H7.6V13h2.69v8h3.21Z" />
  </svg>
);

export const Instagram = ({ className }: P) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" className={className} aria-hidden>
    <rect x="3" y="3" width="18" height="18" rx="5.4" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.4" cy="6.6" r="1.1" fill="currentColor" stroke="none" />
  </svg>
);

export const Youtube = ({ className }: P) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
    <path d="M21.6 7.2a2.5 2.5 0 0 0-1.76-1.77C18.25 5 12 5 12 5s-6.25 0-7.84.43A2.5 2.5 0 0 0 2.4 7.2 26 26 0 0 0 2 12a26 26 0 0 0 .4 4.8 2.5 2.5 0 0 0 1.76 1.77C5.75 19 12 19 12 19s6.25 0 7.84-.43a2.5 2.5 0 0 0 1.76-1.77A26 26 0 0 0 22 12a26 26 0 0 0-.4-4.8ZM10 15V9l5.2 3-5.2 3Z" />
  </svg>
);

export const Linkedin = ({ className }: P) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
    <path d="M6.94 8.5H4V20h2.94V8.5ZM5.47 4a1.7 1.7 0 1 0 0 3.4 1.7 1.7 0 0 0 0-3.4ZM20 13.7c0-3.2-1.7-4.7-4-4.7-1.85 0-2.68 1.02-3.14 1.73V8.5H9.92V20h2.94v-6.42c0-1.36.26-2.68 1.94-2.68 1.66 0 1.68 1.55 1.68 2.77V20H20v-6.3Z" />
  </svg>
);

export const social = { facebook: Facebook, instagram: Instagram, youtube: Youtube, linkedin: Linkedin };

export const ArrowRight = ({ className }: P) => (
  <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
    <path d="M3 10h14M11.5 4.5 17 10l-5.5 5.5" />
  </svg>
);

export const MapPin = ({ className }: P) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" className={className} aria-hidden>
    <path d="M12 21s7-5.7 7-11a7 7 0 1 0-14 0c0 5.3 7 11 7 11Z" />
    <circle cx="12" cy="10" r="2.6" />
  </svg>
);

export const Phone = ({ className }: P) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" className={className} aria-hidden>
    <path d="M5 3h3.2l1.6 4-2 1.4a12.4 12.4 0 0 0 5.8 5.8l1.4-2 4 1.6V19a2 2 0 0 1-2.2 2C9.5 20.3 3.7 14.5 3 6.2A2 2 0 0 1 5 3Z" />
  </svg>
);

export const Mail = ({ className }: P) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" className={className} aria-hidden>
    <rect x="3" y="5" width="18" height="14" rx="3" />
    <path d="m4 8 7.1 4.8a2 2 0 0 0 2.2 0L20.4 8" />
  </svg>
);

export const Clock = ({ className }: P) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" className={className} aria-hidden>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5.3l3.4 2" strokeLinecap="round" />
  </svg>
);

export const Quote = ({ className }: P) => (
  <svg viewBox="0 0 40 30" fill="currentColor" className={className} aria-hidden>
    <path d="M0 30V17.4C0 7.9 5 1.7 14.6 0l1.7 4.9C11 6.9 8.4 10 8.3 14.4H16V30H0Zm23.6 0V17.4C23.6 7.9 28.6 1.7 38.2 0l1.7 4.9c-5.3 2-7.9 5.1-8 9.5H40V30H23.6Z" />
  </svg>
);

export const Heart = ({ className }: P) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
    <path d="M12 21S3.5 15.4 3.5 9.6A5.1 5.1 0 0 1 12 6.2a5.1 5.1 0 0 1 8.5 3.4C20.5 15.4 12 21 12 21Z" />
  </svg>
);
