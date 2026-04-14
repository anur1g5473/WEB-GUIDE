import '../../demos2.css';

export default function MinimalismDemo() {
  return (
    <div className="demo-container">
      <div className="demo-minimal-wrapper">
        <div className="demo-minimal-overline">Photography — Est. 2019</div>
        <h1 className="demo-minimal-title">Light is the<br/>only medium.</h1>
        <div className="demo-minimal-divider" />
        <p className="demo-minimal-body">
          Every photograph begins in darkness. The shutter opens, 
          light enters, and for a fraction of a second — something 
          permanent is made from something fleeting.
        </p>
        <button className="demo-minimal-cta">View Portfolio →</button>
      </div>
    </div>
  );
}
