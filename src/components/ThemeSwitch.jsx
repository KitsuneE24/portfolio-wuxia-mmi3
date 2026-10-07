import { THEMES } from "../lib/theme.js";

export function ThemeSwitch({ theme, setTheme }){
  return (
    <div className="themes" role="group" aria-label="Ambiance du site">
      {THEMES.map(x=>(
        <button key={x.id} data-t={x.id} aria-pressed={theme===x.id} title={x.label} onClick={()=>setTheme(x.id)}>
          <span aria-hidden="true">{x.hz}</span><span className="sr">{x.label}</span>
        </button>
      ))}
    </div>
  );
}

export default ThemeSwitch;
