export default function StickyNavbarDemo() {
  return (
    <div className="demo-container">
      <div className="demo-nav-wrapper">
        <nav className="demo-sticky-nav">
          <div className="demo-nav-logo">ACME Corp</div>
          <div className="demo-nav-links">
            <a href="#" className="demo-nav-link">Products</a>
            <a href="#" className="demo-nav-link">Solutions</a>
            <a href="#" className="demo-nav-link">Pricing</a>
          </div>
        </nav>
        <div className="demo-nav-content">
          <h2 style={{ color: 'white', marginBottom: '16px' }}>Scroll down 👇</h2>
          <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
            Notice how the navigation bar stays pinned to the top of the container. 
            It uses <code style={{ color: 'var(--accent-primary)' }}>position: sticky; top: 0;</code> 
            along with a backdrop blur to create a frosted glass effect over the scrolling content.
          </p>
        </div>
      </div>
    </div>
  );
}
