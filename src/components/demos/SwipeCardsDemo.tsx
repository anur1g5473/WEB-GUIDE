import { useState } from 'react';

const cards = [
  { id: 1, name: 'SaaS Platform', color: '#6366f1' },
  { id: 2, name: 'Mobile App', color: '#ec4899' },
  { id: 3, name: 'Design System', color: '#f59e0b' },
];

export default function SwipeCardsDemo() {
  const [stack, setStack] = useState(cards);
  const [dragging, setDragging] = useState<{ x: number, id: number } | null>(null);

  const handleSwipe = (direction: 'left' | 'right') => {
    setStack(prev => prev.slice(1));
  };

  return (
    <div className="demo-container" style={{ background: '#050505', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ position: 'relative', width: '240px', height: '320px' }}>
        {stack.length === 0 && (
          <div style={{ color: '#333', textAlign: 'center', paddingTop: '100px' }}>
            No more cards
            <br />
            <button 
              onClick={() => setStack(cards)}
              style={{ padding: '8px 16px', border: 'none', background: '#222', color: '#fff', borderRadius: '8px', cursor: 'pointer', marginTop: '16px' }}
            >
              Reset
            </button>
          </div>
        )}
        
        {stack.map((card, i) => (
          <div
            key={card.id}
            style={{
              position: 'absolute',
              inset: 0,
              background: `linear-gradient(135deg, ${card.color}22, ${card.color}11)`,
              border: `1px solid ${card.color}44`,
              borderRadius: '24px',
              display: i === 0 ? 'flex' : 'none',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'grab',
              transform: `scale(${1 - i * 0.05}) translateY(${i * 10}px)`,
              zIndex: 10 - i,
              boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
              transition: 'transform 0.3s ease'
            }}
            onClick={() => handleSwipe('right')}
          >
            <div style={{ fontSize: '48px', marginBottom: '16px' }}>🚀</div>
            <div style={{ color: '#fff', fontWeight: 'bold' }}>{card.name}</div>
            <div style={{ color: '#444', fontSize: '12px', marginTop: '4px' }}>Click to swipe</div>
          </div>
        ))}
      </div>
    </div>
  );
}
