import { useEffect, useState } from 'react';

const data = [40, 70, 45, 90, 65, 80, 55];

export default function BarChartDemo() {
  const [vals, setVals] = useState(data.map(() => 0));

  useEffect(() => {
    const timer = setTimeout(() => setVals(data), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="demo-container" style={{ background: '#0a0a0a', display: 'flex', alignItems: 'flex-end', justifyContent: 'center', gap: '8px', padding: '40px' }}>
      {vals.map((v, i) => (
        <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
          <div style={{ 
            width: '32px', 
            height: `${v * 1.5}px`, 
            background: 'linear-gradient(to top, #6366f1, #a855f7)', 
            borderRadius: '6px 6px 0 0',
            transition: 'height 1s cubic-bezier(0.34, 1.56, 0.64, 1)',
            transitionDelay: `${i * 100}ms`
          }} />
          <div style={{ fontSize: '10px', color: '#444', fontWeight: 'bold' }}>M T W T F S S'[i*2]</div>
        </div>
      ))}
    </div>
  );
}
