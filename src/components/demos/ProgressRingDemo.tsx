import { useState, useEffect } from 'react';

export default function ProgressRingDemo() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setProgress(75), 500);
    return () => clearTimeout(timer);
  }, []);

  const radius = 70;
  const stroke = 8;
  const normalizedRadius = radius - stroke * 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <div className="demo-container" style={{ background: '#080808', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '20px' }}>
      <div style={{ position: 'relative', width: radius * 2, height: radius * 2 }}>
        <svg
          height={radius * 2}
          width={radius * 2}
          style={{ transform: 'rotate(-90deg)' }}
        >
          <circle
            stroke="#1a1a1a"
            fill="transparent"
            strokeWidth={stroke}
            r={normalizedRadius}
            cx={radius}
            cy={radius}
          />
          <circle
            stroke="#6366f1"
            fill="transparent"
            strokeWidth={stroke}
            strokeDasharray={circumference + ' ' + circumference}
            style={{ 
              strokeDashoffset, 
              transition: 'stroke-dashoffset 1s cubic-bezier(0.4, 0, 0.2, 1)',
              strokeLinecap: 'round'
            }}
            r={normalizedRadius}
            cx={radius}
            cy={radius}
          />
        </svg>
        <div style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '24px',
          fontWeight: '900',
          color: '#fff'
        }}>
          {progress}%
        </div>
      </div>
      
      <button 
        onClick={() => setProgress(Math.floor(Math.random() * 100))}
        style={{
          padding: '8px 16px',
          background: '#1a1a1a',
          border: '1px solid #333',
          color: '#fff',
          borderRadius: '8px',
          cursor: 'pointer'
        }}
      >
        Randomize
      </button>
    </div>
  );
}
