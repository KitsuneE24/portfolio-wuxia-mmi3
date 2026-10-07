// Un objet par projet. Ajouter un projet = ajouter un objet ici.
export const PROJECTS = [
  {
    slug:"pavillon", form:"第一式", hzSeal:"藏經", name:"Le Pavillon des Archives",
    kind:"Full-stack", year:"2026 · S5", team:"Trinôme", role:"Lead front & intégration",
    duration:"8 semaines", stack:["Vite","Nunjucks","Express","SCSS"],
    acs:["AC21.02","AC22.04","AC23.03","AC34.01","AC34.02","AC34.05","AC35.02"],
    pitch:"Refonte du site du BUT MMI : passer d'un site PHP vieillissant à une architecture moderne, rapide et maintenable.",
    links:{ code:"#", live:"#" }, art:0,
    beats:[
      { hz:"起", step:"Contexte & missions", title:"Un site hérité de trois promotions",
        text:["Le site existant cumulait du PHP procédural, des styles dupliqués et aucune séparation entre contenu et gabarits.","Notre mission : reconstruire le front avec un moteur de templates, un serveur Express pour les formulaires, et livrer une base que la promotion suivante pourra reprendre."],
        caption:"Capture : arborescence avant / après", acs:[] },
      { hz:"承", step:"Démonstration", title:"Des composants pensés pour durer",
        text:["J'ai découpé l'interface en macros Nunjucks réutilisables (cartes, navigation, formulaires). Chaque macro correspond à un besoin réel, ce qui répond à l'exigence d'un code sobre et réutilisable.","Côté serveur, Express gère la validation des formulaires et l'envoi des messages : c'est la preuve d'un développement avec un framework côté serveur."],
        caption:"Capture : macro de carte et son rendu", acs:["AC34.01","AC34.02"], jury:true },
      { hz:"轉", step:"Obstacles & pivots", title:"Le rendu lent des pages de formation",
        text:["Les pages chargeaient toutes les images en pleine taille. Premier essai : compression manuelle, insuffisant.","Pivot : pipeline d'optimisation dans Vite (formats modernes, tailles responsives). Score Lighthouse passé de 54 à 93, ce qui documente la démarche qualité."],
        caption:"Capture : rapports Lighthouse comparés", acs:["AC35.02"], jury:true },
      { hz:"合", step:"Je vs Nous", title:"Ce qui m'appartient, ce qui nous appartient",
        split:{ me:"Architecture des templates, système de composants, animations d'interface, audit de performance.", us:"Maquettes, contenus rédactionnels, déploiement et tests croisés à trois." },
        text:["Nous avons travaillé en branches Git avec relecture systématique des pull requests."],
        caption:"Capture : historique des pull requests", acs:[], jury:true },
      { hz:"用", step:"Dimension pro", title:"Ce qu'un recruteur peut en attendre",
        text:["Je sais reprendre un existant, le diagnostiquer et le moderniser sans tout casser. Je documente mes choix pour qu'une équipe puisse continuer derrière moi.","Prochaine étape envisagée : passer les pages statiques en génération Eleventy et ajouter des tests d'accessibilité automatisés."],
        caption:"Capture : page d'accueil finale", acs:[] },
    ]
  },
  {
    slug:"lanterne", form:"第二式", hzSeal:"燈籠", name:"Lanterne",
    kind:"Front-end", year:"2026 · S5", team:"Binôme", role:"Développement React",
    duration:"5 semaines", stack:["React","React Router","API REST"],
    acs:["AC22.02","AC34.01","AC35.01","AC35.04"],
    pitch:"Application React de réservation d'ateliers culturels, avec filtres, favoris et parcours de réservation en trois étapes.",
    links:{ code:"#", live:"#" }, art:1,
    beats:[
      { hz:"起", step:"Contexte & missions", title:"Réserver en moins d'une minute",
        text:["Une association voulait remplacer ses inscriptions par e-mail. L'objectif : un parcours court, lisible sur mobile."], caption:"Capture : parcours utilisateur", acs:[] },
      { hz:"承", step:"Démonstration", title:"L'état au bon endroit",
        text:["J'ai isolé la logique de réservation dans un hook personnalisé et un contexte, ce qui rend les écrans simples et testables."], caption:"Capture : hook useBooking", acs:["AC34.01"], jury:true },
      { hz:"合", step:"Je vs Nous", title:"Répartition du travail",
        split:{ me:"Architecture React, gestion d'état, tunnel de réservation.", us:"Design d'interface, connexion à l'API, recette." },
        text:[], caption:"Capture : tableau Kanban du projet", acs:["AC35.02"], jury:true },
    ]
  },
  {
    slug:"souffle", form:"第三式", hzSeal:"墨息", name:"Souffle d'encre",
    kind:"Interactif", year:"2025 · S4", team:"Solo", role:"Conception & développement",
    duration:"3 semaines", stack:["Three.js","GLSL","Web Audio"],
    acs:["AC23.06","AC34.03","AC34.04"],
    pitch:"Installation interactive où le souffle capté par le micro fait se diffuser de l'encre sur un paysage de montagnes.",
    links:{ code:"#", live:"#" }, art:2,
    beats:[
      { hz:"起", step:"Contexte & missions", title:"Rendre visible le geste",
        text:["Projet d'exploration : traduire une interaction physique en image, dans l'esprit de la peinture shanshui."], caption:"Capture : prototype en exposition", acs:[] },
      { hz:"承", step:"Démonstration", title:"Un shader qui imite le papier",
        text:["Le micro alimente un shader de diffusion ; l'intensité du souffle contrôle la vitesse et l'opacité de l'encre."], caption:"Capture : shader de diffusion", acs:["AC34.03"], jury:true },
    ]
  },
];
