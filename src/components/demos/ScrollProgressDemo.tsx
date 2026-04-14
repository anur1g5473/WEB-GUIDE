import { useRef, useState, useEffect } from 'react';
import '../../demos-scroll.css';

const sections = [
  { label: '01', color: '#6366F1', title: 'Scroll down' },
  { label: '02', color: '#EC4899', title: 'Keep going' },
  { label: '03', color: '#3B82F6', title: 'Almost there' },
  { label: '04', color: '#10B981', title: 'Nearly full' },
  { label: '05', color: '#F59E0B', title: '100% 🎉' },
];

export default function ScrollProgressDemo() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;
    const onScroll = () => {
      const scrollable = el.scrollHeight - el.clientHeight;
      setProgress(scrollable > 0 ? Math.round((el.scrollTop / scrollable) * 100) : 0);
    };
    el.addEventListener('scroll', onScroll);
    return () => el.removeEventListener('scroll', onScroll);
  }, []);

  // Color interpolation based on progress
  const currentSection = Math.min(Math.floor(progress / 20), 4);
  const accentColor = sections[currentSection].color;

  return (
    <div className="demo-container" style={{ position: 'relative' }}>
      {/* Sticky progress bar at the very top */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: 4,
        background: 'rgba(255,255,255,0.06)', zIndex: 20,
      }}>
        <div style={{
          height: '100%',
          width: `${progress}%`,
          background: `linear-gradient(90deg, #6366F1, #EC4899, #F59E0B)`,
          transition: 'width 0.06s linear',
          boxShadow: '0 0 12px rgba(99,102,241,0.8)',
        }} />
      </div>

      {/* Floating percentage badge */}
      <div style={{
        position: 'absolute', top: 16, right: 16, zIndex: 30,
        background: 'rgba(0,0,0,0.6)',
        backdropFilter: 'blur(10px)',
        border: `1px solid ${accentColor}50`,
        borderRadius: 24,
        padding: '4px 14px',
        fontWeight: 800, fontSize: 13,
        color: accentColor,
        transition: 'color 0.4s ease, border-color 0.4s ease',
        fontVariantNumeric: 'tabular-nums',
      }}>
        {progress}%
      </div>

      {/* Scrollable content */}
      <div ref={wrapperRef} style={{
        flex: 1, overflowY: 'auto', scrollbarWidth: 'none',
      }}>
        {sections.map((s, i) => (
          <div key={i} style={{
            height: 340,
            display: 'flex', flexDirection: 'column',
            alignItems: 'center', justifyContent: 'center',
            position: 'relative', overflow: 'hidden',
            background: i % 2 === 0 ? '#0a0a0a' : '#111',
            borderBottom: '1px solid #1a1a1a',
          }}>
            {/* Giant ghost number */}
            <div style={{
              position: 'absolute',
              fontSize: 180, fontWeight: 900,
              color: `${s.color}08`,
              letterSpacing: -10, lineHeight: 1,
              pointerEvents: 'none', userSelect: 'none',
            }}>{s.label}</div>

            {/* Centered content */}
            <div style={{
              position: 'relative', textAlign: 'center', zIndex: 1,
            }}>
              <div style={{
                width: 48, height: 48, borderRadius: '50%',
                background: `${s.color}20`, border: `2px solid ${s.color}`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                margin: '0 auto 16px', fontSize: 18, color: s.color,
                fontWeight: 900,
              }}>{s.label}</div>
              <div style={{ fontSize: 24, fontWeight: 800, color: 'white', letterSpacing: -1 }}>
                {s.title}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Center overlay showing live progress ring */}
      <div style={{
        position: 'absolute', bottom: 20, left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 20, textAlign: 'center',
        pointerEvents: 'none',
      }}>
        <svg width="64" height="64" viewBox="0 0 64 64">
          <circle cx="32" cy="32" r="28" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="4" />
          <circle
            cx="32" cy="32" r="28" fill="none"
            stroke={accentColor}
            strokeWidth="4"
            strokeLinecap="round"
            strokeDasharray={`${2 * Math.PI * 28}`}
            strokeDashoffset={`${2 * Math.PI * 28 * (1 - progress / 100)}`}
            transform="rotate(-90 32 32)"
            style={{ transition: 'stroke-dashoffset 0.1s linear, stroke 0.4s ease' }}
          />
          <text x="32" y="32" textAnchor="middle" dominantBaseline="central"
            fill="white" fontSize="12" fontWeight="800">
            {progress}%
          </text>
        </svg>
      </div>
    </div>
  );
}
