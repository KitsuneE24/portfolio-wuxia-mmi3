import { useState, useEffect } from "react";

export const THEMES = [
  { id:"printemps", hz:"春", label:"Printemps : vert tendre et orange" },
  { id:"automne", hz:"秋", label:"Automne : beige et rouge laque" },
  { id:"nuit", hz:"夜", label:"Nuit : pluie et jade" },
];
export function useTheme(){
  const initial = (()=>{
    try{ const s=localStorage.getItem("ambiance"); if(s==="printemps"||s==="automne"||s==="nuit") return s; }catch(e){}
    try{ if(window.matchMedia("(prefers-color-scheme: dark)").matches) return "nuit"; }catch(e){}
    return "automne";
  })();
  const [t,setT] = useState(initial);
  useEffect(()=>{
    document.documentElement.setAttribute("data-theme", t);
    try{ localStorage.setItem("ambiance", t); }catch(e){}
  },[t]);
  return [t,setT];
}
