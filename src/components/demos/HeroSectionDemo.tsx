export default function HeroSectionDemo() {
  return (
    <div className="demo-container">
      <div className="demo-hero">
        <div className="demo-hero-badge">✨ New AI Features</div>
        <h1 className="demo-hero-title">
          Build faster with <br/>
          <span className="demo-hero-title-gradient">intelligent tools.</span>
        </h1>
        <p className="demo-hero-subtitle">
          The most powerful platform for modern engineering teams. 
          Deploy code in seconds, scale infinitely, and never worry about infrastructure again.
        </p>
        <div className="demo-hero-actions">
          <button className="demo-btn demo-btn-primary">Start Building Free</button>
          <button className="demo-btn demo-btn-secondary">Read the Docs</button>
        </div>
      </div>
    </div>
  );
}
