export default function FPatternDemo() {
  return (
    <div className="demo-container">
      <div className="demo-fpattern-wrapper">
        <div className="demo-fpattern-article">
          <div className="demo-fpattern-content">
            <h2>Why Eye-Tracking Shapes Great Design</h2>
            <p>
              <strong>Research consistently shows people read the web in an F-shape.</strong> They read the first line fully, then scan partway across the second line, then simply move down the left side.
            </p>
            <p>
              This means the left edge of your content is prime real estate. Critical information — your value proposition, key facts, and CTAs — should all start from the left. The right side of long text blocks is largely ignored.
            </p>
            <p>
              For content-heavy pages like this one, use a wide left column for body content and a narrow sticky right column for table of contents or related links. This maximises engagement with your most important information.
            </p>
          </div>
          <div className="demo-fpattern-toc">
            <h4>On this page</h4>
            <ul>
              <li><a href="#">Eye-tracking research</a></li>
              <li><a href="#">Left column priority</a></li>
              <li><a href="#">F-scan vs Z-scan</a></li>
              <li><a href="#">Layout tips</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
