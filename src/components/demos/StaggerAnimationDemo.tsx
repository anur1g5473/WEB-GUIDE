import { useEffect, useState } from 'react';

export default function StaggerAnimationDemo() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <div className="demo-container" style={{ background: '#050505', padding: '40px' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
        {Array.from({ length: 9 }).map((_, i) => (
          <div
            key={i}
            style={{
              height: '80px',
              background: '#111',
              borderRadius: '12px',
              border: '1px solid #1a1a1a',
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(20px)',
              transition: `all 0.6s cubic-bezier(0.23, 1, 0.32, 1)`,
              transitionDelay: `${i * 100}ms`
            }}
          />
        ))}
      </div>
      <button 
        onClick={() => { setVisible(false); setTimeout(() => setVisible(true), 100); }}
        style={{ marginTop: '24px', width: '100%', padding: '12px', background: '#6366f1', color: '#fff', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold' }}
      >
        Replay
      </button>
    </div>
  );
}
