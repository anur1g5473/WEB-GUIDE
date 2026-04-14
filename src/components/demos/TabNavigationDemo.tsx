import { useState } from 'react';

export default function TabNavigationDemo() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = ['Overview', 'Specifications', 'Reviews'];
  
  const content = [
    "The newest iteration features remarkable performance upgrades without sacrificing battery life. Crafted intricately for professionals.",
    "Processor: 12-core CPU\nMemory: 36GB Unified Memory\nStorage: 1TB SSD\nDisplay: 14.2-inch Liquid Retina XDR",
    "★★★★★ (4.9/5) based on 1,200 reviews.\n\n'The best machine I've ever used.' - TechMag"
  ];

  return (
    <div className="demo-container">
      <div className="demo-tabs-wrapper">
        <div className="demo-tabs-container">
          <div className="demo-tabs-header">
            {tabs.map((tab, idx) => (
              <button
                key={idx}
                className={`demo-tab-btn ${activeTab === idx ? 'active' : ''}`}
                onClick={() => setActiveTab(idx)}
              >
                {tab}
              </button>
            ))}
            <div 
              className="demo-tab-indicator"
              style={{ transform: `translateX(${activeTab * 100}%)` }}
            />
          </div>
          <div className="demo-tab-content" style={{ whiteSpace: 'pre-wrap' }}>
            {content[activeTab]}
          </div>
        </div>
      </div>
    </div>
  );
}
