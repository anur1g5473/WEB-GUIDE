import { useState } from 'react';

const faces = [
  { bg:'#0a0a1a', icon:'⚡', label:'Speed' },
  { bg:'#1a0a0a', icon:'🔒', label:'Security' },
  { bg:'#0a1a0a', icon:'🚀', label:'Deploy' },
  { bg:'#1a1a0a', icon:'📊', label:'Data' },
  { bg:'#0a1a1a', icon:'🤝', label:'Team' },
  { bg:'#1a0a1a', icon:'🧠', label:'AI' },
];

export default function CSSCubeDemo() {
  const [paused, setPaused] = useState(false);
  const s = 100;

  return (
    <div className="demo-container" style={{ background:'#050505', flex:1, display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', gap:24 }}>
      <style>{`@keyframes rotateCube{0%{transform:rotateX(-20deg) rotateY(0deg)} 100%{transform:rotateX(-20deg) rotateY(360deg)}}`}</style>
      <div style={{ perspective:500 }} onClick={() => setPaused(p => !p)}>
        <div style={{ width:s, height:s, transformStyle:'preserve-3d', animation:`rotateCube 6s linear infinite`, animationPlayState: paused?'paused':'running' }}>
          {/* front */}
          <div style={{ position:'absolute', width:s, height:s, background:faces[0].bg, border:'1px solid rgba(99,102,241,0.3)', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', transform:`translateZ(${s/2}px)`, gap:4 }}>
            <span style={{fontSize:28}}>{faces[0].icon}</span><span style={{fontSize:10,color:'#555'}}>{faces[0].label}</span>
          </div>
          {/* back */}
          <div style={{ position:'absolute', width:s, height:s, background:faces[1].bg, border:'1px solid rgba(236,72,153,0.3)', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', transform:`rotateY(180deg) translateZ(${s/2}px)`, gap:4 }}>
            <span style={{fontSize:28}}>{faces[1].icon}</span><span style={{fontSize:10,color:'#555'}}>{faces[1].label}</span>
          </div>
          {/* left */}
          <div style={{ position:'absolute', width:s, height:s, background:faces[2].bg, border:'1px solid rgba(59,130,246,0.3)', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', transform:`rotateY(-90deg) translateZ(${s/2}px)`, gap:4 }}>
            <span style={{fontSize:28}}>{faces[2].icon}</span><span style={{fontSize:10,color:'#555'}}>{faces[2].label}</span>
          </div>
          {/* right */}
          <div style={{ position:'absolute', width:s, height:s, background:faces[3].bg, border:'1px solid rgba(16,185,129,0.3)', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', transform:`rotateY(90deg) translateZ(${s/2}px)`, gap:4 }}>
            <span style={{fontSize:28}}>{faces[3].icon}</span><span style={{fontSize:10,color:'#555'}}>{faces[3].label}</span>
          </div>
          {/* top */}
          <div style={{ position:'absolute', width:s, height:s, background:faces[4].bg, border:'1px solid rgba(245,158,11,0.3)', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', transform:`rotateX(90deg) translateZ(${s/2}px)`, gap:4 }}>
            <span style={{fontSize:28}}>{faces[4].icon}</span><span style={{fontSize:10,color:'#555'}}>{faces[4].label}</span>
          </div>
          {/* bottom */}
          <div style={{ position:'absolute', width:s, height:s, background:faces[5].bg, border:'1px solid rgba(139,92,246,0.3)', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', transform:`rotateX(-90deg) translateZ(${s/2}px)`, gap:4 }}>
            <span style={{fontSize:28}}>{faces[5].icon}</span><span style={{fontSize:10,color:'#555'}}>{faces[5].label}</span>
          </div>
        </div>
      </div>
      <p style={{ color:'#2a2a2a', fontSize:11, letterSpacing:'0.1em' }}>CLICK TO {paused?'RESUME':'PAUSE'}</p>
    </div>
  );
}
