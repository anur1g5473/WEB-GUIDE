import { useState } from 'react';

export default function DepthLayersDemo() {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="demo-container" style={{ background: '#0a0a0a', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div 
        style={{ position: 'relative', width: '300px', height: '200px', perspective: '1000px' }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Layer 1 - Back */}
        <div style={{
          position: 'absolute',
          inset: '0',
          background: '#1a1a1a',
          borderRadius: '20px',
          border: '1px solid #333',
          transform: hovered ? 'translateZ(-40px) translateY(-20px) rotateX(20deg)' : 'translateZ(0)',
          transition: 'transform 0.5s cubic-bezier(0.23, 1, 0.32, 1)',
          display: 'flex',
          alignItems: 'flex-start',
          padding: '20px',
          color: '#444'
        }}>
          Background Layer
        </div>

        {/* Layer 2 - Middle */}
        <div style={{
          position: 'absolute',
          inset: '0',
          background: 'rgba(99, 102, 241, 0.1)',
          backdropFilter: 'blur(10px)',
          borderRadius: '20px',
          border: '1px solid rgba(99, 102, 241, 0.3)',
          transform: hovered ? 'translateZ(0) rotateX(20deg)' : 'translateZ(0)',
          transition: 'transform 0.5s cubic-bezier(0.23, 1, 0.32, 1)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#818cf8',
          fontWeight: 'bold'
        }}>
          Middle Layer
        </div>

        {/* Layer 3 - Front */}
        <div style={{
          position: 'absolute',
          inset: '0',
          background: 'rgba(255, 255, 255, 0.05)',
          borderRadius: '20px',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          transform: hovered ? 'translateZ(40px) translateY(20px) rotateX(20deg)' : 'translateZ(0)',
          transition: 'transform 0.5s cubic-bezier(0.23, 1, 0.32, 1)',
          display: 'flex',
          alignItems: 'flex-end',
          padding: '20px',
          color: '#fff',
          boxShadow: hovered ? '0 20px 40px rgba(0,0,0,0.4)' : 'none'
        }}>
          Foreground Layer
        </div>
      </div>
    </div>
  );
}
