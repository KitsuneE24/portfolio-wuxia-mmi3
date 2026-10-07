import { useNavigate } from "react-router-dom";
import { closeThenNavigate } from "../components/Doors.jsx";

/* useGo() renvoie une fonction de navigation qui joue l'animation des portes.
   Exemple : const go = useGo(); ... onClick={() => go("/realisations")} */
export function useGo(){
  const navigate = useNavigate();
  return (path) => {
    if(window.location.pathname === path) return;
    closeThenNavigate(() => navigate(path));
  };
}
