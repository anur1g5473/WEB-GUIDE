const items = [
  { label: 'Mountain sunrise — Golden hour', height: 120, color: '#6366F1' },
  { label: 'Portrait — Soft bokeh', height: 180, color: '#8B5CF6' },
  { label: 'Urban geometry — Night long exposure', height: 100, color: '#EC4899' },
  { label: 'Ocean waves — Blue hour', height: 160, color: '#3B82F6' },
  { label: 'Forest fog — Misty morning', height: 200, color: '#10B981' },
  { label: 'Street — Rain reflections', height: 130, color: '#F59E0B' },
  { label: 'Architecture — Minimal lines', height: 150, color: '#EF4444' },
  { label: 'Desert dunes — Abstract', height: 110, color: '#14B8A6' },
  { label: 'Macro — Dewdrops', height: 170, color: '#A855F7' },
];

export default function MasonryDemo() {
  return (
    <div className="demo-container">
      <div className="demo-masonry-wrapper">
        <div className="demo-masonry-grid">
          {items.map((item, i) => (
            <div className="demo-masonry-item" key={i}>
              <div
                className="demo-masonry-image"
                style={{ height: item.height, background: `linear-gradient(135deg, ${item.color}88, ${item.color})` }}
              />
              <div className="demo-masonry-label">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
