import { useRef } from 'react';

const cards = [
  { title:'Performance', sub:'Edge delivery globally', icon:'⚡' },
  { title:'Security', sub:'SOC 2 certified', icon:'🔒' },
  { title:'Analytics', sub:'Real-time insights', icon:'📊' },
  { title:'Deploy', sub:'One-click deploys', icon:'🚀' },
  { title:'Teamwork', sub:'Live collaboration', icon:'🤝' },
  { title:'AI Native', sub:'Built for LLMs', icon:'🧠' },
];

export default function HoverGlowDemo() {
  const refs = useRef<(HTMLDivElement|null)[]>([]);

  const handleMove = (e: React.MouseEvent, i: number) => {
    const el = refs.current[i];
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    el.style.setProperty('--glow-x', `${x}px`);
    el.style.setProperty('--glow-y', `${y}px`);
    el.style.setProperty('--glow-opacity', '1');
  };

  const handleLeave = (i: number) => {
    refs.current[i]?.style.setProperty('--glow-opacity', '0');
  };

  return (
    <div className="demo-container" style={{ background:'#050505', flex:1, padding:20 }}>
      <style>{`
        .glow-card { position:relative; overflow:hidden; }
        .glow-card::before {
          content:''; position:absolute; inset:0; border-radius:inherit;
          background: radial-gradient(circle 120px at var(--glow-x) var(--glow-y), rgba(99,102,241,0.15), transparent 80%);
          opacity: var(--glow-opacity, 0); transition: opacity 0.3s ease; pointer-events:none; z-index:1;
        }
        .glow-card::after {
          content:''; position:absolute; inset:0; border-radius:inherit;
          background: radial-gradient(circle 80px at var(--glow-x) var(--glow-y), rgba(99,102,241,0.4), transparent 70%);
          opacity: var(--glow-opacity, 0); transition: opacity 0.3s ease; pointer-events:none; z-index:2;
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor; mask-composite: exclude;
          padding:1px;
        }
      `}</style>
      <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:10, height:'100%' }}>
        {cards.map((c, i) => (
          <div key={i} ref={el => { refs.current[i] = el; }} className="glow-card"
            style={{ background:'#0f0f0f', border:'1px solid #1a1a1a', borderRadius:12, padding:16, cursor:'default' }}
            onMouseMove={e => handleMove(e, i)} onMouseLeave={() => handleLeave(i)}>
            <div style={{ fontSize:24, marginBottom:8, position:'relative', zIndex:3 }}>{c.icon}</div>
            <div style={{ fontSize:13, fontWeight:700, color:'white', marginBottom:4, position:'relative', zIndex:3 }}>{c.title}</div>
            <div style={{ fontSize:11, color:'#444', position:'relative', zIndex:3 }}>{c.sub}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
