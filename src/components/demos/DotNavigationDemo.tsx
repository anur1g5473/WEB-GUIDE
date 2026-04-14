import { useState } from 'react';

export default function DotNavigationDemo() {
  const [activeSection, setActiveSection] = useState(0);

  return (
    <div className="demo-container">
      <div className="demo-dot-wrapper">
        {/* Right side dots */}
        <div className="demo-dot-nav">
          {[0, 1, 2, 3].map((idx) => (
            <button 
              key={idx}
              className={`demo-dot ${activeSection === idx ? 'active' : ''}`}
              onClick={() => setActiveSection(idx)}
              aria-label={`Go to section ${idx + 1}`}
            />
          ))}
        </div>

        {/* Content sections scrolling up/down */}
        <div style={{ width: '100%', height: '100%', position: 'relative' }}>
          {[0, 1, 2, 3].map((idx) => (
            <div 
              key={idx}
              className="demo-dot-section"
              style={{
                transform: `translateY(${(idx - activeSection) * 100}%)`,
                background: `rgba(99, 102, 241, ${0.1 + (idx * 0.05)})`
              }}
            >
              Section 0{idx + 1}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
