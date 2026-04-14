import { useState, useEffect } from 'react';
import { categories, DesignItem } from './data';
import DemoRenderer from './components/DemoRenderer';
import AboutMe from './components/AboutMe';
import './App.css';

function App() {
  const [selectedItem, setSelectedItem] = useState<DesignItem>(categories[0].items[0]);
  const [expandedCategories, setExpandedCategories] = useState<Record<string, boolean>>({
    [categories[0].id]: true
  });
  const [activeTab, setActiveTab] = useState<'what' | 'how' | 'prompt' | 'examples'>('what');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [currentView, setCurrentView] = useState<'patterns' | 'about'>('patterns');

  useEffect(() => {
    setIsAnimating(true);
    const timer = setTimeout(() => setIsAnimating(false), 300);
    return () => clearTimeout(timer);
  }, [selectedItem]);

  const handleItemChange = (item: DesignItem) => {
    setSelectedItem(item);
    setActiveTab('what');
    setIsSidebarOpen(false);
    setCurrentView('patterns'); // Switch back to patterns if an item is selected
  };

  const toggleCategory = (categoryId: string) => {
    setExpandedCategories(prev => ({
      ...prev,
      [categoryId]: !prev[categoryId]
    }));
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    alert('AI Prompt copied to clipboard!');
  };

  return (
    <div className="app-container">
      {/* Premium Sticky Header */}
      <header className="app-header">
        <div className="header-wrapper">
          <div className="header-left">
            <h1 className="header-logo">
              <span className="logo-icon">✨</span>
              <span className="logo-text">Design Showcase</span>
            </h1>
            <p className="header-tagline">Premium UI Components & Patterns</p>
          </div>
          
          <nav className="header-nav">
            <button 
              className={`header-nav-btn ${currentView === 'patterns' ? 'active' : ''}`}
              onClick={() => {
                setCurrentView('patterns');
                setIsSidebarOpen(false);
              }}
            >
              <span className="nav-icon">🎨</span>
              <span className="nav-label">Patterns</span>
            </button>
            <button 
              className={`header-nav-btn ${currentView === 'about' ? 'active' : ''}`}
              onClick={() => {
                setCurrentView('about');
                setIsSidebarOpen(false);
              }}
            >
              <span className="nav-icon">👨‍💻</span>
              <span className="nav-label">Developer</span>
            </button>
          </nav>

          <div className="header-right">
            <button 
              className={`dev-toggle-btn ${currentView === 'about' ? 'active' : ''}`}
              onClick={() => {
                setCurrentView(currentView === 'patterns' ? 'about' : 'patterns');
                setIsSidebarOpen(false);
              }}
            >
              <span className="btn-icon">{currentView === 'about' ? '🏠' : '👨‍💻'}</span>
            </button>
          </div>
        </div>
      </header>

      <button 
        className="mobile-menu-btn"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        aria-label="Toggle menu"
      >
        <span className={`hamburger ${isSidebarOpen ? 'open' : ''}`}>
          <span></span>
          <span></span>
          <span></span>
        </span>
      </button>

      {/* Sidebar */}
      <aside className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <h1 className="sidebar-title">
            <span className="title-icon">✨</span>
            Web Design Guide
          </h1>
          <p className="sidebar-subtitle">The Vibe Coder's Guide</p>
        </div>
        
        <nav className="theme-list">
          {categories.map((category) => (
            <div key={category.id} className="category-group">
              <button 
                className="category-header"
                onClick={() => toggleCategory(category.id)}
              >
                <div className="category-header-title">
                  <span className="category-icon">{category.icon}</span>
                  <span className="category-name">{category.name}</span>
                </div>
                <span className={`category-chevron ${expandedCategories[category.id] ? 'expanded' : ''}`}>
                  ▼
                </span>
              </button>
              
              {expandedCategories[category.id] && (
                <div className="category-items">
                  {category.items.map((item) => (
                    <button
                      key={item.id}
                      className={`theme-item ${selectedItem.id === item.id ? 'active' : ''}`}
                      onClick={() => handleItemChange(item)}
                    >
                      <span className="theme-icon">{item.icon}</span>
                      <span className="theme-name">{item.name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      </aside>

      {/* Overlay for mobile */}
      {isSidebarOpen && (
        <div 
          className="sidebar-overlay"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Main Content */}
      <main className="main-content">
        <div className={`content-wrapper ${isAnimating ? 'fade-in' : ''}`}>
          {currentView === 'patterns' ? (
            <>
              {/* Visual Hero Card */}
              <div className={`hero-card ${selectedItem.cssDemo}`}>
                <div className="hero-content">
                  <div className="hero-text">
                    <span className="hero-icon">{selectedItem.icon}</span>
                    <h2 className="hero-title">{selectedItem.name}</h2>
                  </div>
                  
                  <DemoRenderer item={selectedItem} />
                </div>
              </div>

              {/* Tab Navigation */}
              <div className="tabs-container">
                <div className="tabs-header">
                  <button className={`tab-button ${activeTab === 'what' ? 'active' : ''}`} onClick={() => setActiveTab('what')}>What it is</button>
                  <button className={`tab-button ${activeTab === 'how' ? 'active' : ''}`} onClick={() => setActiveTab('how')}>How it works</button>
                  <button className={`tab-button ${activeTab === 'prompt' ? 'active' : ''}`} onClick={() => setActiveTab('prompt')}>AI Prompt</button>
                  <button className={`tab-button ${activeTab === 'examples' ? 'active' : ''}`} onClick={() => setActiveTab('examples')}>Examples</button>
                </div>

                <div className="tab-content">
                  {activeTab === 'what' && (
                    <div className="tab-panel fade-up">
                      <h3 className="tab-heading">What is {selectedItem.name}?</h3>
                      <p className="tab-text">{selectedItem.whatItIs}</p>
                    </div>
                  )}

                  {activeTab === 'how' && (
                    <div className="tab-panel fade-up">
                      <h3 className="tab-heading">How does it work?</h3>
                      <p className="tab-text">{selectedItem.howItWorks}</p>
                    </div>
                  )}

                  {activeTab === 'prompt' && (
                    <div className="tab-panel fade-up">
                      <h3 className="tab-heading">AI Prompt for {selectedItem.name}</h3>
                      <div className="code-block-container">
                        <button className="copy-button" onClick={() => copyToClipboard(selectedItem.aiPrompt)}>📋 Copy</button>
                        <pre className="code-block"><code>{selectedItem.aiPrompt}</code></pre>
                      </div>
                    </div>
                  )}

                  {activeTab === 'examples' && (
                    <div className="tab-panel fade-up">
                      <h3 className="tab-heading">Real-world Examples</h3>
                      <ul className="examples-list">
                        {selectedItem.examples.map((example, index) => (
                          <li key={index} className="example-item">
                            <span className="example-bullet">→</span>
                            {example}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </>
          ) : (
            <AboutMe />
          )}
        </div>
      </main>
    </div>
  );
}

export default App;
