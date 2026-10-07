import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import { Doors } from "./components/Doors.jsx";
import Header from "./components/Header.jsx";
import { useTheme } from "./lib/theme.js";

import Accueil from "./pages/Accueil.jsx";
import Competences from "./pages/Competences.jsx";
import Realisations from "./pages/Realisations.jsx";
import Projet from "./pages/Projet.jsx";
import APropos from "./pages/APropos.jsx";

/* Remonte en haut de page à chaque changement d'URL. */
function ScrollToTop(){
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

/* Sert à surligner l'onglet courant dans la navigation. */
function currentSection(pathname){
  if(pathname.startsWith("/competences")) return "competences";
  if(pathname.startsWith("/realisations") || pathname.startsWith("/projet")) return "realisations";
  if(pathname.startsWith("/apropos")) return "apropos";
  return "accueil";
}

export default function App(){
  const [theme, setTheme] = useTheme();
  const location = useLocation();

  return (
    <>
      <div className="grain" aria-hidden="true"></div>
      <Doors/>
      <ScrollToTop/>
      <Header current={currentSection(location.pathname)} theme={theme} setTheme={setTheme}/>
      <main key={location.pathname}>
        <Routes>
          <Route path="/" element={<Accueil/>}/>
          <Route path="/competences" element={<Competences/>}/>
          <Route path="/realisations" element={<Realisations/>}/>
          <Route path="/projet/:slug" element={<Projet/>}/>
          <Route path="/apropos" element={<APropos/>}/>
          <Route path="*" element={<Projet/>}/>
        </Routes>
      </main>
      <footer>
        <div className="wrap">
          <span><span className="hz">江湖路遠</span> La route est longue, le voyage continue.</span>
          <span>Portfolio BUT MMI · 2026</span>
        </div>
      </footer>
    </>
  );
}
