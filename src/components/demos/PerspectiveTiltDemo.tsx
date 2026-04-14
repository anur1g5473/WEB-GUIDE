import { useState, useRef } from 'react';

export default function PerspectiveTiltDemo() {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setRotation({ x: y * -40, y: x * 40 });
  };

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
  };

  return (
    <div 
      className="demo-container" 
      style={{ 
        perspective: '1000px', 
        background: '#0a0a0a', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        padding: '2rem'
      }}
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div 
        style={{
          width: '280px',
          height: '380px',
          transformStyle: 'preserve-3d',
          transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
          transition: 'transform 0.1s ease-out',
          position: 'relative'
        }}
      >
        {/* Shadow Layer */}
        <div style={{
          position: 'absolute',
          inset: '0',
          background: 'rgba(0,0,0,0.5)',
          borderRadius: '24px',
          transform: 'translateZ(-50px)',
          filter: 'blur(30px)'
        }} />

        {/* Base Layer */}
        <div style={{
          position: 'absolute',
          inset: '0',
          background: 'linear-gradient(135deg, #1a1a1a 0%, #0a0a0a 100%)',
          borderRadius: '24px',
          border: '1px solid rgba(255,255,255,0.1)',
          transform: 'translateZ(0px)',
          overflow: 'hidden'
        }}>
           <div style={{ padding: '24px' }}>
              <div style={{ width: '40px', height: '40px', background: '#6366f1', borderRadius: '10px', marginBottom: '16px' }} />
              <div style={{ height: '12px', width: '60%', background: '#333', borderRadius: '6px', marginBottom: '8px' }} />
              <div style={{ height: '12px', width: '40%', background: '#222', borderRadius: '6px' }} />
           </div>
        </div>

        {/* Mid Layer */}
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          width: '120px',
          height: '120px',
          background: 'rgba(99, 102, 241, 0.2)',
          backdropFilter: 'blur(10px)',
          borderRadius: '20px',
          border: '1px solid rgba(99, 102, 241, 0.4)',
          transform: 'translate3d(-50%, -50%, 50px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '32px'
        }}>
          💎
        </div>

        {/* Top Layer */}
        <div style={{
          position: 'absolute',
          bottom: '40px',
          right: '-20px',
          width: '160px',
          height: '60px',
          background: 'white',
          borderRadius: '16px',
          transform: 'translateZ(100px)',
          boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
          display: 'flex',
          alignItems: 'center',
          padding: '0 16px',
          color: 'black',
          fontWeight: 'bold',
          fontSize: '14px'
        }}>
          Depth Layers
        </div>
      </div>
    </div>
  );
}
