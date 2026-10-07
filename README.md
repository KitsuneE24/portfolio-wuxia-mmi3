# Portfolio BUT MMI — parcours DWeb

Portfolio en React (Vite + React Router) sur une esthétique wuxia : porte coulissante à
l'entrée, fenêtre ronde, trois ambiances de couleurs, un volet compétences pour le jury et
un volet vitrine pour les recruteurs.

## Démarrer

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # génère dist/
npm run preview  # prévisualise le build
```

## Arborescence

```
index.html                  page hôte + script qui applique l'ambiance avant le rendu
src/
  main.jsx                  point d'entrée, BrowserRouter, import des CSS
  App.jsx                   routes, header, portes, footer, scroll en haut de page
  pages/
    Accueil.jsx             héros, carrefour des deux voies, projets récents
    Competences.jsx         les 5 compétences, les AC dépliables, la matrice
    Realisations.jsx        grille filtrable des projets
    Projet.jsx              fiche projet : carte d'identité + récit en 起承轉合
    APropos.jsx             fiche du voyageur, boutons, chronologie
  components/
    Header.jsx              navigation + sélecteur d'ambiance
    ThemeSwitch.jsx         les trois pastilles printemps / automne / nuit
    Doors.jsx               portes coulissantes (intro + transitions)
    Scenes.jsx              illustrations SVG (à remplacer par tes captures)
    Tablet.jsx              carte de projet
    Chapter.jsx             titre de chapitre 第一回
  lib/
    navigation.js           useGo() : navigue en jouant l'animation des portes
    theme.js                useTheme() : ambiance mémorisée dans localStorage
    usePersisted.js         petit hook de persistance (mode de lecture des fiches)
  data/
    competences.js          référentiel : 5 compétences, 25 AC
    projets.js              un objet par projet
    parcours.js             la chronologie de la page À propos
  styles/
    tokens.css              les trois ambiances (variables CSS)
    base.css                réglages globaux, typographie, footer
    chrome.css              header, portes, sélecteur, couleurs des scènes SVG
    pages.css               héros, cartes, compétences, fiche projet, à propos
```

## Ajouter un projet

Ajoute un objet dans `src/data/projets.js`. Il apparaîtra automatiquement sur l'accueil,
dans les réalisations, dans la matrice des compétences et sous chaque AC qu'il mobilise.

```js
{
  slug:"mon-projet",          // identifiant dans l'URL : /projet/mon-projet
  form:"第四式",               // numéro de technique, décoratif
  hzSeal:"印",                 // idéogramme du sceau de la carte d'identité
  name:"Nom du projet",
  kind:"Front-end",           // sert aussi de filtre sur la page Réalisations
  year:"2026 · S6", team:"Trinôme", role:"Mon rôle", duration:"6 semaines",
  stack:["React","Vite"],
  acs:["AC34.01","AC35.02"],  // codes exacts du référentiel
  pitch:"Une phrase qui résume le projet.",
  links:{ code:"https://github.com/…", live:"https://…" },
  art:0,                      // variante d'illustration (0, 1 ou 2)
  beats:[
    { hz:"起", step:"Contexte & missions", title:"…", text:["…"], caption:"…", acs:[] },
    { hz:"承", step:"Démonstration", title:"…", text:["…"], caption:"…", acs:["AC34.01"], jury:true },
    { hz:"轉", step:"Obstacles & pivots", title:"…", text:["…"], caption:"…", acs:["AC35.02"], jury:true },
    { hz:"合", step:"Je vs Nous", title:"…", split:{ me:"…", us:"…" }, text:[], caption:"…", acs:[], jury:true },
    { hz:"用", step:"Dimension pro", title:"…", text:["…"], caption:"…", acs:[] },
  ]
}
```

`jury:true` masque la rubrique en « Lecture recruteur ». Les rubriques suivent la fiche de
réflexion : AC visés, preuve, démonstration, dimension pro, synthèse « Je vs Nous ».

## Remplacer les illustrations par tes captures

Les visuels actuels sont des SVG de remplacement dans `src/components/Scenes.jsx`. Pour une
vraie image, place le fichier dans `src/assets/` puis importe-le :

```jsx
import capture from "../assets/mon-projet-accueil.png";
…
<div className="frame"><img src={capture} alt="Page d'accueil du site livré"/></div>
```

Garde les SVG pour les fonds décoratifs : leurs couleurs suivent l'ambiance choisie, ce
qu'une image fixe ne fait pas. Pense à des `alt` descriptifs, ils comptent pour l'AC35.02.

## Les trois ambiances

Les couleurs vivent dans `src/styles/tokens.css` : `:root` contient l'automne (défaut), puis
`[data-theme="printemps"]` et `[data-theme="nuit"]` redéfinissent ce qui change. Pour changer
l'ambiance par défaut, déplace les valeurs voulues dans `:root` et adapte le petit script en
haut de `index.html`.

Les cinq compétences ont leur couleur : `--c1` Comprendre, `--c2` Concevoir, `--c3` Exprimer,
`--c4` Développer, `--c5` Entreprendre.

## Les portes coulissantes

`Doors.jsx` gère l'intro (une fois par session) et les transitions. Toute navigation passe par
`useGo()` :

```jsx
const go = useGo();
<button onClick={() => go("/realisations")}>Voir les réalisations</button>
```

Un `<Link>` classique de React Router fonctionne aussi, mais sans l'animation. Si la personne
a activé « réduire les animations » dans son système, les portes sont désactivées.

## Mettre en ligne

- **Netlify / Vercel** : commande de build `npm run build`, dossier publié `dist`. Le fichier
  `public/_redirects` renvoie toutes les URL vers `index.html`, nécessaire avec BrowserRouter.
- **Serveur de l'IUT dans un sous-dossier** : renseigne `base` dans `vite.config.js`.
- **GitHub Pages** : remplace `BrowserRouter` par `HashRouter` dans `src/main.jsx`, sinon les
  liens directs renvoient une erreur 404.

## Accessibilité et qualité

Déjà en place : navigation au clavier avec contour visible, `aria-current` sur l'onglet actif,
`aria-expanded` sur les éléments dépliables, textes alternatifs sur les repères, respect de
`prefers-reduced-motion` et de `prefers-color-scheme`.

À faire avant la soutenance : passer un audit Lighthouse et un contrôle de contraste sur les
trois ambiances, puis garder les captures comme preuve pour l'AC35.02.
