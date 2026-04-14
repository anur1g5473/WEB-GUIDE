import { useRef } from 'react';

const projects = [
  { title: 'Brand Identity', year: '2024', color: '#6366F1' },
  { title: 'E-commerce Platform', year: '2024', color: '#EC4899' },
  { title: 'Mobile Banking App', year: '2023', color: '#3B82F6' },
  { title: '3D Web Experience', year: '2023', color: '#10B981' },
];

export default function ImageRevealDemo() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);
  const activeIdx = useRef(-1);

  const move = (e: React.MouseEvent) => {
    const rect = wrapperRef.current?.getBoundingClientRect();
    if (!rect || !imgRef.current) return;
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    imgRef.current.style.left = x + 20 + 'px';
    imgRef.current.style.top = y - 60 + 'px';
  };

  const enter = (i: number) => {
    activeIdx.current = i;
    if (imgRef.current) {
      const p = projects[i];
      imgRef.current.style.opacity = '1';
      imgRef.current.style.transform = 'scale(1) rotate(-2deg)';
      imgRef.current.style.background = `linear-gradient(135deg, ${p.color}88, ${p.color})`;
    }
  };

  const leave = () => {
    activeIdx.current = -1;
    if (imgRef.current) { imgRef.current.style.opacity = '0'; imgRef.current.style.transform = 'scale(0.85)'; }
  };

  return (
    <div ref={wrapperRef} className="demo-container" style={{ background:'#070707', flex:1, position:'relative', overflow:'hidden', padding:'20px 32px', display:'flex', flexDirection:'column', justifyContent:'center', cursor:'none' }}
      onMouseMove={move}>
      {/* Floating preview image */}
      <div ref={imgRef} style={{ position:'absolute', width:180, height:120, borderRadius:12, opacity:0, transform:'scale(0.85)', transition:'opacity 0.3s ease, transform 0.4s cubic-bezier(0.34,1.56,0.64,1)', pointerEvents:'none', zIndex:10, display:'flex', alignItems:'center', justifyContent:'center', fontSize:40 }}>
        🖼
      </div>

      <div style={{ color:'#2a2a2a', fontSize:11, letterSpacing:'0.12em', textTransform:'uppercase', marginBottom:24 }}>Selected Work</div>

      {projects.map((p, i) => (
        <div key={i} onMouseEnter={()=>enter(i)} onMouseLeave={leave}
          style={{ display:'flex', alignItems:'center', justifyContent:'space-between', padding:'20px 0', borderBottom:'1px solid #111', cursor:'none' }}>
          <span style={{ fontSize:22, fontWeight:800, color:'white', letterSpacing:-0.5, transition:'color 0.2s' }}>{p.title}</span>
          <span style={{ fontSize:13, color:'#333' }}>{p.year}</span>
        </div>
      ))}
    </div>
  );
}
