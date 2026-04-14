import { useState, useRef } from 'react';

export default function PullToRefreshDemo() {
  const [pullProgress, setPullProgress] = useState(0);
  const [refreshing, setRefreshing] = useState(false);
  const startY = useRef(0);

  const handleTouchStart = (e: React.TouchEvent | React.MouseEvent) => {
    if (refreshing) return;
    startY.current = 'touches' in e ? e.touches[0].clientY : e.clientY;
  };

  const handleTouchMove = (e: React.TouchEvent | React.MouseEvent) => {
    if (refreshing) return;
    const currentY = 'touches' in e ? e.touches[0].clientY : e.clientY;
    const diff = currentY - startY.current;
    if (diff > 0) {
      setPullProgress(Math.min(diff / 2, 100));
    }
  };

  const handleTouchEnd = () => {
    if (pullProgress >= 80) {
      setRefreshing(true);
      setPullProgress(40);
      setTimeout(() => {
        setRefreshing(false);
        setPullProgress(0);
      }, 2000);
    } else {
      setPullProgress(0);
    }
  };

  return (
    <div 
      className="demo-container" 
      style={{ 
        background: '#080808', 
        overflow: 'hidden', 
        position: 'relative',
        cursor: 'ns-resize'
      }}
      onMouseDown={handleTouchStart}
      onMouseMove={handleTouchMove}
      onMouseUp={handleTouchEnd}
      onMouseLeave={handleTouchEnd}
    >
      {/* Pull Indicator */}
      <div style={{
        position: 'absolute',
        top: pullProgress - 40,
        left: '50%',
        transform: 'translateX(-50%)',
        width: '40px',
        height: '40px',
        background: '#1a1a1a',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: '1px solid #333',
        boxShadow: '0 4px 12px rgba(0,0,0,0.5)',
        zIndex: 10,
        opacity: pullProgress / 100
      }}>
        <div style={{ 
          width: '20px', 
          height: '20px', 
          border: '2px solid #6366f1', 
          borderTopColor: 'transparent',
          borderRadius: '50%',
          animation: refreshing ? 'spin 1s linear infinite' : 'none',
          transform: !refreshing ? `rotate(${pullProgress * 3.6}deg)` : 'none'
        }} />
        <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
      </div>

      <div style={{
        padding: '24px',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
        transform: `translateY(${pullProgress}px)`,
        transition: refreshing || pullProgress === 0 ? 'transform 0.3s ease' : 'none'
      }}>
        <div style={{ color: '#333', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '2px', textAlign: 'center' }}>
          Drag down to refresh
        </div>
        {[1, 2, 3, 4].map(i => (
          <div key={i} style={{ height: '60px', background: '#111', borderRadius: '12px', border: '1px solid #1a1a1a' }} />
        ))}
      </div>
    </div>
  );
}
