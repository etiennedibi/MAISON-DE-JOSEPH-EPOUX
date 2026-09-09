# MAIJE — Site de l'association (refonte)

Refonte du site [ong-mje.netlify.app](https://ong-mje.netlify.app/) sur la base du design
[Los Niños](https://los-ninos.cmsmasters.studio/los-ninos/) : mêmes sections, même palette,
mêmes animations — adaptés au contenu de **MAIJE — Maison de Joseph Epoux**.

## Stack

| Outil | Rôle |
| --- | --- |
| React 19 + TypeScript | UI |
| Vite | build / dev server |
| Tailwind CSS v4 | styles (tokens dans `src/index.css`) |
| React Router v7 | routage |
| Motion (Framer Motion) | animations, transitions de page, compteurs, accordéons |
| Lenis | scroll fluide |

## Démarrer

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # build de production dans dist/
npm run preview  # prévisualiser le build
```

## Pages

| Route | Fichier | Équivalent Los Niños |
| --- | --- | --- |
| `/` | `src/pages/Home.tsx` | page d'accueil (hero repris de `home-shop`) |
| `/a-propos` | `src/pages/About.tsx` | `about-us` |
| `/activites` | `src/pages/Activities.tsx` | `timetable` |
| `/galerie` | `src/pages/Gallery.tsx` | — (ajout MAIJE) |
| `/blog` | `src/pages/Blog.tsx` | `blog-page` |
| `/contact` | `src/pages/Contact.tsx` | `contacts` |

## Charte graphique

Reprise à l'identique du thème Los Niños (variables dans `@theme` de `src/index.css`) :

| Token | Valeur | Usage |
| --- | --- | --- |
| `primary` | `#09B1AB` | couleur principale (teal) |
| `secondary` | `#2F2B2B` | textes forts, fonds sombres |
| `accent` | `#D78BCD` | rose, boutons secondaires |
| `sun` / `sun-soft` | `#FDBF62` / `#FFEFAB` | surlignage, accents |
| `coral` | `#F06D4F` | accent chaud |
| `sky` | `#47B1E4` | accent froid |
| `cream` | `#F5F1EA` | fond de section alterné |
| `line` | `#E4E1DB` | bordures |

Typographies (Google Fonts) : **Fredoka One** (H1), **Fredoka** (H2–H6, boutons),
**League Spartan** (texte courant).

## Hero de l'accueil

Le hero suit la variante [`home-shop`](https://los-ninos.cmsmasters.studio/los-ninos/home-shop/)
du modèle : photo plein cadre (`public/img/hero.jpg`), texte blanc centré, griffonnages
animés (`public/decor/el-20.svg`, `el-36.svg`, repris tels quels du thème) et vague
organique en séparation.

Sur cette page uniquement, l'en-tête vient se poser **au-dessus** de la photo sous forme
de pilule blanche flottante, puis redevient une barre pleine au scroll. C'est géré dans
`Header.tsx` par la variable `overlay` (`pathname === "/"`) et une marge négative
`-mb-24` qui annule la place occupée par l'en-tête dans le flux. Les autres pages ne sont
pas affectées.

Pour changer la photo : remplacer `public/img/hero.jpg` (format paysage, ~1920 × 1180).

## Galerie

24 photos en 4 catégories (Ateliers, Vie du centre, Jeux & sport, Fêtes & sorties),
filtrables, avec une visionneuse plein écran (flèches ← →, Échap, boutons, compteur,
légende, préchargement des images voisines).

Chaque photo existe en **deux tailles**, pour ne pas imposer plusieurs mégaoctets à des
connexions mobiles :

| Dossier | Usage | Poids total |
| --- | --- | --- |
| `public/gallery/thumb/` | grille, en `loading="lazy"` | ~1,4 Mo |
| `public/gallery/full/` | visionneuse, chargé à l'ouverture uniquement | ~5,6 Mo |

Les métadonnées sont dans `src/data/gallery.ts` : nom de fichier, légende, catégorie et
`tall: true` pour les portraits, qui occupent deux rangées dans la mosaïque.

**Ajouter une photo** : déposer le même nom de fichier dans les deux dossiers
(vignette ~600 px, plein format ~1300 px de côté long, en WebP), puis ajouter une entrée
dans `photos`. L'aperçu de l'accueil affiche automatiquement les six premières.

## Où modifier le contenu

Tout l'éditorial est centralisé dans **`src/data/site.ts`** : coordonnées, navigation,
programmes, ateliers, emploi du temps, équipe, chiffres, articles, FAQ, historique,
témoignages, galerie. Aucune donnée n'est codée en dur dans les composants.

## À compléter avant mise en ligne

- [ ] **Coordonnées réelles** (`org` dans `src/data/site.ts`) : adresse exacte, téléphone,
      e-mail, liens des réseaux sociaux — le site actuel n'en publie aucun.
- [ ] **Photos** : les images de `public/img/` proviennent d'Unsplash (licence libre, sans
      obligation d'attribution) et représentent des enfants et des adultes noirs, en
      contexte scolaire africain. Elles restent des photos d'illustration : à remplacer par
      les photos réelles de MAIJE dès qu'elles sont disponibles. Les éléments décoratifs
      (`public/decor/`, `public/icons/`) proviennent du template Los Niños et peuvent être
      conservés.
- [ ] **Formulaires** : le formulaire de contact et la newsletter sont fonctionnels côté
      interface mais n'envoient rien. Brancher un service (Formspree, Netlify Forms,
      Resend, EmailJS…) dans `src/pages/Contact.tsx` et `src/components/sections/Shared.tsx`.
- [ ] **Articles de blog** : les liens « Lire la suite » pointent tous vers `/blog`.
      Ajouter une route `/blog/:slug` et une page article si un vrai blog est prévu.
- [ ] **Carte** : l'iframe Google Maps est centrée sur Abidjan, à recentrer sur l'adresse
      exacte du centre.
- [ ] **Dons** : les boutons « Faire un don » renvoient vers `/contact`. Brancher la
      solution de paiement retenue (Wave, Orange Money, HelloAsso, Stripe…).

## Déploiement

Le projet est un SPA statique : `npm run build` produit `dist/`.
Sur Netlify, ajouter une redirection pour le routage côté client :

```
/*  /index.html  200
```
