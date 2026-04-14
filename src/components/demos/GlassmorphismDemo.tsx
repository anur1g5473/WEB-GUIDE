import '../../demos2.css';

export default function GlassmorphismDemo() {
  const cards = [
    { icon: '⚡', title: 'Performance', desc: 'Edge-optimized delivery under 50ms globally.' },
    { icon: '🔒', title: 'Security', desc: 'SOC 2 certified with end-to-end encryption.' },
    { icon: '🤝', title: 'Collaboration', desc: 'Real-time multiplayer editing for your team.' },
  ];
  return (
    <div className="demo-container">
      <div className="demo-glass-wrapper">
        {cards.map((c, i) => (
          <div className="demo-glass-card" key={i}>
            <div className="demo-glass-card-icon">{c.icon}</div>
            <h4>{c.title}</h4>
            <p>{c.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
