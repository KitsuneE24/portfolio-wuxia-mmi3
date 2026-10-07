import { useState, useEffect } from "react";

export function usePersisted(key, initial){
  const [v,setV] = useState(()=>{ try{ return localStorage.getItem(key) || initial; }catch(e){ return initial; } });
  useEffect(()=>{ try{ localStorage.setItem(key, v); }catch(e){} },[key,v]);
  return [v,setV];
}
