import { useEffect, useRef, useState } from 'react';

export default function CustomCursorDemo() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;
    let rx = 0, ry = 0;
    const move = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left, y = e.clientY - rect.top;
      if (dotRef.current) { dotRef.current.style.left = x+'px'; dotRef.current.style.top = y+'px'; }
      rx += (x - rx) * 0.12; ry += (y - ry) * 0.12;
      if (ringRef.current) { ringRef.current.style.left = rx+'px'; ringRef.current.style.top = ry+'px'; }
    };
    let raf: number;
    const loop = () => { move({ clientX: parseFloat(ringRef.current?.style.left || '0'), clientY: parseFloat(ringRef.current?.style.top || '0') } as MouseEvent); raf = requestAnimationFrame(loop); };
    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left, y = e.clientY - rect.top;
      if (dotRef.current) { dotRef.current.style.left = x+'px'; dotRef.current.style.top = y+'px'; }
      rx = x; ry = y;
    };
    el.addEventListener('mousemove', onMove);
    return () => { el.removeEventListener('mousemove', onMove); cancelAnimationFrame(raf); };
  }, []);

  return (
    <div ref={wrapperRef} className="demo-container" style={{ background:'#050505', flex:1, cursor:'none', position:'relative', display:'flex', alignItems:'center', justifyContent:'center', flexDirection:'column', gap:24 }}>
      {/* Dot */}
      <div ref={dotRef} style={{ position:'absolute', width:8, height:8, borderRadius:'50%', background:'#6366F1', transform:'translate(-50%,-50%)', pointerEvents:'none', zIndex:20, transition:'transform 0.1s, width 0.2s, height 0.2s' }} />
      {/* Ring */}
      <div ref={ringRef} style={{ position:'absolute', width: hovered?48:28, height: hovered?48:28, borderRadius:'50%', border:`1.5px solid ${hovered?'#EC4899':'rgba(99,102,241,0.6)'}`, transform:'translate(-50%,-50%)', pointerEvents:'none', zIndex:19, transition:'width 0.3s ease, height 0.3s ease, border-color 0.3s ease' }} />

      <p style={{ color:'#222', fontSize:12, letterSpacing:'0.1em', textTransform:'uppercase', pointerEvents:'none' }}>Move your mouse</p>

      <div style={{ display:'flex', gap:16 }}>
        {['Hover Me','Click Me','Try Me'].map((l, i) => (
          <button key={i} onMouseEnter={()=>setHovered(true)} onMouseLeave={()=>setHovered(false)}
            style={{ padding:'12px 20px', borderRadius:10, border:'1px solid #1e1e1e', background:'#111', color:'rgba(255,255,255,0.7)', fontWeight:600, fontSize:13, cursor:'none', transition:'all 0.2s ease' }}
            onMouseDown={e=>(e.currentTarget.style.transform='scale(0.95)')} onMouseUp={e=>(e.currentTarget.style.transform='scale(1)')}>
            {l}
          </button>
        ))}
      </div>
    </div>
  );
}
