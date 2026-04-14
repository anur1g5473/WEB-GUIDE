import { useState } from 'react';

export default function CardFlipDemo() {
  const [flipped, setFlipped] = useState<boolean[]>([false,false,false]);
  const toggle = (i:number) => setFlipped(f => f.map((v,idx)=>idx===i?!v:v));
  
  const cards = [
    { frontColor:'#6366F1', icon:'⚡', title:'Speed', backTitle:'How it works', backText:'Edge-cached static sites deliver in under 30ms globally.' },
    { frontColor:'#EC4899', icon:'🔒', title:'Security', backTitle:'Zero-trust model', backText:'Every request authenticated. SOC 2 Type II certified.' },
    { frontColor:'#10B981', icon:'🚀', title:'Deploy', backTitle:'One command', backText:'git push and your site is live in seconds. No config needed.' },
  ];

  return (
    <div className="demo-container" style={{ background:'#080808', flex:1, display:'flex', alignItems:'center', justifyContent:'center', gap:20, padding:20 }}>
      <style>{`.flip-card{perspective:800px}.flip-inner{position:relative;width:100%;height:100%;transform-style:preserve-3d;transition:transform 0.6s cubic-bezier(0.34,1.2,0.64,1)}.flip-inner.flipped{transform:rotateY(180deg)}.flip-front,.flip-back{position:absolute;inset:0;backface-visibility:hidden;border-radius:16px;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:24px;text-align:center}.flip-back{transform:rotateY(180deg)}`}</style>
      {cards.map((c, i) => (
        <div key={i} className="flip-card" style={{ width:150, height:200, cursor:'pointer', flexShrink:0 }} onClick={()=>toggle(i)}>
          <div className={`flip-inner ${flipped[i]?'flipped':''}`}>
            <div className="flip-front" style={{ background:`linear-gradient(135deg, ${c.frontColor}cc, ${c.frontColor})`, boxShadow:`0 12px 40px ${c.frontColor}40` }}>
              <div style={{ fontSize:40, marginBottom:12 }}>{c.icon}</div>
              <div style={{ color:'white', fontWeight:800, fontSize:18 }}>{c.title}</div>
              <div style={{ color:'rgba(255,255,255,0.5)', fontSize:11, marginTop:8 }}>Click to flip</div>
            </div>
            <div className="flip-back" style={{ background:'#111', border:`1px solid ${c.frontColor}40` }}>
              <div style={{ color:c.frontColor, fontWeight:700, fontSize:13, marginBottom:10 }}>{c.backTitle}</div>
              <div style={{ color:'rgba(255,255,255,0.5)', fontSize:11, lineHeight:1.6 }}>{c.backText}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
