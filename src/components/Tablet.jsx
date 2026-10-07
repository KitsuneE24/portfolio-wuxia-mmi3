import { useGo } from "../lib/navigation.js";
import { InkArt } from "./Scenes.jsx";

export function Tablet({ p }){
  const go = useGo();
  return (
    <button className="tablet" onClick={()=>go("/projet/"+p.slug)}>
      <div className="img"><InkArt variant={p.art}/><span className="form" aria-hidden="true">{p.form}</span></div>
      <div className="meta"><span>{p.kind}</span><span>{p.year}</span></div>
      <h3>{p.name}</h3>
      <p>{p.pitch}</p>
    </button>
  );
}

export default Tablet;
