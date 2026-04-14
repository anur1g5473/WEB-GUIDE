import { useEffect, useState } from 'react';

export default function OrchestratedSequenceDemo() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setStep(s => (s + 1) % 5);
    }, 1500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="demo-container" style={{ background: '#050505', display: 'flex', flexDirection: 'column', padding: '40px', gap: '12px' }}>
      <style>{`
        .orch-item {
          height: 12px;
          border-radius: 6px;
          background: #1a1a1a;
          transition: all 0.5s ease;
          opacity: 0.3;
        }
        .orch-item.active {
          background: #6366f1;
          opacity: 1;
          transform: translateX(10px);
        }
        .orch-circle {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: #111;
          transition: all 0.5s ease;
        }
        .orch-circle.active {
          background: #ec4899;
          transform: scale(1.2);
        }
      `}</style>
      
      <div style={{ display: 'flex', gap: '20px', alignItems: 'center', marginBottom: '20px' }}>
        {[0, 1, 2].map(i => (
          <div key={i} className={`orch-circle ${step === i ? 'active' : ''}`} />
        ))}
      </div>

      {[0, 1, 2, 3, 4].map(i => (
        <div 
          key={i} 
          className={`orch-item ${step === i ? 'active' : ''}`} 
          style={{ width: `${60 + i * 10}%` }} 
        />
      ))}

      <div style={{ marginTop: '20px', color: '#333', fontSize: '12px' }}>
        Phase: {step + 1} / 5
      </div>
    </div>
  );
}
