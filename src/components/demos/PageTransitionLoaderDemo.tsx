import { useState } from 'react';

export default function PageTransitionLoaderDemo() {
  const [loading, setLoading] = useState(false);
  const [pct, setPct] = useState(0);
  const [page, setPage] = useState('Home');
  const pages = ['Home', 'About', 'Work', 'Contact'];

  const navigate = (to: string) => {
    if (loading || to === page) return;
    setLoading(true); setPct(0);
    let v = 0;
    const t = setInterval(() => {
      v += Math.random() * 15 + 5;
      if (v >= 100) { v = 100; clearInterval(t); setTimeout(() => { setPage(to); setLoading(false); setPct(0); }, 200); }
      setPct(Math.min(v, 100));
    }, 80);
  };

  return (
    <div className="demo-container" style={{ background:'#080808', flex:1, display:'flex', flexDirection:'column', position:'relative', overflow:'hidden' }}>
      {/* Top progress bar */}
      <div style={{ position:'absolute', top:0, left:0, right:0, height:3, background:'rgba(255,255,255,0.05)', zIndex:20 }}>
        <div style={{ height:'100%', width:`${pct}%`, background:'linear-gradient(90deg,#6366F1,#EC4899)', transition:'width 0.08s linear', boxShadow:'0 0 8px rgba(99,102,241,0.8)' }} />
      </div>

      {/* Nav */}
      <div style={{ padding:'20px 24px', borderBottom:'1px solid #1a1a1a', display:'flex', gap: 4 }}>
        {pages.map(p => (
          <button key={p} onClick={() => navigate(p)}
            style={{ padding:'8px 16px', borderRadius:8, border:'none', cursor:'pointer',
              background: page===p ? 'rgba(99,102,241,0.15)' : 'transparent',
              color: page===p ? '#818CF8' : '#444', fontWeight:600, fontSize:13, transition:'all 0.2s' }}>
            {p}
          </button>
        ))}
      </div>

      {/* Page content */}
      <div key={page} style={{ flex:1, display:'flex', alignItems:'center', justifyContent:'center', flexDirection:'column', gap:8,
        animation: !loading ? 'fadeInPage 0.4s ease' : 'none', opacity: loading ? 0.3 : 1, transition:'opacity 0.2s' }}>
        <style>{`@keyframes fadeInPage{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}}`}</style>
        <div style={{ fontSize:48, marginBottom:8 }}>{'🏠📖💼📩'[pages.indexOf(page)]}</div>
        <h3 style={{ color:'white', fontSize:28, fontWeight:900, letterSpacing:-1 }}>{page}</h3>
        <p style={{ color:'#333', fontSize:12 }}>Click nav links above to trigger transition</p>
      </div>
    </div>
  );
}
