import { useState, useEffect, useRef } from 'react';

export default function TextScrambleDemo() {
  const targets = ['DESIGN', 'CREATE', 'INSPIRE', 'LAUNCH'];
  const [idx, setIdx] = useState(0);
  const [display, setDisplay] = useState(targets[0]);
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%&?';
  const timerRef = useRef<ReturnType<typeof setTimeout>|null>(null);

  const scramble = (target: string) => {
    let iter = 0;
    const interval = setInterval(() => {
      setDisplay(prev =>
        target.split('').map((ch, i) => i < iter ? ch : chars[Math.floor(Math.random()*chars.length)]).join('')
      );
      if (iter >= target.length) clearInterval(interval);
      iter += 0.4;
    }, 50);
  };

  useEffect(() => {
    const cycle = () => {
      setIdx(i => { const next = (i+1) % targets.length; scramble(targets[next]); return next; });
      timerRef.current = setTimeout(cycle, 2500);
    };
    timerRef.current = setTimeout(cycle, 2000);
    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
  }, []);

  return (
    <div className="demo-container" style={{ background:'#050505', flex:1, display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', gap:20 }}>
      <div style={{ fontFamily:'Courier New, monospace', fontSize:64, fontWeight:900, letterSpacing:4, color:'#6366F1', userSelect:'none', minWidth:360, textAlign:'center' }}>
        {display}
      </div>
      <div style={{ color:'#2a2a2a', fontSize:12, fontFamily:'monospace', letterSpacing:'0.2em' }}>
        [SCRAMBLING CHARACTERS]
      </div>
    </div>
  );
}
