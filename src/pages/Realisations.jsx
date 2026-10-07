import { useState } from "react";
import { useGo } from "../lib/navigation.js";
import Chapter from "../components/Chapter.jsx";
import Tablet from "../components/Tablet.jsx";
import { PROJECTS } from "../data/projets.js";

export default function Realisations(){
  const go = useGo();
  const kinds = ["Tous", ...Array.from(new Set(PROJECTS.map(p=>p.kind)))];
  const [k,setK] = useState("Tous");
  const list = k==="Tous" ? PROJECTS : PROJECTS.filter(p=>p.kind===k);
  return (
    <div className="wrap section page-enter">
      <div className="crumbs"><button onClick={()=>go("/")}>Accueil</button><span>/</span><span>Réalisations</span></div>
      <Chapter hz="武">Volet vitrine · professionnel</Chapter>
      <h1>Le registre des techniques</h1>
      <p className="lede" style={{marginTop:"1.2rem"}}>Mes projets choisis, présentés comme des études de cas. Chaque fiche commence par une carte d'identité, puis raconte la démarche en images.</p>
      <div className="filters" role="group" aria-label="Filtrer par type">
        {kinds.map(x=><button key={x} aria-pressed={k===x} onClick={()=>setK(x)}>{x}</button>)}
      </div>
      <div className="tablets">{list.map(p=><Tablet key={p.slug} p={p}/>)}</div>
    </div>
  );
}
