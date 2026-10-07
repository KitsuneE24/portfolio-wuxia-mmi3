import { useState } from "react";
import { Link } from "react-router-dom";
import { useGo } from "../lib/navigation.js";
import ThemeSwitch from "./ThemeSwitch.jsx";

const NAV = [
  { id:"accueil", path:"/", hz:"門", label:"Accueil" },
  { id:"competences", path:"/competences", hz:"修", label:"Compétences" },
  { id:"realisations", path:"/realisations", hz:"武", label:"Réalisations" },
  { id:"apropos", path:"/apropos", hz:"俠", label:"À propos" },
];

export function Header({ current, theme, setTheme }){
  const go = useGo();
  const [open,setOpen] = useState(false);
  const active = current==="projet" ? "realisations" : current;
  return (
    <header className="hdr">
      <div className="wrap">
        <Link className="seal" to="/" aria-label="Retour à l'accueil">
          <span className="seal-stamp" aria-hidden="true">劍</span>
          <span className="seal-name">CHEN Magalie<small>BUT MMI pacours DWEB</small></span>
        </Link>
        <button className="menu-btn" aria-expanded={open} aria-controls="nav" onClick={()=>setOpen(!open)}>
          <svg width="26" height="18" viewBox="0 0 26 18" aria-hidden="true"><path d="M0 1h26M0 9h26M0 17h16" stroke="currentColor" strokeWidth="1.5"/></svg>
          <span className="sr">Menu</span>
        </button>
        <nav id="nav" className={"nav"+(open?" open":"")} aria-label="Navigation principale">
          {NAV.map(n=>(
            <button key={n.id} aria-current={active===n.id?"page":undefined} onClick={()=>{ setOpen(false); go(n.path); }}>
              <span className="hz" aria-hidden="true">{n.hz}</span>{n.label}
            </button>
          ))}
          <ThemeSwitch theme={theme} setTheme={setTheme}/>
        </nav>
      </div>
    </header>
  );
}

export default Header;
