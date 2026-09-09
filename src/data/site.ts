/* ============================================================
   Contenu du site MAIJE — Maison de Joseph Epoux
   Toutes les données éditoriales sont centralisées ici.
   ============================================================ */

export const org = {
  acronym: "MAIJE",
  name: "Maison de Joseph Epoux",
  tagline: "Construire un avenir inclusif pour chaque enfant",
  founded: 2023,
  country: "Côte d'Ivoire",
  mission:
    "Contribuer à la formation et à l'encadrement des enfants vulnérables pour favoriser leur insertion socio-professionnelle et leur prise en charge holistique.",
  vision:
    "Devenir le pôle de référence en Côte d'Ivoire pour l'accompagnement holistique des enfants à besoins spécifiques, garantissant leur plein épanouissement et leur intégration citoyenne.",
  // À compléter avec les coordonnées réelles de l'association
  address: "Abidjan, Côte d'Ivoire",
  phone: "+225 00 00 00 00",
  email: "contact@maije.ci",
  socials: [
    { label: "Facebook", href: "#", icon: "facebook" },
    { label: "Instagram", href: "#", icon: "instagram" },
    { label: "YouTube", href: "#", icon: "youtube" },
    { label: "LinkedIn", href: "#", icon: "linkedin" },
  ],
};

export const nav = [
  { label: "Accueil", to: "/" },
  { label: "À propos", to: "/a-propos" },
  { label: "Activités", to: "/activites" },
  { label: "Blog", to: "/blog" },
  { label: "Contact", to: "/contact" },
];

/* ------------------------------------------------------------
   Accueil — 4 piliers
   ------------------------------------------------------------ */
export const pillars = [
  {
    icon: "/icons/bulb.svg",
    title: "Éducation inclusive",
    tint: "bg-sun-soft",
    items: ["Apprentissages adaptés", "Soutien scolaire", "Langage & communication", "Éveil artistique"],
  },
  {
    icon: "/icons/star.svg",
    title: "Prise en charge globale",
    tint: "bg-accent-soft",
    items: ["Suivi psychologique", "Accompagnement médical", "Repas & transport", "Fournitures scolaires"],
  },
  {
    icon: "/icons/hand.svg",
    title: "Encadrement spécialisé",
    tint: "bg-primary-soft",
    items: ["Éducateurs formés", "Protocoles individualisés", "Partenariats thérapeutiques", "Bilans réguliers"],
  },
  {
    icon: "/icons/heart.svg",
    title: "Éveil & psychomotricité",
    tint: "bg-sun-soft",
    items: ["Salle de psychomotricité", "Activités sensorielles", "Sport adapté", "Jeux collectifs"],
  },
];

/* ------------------------------------------------------------
   Programmes (publics accompagnés)
   ------------------------------------------------------------ */
export const programs = [
  { title: "Petite enfance", age: "2 à 5 ans", img: "/img/programme-1.jpg" },
  { title: "Enfants avec autisme", age: "3 à 15 ans", img: "/img/programme-2.jpg" },
  { title: "Trisomie 21", age: "3 à 15 ans", img: "/img/programme-3.jpg" },
  { title: "Handicap moteur", age: "4 à 16 ans", img: "/img/programme-4.jpg" },
  { title: "Inclusion scolaire", age: "6 à 16 ans", img: "/img/programme-5.jpg" },
  { title: "Insertion professionnelle", age: "16 à 21 ans", img: "/img/programme-6.jpg" },
];

/* ------------------------------------------------------------
   Activités / ateliers
   ------------------------------------------------------------ */
export const activities = [
  { slug: "eveil", title: "Atelier d'éveil", img: "/img/activite-1.jpg", color: "#09b1ab" },
  { slug: "psychomotricite", title: "Psychomotricité", img: "/img/activite-2.jpg", color: "#d78bcd" },
  { slug: "arts", title: "Arts plastiques", img: "/img/activite-3.jpg", color: "#fdbf62" },
  { slug: "musique", title: "Musique & chant", img: "/img/activite-4.jpg", color: "#f06d4f" },
  { slug: "orthophonie", title: "Orthophonie", img: "/img/activite-5.jpg", color: "#47b1e4" },
  { slug: "sport", title: "Sport adapté", img: "/img/activite-6.jpg", color: "#09b1ab" },
];

export type Activity = (typeof activities)[number];

/* ------------------------------------------------------------
   Emploi du temps hebdomadaire
   ------------------------------------------------------------ */
export const days = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];

export const timetable = [
  { day: "Lundi", slug: "eveil", start: "08:00", end: "09:30", room: "Salle A" },
  { day: "Lundi", slug: "psychomotricite", start: "09:45", end: "11:00", room: "Gymnase" },
  { day: "Lundi", slug: "orthophonie", start: "14:00", end: "15:00", room: "Cabinet 1" },
  { day: "Lundi", slug: "arts", start: "15:15", end: "16:30", room: "Atelier" },

  { day: "Mardi", slug: "musique", start: "08:00", end: "09:15", room: "Salle B" },
  { day: "Mardi", slug: "eveil", start: "09:30", end: "11:00", room: "Salle A" },
  { day: "Mardi", slug: "sport", start: "14:00", end: "15:30", room: "Cour" },
  { day: "Mardi", slug: "orthophonie", start: "15:45", end: "16:45", room: "Cabinet 2" },

  { day: "Mercredi", slug: "psychomotricite", start: "08:00", end: "09:30", room: "Gymnase" },
  { day: "Mercredi", slug: "arts", start: "09:45", end: "11:15", room: "Atelier" },
  { day: "Mercredi", slug: "eveil", start: "14:00", end: "15:30", room: "Salle A" },

  { day: "Jeudi", slug: "orthophonie", start: "08:00", end: "09:00", room: "Cabinet 1" },
  { day: "Jeudi", slug: "musique", start: "09:15", end: "10:30", room: "Salle B" },
  { day: "Jeudi", slug: "sport", start: "14:00", end: "15:30", room: "Cour" },
  { day: "Jeudi", slug: "psychomotricite", start: "15:45", end: "17:00", room: "Gymnase" },

  { day: "Vendredi", slug: "eveil", start: "08:00", end: "09:30", room: "Salle A" },
  { day: "Vendredi", slug: "arts", start: "09:45", end: "11:00", room: "Atelier" },
  { day: "Vendredi", slug: "musique", start: "14:00", end: "15:15", room: "Salle B" },
  { day: "Vendredi", slug: "sport", start: "15:30", end: "17:00", room: "Cour" },

  { day: "Samedi", slug: "psychomotricite", start: "09:00", end: "10:30", room: "Gymnase" },
  { day: "Samedi", slug: "arts", start: "10:45", end: "12:00", room: "Atelier" },
  { day: "Samedi", slug: "sport", start: "14:00", end: "16:00", room: "Cour" },
];

/* ------------------------------------------------------------
   Équipe
   ------------------------------------------------------------ */
export const team = [
  { name: "Mme Marie-Claire Epoux", role: "Fondatrice & Présidente", img: "/img/equipe-1.jpg", tint: "bg-primary-soft" },
  { name: "M. Koffi Kouadio", role: "Directeur des Programmes", img: "/img/equipe-2.jpg", tint: "bg-accent-soft" },
  { name: "Mme Aminata Traoré", role: "Responsable Administrative", img: "/img/equipe-3.jpg", tint: "bg-sun-soft" },
];

/* ------------------------------------------------------------
   Chiffres clés
   ------------------------------------------------------------ */
export const stats = [
  { value: 50, suffix: "+", label: "Familles accompagnées" },
  { value: 12, suffix: "", label: "Partenaires engagés" },
  { value: 100, suffix: "%", label: "Dédié à l'inclusion" },
];

/* ------------------------------------------------------------
   Blog / actualités
   ------------------------------------------------------------ */
export const posts = [
  {
    slug: "programme-scolaire-2024",
    date: "12 septembre 2026",
    category: "Éducation",
    title: "Lancement du programme scolaire 2024",
    excerpt:
      "Nous accueillons cette année 50 nouveaux enfants pour un suivi personnalisé et inclusif, avec un protocole d'accompagnement construit famille par famille.",
    img: "/img/blog-6.jpg",
  },
  {
    slug: "atelier-parents",
    date: "28 août 2026",
    category: "Sensibilisation",
    title: "Atelier pour les parents : comprendre le handicap",
    excerpt:
      "Une journée d'échanges pour aider les familles à mieux comprendre le handicap et accompagner leur enfant au quotidien, sans culpabilité ni isolement.",
    img: "/img/blog-7.jpg",
  },
  {
    slug: "partenariat-medical",
    date: "14 août 2026",
    category: "Santé",
    title: "Un partenariat médical pour des soins accessibles",
    excerpt:
      "Une convention vient d'être signée afin de garantir aux enfants suivis une prise en charge thérapeutique spécialisée à tarif réduit.",
    img: "/img/blog-8.jpg",
  },
  {
    slug: "psychomotricite-nouveau-centre",
    date: "30 juillet 2026",
    category: "Infrastructures",
    title: "Le nouveau centre de psychomotricité prend forme",
    excerpt:
      "Un espace pensé pour l'éveil sensoriel et moteur des enfants ouvrira bientôt ses portes. Visite du chantier et présentation des équipements.",
    img: "/img/blog-9.jpg",
  },
  {
    slug: "arbre-de-noel-solidaire",
    date: "18 juillet 2026",
    category: "Événement",
    title: "Arbre de Noël solidaire : appel aux dons",
    excerpt:
      "Chaque année, une journée festive réunit les enfants de la fondation, leurs familles et nos bénévoles. Voici comment y contribuer.",
    img: "/img/blog-6.jpg",
  },
  {
    slug: "former-les-educateurs",
    date: "02 juillet 2026",
    category: "Formation",
    title: "Former les éducateurs à l'école inclusive",
    excerpt:
      "Notre plan triennal prévoit la formation d'enseignants et d'éducateurs aux méthodes d'accompagnement des enfants à besoins spécifiques.",
    img: "/img/blog-7.jpg",
  },
  {
    slug: "autisme-depistage-precoce",
    date: "20 juin 2026",
    category: "Santé",
    title: "Autisme : l'importance du dépistage précoce",
    excerpt:
      "Repérer tôt les signes permet d'engager un accompagnement adapté et de changer durablement la trajectoire de l'enfant.",
    img: "/img/blog-8.jpg",
  },
  {
    slug: "temoignage-famille",
    date: "05 juin 2026",
    category: "Témoignage",
    title: "« Mon fils a enfin sa place à l'école »",
    excerpt:
      "Le témoignage d'une mère accompagnée par MAIJE depuis deux ans, et le chemin parcouru par son enfant.",
    img: "/img/blog-9.jpg",
  },
  {
    slug: "benevoles-rentree",
    date: "22 mai 2026",
    category: "Bénévolat",
    title: "Rejoignez notre équipe de bénévoles",
    excerpt:
      "Éducateurs, thérapeutes, étudiants ou simples volontaires : chaque compétence compte pour faire vivre l'inclusion.",
    img: "/img/blog-6.jpg",
  },
];

/* ------------------------------------------------------------
   FAQ
   ------------------------------------------------------------ */
export const faq = [
  {
    q: "Comment inscrire mon enfant ?",
    a: "Prenez contact avec nous par téléphone ou via le formulaire. Un premier rendez-vous permet d'évaluer les besoins de l'enfant, puis nous construisons ensemble un protocole d'accompagnement individualisé.",
  },
  {
    q: "Quels enfants sont accueillis ?",
    a: "Nous accompagnons les enfants avec autisme, trisomie 21, handicaps moteurs et cognitifs, ainsi que les enfants vulnérables, sans distinction d'origine, de religion ou de moyens financiers.",
  },
  {
    q: "L'accompagnement est-il payant ?",
    a: "MAIJE est une association à but non lucratif. Les frais sont adaptés aux revenus de chaque famille, et nos partenariats médicaux permettent des tarifs réduits sur les soins spécialisés.",
  },
  {
    q: "Comment puis-je aider l'association ?",
    a: "Par un don ponctuel ou régulier, en devenant bénévole, en offrant du matériel pédagogique, ou en nous ouvrant votre réseau de partenaires institutionnels et médicaux.",
  },
  {
    q: "Où se situe le centre ?",
    a: "Le centre MAIJE est basé à Abidjan, en Côte d'Ivoire. Contactez-nous pour l'adresse exacte et les horaires de visite.",
  },
  {
    q: "Proposez-vous des formations aux éducateurs ?",
    a: "Oui. Notre plan triennal 2023-2026 comprend un volet de formation destiné aux enseignants, éducateurs et parents, afin de diffuser les pratiques d'école inclusive.",
  },
];

/* ------------------------------------------------------------
   Historique
   ------------------------------------------------------------ */
export const milestones = [
  { year: "2023", text: "Création de MAIJE, association apolitique et non confessionnelle, à Abidjan." },
  { year: "2024", text: "Lancement du plan triennal 2023-2026 et des premiers ateliers d'éveil." },
  { year: "2025", text: "Signature de conventions médicales et accueil de 50 familles." },
  { year: "2026", text: "Ouverture du centre de psychomotricité et extension du programme d'inclusion scolaire." },
];

/* ------------------------------------------------------------
   Compétences visées
   ------------------------------------------------------------ */
export const skills = [
  { title: "Autonomie", text: "Gestes du quotidien, repères, confiance en soi.", color: "#09b1ab" },
  { title: "Communication", text: "Langage, pictogrammes, expression des émotions.", color: "#d78bcd" },
  { title: "Socialisation", text: "Vie de groupe, coopération, respect de l'autre.", color: "#fdbf62" },
  { title: "Motricité", text: "Équilibre, coordination, éveil sensoriel.", color: "#f06d4f" },
];

/* ------------------------------------------------------------
   Témoignages
   ------------------------------------------------------------ */
export const testimonials = [
  {
    quote: "Bâtir les adultes de demain en favorisant l'école inclusive sans discrimination.",
    author: "Mme Marie-Claire Epoux",
    role: "Fondatrice & Présidente de MAIJE",
    img: "/img/equipe-1.jpg",
  },
  {
    quote:
      "Depuis que notre fille est suivie ici, elle parle, elle joue avec les autres, elle a retrouvé le sourire. Nous ne nous sentons plus seuls.",
    author: "Famille Kouassi",
    role: "Parents accompagnés depuis 2024",
    img: "/img/equipe-3.jpg",
  },
];

/* ------------------------------------------------------------
   Galerie
   ------------------------------------------------------------ */
export const gallery = [
  "/img/gallery-1.webp",
  "/img/gallery-2.webp",
  "/img/gallery-3.webp",
  "/img/gallery-4.webp",
  "/img/gallery-5.webp",
  "/img/gallery-6.webp",
];

/* ------------------------------------------------------------
   Antennes / horaires
   ------------------------------------------------------------ */
export const offices = [
  { city: "Centre principal", address: "Abidjan, Côte d'Ivoire", hours: "Lun – Ven : 8h00 – 17h00" },
  { city: "Accueil des familles", address: "Sur rendez-vous", hours: "Samedi : 9h00 – 13h00" },
  { city: "Pôle thérapeutique", address: "Abidjan, Côte d'Ivoire", hours: "Lun – Ven : 9h00 – 16h00" },
  { city: "Antenne bénévoles", address: "Abidjan, Côte d'Ivoire", hours: "Mer & Sam : 10h00 – 15h00" },
];
