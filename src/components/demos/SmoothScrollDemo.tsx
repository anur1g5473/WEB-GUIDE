import { useEffect, useRef, useState } from 'react';
import '../../demos-scroll.css';

const eases = [
  { label: 'linear', duration: '0.1s', color: '#6366F1', desc: 'No momentum' },
  { label: 'ease-out', duration: '0.4s', color: '#3B82F6', desc: 'Gentle stop' },
  { label: 'cubic-bezier\n(0.16,1,0.3,1)', duration: '1.2s', color: '#10B981', desc: 'Lenis default' },
  { label: 'spring', duration: '0.8s', color: '#EC4899', desc: 'Overshoot' },
];

export default function SmoothScrollDemo() {
  const [heights, setHeights] = useState([30, 30, 30, 30]);
  const animRef = useRef<number | null>(null);

  useEffect(() => {
    const animate = () => {
      const t = Date.now() / 1000;
      setHeights([
        40 + Math.abs(Math.sin(t * 1.1)) * 80,
        40 + Math.abs(Math.sin(t * 0.7 + 1)) * 80,
        40 + Math.abs(Math.sin(t * 0.5 + 2)) * 80,
        40 + Math.abs(Math.sin(t * 0.9 + 3)) * 80,
      ]);
      animRef.current = requestAnimationFrame(animate);
    };
    animRef.current = requestAnimationFrame(animate);
    return () => { if (animRef.current) cancelAnimationFrame(animRef.current); };
  }, []);

  return (
    <div className="demo-container">
      <div className="demo-lenis-wrapper">
        <div className="demo-lenis-top">
          <h3>Scroll Easing Curves</h3>
          <p>Physics-based deceleration — the key to premium feel</p>
        </div>

        <div className="demo-lenis-visualizer">
          {eases.map((e, i) => (
            <div key={i} className="demo-lenis-bar-group">
              <div
                className="demo-lenis-bar"
                style={{
                  height: heights[i],
                  '--bar-color': e.color,
                  '--bar-duration': e.duration,
                  opacity: 0.7 + i * 0.08,
                } as React.CSSProperties}
              />
              <div className="demo-lenis-bar-label">{e.desc}</div>
            </div>
          ))}
        </div>

        <div className="demo-lenis-code">
          <span>// Lenis initialization</span><br />
          <span style={{ color: '#60A5FA' }}>const</span> lenis = <span style={{ color: '#60A5FA' }}>new</span> Lenis({'{'}<br />
          &nbsp;&nbsp;duration: <span style={{ color: '#86EFAC' }}>1.2</span>,<br />
          &nbsp;&nbsp;easing: &nbsp;<span style={{ color: '#FCA5A5' }}>(t) =&gt; Math.min(1, 1.001 - Math.pow(2, -10 * t))</span>,<br />
          {'}'})
        </div>
      </div>
    </div>
  );
}
