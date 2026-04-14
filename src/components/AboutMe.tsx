import React from 'react';

export default function AboutMe() {
  return (
    <div className="about-me-page fade-in">
      {/* 1. The Hook */}
      <section className="about-hero">
        <div className="about-glow" />
        <h1 className="about-headline">
          Hi, I'm <span className="highlight">Anurag</span>. <br />
          I bridge the gap between low-level logic and high-end UI.
        </h1>
        <p className="about-greeting">Welcome to my digital workshop.</p>
      </section>

      <div className="about-grid">
        {/* 2. Elevator Pitch */}
        <section className="about-card bio-section">
          <h3>The Elevator Pitch</h3>
          <p>
            Currently pursuing my degree at <strong>VIT Vellore</strong>, I've spent the last few years obsessed with the technical frontier where code becomes art. My journey is driven by a curiosity for "how things work"—from the byte level to the pixel level.
          </p>
          <p>
            My philosophy is simple: <strong>Zero Compromise.</strong> I believe in deep-diving into browser rendering, mastering Vanilla CSS, and building robust systems from scratch rather than stacking bloated, abstraction-heavy libraries. If it can be done natively and performantly, that's how I build it.
          </p>
        </section>

        {/* 3. Tech Stack */}
        <section className="about-card stack-section">
          <h3>Technical Arsenal</h3>
          <div className="stack-groups">
            <div className="stack-group">
              <h4>Frontend & UI</h4>
              <div className="badge-cloud">
                <span className="badge">React 19</span>
                <span className="badge">TypeScript</span>
                <span className="badge">Vanilla CSS</span>
                <span className="badge">HTML5</span>
                <span className="badge">Vite</span>
              </div>
            </div>
            <div className="stack-group">
              <h4>Backend & Systems</h4>
              <div className="badge-cloud">
                <span className="badge">Node.js</span>
                <span className="badge">Java</span>
                <span className="badge">Python</span>
                <span className="badge cyan">C / C++</span>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Featured Arsenal (Projects) */}
        <section className="about-card projects-section">
          <h3>Featured Arsenal</h3>
          <div className="project-items">
            <div className="project-mini-card">
              <div className="project-icon">💎</div>
              <div className="project-info">
                <h4>WEB-GUIDE</h4>
                <p>An interactive encyclopedia of 78+ design patterns with zero-library physics.</p>
              </div>
            </div>
            <div className="project-mini-card">
              <div className="project-icon">🧠</div>
              <div className="project-info">
                <h4>StudyTrack-AI</h4>
                <p>AI-driven academic productivity suite currently in active development.</p>
              </div>
            </div>
            <div className="project-mini-card">
              <div className="project-icon">☁️</div>
              <div className="project-info">
                <h4>Weather App</h4>
                <p>High-fidelity weather dashboard integrating real-time open APIs.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Your "Why" */}
        <section className="about-card why-section">
          <h3>My "Why"</h3>
          <p>
            I code because I love the control of a blank terminal. My "Secret Sauce" is my dual-focus: I enjoy working with low-level systems (C/C++) to understand memory and hardware, which in turn allows me to build high-level web interfaces (React) that are significantly more optimized and lean.
          </p>
          <p>
            High-end UX shouldn't come with a 2MB bundle size penalty.
          </p>
        </section>

        {/* 6. CTA & Links */}
        <section className="about-card contact-section">
          <h3>Let's Build Something</h3>
          <div className="cta-links">
            <a href="https://github.com/anur1g5473" target="_blank" rel="noopener noreferrer" className="cta-link github">
              <span>GitHub</span>
              <span className="arrow">↗</span>
            </a>
            <a href="https://linkedin.com/in/anurag-soni-2316762bb/" target="_blank" rel="noopener noreferrer" className="cta-link linkedin">
              <span>LinkedIn</span>
              <span className="arrow">↗</span>
            </a>
            <a href="mailto:anuragsoni5473@gmail.com" className="cta-link email">
              <span>Email Me</span>
              <span className="arrow">📩</span>
            </a>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="cta-link resume">
              <span>Download CV</span>
              <span className="arrow">📄</span>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
