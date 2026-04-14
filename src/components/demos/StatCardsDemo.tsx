import { useEffect, useRef, useState } from 'react';

const stats = [
  { label:'Active Users', value:40280, prefix:'', suffix:'', color:'#6366F1' },
  { label:'Deployments', value:1200000, prefix:'', suffix:'+', color:'#EC4899' },
  { label:'Uptime SLA', value:99.99, prefix:'', suffix:'%', color:'#10B981' },
  { label:'Avg Latency', value:48, prefix:'', suffix:'ms', color:'#F59E0B' },
];

function useCounter(target: number, duration = 1800) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      obs.disconnect();
      const start = performance.now();
      const tick = (now: number) => {
        const p = Math.min((now - start) / duration, 1);
        const ease = 1 - Math.pow(1 - p, 3);
        setVal(target * ease);
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    }, { threshold: 0.5 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [target, duration]);
  return { val, ref };
}

function Counter({ stat }: { stat: typeof stats[0] }) {
  const { val, ref } = useCounter(stat.value);
  const formatted = stat.value >= 1000000 ? `${(val/1000000).toFixed(1)}M` : stat.value >= 1000 ? `${(val/1000).toFixed(1)}K` : val.toFixed(stat.value % 1 !== 0 ? 2 : 0);
  return (
    <div ref={ref} style={{ background:'#111', border:`1px solid ${stat.color}22`, borderRadius:14, padding:22, textAlign:'center', position:'relative', overflow:'hidden' }}>
      <div style={{ position:'absolute', top:0, left:0, right:0, height:2, background:stat.color }} />
      <div style={{ fontSize:34, fontWeight:900, color:'white', letterSpacing:-1, fontVariantNumeric:'tabular-nums' }}>
        {stat.prefix}{formatted}{stat.suffix}
      </div>
      <div style={{ fontSize:12, color:'#555', marginTop:6 }}>{stat.label}</div>
    </div>
  );
}

export default function StatCardsDemo() {
  return (
    <div className="demo-container" style={{ background:'#080808', flex:1, display:'grid', gridTemplateColumns:'1fr 1fr', gap:12, padding:20, alignContent:'center' }}>
      {stats.map((s,i) => <Counter key={i} stat={s} />)}
    </div>
  );
}
