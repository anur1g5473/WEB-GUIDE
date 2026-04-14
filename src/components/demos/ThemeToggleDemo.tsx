import { useState } from 'react';

export default function ThemeToggleDemo() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  return (
    <div className="demo-container">
      <div className={`demo-theme-wrapper ${theme}`}>
        <div className="demo-theme-card">
          <h2 style={{ fontSize: '24px', fontWeight: '800', marginBottom: '12px' }}>
            {theme === 'light' ? 'Light Mode' : 'Dark Mode'} active
          </h2>
          <p style={{ fontSize: '15px', opacity: 0.8 }}>
            Click the button below to toggle CSS variables dynamically.
          </p>
          
          <button 
            className="demo-theme-btn"
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
          >
            Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
          </button>
        </div>
      </div>
    </div>
  );
}
