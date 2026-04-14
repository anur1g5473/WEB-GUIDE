export default function SkeletonCardsDemo() {
  return (
    <div className="demo-container" style={{ background:'#080808', flex:1, padding:20, display:'flex', flexDirection:'column', gap:12 }}>
      <style>{`
        @keyframes shimmer { 0%{background-position:-400px 0} 100%{background-position:400px 0} }
        .sk { background: linear-gradient(90deg, #161616 25%, #222 50%, #161616 75%);
              background-size:800px 100%; animation: shimmer 1.6s infinite linear; border-radius:6px; }
      `}</style>
      {[1,2,3].map(i => (
        <div key={i} style={{ background:'#111', border:'1px solid #1a1a1a', borderRadius:12, overflow:'hidden', display:'flex', gap:0, flexDirection:'column' }}>
          <div className="sk" style={{ height:120, borderRadius:0 }} />
          <div style={{ padding:'16px' }}>
            <div className="sk" style={{ height:14, width:'65%', marginBottom:10 }} />
            <div className="sk" style={{ height:11, width:'85%', marginBottom:6 }} />
            <div className="sk" style={{ height:11, width:'70%', marginBottom:16 }} />
            <div style={{ display:'flex', alignItems:'center', gap:10 }}>
              <div className="sk" style={{ width:32, height:32, borderRadius:'50%', flexShrink:0 }} />
              <div style={{ flex:1 }}>
                <div className="sk" style={{ height:10, width:'40%', marginBottom:6 }} />
                <div className="sk" style={{ height:9, width:'25%' }} />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
