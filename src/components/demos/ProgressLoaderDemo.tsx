import { useState, useEffect } from 'react';

export default function ProgressLoaderDemo() {
  const [pct, setPct] = useState(0);
  const [running, setRunning] = useState(false);

  const start = () => {
    setPct(0); setRunning(true);
    let v = 0;
    const t = setInterval(() => {
      v += Math.random() * 8 + 2;
      if (v >= 100) { v = 100; clearInterval(t); setTimeout(() => { setRunning(false); setPct(0); }, 1200); }
      setPct(Math.min(v, 100));
    }, 120);
  };

  return (
    <div className="demo-container" style={{ background:'#070707', flex:1, display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', gap:40, padding:32 }}>
      <style>{`@keyframes shimmerBar{0%{background-position:-400px 0}100%{background-position:400px 0}} @keyframes indeterminate{0%{transform:translateX(-100%)}100%{transform:translateX(400%)}}`}</style>

      {/* Linear determinate */}
      <div style={{ width:'100%', maxWidth:360 }}>
        <div style={{ display:'flex', justifyContent:'space-between', marginBottom:8 }}>
          <span style={{ color:'#555', fontSize:12 }}>Upload progress</span>
          <span style={{ color:'#6366F1', fontSize:12, fontWeight:700 }}>{Math.round(pct)}%</span>
        </div>
        <div style={{ height:6, background:'#111', borderRadius:3, overflow:'hidden' }}>
          <div style={{ height:'100%', width:`${pct}%`, background:'linear-gradient(90deg,#6366F1,#EC4899)', borderRadius:3, transition:'width 0.1s linear', boxShadow:'0 0 10px rgba(99,102,241,0.5)' }} />
        </div>
      </div>

      {/* Segmented */}
      <div style={{ width:'100%', maxWidth:360 }}>
        <div style={{ color:'#555', fontSize:12, marginBottom:8 }}>Step progress</div>
        <div style={{ display:'flex', gap:4 }}>
          {[1,2,3,4,5].map(i => (
            <div key={i} style={{ flex:1, height:6, borderRadius:3, background: pct >= i*20 ? '#6366F1' : '#1a1a1a', transition:'background 0.3s ease', transitionDelay:`${i*0.05}s` }} />
          ))}
        </div>
      </div>

      {/* Indeterminate */}
      <div style={{ width:'100%', maxWidth:360 }}>
        <div style={{ color:'#555', fontSize:12, marginBottom:8 }}>Indeterminate (loading…)</div>
        <div style={{ height:4, background:'#111', borderRadius:2, overflow:'hidden', position:'relative' }}>
          <div style={{ position:'absolute', top:0, left:0, height:'100%', width:'40%', background:'linear-gradient(90deg,transparent,#6366F1,transparent)', animation:'indeterminate 1.4s ease infinite' }} />
        </div>
      </div>

      <button onClick={start} disabled={running} style={{ padding:'10px 28px', borderRadius:8, background:'#6366F1', border:'none', color:'white', fontWeight:700, cursor:running?'not-allowed':'pointer' }}>
        {running ? 'Running…' : 'Simulate Upload'}
      </button>
    </div>
  );
}
