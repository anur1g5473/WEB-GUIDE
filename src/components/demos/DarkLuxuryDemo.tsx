import '../../demos2.css';

export default function DarkLuxuryDemo() {
  return (
    <div className="demo-container">
      <div className="demo-darklux-wrapper">
        <div className="demo-darklux-glow" />
        <div className="demo-darklux-header">
          <div className="demo-darklux-badge">✦ New Platform Release</div>
          <h2 className="demo-darklux-title">The developer<br/>platform redefined.</h2>
          <p className="demo-darklux-sub">Used by 40,000+ engineering teams worldwide.</p>
        </div>
        <div className="demo-darklux-cards">
          {[
            { title: 'Instant Rollbacks', desc: 'Revert any deploy in one click.' },
            { title: 'Preview URLs', desc: 'Every branch gets its own URL.' },
            { title: 'Observability', desc: 'Logs, traces, and metrics unified.' },
            { title: 'Team Access', desc: 'Role-based permissions granularly.' },
          ].map((c, i) => (
            <div className="demo-darklux-card" key={i}>
              <h4>{c.title}</h4>
              <p>{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
