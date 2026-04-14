export default function PricingTableDemo() {
  return (
    <div className="demo-container">
      <div className="demo-pricing">
        {/* Free Tier */}
        <div className="demo-pricing-card">
          <div className="demo-pricing-name">Free</div>
          <div className="demo-pricing-amount">$0</div>
          <ul className="demo-pricing-features">
            <li className="check">1 User</li>
            <li className="check">Basic Support</li>
            <li className="check">1GB Storage</li>
            <li>Custom Domain</li>
          </ul>
          <button className="demo-btn demo-btn-secondary demo-btn-pricing">Get Started</button>
        </div>

        {/* Pro Tier (Highlighted) */}
        <div className="demo-pricing-card popular">
          <div className="demo-pricing-badge">Most Popular</div>
          <div className="demo-pricing-name" style={{ color: 'var(--accent-primary)' }}>Pro</div>
          <div className="demo-pricing-amount">$29<span style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>/mo</span></div>
          <ul className="demo-pricing-features">
            <li className="check">Unlimited Users</li>
            <li className="check">Priority Support</li>
            <li className="check">100GB Storage</li>
            <li className="check">Custom Domain</li>
          </ul>
          <button className="demo-btn demo-btn-primary demo-btn-pricing">Upgrade to Pro</button>
        </div>

        {/* Enterprise Tier */}
        <div className="demo-pricing-card">
          <div className="demo-pricing-name">Enterprise</div>
          <div className="demo-pricing-amount">$99<span style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>/mo</span></div>
          <ul className="demo-pricing-features">
            <li className="check">Custom Users</li>
            <li className="check">24/7 SLA Support</li>
            <li className="check">Unlimited Storage</li>
            <li className="check">Custom Domain</li>
          </ul>
          <button className="demo-btn demo-btn-secondary demo-btn-pricing">Contact Sales</button>
        </div>
      </div>
    </div>
  );
}
