export function Chapter({ hz, children }){
  return <p className="chapter"><span className="hz" aria-hidden="true">{hz}</span>{children}</p>;
}

export default Chapter;
