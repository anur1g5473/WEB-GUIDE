export default function TypeScaleDemo() {
  return (
    <div className="demo-container">
      <div className="demo-type-wrapper">
        <div className="demo-type-container">
          <div className="demo-type-row">
            <span className="demo-type-label">H1 (48px)</span>
            <div className="demo-type-h1">The quick brown fox.</div>
          </div>
          <div className="demo-type-row">
            <span className="demo-type-label">H2 (36px)</span>
            <div className="demo-type-h2">Jumps over the lazy dog.</div>
          </div>
          <div className="demo-type-row">
            <span className="demo-type-label">H3 (24px)</span>
            <div className="demo-type-h3">A perfect golden ratio.</div>
          </div>
          <div className="demo-type-row">
            <span className="demo-type-label">P (16px)</span>
            <div className="demo-type-p">
              Using a mathematical scale (like 1.25x Major Third) creates a harmonious vertical rhythm. 
              Always decrease line-height as the font size increases for better readability.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
