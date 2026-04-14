import '../../demos2.css';

export default function ClaymorphismDemo() {
  const cards = [
    { emoji: '🎯', title: 'Focus Mode', desc: 'Zero distractions', cls: '' },
    { emoji: '🚀', title: 'Ship Fast', desc: 'Deploy in 1-click', cls: 'purple' },
    { emoji: '❤️', title: 'Made with Love', desc: 'Premium quality', cls: 'coral' },
  ];
  return (
    <div className="demo-container">
      <div className="demo-clay-wrapper">
        {cards.map((c, i) => (
          <button className={`demo-clay-card ${c.cls}`} key={i}>
            <span className="demo-clay-emoji">{c.emoji}</span>
            <h4>{c.title}</h4>
            <p>{c.desc}</p>
          </button>
        ))}
      </div>
    </div>
  );
}
