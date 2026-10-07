import { useGo } from "../lib/navigation.js";
import Chapter from "../components/Chapter.jsx";
import { InkArt } from "../components/Scenes.jsx";
import { PROJECTS } from "../data/projets.js";
import { PARCOURS } from "../data/parcours.js";

export default function APropos(){
  const go = useGo();
  const acsCouverts = new Set(PROJECTS.flatMap(p=>p.acs)).size;
  return (
    <div className="wrap section page-enter">
      <div className="crumbs"><button onClick={()=>go("/")}>Accueil</button><span>/</span><span>À propos</span></div>
      <Chapter hz="俠">Fiche du voyageur</Chapter>

      <article className="dossier cut">
        <div className="dossier-in">
          <div className="avatar">
            <div className="frame2"><InkArt variant={1} moon={false}/></div>
            <span className="stamp" aria-hidden="true">劍</span>
          </div>
          <div className="id-main">
            <p className="kicker">BUT 3 MMI · Parcours Développement web et dispositifs interactifs</p>
            <h1>Prénom Nom</h1>
            <p className="job">Développeur·se front-end, à l'aise du navigateur au serveur</p>
            <span className="status"><i aria-hidden="true"></i>Disponible pour une alternance ou un premier poste</span>
            <div className="quote">
              <p>« Je code d'abord pour celles et ceux qui vont utiliser la page. »</p>
              <p>« Un projet livré sans documentation n'est qu'à moitié fini. »</p>
            </div>
          </div>
          <div className="id-vert" aria-hidden="true">行者<small>VOYAGEUR</small></div>
        </div>
        <div className="stats">
          <div><b>3</b><span>années de formation</span></div>
          <div><b>{PROJECTS.length}</b><span>projets documentés</span></div>
          <div><b>{acsCouverts}</b><span>AC couverts</span></div>
          <div><b>6</b><span>mois d'expérience en entreprise</span></div>
        </div>
      </article>

      <div className="cta-row">
        <a className="btn red" href="#">Télécharger mon CV</a>
        <a className="btn" href="mailto:prenom.nom@exemple.fr">Me contacter</a>
      </div>

      <h2 style={{fontSize:"1.6rem",marginTop:"3.5rem"}}>Le chemin parcouru</h2>
      <ol className="timeline">
        {PARCOURS.map(x=>(
          <li key={x.t}><time>{x.t}</time><h4>{x.h}</h4><p>{x.p}</p></li>
        ))}
      </ol>
    </div>
  );
}
