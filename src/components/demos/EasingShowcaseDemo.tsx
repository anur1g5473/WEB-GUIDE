import { useState } from 'react';

export default function EasingShowcaseDemo() {
  const [running, setRunning] = useState(false);
  const [key, setKey] = useState(0);

  const play = () => { setRunning(false); setTimeout(() => { setKey(k=>k+1); setRunning(true); }, 50); };

  const easings = [
    { label:'linear', val:'linear', color:'#6366F1' },
    { label:'ease', val:'ease', color:'#3B82F6' },
    { label:'ease-out', val:'ease-out', color:'#10B981' },
    { label:'ease-in-out', val:'ease-in-out', color:'#F59E0B' },
    { label:'spring', val:'cubic-bezier(0.34,1.56,0.64,1)', color:'#EC4899' },
  ];

  return (
    <div className="demo-container" style={{ background:'#050505', flex:1, display:'flex', flexDirection:'column', padding:20, gap:8 }}>
      <style>{`@keyframes ballMove{from{transform:translateX(0)}to{transform:translateX(200px)}}`}</style>
      <div style={{ color:'#333', fontSize:11, letterSpacing:'0.1em', textTransform:'uppercase', marginBottom:4 }}>Click Play to compare</div>
      {easings.map((e, i) => (
        <div key={`${key}-${i}`} style={{ display:'flex', alignItems:'center', gap:12 }}>
          <span style={{ color:'#444', fontSize:11, fontFamily:'monospace', width:180, flexShrink:0 }}>{e.label}</span>
          <div style={{ flex:1, height:32, borderRadius:4, background:'#0f0f0f', position:'relative', overflow:'hidden' }}>
            <div style={{
              position:'absolute', top:'50%', transform:'translateY(-50%)',
              width:20, height:20, borderRadius:'50%', background:e.color,
              boxShadow:`0 0 12px ${e.color}88`,
              animation: running ? `ballMove 1s ${e.val} forwards` : 'none',
            }}/>
          </div>
        </div>
      ))}
      <button onClick={play} style={{ marginTop:8, padding:'10px 0', borderRadius:8, background:'#6366F1', border:'none', color:'white', fontWeight:700, cursor:'pointer' }}>
        ▶ Play
      </button>
    </div>
  );
}
