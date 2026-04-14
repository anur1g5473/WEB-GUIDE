export default function ThreeDTextDemo() {
  return (
    <div className="demo-container" style={{ background: '#050505', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <style>{`
        .extruded-text {
          font-size: 80px;
          font-weight: 900;
          color: #6366f1;
          text-transform: uppercase;
          letter-spacing: -2px;
          transition: transform 0.3s ease;
          cursor: pointer;
          user-select: none;
          text-shadow: 
            0 1px 0 #4f46e5,
            0 2px 0 #4338ca,
            0 3px 0 #3730a3,
            0 4px 0 #312e81,
            0 5px 10px rgba(0,0,0,0.8),
            0 10px 20px rgba(0,0,0,0.4);
        }
        .extruded-text:hover {
          transform: translateY(-5px) rotateX(10deg);
          text-shadow: 
            0 1px 0 #4f46e5,
            0 2px 0 #4338ca,
            0 3px 0 #3730a3,
            0 4px 0 #312e81,
            0 5px 0 #1e1b4b,
            0 6px 0 #1e1b4b,
            0 7px 0 #1e1b4b,
            0 8px 0 #1e1b4b,
            0 20px 30px rgba(0,0,0,0.6);
        }
        .container-3d {
          perspective: 1000px;
        }
      `}</style>
      <div className="container-3d">
        <h2 className="extruded-text">EXCEL</h2>
      </div>
    </div>
  );
}
