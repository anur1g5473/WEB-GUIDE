import '../../demos2.css';

const stars = [
  { top: '15%', left: '10%', delay: '0s' }, { top: '25%', left: '80%', delay: '0.5s' },
  { top: '60%', left: '15%', delay: '1s' }, { top: '70%', left: '75%', delay: '0.3s' },
  { top: '40%', left: '50%', delay: '0.8s' }, { top: '85%', left: '35%', delay: '1.2s' },
];

export default function RetroY2KDemo() {
  return (
    <div className="demo-container">
      <div className="demo-y2k-wrapper">
        <div className="demo-y2k-grid-bg" />
        <div className="demo-y2k-stars">
          {stars.map((s, i) => (
            <span key={i} className="demo-y2k-star" style={{ top: s.top, left: s.left, animationDelay: s.delay }}>✦</span>
          ))}
        </div>
        <div className="demo-y2k-badge">✧ Year 2000 Aesthetic ✧</div>
        <h1 className="demo-y2k-title">ENTER<br/>THE MATRIX</h1>
        <button className="demo-y2k-cta">Plug In →</button>
      </div>
    </div>
  );
}
