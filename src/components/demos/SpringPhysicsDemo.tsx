import { useState } from 'react';

export default function SpringPhysicsDemo() {
  const [active, setActive] = useState(false);

  return (
    <div className="demo-container" style={{ background: '#0a0a0a', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '40px' }}>
      <style>{`
        @keyframes spring {
          0% { transform: scale(1); }
          20% { transform: scale(1.4, 0.7); }
          40% { transform: scale(0.8, 1.2); }
          60% { transform: scale(1.1, 0.9); }
          80% { transform: scale(0.95, 1.05); }
          100% { transform: scale(1); }
        }
        .spring-box {
          width: 80px;
          height: 80px;
          background: #6366f1;
          border-radius: 20px;
          cursor: pointer;
          box-shadow: 0 0 30px rgba(99, 102, 241, 0.4);
        }
        .spring-box.active {
          animation: spring 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
      `}</style>

      <div 
        className={`spring-box ${active ? 'active' : ''}`}
        onClick={() => {
          setActive(false);
          setTimeout(() => setActive(true), 10);
        }}
      />

      <div style={{ color: '#444', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '1px' }}>
        Click to see spring physics
      </div>
    </div>
  );
}
