import { useEffect, useState } from 'react';

const points = [10, 25, 15, 40, 30, 50, 45, 60, 55, 75];

export default function SparklineDemo() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setProgress(1), 500);
    return () => clearTimeout(timer);
  }, []);

  const width = 200;
  const height = 60;
  const pathData = points.map((p, i) => `${(i / (points.length - 1)) * width},${height - p}`).join(' L ');
  
  const pathLength = 300; // Rough estimation

  return (
    <div className="demo-container" style={{ background: '#080808', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '16px' }}>
      <div style={{ background: '#111', padding: '24px', borderRadius: '16px', border: '1px solid #222' }}>
        <div style={{ fontSize: '12px', color: '#444', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '1px' }}>Monthly Users</div>
        <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#fff', marginBottom: '16px' }}>24.8k <span style={{ color: '#10b981', fontSize: '14px' }}>+12%</span></div>
        
        <svg width={width} height={height} style={{ overflow: 'visible' }}>
          <path
            d={`M ${pathData}`}
            fill="none"
            stroke="#6366f1"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeDasharray={pathLength}
            strokeDashoffset={pathLength * (1 - progress)}
            style={{ transition: 'stroke-dashoffset 1.5s ease-out' }}
          />
        </svg>
      </div>
    </div>
  );
}
