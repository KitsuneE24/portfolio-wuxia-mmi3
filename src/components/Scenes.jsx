// Illustrations de remplacement : à substituer par tes captures.
// Les couleurs viennent des variables CSS, donc elles suivent l'ambiance choisie.
export function InkArt({ variant=0, moon=true }){
  const id = "g"+variant+(moon?"m":"n");
  const mx = variant===1?110:290;
  return (
    <svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" className="s-sky1"/><stop offset="1" className="s-sky2"/>
        </linearGradient>
      </defs>
      <rect width="400" height="300" fill={`url(#${id})`}/>
      {moon && <circle cx={mx} cy="90" r="42" className="f-moon"/>}
      <path d="M0 210 Q60 140 110 180 T220 150 T330 175 T400 140 V300 H0Z" className="f-m1"/>
      <path d={variant===2?"M0 235 L70 175 L130 220 L200 160 L270 225 L340 190 L400 230 V300 H0Z":"M0 240 Q80 190 150 225 T290 205 T400 230 V300 H0Z"} className="f-m2"/>
      <path d="M0 270 Q100 245 200 262 T400 255 V300 H0Z" className="f-m3"/>
      <g className="st-branch" strokeWidth="2.4" fill="none" strokeLinecap="round">
        <path d="M400 40 Q340 60 300 100 Q280 120 250 125"/><path d="M330 72 Q320 50 300 45"/><path d="M290 108 Q300 128 290 145"/>
      </g>
      <g className="f-blossom">
        {[[300,45],[250,125],[290,145],[322,66],[270,116],[345,58],[312,88]].map(([x,y],i)=><circle key={i} cx={x} cy={y} r="4"/>)}
      </g>
      <g className="st-bird" strokeWidth="1.4" fill="none">
        <path d="M150 70 q6 -5 12 0 q6 -5 12 0"/><path d="M185 55 q4 -3 8 0 q4 -3 8 0"/>
      </g>
    </svg>
  );
}

export function HeroScene(){
  return (
    <svg viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs>
        <radialGradient id="glow" cx="72%" cy="38%" r="55%">
          <stop offset="0" className="s-glow" stopOpacity=".7"/><stop offset="1" className="s-bg" stopOpacity="0"/>
        </radialGradient>
        <linearGradient id="mist" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" className="s-bg" stopOpacity="0"/><stop offset="1" className="s-bg"/>
        </linearGradient>
      </defs>
      <rect width="1440" height="900" fill="url(#glow)"/>
      <path d="M0 640 Q180 520 320 590 T640 540 T980 600 T1440 520 V900 H0Z" className="f-m1" opacity=".55"/>
      <path d="M0 720 Q220 650 420 700 T860 670 T1440 710 V900 H0Z" className="f-m2" opacity=".45"/>
      <rect y="560" width="1440" height="340" fill="url(#mist)"/>
      <g className="st-branch" strokeWidth="3.5" fill="none" strokeLinecap="round" opacity=".75">
        <path d="M0 120 Q120 150 200 230 Q240 270 300 280"/><path d="M130 165 Q150 120 190 110"/><path d="M230 250 Q220 300 250 330"/>
      </g>
      <g className="f-blossom" opacity=".85">
        {[[190,110],[300,280],[250,330],[160,150],[270,265],[215,200],[120,140]].map(([x,y],i)=><circle key={i} cx={x} cy={y} r="6"/>)}
      </g>
    </svg>
  );
}

export function GateScene(){
  return (
    <svg viewBox="0 0 400 400" aria-hidden="true">
      <defs>
        <linearGradient id="gsky" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" className="s-sky1"/><stop offset="1" className="s-sky2"/>
        </linearGradient>
      </defs>
      <rect width="400" height="400" fill="url(#gsky)"/>
      <circle cx="255" cy="130" r="50" className="f-moon"/>
      <path d="M0 250 L60 185 L110 230 L170 145 L240 240 L300 195 L400 265 V400 H0Z" className="f-m1"/>
      {/* pavillon */}
      <g className="f-m3">
        <path d="M150 262 h100 l-10 -8 h-80z"/><rect x="170" y="262" width="4" height="40"/><rect x="226" y="262" width="4" height="40"/>
        <path d="M160 244 Q200 228 240 244 l6 6 h-112z"/><rect x="176" y="250" width="48" height="8"/>
      </g>
      <path d="M0 300 Q90 262 170 296 T400 290 V400 H0Z" className="f-m2"/>
      <path d="M0 345 Q200 320 400 345 V400 H0Z" className="f-m3"/>
      <g className="st-bird" strokeWidth="1.8" fill="none">
        <path d="M90 110 q9 -7 18 0 q9 -7 18 0"/><path d="M135 90 q6 -4 12 0 q6 -4 12 0"/><path d="M60 140 q5 -3 10 0 q5 -3 10 0"/>
      </g>
      {/* branche fruitée au premier plan (image 4) */}
      <g className="st-branch" strokeWidth="4" fill="none" strokeLinecap="round">
        <path d="M400 20 Q330 40 300 80 Q280 105 240 112"/><path d="M340 38 Q350 70 335 95"/>
      </g>
      <g className="f-blossom">
        {[[240,112],[300,80],[335,95],[318,56],[270,100],[352,70],[285,62]].map(([x,y],i)=><circle key={i} cx={x} cy={y} r="6"/>)}
      </g>
    </svg>
  );
}
