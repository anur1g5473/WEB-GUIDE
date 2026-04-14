import { useRef, useEffect } from 'react';
import '../../demos-scroll.css';

const particles = Array.from({ length: 18 }, (_, i) => ({
  top: `${Math.random() * 90 + 5}%`,
  left: `${Math.random() * 90 + 5}%`,
  opacity: Math.random() * 0.5 + 0.2,
  size: Math.random() * 3 + 1,
}));

export default function ParallaxDemo() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const midRef = useRef<HTMLDivElement>(null);
  const fgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;
    const handleMove = (e: MouseEvent) => {
      const rect = wrapper.getBoundingClientRect();
      const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
      const y = (e.clientY - rect.top - rect.height / 2) / rect.height;
      if (bgRef.current) bgRef.current.style.transform = `translate(${x * 30}px, ${y * 30}px)`;
      if (midRef.current) midRef.current.style.transform = `translate(${x * 60}px, ${y * 60}px)`;
      if (fgRef.current) fgRef.current.style.transform = `translate(${x * -15}px, ${y * -15}px)`;
    };
    wrapper.addEventListener('mousemove', handleMove);
    return () => wrapper.removeEventListener('mousemove', handleMove);
  }, []);

  return (
    <div className="demo-container">
      <div className="demo-parallax-wrapper" ref={wrapperRef}>
        {/* Background layer — moves slowest */}
        <div className="demo-parallax-bg" ref={bgRef}>
          <div className="demo-parallax-orb" style={{ width: 400, height: 400, top: '10%', left: '5%', background: 'rgba(99,102,241,0.25)' }} />
          <div className="demo-parallax-orb" style={{ width: 300, height: 300, bottom: '10%', right: '10%', background: 'rgba(236,72,153,0.2)' }} />
          <div className="demo-parallax-orb" style={{ width: 250, height: 250, top: '40%', right: '30%', background: 'rgba(59,130,246,0.15)' }} />
        </div>

        {/* Mid layer — particles */}
        <div className="demo-parallax-mid" ref={midRef}>
          {particles.map((p, i) => (
            <div key={i} className="demo-parallax-particle"
              style={{ top: p.top, left: p.left, opacity: p.opacity, width: p.size, height: p.size, background: i % 3 === 0 ? '#818CF8' : i % 3 === 1 ? '#EC4899' : '#60A5FA' }}
            />
          ))}
        </div>

        {/* Foreground — moves counter to cursor */}
        <div className="demo-parallax-fg" ref={fgRef}>
          <h2>Parallax<br/>Depth</h2>
          <p>Move your mouse — 3 layers at different speeds</p>
        </div>

        <div className="demo-parallax-hint">🖱 Move mouse over card</div>
      </div>
    </div>
  );
}
