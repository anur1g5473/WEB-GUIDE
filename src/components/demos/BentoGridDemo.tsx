import '../../demos2.css';

export default function BentoGridDemo() {
  return (
    <div className="demo-container">
      <div className="demo-bento-wrapper">
        <div className="demo-bento-cell accent col2">
          <div className="demo-bento-icon">🚀</div>
          <h3>Deploy in Seconds</h3>
          <p>Push to git, live on the edge instantly</p>
        </div>
        <div className="demo-bento-cell dark2 row2">
          <div className="demo-bento-big-num">99.9%</div>
          <h3>Uptime SLA</h3>
        </div>
        <div className="demo-bento-cell">
          <div className="demo-bento-icon">⚡</div>
          <h3>50ms</h3>
          <p>Global P50 latency</p>
        </div>
        <div className="demo-bento-cell">
          <div className="demo-bento-icon">🔒</div>
          <h3>SOC 2</h3>
          <p>Type II certified</p>
        </div>
        <div className="demo-bento-cell col2">
          <div className="demo-bento-icon">🌍</div>
          <h3>200+ Edge Locations</h3>
          <p>Every continent covered</p>
        </div>
      </div>
    </div>
  );
}
