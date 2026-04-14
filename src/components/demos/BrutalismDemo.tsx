import '../../demos2.css';

export default function BrutalismDemo() {
  return (
    <div className="demo-container">
      <div className="demo-brut-wrapper">
        <header className="demo-brut-header">
          <h1>BRUT.IO</h1>
          <nav className="demo-brut-nav">
            <a href="#" className="demo-brut-nav-link">WORK</a>
            <a href="#" className="demo-brut-nav-link">ABOUT</a>
            <a href="#" className="demo-brut-nav-link">HIRE US</a>
          </nav>
        </header>
        <div className="demo-brut-grid">
          <div className="demo-brut-card">
            <h3>Project 001</h3>
            <p>Brand identity for SaaS startup. No gradients. No compromises.</p>
          </div>
          <div className="demo-brut-card accent">
            <h3>LOUD DESIGN</h3>
            <p>Anti-aesthetic on purpose. Raw. Honest. Unmissable.</p>
          </div>
          <div className="demo-brut-card accent2">
            <h3>ZINE CULTURE</h3>
            <p>Inspired by punk xerox zines and early net art.</p>
          </div>
          <div className="demo-brut-card">
            <h3>Project 004</h3>
            <p>Web3 platform with intentional chaos as the design language.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
