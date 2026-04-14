export default function HeroFeatureGridDemo() {
  const features = [
    { icon: '⚡', title: 'Blazing Fast', desc: 'Deploys globally in under 60 seconds with zero-config edge caching.' },
    { icon: '🔒', title: 'Secure by Default', desc: 'End-to-end encryption, automatic SSL, and SOC 2 compliance built-in.' },
    { icon: '📦', title: 'Serverless Scale', desc: 'Auto-scales to millions of requests. Pay only for what you actually use.' },
    { icon: '🧩', title: 'Plugin Ecosystem', desc: 'Connect with 200+ integrations including Stripe, Notion, and Supabase.' },
    { icon: '📊', title: 'Real-time Analytics', desc: 'Live traffic dashboards, error logs, and performance insights out of the box.' },
    { icon: '🤝', title: 'Team Collaboration', desc: 'Git-based workflows, preview deployments, and role-based access.' },
  ];

  return (
    <div className="demo-container">
      <div className="demo-feature-wrapper">
        <div className="demo-feature-hero">
          <h2>Ship 10× faster.</h2>
          <p>The platform built for modern engineering teams.</p>
          <button className="demo-btn demo-btn-primary">Start Free Trial</button>
        </div>
        <div className="demo-feature-grid">
          {features.map((f, i) => (
            <div className="demo-feature-card" key={i}>
              <div className="demo-feature-icon">{f.icon}</div>
              <h4>{f.title}</h4>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
