export default function BreadcrumbsDemo() {
  return (
    <div className="demo-container">
      <div className="demo-breadcrumbs-wrapper">
        <nav aria-label="Breadcrumb" className="demo-breadcrumbs">
          <a href="#" className="demo-breadcrumb-item">Home</a>
          <span className="demo-breadcrumb-separator">/</span>
          
          <a href="#" className="demo-breadcrumb-item">Electronics</a>
          <span className="demo-breadcrumb-separator">/</span>
          
          <a href="#" className="demo-breadcrumb-item">Laptops</a>
          <span className="demo-breadcrumb-separator">/</span>
          
          <span className="demo-breadcrumb-current" aria-current="page">MacBook Pro M3</span>
        </nav>
      </div>
    </div>
  );
}
