export default function CardComponentDemo() {
  return (
    <div className="demo-container">
      <div className="demo-card-wrapper">
        <a href="#" className="demo-card" style={{ textDecoration: 'none' }}>
          <div className="demo-card-image"></div>
          <div className="demo-card-content">
            <span className="demo-card-tag">Engineering</span>
            <h3 className="demo-card-title">How we scaled our database to handle 10M requests</h3>
            <p className="demo-card-text">
              An inside look at our infrastructure modernization journey, transitioning from monolithic architectures to distributed modern systems.
            </p>
          </div>
        </a>
      </div>
    </div>
  );
}
