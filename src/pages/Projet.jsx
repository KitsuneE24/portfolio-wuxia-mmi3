import { Link, useParams } from "react-router-dom";
import { useGo } from "../lib/navigation.js";
import { usePersisted } from "../lib/usePersisted.js";
import { InkArt } from "../components/Scenes.jsx";
import { PROJECTS } from "../data/projets.js";

export default function Projet(){
  const { slug } = useParams();
  const go = useGo();
  const idx = PROJECTS.findIndex(p=>p.slug===slug);
  const p = PROJECTS[idx];
  const [mode,setMode] = usePersisted("lecture","jury");
  if(!p) return <div className="wrap section"><h1>Technique introuvable</h1><p className="lede">Ce projet n'existe pas ou a été renommé.</p><Link className="btn" to="/realisations">Voir toutes les réalisations</Link></div>;
  const beats = mode==="jury" ? p.beats : p.beats.filter(b=>!b.jury || b.step==="Obstacles & pivots");
  const prev = PROJECTS[(idx-1+PROJECTS.length)%PROJECTS.length];
  const next = PROJECTS[(idx+1)%PROJECTS.length];
  return (
    <div className="page-enter">
      <div className="wrap">
        <div className="p-hero">
          <div>
            <div className="crumbs"><button onClick={()=>go("/")}>Accueil</button><span>/</span><button onClick={()=>go("/realisations")}>Réalisations</button><span>/</span><span>{p.name}</span></div>
            <span className="form-name" aria-hidden="true">{p.form}</span>
            <h1>{p.name}</h1>
            <p className="lede">{p.pitch}</p>
            <div className="mode" role="group" aria-label="Mode de lecture">
              <button aria-pressed={mode==="jury"} onClick={()=>setMode("jury")}>Lecture jury</button>
              <button aria-pressed={mode==="recruteur"} onClick={()=>setMode("recruteur")}>Lecture recruteur</button>
            </div>
            <p className="mode-hint">{mode==="jury" ? "Toutes les rubriques de la fiche de réflexion, avec les AC visés." : "Version courte : contexte, obstacles et apport professionnel."}</p>
          </div>

          <aside className="token" aria-label="Carte d'identité du projet">
            <div className="token-top">
              <span className="kind">Carte d'identité<br/><span style={{color:"var(--fg-dim)",fontFamily:"var(--serif)"}}>{p.kind}</span></span>
              <span className="token-seal" aria-hidden="true">{p.hzSeal}</span>
            </div>
            <dl>
              <dt>Période</dt><dd>{p.year}</dd>
              <dt>Durée</dt><dd>{p.duration}</dd>
              <dt>Équipe</dt><dd>{p.team}</dd>
              <dt>Mon rôle</dt><dd>{p.role}</dd>
              <dt>Stack</dt><dd>{p.stack.join(", ")}</dd>
              {mode==="jury" && <><dt>AC visés</dt><dd className="acs">{p.acs.map(a=><span className="ac-chip" key={a}>{a}</span>)}</dd></>}
            </dl>
            <div className="token-links">
              <a href={p.links.code}>Dépôt GitHub</a>
              <a href={p.links.live}>Site en ligne</a>
            </div>
          </aside>
        </div>
      </div>

      <div className="wrap story">
        {beats.map((b,i)=>(
          <section className={"beat"+(i%2?" flip":"")} key={b.step}>
            <div className="beat-img">
              <figure>
                <div className="frame"><InkArt variant={(p.art+i)%3} moon={i%2===0}/></div>
                <figcaption>{b.caption}</figcaption>
              </figure>
            </div>
            <div className="beat-text">
              <p className="step"><span className="hz" aria-hidden="true">{b.hz}</span>{b.step}</p>
              <h3>{b.title}</h3>
              {b.text.map((t,j)=><p key={j}>{t}</p>)}
              {b.split && (
                <div className="split">
                  <div className="me"><h4>Je</h4><p>{b.split.me}</p></div>
                  <div className="us"><h4>Nous</h4><p>{b.split.us}</p></div>
                </div>
              )}
              {mode==="jury" && b.acs.length>0 && <div className="acs">{b.acs.map(a=><span className="ac-chip" key={a}>{a}</span>)}</div>}
            </div>
          </section>
        ))}
      </div>

      <div className="wrap">
        <nav className="pager" aria-label="Autres projets">
          <button onClick={()=>go("/projet/"+prev.slug)}><small>Technique précédente</small><span>{prev.name}</span></button>
          <button onClick={()=>go("/projet/"+next.slug)}><small>Technique suivante</small><span>{next.name}</span></button>
        </nav>
      </div>
    </div>
  );
}
