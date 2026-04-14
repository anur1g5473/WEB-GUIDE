import { useState } from 'react';
import '../../demos-scroll.css';

const features = [
  { icon: '🎨', emoji: '🎨', title: 'Brand Themes', desc: 'Swap color schemes in real time using live CSS variables.', bg: '#1a0a2e', accent: '#6366F1' },
  { icon: '⚡', emoji: '⚡', title: 'Instant Deploy', desc: 'Push to git — live globally in under 30 seconds.', bg: '#0a1a2e', accent: '#3B82F6' },
  { icon: '📊', emoji: '📊', title: 'Live Analytics', desc: 'Session replay, heatmaps and conversion funnels.', bg: '#0a2e1a', accent: '#10B981' },
  { icon: '🔒', emoji: '🔒', title: 'Role Permissions', desc: 'Granular access at team, project, and resource level.', bg: '#2e1a0a', accent: '#F59E0B' },
];

export default function StickySectionsDemo() {
  const [active, setActive] = useState(0);
  const feat = features[active];

  return (
    <div className="demo-container">
      <div className="demo-sticky-wrapper">
        {/* Left — sticky phone */}
        <div className="demo-sticky-left">
          <div className="demo-sticky-screen">
            <div className="demo-sticky-screen-inner" style={{ background: feat.bg }}>
              <span style={{ fontSize: 44 }}>{feat.emoji}</span>
              <span style={{ color: feat.accent, fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                {feat.title}
              </span>
            </div>
          </div>
        </div>

        {/* Right — scrollable features */}
        <div className="demo-sticky-right">
          {features.map((f, i) => (
            <div
              key={i}
              className={`demo-sticky-feat ${active === i ? 'active' : ''}`}
              onMouseEnter={() => setActive(i)}
              style={active === i ? { borderColor: `${f.accent}50`, background: `${f.accent}08` } : {}}
            >
              <div className="demo-sticky-feat-icon">{f.icon}</div>
              <h4>{f.title}</h4>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
