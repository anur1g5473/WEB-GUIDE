import { useRef } from 'react';

const cards = [
  { title: 'Stripe', sub: 'Payments infrastructure', color: '#6366F1', icon: '💳' },
  { title: 'Vercel', sub: 'Deployment platform', color: '#EC4899', icon: '▲' },
  { title: 'Linear', sub: 'Issue tracker', color: '#3B82F6', icon: '⬡' },
];

export default function TiltEffectDemo() {
  const refs = useRef<(HTMLDivElement|null)[]>([]);
  const shineRefs = useRef<(HTMLDivElement|null)[]>([]);

  const handleMove = (e: React.MouseEvent, i: number) => {
    const el = refs.current[i]; const shine = shineRefs.current[i];
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    const rotX = (y - 0.5) * -20;
    const rotY = (x - 0.5) * 20;
    el.style.transform = `perspective(600px) rotateX(${rotX}deg) rotateY(${rotY}deg) scale(1.04)`;
    if (shine) shine.style.background = `radial-gradient(circle at ${x*100}% ${y*100}%, rgba(255,255,255,0.15) 0%, transparent 60%)`;
  };

  const handleLeave = (i: number) => {
    if (refs.current[i]) refs.current[i]!.style.transform = 'perspective(600px) rotateX(0deg) rotateY(0deg) scale(1)';
    if (shineRefs.current[i]) shineRefs.current[i]!.style.background = 'transparent';
  };

  return (
    <div className="demo-container" style={{ background:'#060606', flex:1, display:'flex', alignItems:'center', justifyContent:'center', gap:20, padding:24 }}>
      {cards.map((c, i) => (
        <div key={i} ref={el=>{refs.current[i]=el;}} onMouseMove={e=>handleMove(e,i)} onMouseLeave={()=>handleLeave(i)}
          style={{ width:150, height:200, background:`linear-gradient(145deg, ${c.color}22, ${c.color}11)`, border:`1px solid ${c.color}33`, borderRadius:16, padding:20, cursor:'default', position:'relative', overflow:'hidden', transition:'transform 0.1s ease, box-shadow 0.2s ease', display:'flex', flexDirection:'column', justifyContent:'flex-end', boxShadow:`0 8px 32px ${c.color}22` }}>
          {/* Shine overlay */}
          <div ref={el=>{shineRefs.current[i]=el;}} style={{ position:'absolute', inset:0, borderRadius:'inherit', transition:'background 0.1s', pointerEvents:'none' }} />
          <div style={{ fontSize:36, marginBottom:12 }}>{c.icon}</div>
          <div style={{ color:'white', fontWeight:800, fontSize:15 }}>{c.title}</div>
          <div style={{ color:'rgba(255,255,255,0.4)', fontSize:11, marginTop:4 }}>{c.sub}</div>
        </div>
      ))}
    </div>
  );
}
