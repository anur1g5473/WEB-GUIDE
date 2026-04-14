import { useState } from 'react';

const links = [
  { icon: '📊', label: 'Dashboard', id: 'dashboard' },
  { icon: '📦', label: 'Projects', id: 'projects' },
  { icon: '👥', label: 'Team', id: 'team' },
  { icon: '⚙️', label: 'Settings', id: 'settings' },
];

export default function SidebarContentDemo() {
  const [active, setActive] = useState('dashboard');

  return (
    <div className="demo-container">
      <div className="demo-sidebar-layout">
        <nav className="demo-sidebar-nav">
          <div className="demo-sidebar-logo">Acme ✦</div>
          {links.map((l) => (
            <a
              key={l.id}
              href="#"
              className={`demo-sidebar-link ${active === l.id ? 'active' : ''}`}
              onClick={(e) => { e.preventDefault(); setActive(l.id); }}
            >
              <span>{l.icon}</span>
              {l.label}
            </a>
          ))}
        </nav>
        <main className="demo-sidebar-main">
          <div className="demo-sidebar-header">
            {links.find(l => l.id === active)?.label}
          </div>
          <div className="demo-sidebar-stats">
            <div className="demo-stat-card">
              <div className="demo-stat-label">Total Revenue</div>
              <div className="demo-stat-value">$84.2k</div>
            </div>
            <div className="demo-stat-card">
              <div className="demo-stat-label">Active Users</div>
              <div className="demo-stat-value">12,430</div>
            </div>
            <div className="demo-stat-card">
              <div className="demo-stat-label">Deployments</div>
              <div className="demo-stat-value">340</div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
