export default function TestimonialsDemo() {
  const testimonials = [
    { name: 'Sarah L.', handle: '@sarahcodes', text: 'This tool has completely changed the way my team builds software. Unbelievable performance and developer experience.' },
    { name: 'Marcus P.', handle: '@marcusdev', text: 'I tried finding an alternative for 6 months until I found this. Absolute game-changer for our infrastructure.' },
    { name: 'Elena V.', handle: '@elenav_ui', text: 'The design out of the box is stunning. Saved our startup thousands of dollars in design agency fees.' },
    { name: 'James H.', handle: '@james_hacker', text: 'Flawless execution. The API just makes sense intuitively. Cannot recommend this enough to any modern engineering team.' },
  ];

  const renderCards = () => (
    <>
      {testimonials.map((t, idx) => (
        <div className="demo-testimonial-card" key={idx}>
          <div className="demo-stars">★★★★★</div>
          <p className="demo-quote">"{t.text}"</p>
          <div className="demo-profile">
            <div className="demo-avatar"></div>
            <div>
              <div className="demo-author-name">{t.name}</div>
              <div className="demo-author-handle">{t.handle}</div>
            </div>
          </div>
        </div>
      ))}
    </>
  );

  return (
    <div className="demo-container">
      <div className="demo-testimonials">
        {/* Row 1: Scrolls Left */}
        <div className="demo-marquee-wrapper" style={{ '--speed': '40s' } as React.CSSProperties}>
          <div className="demo-marquee">
            {renderCards()}
            {renderCards()}
          </div>
        </div>
        
        {/* Row 2: Scrolls Right */}
        <div className="demo-marquee-wrapper" style={{ '--speed': '35s' } as React.CSSProperties}>
          <div className="demo-marquee reverse">
            {renderCards()}
            {renderCards()}
          </div>
        </div>
      </div>
    </div>
  );
}
