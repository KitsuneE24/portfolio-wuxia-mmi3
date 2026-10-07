import { Link } from "react-router-dom";
import { useGo } from "../lib/navigation.js";
import { HeroScene, GateScene } from "../components/Scenes.jsx";
import Chapter from "../components/Chapter.jsx";
import Tablet from "../components/Tablet.jsx";
import { PROJECTS } from "../data/projets.js";

export default function Accueil(){
  const go = useGo();
  return (
    <>
      <section className="hero">
        <div className="hero-scene"><HeroScene/></div>
        <div className="wrap">
          <div className="hero-title ink-in-2">
            <span className="role">Développeur·se web · Parcours DWeb</span>
            <h1>Chaque projet est une technique apprise sur la route.</h1>
            <p className="lede">La porte est ouverte. Deux chemins partent d'ici : la voie de la cultivation, où je justifie mes apprentissages, et la voie du jianghu, où je montre ce que je sais livrer.</p>
            <div className="hero-actions">
              <Link className="btn red" to="/realisations">Voir mes réalisations</Link>
              <Link className="btn" to="/competences">Explorer mes compétences</Link>
            </div>
          </div>
          <div className="gate ink-in">
            <div className="gate-ring"><GateScene/><div className="gate-lattice" aria-hidden="true"><span></span><span></span></div></div>
            <div className="gate-vert" aria-hidden="true">入<span className="red">江湖</span></div>
          </div>
        </div>
        <span className="scroll-cue">Franchir la porte</span>
      </section>

      <section className="section">
        <div className="wrap">
          <Chapter hz="第一回">Le carrefour</Chapter>
          <h2>Deux voies, un même voyage</h2>
          <div className="fork">
            <button className="path jade" onClick={()=>go("/competences")}>
              <span className="big-hz" aria-hidden="true">修</span>
              <span className="who">Pour le jury et les enseignants</span>
              <h3>La voie de la cultivation</h3>
              <p>Mes apprentissages critiques, compétence par compétence, avec les preuves, la démarche et les pivots de chaque projet.</p>
              <span className="go">Entrer dans le volet compétences</span>
            </button>
            <button className="path red" onClick={()=>go("/realisations")}>
              <span className="big-hz" aria-hidden="true">武</span>
              <span className="who">Pour les recruteurs et les équipes</span>
              <h3>La voie du jianghu</h3>
              <p>Une sélection de mes meilleurs travaux, racontés comme des études de cas : le problème, mes choix, le résultat.</p>
              <span className="go">Entrer dans le volet vitrine</span>
            </button>
          </div>
        </div>
      </section>

      <section className="section" style={{paddingTop:0}}>
        <div className="wrap">
          <Chapter hz="第二回">Les techniques maîtresses</Chapter>
          <h2>Projets récents</h2>
          <div className="tablets" style={{marginTop:"2.5rem"}}>
            {PROJECTS.map(p=><Tablet key={p.slug} p={p}/>)}
          </div>
        </div>
      </section>
    </>
  );
}
