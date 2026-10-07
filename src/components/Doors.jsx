import { useState, useEffect } from "react";

/* Portes coulissantes : intro au premier chargement, puis transition entre les pages.
   closeThenNavigate() referme les portes, exécute la navigation, puis les rouvre. */
const reduceMotion = ()=>{ try{ return window.matchMedia("(prefers-reduced-motion: reduce)").matches; }catch(e){ return false; } };
let doorsApi = null;

export function Doors(){
  const firstVisit = (()=>{ try{ return !sessionStorage.getItem("entered"); }catch(e){ return true; } })();
  const [state,setState] = useState(firstVisit && !reduceMotion() ? "closed" : "open");
  const enter = ()=>{ setState("open"); try{ sessionStorage.setItem("entered","1"); }catch(e){} setTimeout(()=>document.documentElement.removeAttribute("data-intro"), 3500); };
  useEffect(()=>{
    doorsApi = (after)=>{
      if(reduceMotion()){ after(); return; }
      setState("closing");
      setTimeout(()=>{ after(); setTimeout(()=>setState("open"), 120); }, 520);
    };
    if(state==="closed"){ const t=setTimeout(enter, 1600); return ()=>clearTimeout(t); }
  },[]);
  return (
    <div className="doors" data-state={state} aria-hidden={state==="open"}>
      <div className="door l"><div className="half"></div></div>
      <div className="door r"><div className="half"></div></div>
      <div className="door-knock">
        <button onClick={enter}><span className="hz" aria-hidden="true">入</span><span>Pousser la porte</span></button>
      </div>
    </div>
  );
}

export function closeThenNavigate(after){
  if(doorsApi) doorsApi(after); else after();
}
