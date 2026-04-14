const sections = [
  { title: 'Section One', hint: 'Scroll down ↓ to snap to next section' },
  { title: 'Section Two', hint: 'Each section is exactly 100% height' },
  { title: 'Section Three', hint: 'Uses scroll-snap-type: y mandatory' },
  { title: 'Section Four', hint: 'scroll-snap-align: start on each child' },
];

export default function FullPageScrollDemo() {
  return (
    <div className="demo-container">
      <div className="demo-fullpage-wrapper">
        {sections.map((s, i) => (
          <div className="demo-fullpage-section" key={i}>
            <h2>{s.title}</h2>
            <p>{s.hint}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
