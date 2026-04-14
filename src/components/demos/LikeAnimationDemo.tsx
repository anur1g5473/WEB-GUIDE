import { useState } from 'react';

const CHARS = '✦★◆▲●○◇△';

function Particle({ style }: { style: React.CSSProperties }) {
  return <div style={{ position:'absolute', width:6, height:6, borderRadius:'50%', background:'#EC4899', ...style }} />;
}

export default function LikeAnimationDemo() {
  const [liked, setLiked] = useState(false);
  const [count, setCount] = useState(1284);
  const [burst, setBurst] = useState(false);

  const handleLike = () => {
    const newLiked = !liked;
    setLiked(newLiked);
    setCount(c => newLiked ? c+1 : c-1);
    if (newLiked) { setBurst(true); setTimeout(() => setBurst(false), 700); }
  };

  const particles = burst ? Array.from({length:8}, (_, i) => {
    const angle = (i/8)*360;
    const r = 40 + Math.random()*20;
    return { transform:`rotate(${angle}deg) translate(${r}px) scale(0)`, opacity:0, animation:`particle 0.6s ease-out forwards`, animationDelay:`${i*0.03}s` };
  }) : [];

  return (
    <div className="demo-container" style={{ background:'#050505', flex:1, display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', gap:40 }}>
      <style>{`
        @keyframes particle { 0%{transform:rotate(var(--a)) translate(20px) scale(1);opacity:1} 100%{transform:rotate(var(--a)) translate(60px) scale(0);opacity:0} }
        @keyframes likebeat { 0%{transform:scale(1)} 30%{transform:scale(1.4)} 60%{transform:scale(0.9)} 100%{transform:scale(1)} }
      `}</style>

      <div style={{ position:'relative', display:'flex', alignItems:'center', justifyContent:'center' }}>
        {burst && Array.from({length:8}, (_,i) => {
          const angle = (i/8)*Math.PI*2;
          const x = Math.cos(angle)*50; const y = Math.sin(angle)*50;
          return <div key={i} style={{ position:'absolute', width:8,height:8,borderRadius:'50%', background: i%2===0?'#EC4899':'#F472B6', transform:`translate(${x}px,${y}px) scale(0)`, animation:'particleOut 0.6s ease-out forwards', animationDelay:`${i*0.04}s` }} />;
        })}
        <style>{`@keyframes particleOut{0%{transform:translate(0,0) scale(1);opacity:1}100%{transform:translate(var(--tx),var(--ty)) scale(0);opacity:0}}`}</style>

        <button onClick={handleLike} style={{ background:'none', border:'none', cursor:'pointer', padding:0, animation: liked && burst ? 'likebeat 0.5s ease forwards' : 'none' }}>
          <svg width="56" height="56" viewBox="0 0 24 24" fill={liked ? '#EC4899':'none'} stroke={liked ? '#EC4899':'#555'} strokeWidth="1.5"
            style={{ transition:'all 0.3s cubic-bezier(0.34,1.56,0.64,1)', filter: liked ? 'drop-shadow(0 0 12px rgba(236,72,153,0.6))' : 'none', display:'block' }}>
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
          </svg>
        </button>
      </div>

      <div style={{ color:'rgba(255,255,255,0.4)', fontSize:14 }}>
        <span style={{ color: liked?'#EC4899':'rgba(255,255,255,0.4)', fontWeight:700, fontSize:18, transition:'color 0.3s', marginRight:8 }}>
          {count.toLocaleString()}
        </span>
        likes
      </div>
    </div>
  );
}
