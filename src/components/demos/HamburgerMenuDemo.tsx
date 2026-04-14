import { useState } from 'react';

export default function HamburgerMenuDemo() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="demo-container">
      <div className="demo-hamburger-wrapper">
        
        {/* Toggle Button */}
        <button 
          className={`demo-hamburger-btn ${isOpen ? 'open' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="demo-hamburger-line line-1"></div>
          <div className="demo-hamburger-line line-2"></div>
          <div className="demo-hamburger-line line-3"></div>
        </button>

        {/* Fullscreen Overlay Menu */}
        <div className={`demo-fullscreen-menu ${isOpen ? 'open' : ''}`}>
          <a href="#" className="demo-fullscreen-link">Home</a>
          <a href="#" className="demo-fullscreen-link">About Us</a>
          <a href="#" className="demo-fullscreen-link">Services</a>
          <a href="#" className="demo-fullscreen-link">Contact</a>
        </div>

        {/* Content behind menu */}
        <div style={{ padding: '60px 40px', color: 'var(--text-secondary)' }}>
          Click the hamburger icon in the top right to reveal the full-screen mobile menu.
        </div>
      </div>
    </div>
  );
}
