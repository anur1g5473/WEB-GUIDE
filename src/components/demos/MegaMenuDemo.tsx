export default function MegaMenuDemo() {
  return (
    <div className="demo-container">
      <div className="demo-mega-wrapper">
        <nav className="demo-mega-nav">
          <div className="demo-mega-item">
            <div className="demo-mega-trigger">Products ▼</div>
            <div className="demo-mega-panel">
              <div className="demo-mega-col">
                <h4>Software</h4>
                <ul>
                  <li><a href="#">Cloud Hosting</a></li>
                  <li><a href="#">Databases</a></li>
                  <li><a href="#">Analytics</a></li>
                </ul>
              </div>
              <div className="demo-mega-col">
                <h4>Hardware</h4>
                <ul>
                  <li><a href="#">Servers</a></li>
                  <li><a href="#">Networking</a></li>
                  <li><a href="#">Storage</a></li>
                </ul>
              </div>
              <div className="demo-mega-col">
                <h4>Resources</h4>
                <ul>
                  <li><a href="#">Documentation</a></li>
                  <li><a href="#">API Reference</a></li>
                  <li><a href="#">Community Forum</a></li>
                </ul>
              </div>
              <div className="demo-mega-feature">
                <h4>New Release</h4>
                <p style={{ color: 'var(--text-secondary)', fontSize: '13px', marginBottom: '16px' }}>Introducing AI routing protocols.</p>
                <button className="demo-btn demo-btn-primary" style={{ padding: '8px' }}>Learn More</button>
              </div>
            </div>
          </div>
          <div className="demo-mega-item">
            <div className="demo-mega-trigger">Solutions</div>
          </div>
          <div className="demo-mega-item">
            <div className="demo-mega-trigger">Pricing</div>
          </div>
        </nav>
      </div>
    </div>
  );
}
