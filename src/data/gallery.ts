/* ============================================================
   Galerie photo — MAIJE
   Chaque image existe en deux tailles :
   - /gallery/thumb/xx.webp  → grille (chargement différé)
   - /gallery/full/xx.webp   → visionneuse (chargé à l'ouverture)
   ============================================================ */

export const galleryCategories = [
  { id: "all", label: "Tout voir" },
  { id: "ateliers", label: "Ateliers" },
  { id: "centre", label: "Vie du centre" },
  { id: "sport", label: "Jeux & sport" },
  { id: "fetes", label: "Fêtes & sorties" },
] as const;

export type GalleryCategory = (typeof galleryCategories)[number]["id"];

export type Photo = {
  file: string;
  caption: string;
  category: Exclude<GalleryCategory, "all">;
  /** Vignette au format portrait : occupe deux rangées dans la grille. */
  tall?: boolean;
};

export const photos: Photo[] = [
  // Ateliers
  { file: "01.webp", caption: "Atelier d'écriture", category: "ateliers" },
  { file: "02.webp", caption: "Exercices en petit groupe", category: "ateliers", tall: true },
  { file: "03.webp", caption: "Premiers chiffres au tableau", category: "ateliers" },
  { file: "04.webp", caption: "Séance collective", category: "ateliers" },
  { file: "05.webp", caption: "Fin d'atelier", category: "ateliers", tall: true },
  { file: "06.webp", caption: "Concentration", category: "ateliers" },

  // Vie du centre
  { file: "07.webp", caption: "Arrivée le matin", category: "centre" },
  { file: "08.webp", caption: "Camarades de classe", category: "centre", tall: true },
  { file: "09.webp", caption: "Récréation", category: "centre" },
  { file: "10.webp", caption: "Sourire de la journée", category: "centre" },
  { file: "11.webp", caption: "Sur le chemin de l'école", category: "centre", tall: true },
  { file: "12.webp", caption: "Dans la cour", category: "centre" },

  // Jeux & sport
  { file: "13.webp", caption: "Jeux de quartier", category: "sport" },
  { file: "14.webp", caption: "Avant le match", category: "sport", tall: true },
  { file: "15.webp", caption: "Sport adapté", category: "sport" },
  { file: "16.webp", caption: "Entraînement", category: "sport" },
  { file: "17.webp", caption: "L'équipe au complet", category: "sport", tall: true },
  { file: "18.webp", caption: "Match du samedi", category: "sport" },

  // Fêtes & sorties
  { file: "19.webp", caption: "Spectacle de danse", category: "fetes", tall: true },
  { file: "20.webp", caption: "Défilé de fin d'année", category: "fetes" },
  { file: "21.webp", caption: "Atelier percussions", category: "fetes" },
  { file: "22.webp", caption: "Fête de l'inclusion", category: "fetes", tall: true },
  { file: "23.webp", caption: "Moment partagé", category: "fetes" },
  { file: "24.webp", caption: "Éclats de rire", category: "fetes" },
];

export const thumbSrc = (p: Photo) => `/gallery/thumb/${p.file}`;
export const fullSrc = (p: Photo) => `/gallery/full/${p.file}`;

export const categoryLabel = (id: Photo["category"]) =>
  galleryCategories.find((c) => c.id === id)?.label ?? "";
