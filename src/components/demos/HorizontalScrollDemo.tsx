import '../../demos-scroll.css';

const cards = [
  { title: 'Brand Identity', sub: 'Strategy & Visuals', color1: '#6366F1', color2: '#4F46E5' },
  { title: 'Web Design', sub: 'UI/UX & Interaction', color1: '#EC4899', color2: '#BE185D' },
  { title: 'Motion Design', sub: 'Animation & Video', color1: '#3B82F6', color2: '#1D4ED8' },
  { title: 'UI Systems', sub: 'Design Tokens & Docs', color1: '#10B981', color2: '#047857' },
  { title: '3D & Spatial', sub: 'WebGL & Three.js', color1: '#F59E0B', color2: '#B45309' },
];

export default function HorizontalScrollDemo() {
  return (
    <div className="demo-container">
      <div className="demo-hscroll-wrapper">
        <div className="demo-hscroll-label">Drag to explore →</div>
        <div className="demo-hscroll-track">
          {cards.map((card, i) => (
            <div key={i} className="demo-hscroll-card">
              <div className="demo-hscroll-card-bg"
                style={{ background: `linear-gradient(145deg, ${card.color1}, ${card.color2})` }}
              />
              <span className="demo-hscroll-card-num">0{i + 1}</span>
              <div className="demo-hscroll-card-content">
                <h4>{card.title}</h4>
                <p>{card.sub}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="demo-hscroll-hint">← / → arrow keys or drag to browse</div>
      </div>
    </div>
  );
}
