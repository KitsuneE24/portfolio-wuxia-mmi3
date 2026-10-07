import { Fragment, useState } from "react";
import { useGo } from "../lib/navigation.js";
import Chapter from "../components/Chapter.jsx";
import { COMPETENCES } from "../data/competences.js";
import { PROJECTS } from "../data/projets.js";

export default function Competences(){
  const go = useGo();
  const [open,setOpen] = useState("AC34.01");
  return (
    <div className="wrap section page-enter">
      <div className="crumbs"><button onClick={()=>go("/")}>Accueil</button><span>/</span><span>Compétences</span></div>
      <Chapter hz="修">Volet compétences · académique</Chapter>
      <h1>La voie de la cultivation</h1>
      <p className="lede" style={{marginTop:"1.2rem"}}>Les cinq compétences du référentiel MMI, parcours Développement web et dispositifs interactifs, à leur niveau le plus haut : niveau 3 pour Développer et Entreprendre, niveau 2 pour les trois autres. Ouvre une ligne pour lire la démonstration, puis accède à la fiche complète du projet.</p>

      <div className="legend" aria-label="Critères d'évaluation">
        <div><strong>La trace et la preuve</strong><span>Des éléments concrets sélectionnés pour leur pertinence.</span></div>
        <div><strong>La réflexion critique</strong><span>Échecs, solutions et pivots analysés dans chaque fiche.</span></div>
        <div><strong>La maîtrise des AC</strong><span>Plusieurs AC croisés par projet pour une vision globale.</span></div>
        <div><strong>La présence numérique</strong><span>Ce site lui-même : React, responsive, accessible.</span></div>
      </div>

      {COMPETENCES.map(c=>(
        <section className="comp" key={c.id} aria-labelledby={"c-"+c.id} style={{"--acc":c.tone}}>
          <div className="comp-head">
            <div className="hz" aria-hidden="true">{c.hz}</div>
            <h2 id={"c-"+c.id}>{c.name}</h2>
            <span className="lvl">{c.level.split(" · ")[0]}</span>
            <p><strong style={{fontWeight:400}}>{c.level.split(" · ")[1]}</strong><br/>{c.intro}</p>
          </div>
          <ul className="ac-list">
            {c.acs.map(ac=>{
              const proofs = PROJECTS.filter(p=>p.acs.includes(ac.code));
              const isOpen = open===ac.code;
              return (
                <li className="ac-row" key={ac.code} data-open={isOpen}>
                  <button aria-expanded={isOpen} onClick={()=>setOpen(isOpen?null:ac.code)}>
                    <span className="ac-chip">{ac.code}</span>
                    <span className="lbl">{ac.label}</span>
                    <span className="count">{proofs.length} preuve{proofs.length>1?"s":""}<span className="chev" aria-hidden="true"></span></span>
                  </button>
                  {isOpen && (
                    <div className="ac-body">
                      {proofs.length===0 && <p className="empty">Aucune preuve reliée pour l'instant. Ajoute un projet qui mobilise cet AC.</p>}
                      {proofs.map(p=>{
                        const beat = p.beats.find(b=>b.acs.includes(ac.code));
                        return (
                          <div className="proof" key={p.slug}>
                            <div><h4>{p.name}</h4><p>{beat ? beat.text[0] : p.pitch}</p></div>
                            <button onClick={()=>go("/projet/"+p.slug)}>Lire la fiche</button>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </section>
      ))}

      <section style={{paddingTop:"3rem",borderTop:"1px solid var(--line)"}}>
        <h2 style={{fontSize:"1.8rem"}}>Carte des croisements</h2>
        <p style={{color:"var(--fg-dim)",maxWidth:"38em"}}>Vue d'ensemble : quels projets mobilisent quels apprentissages critiques.</p>
        <div className="matrix-wrap">
          <table className="matrix">
            <thead><tr><th scope="col">Apprentissage critique</th>{PROJECTS.map(p=><th scope="col" key={p.slug}>{p.name}</th>)}</tr></thead>
            <tbody>
              {COMPETENCES.map(c=>(
                <Fragment key={c.id}>
                  <tr className="grp"><th colSpan={PROJECTS.length+1} scope="colgroup">{c.hz} · {c.name} — {c.level}</th></tr>
                  {c.acs.map(ac=>(
                    <tr key={ac.code} style={{"--acc":c.tone}}>
                      <th scope="row" style={{fontWeight:400}}>
                        <span className="ac-cell"><span className="ac-chip" style={{borderColor:c.tone,color:c.tone}}>{ac.code}</span><small>{ac.label}</small></span>
                      </th>
                      {PROJECTS.map(p=>(
                        <td key={p.slug}>{p.acs.includes(ac.code)
                          ? <span className="dot" style={{background:c.tone}} role="img" aria-label={"mobilisé dans "+p.name}></span>
                          : <span className="dot lite" role="img" aria-label="non mobilisé"></span>}</td>
                      ))}
                    </tr>
                  ))}
                </Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
