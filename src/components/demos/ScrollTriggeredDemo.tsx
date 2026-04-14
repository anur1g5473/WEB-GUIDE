import { useRef, useEffect } from 'react';
import '../../demos-scroll.css';

const items = [
  { tag: 'Design System', title: 'Consistency at scale', color: '#6366F1' },
  { tag: 'Performance', title: 'Sub-50ms globally', color: '#EC4899' },
  { tag: 'Collaboration', title: 'Real-time multiplayer', color: '#3B82F6' },
  { tag: 'Analytics', title: 'Data-driven decisions', color: '#10B981' },
  { tag: 'Security', title: 'Enterprise-grade by default', color: '#F59E0B' },
];

export default function ScrollTriggeredDemo() {
  const refs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.15 }
    );
    refs.current.forEach(el => el && obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <div className="demo-container">
      <div className="demo-st-wrapper">
        {items.map((item, i) => (
          <div
            key={i}
            className="demo-st-big-item"
            ref={el => { refs.current[i] = el; }}
            style={{
              background: `linear-gradient(135deg, ${item.color}18, ${item.color}06)`,
              borderColor: `${item.color}20`,
              transitionDelay: `${i * 0.06}s`,
            }}
          >
            <div className="num">{String(i + 1).padStart(2, '0')}</div>
            <div className="content-text">
              <div className="tag" style={{ color: item.color }}>{item.tag}</div>
              <h4>{item.title}</h4>
            </div>
            <div style={{
              position: 'absolute', right: 28, top: '50%', transform: 'translateY(-50%)',
              width: 36, height: 36, borderRadius: '50%', border: `2px solid ${item.color}40`,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: item.color, fontSize: 14
            }}>→</div>
          </div>
        ))}
      </div>
    </div>
  );
}
