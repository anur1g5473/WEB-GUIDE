export default function SpinnerLoaderDemo() {
  return (
    <div className="demo-container" style={{ background:'#060606', flex:1, display:'flex', alignItems:'center', justifyContent:'center' }}>
      <style>{`
        @keyframes spin{to{transform:rotate(360deg)}}
        @keyframes spin-rev{to{transform:rotate(-360deg)}}
        @keyframes pulse-dot{0%,100%{transform:scale(0.5);opacity:0.3}50%{transform:scale(1);opacity:1}}
      `}</style>
      <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:40 }}>

        {/* 1. Gradient arc */}
        <div style={{ display:'flex', flexDirection:'column', alignItems:'center', gap:12 }}>
          <svg width="54" height="54" viewBox="0 0 54 54" style={{ animation:'spin 1s linear infinite' }}>
            <circle cx="27" cy="27" r="22" fill="none" stroke="#1a1a1a" strokeWidth="4"/>
            <circle cx="27" cy="27" r="22" fill="none" stroke="url(#g1)" strokeWidth="4" strokeLinecap="round" strokeDasharray="100 38"/>
            <defs><linearGradient id="g1" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stopColor="#6366F1"/><stop offset="100%" stopColor="#EC4899"/></linearGradient></defs>
          </svg>
          <span style={{ color:'#444', fontSize:11 }}>Gradient Arc</span>
        </div>

        {/* 2. Dual counter-rotate */}
        <div style={{ display:'flex', flexDirection:'column', alignItems:'center', gap:12 }}>
          <div style={{ position:'relative', width:54, height:54 }}>
            <svg width="54" height="54" viewBox="0 0 54 54" style={{ position:'absolute', animation:'spin 1.5s linear infinite' }}>
              <circle cx="27" cy="27" r="22" fill="none" stroke="#6366F1" strokeWidth="3" strokeLinecap="round" strokeDasharray="60 78"/>
            </svg>
            <svg width="54" height="54" viewBox="0 0 54 54" style={{ position:'absolute', animation:'spin-rev 1s linear infinite' }}>
              <circle cx="27" cy="27" r="14" fill="none" stroke="#EC4899" strokeWidth="3" strokeLinecap="round" strokeDasharray="30 58"/>
            </svg>
          </div>
          <span style={{ color:'#444', fontSize:11 }}>Dual Counter</span>
        </div>

        {/* 3. Dot pulse cluster */}
        <div style={{ display:'flex', flexDirection:'column', alignItems:'center', gap:12 }}>
          <div style={{ display:'flex', gap:8, alignItems:'center' }}>
            {[0,1,2].map(i => (
              <div key={i} style={{ width:10, height:10, borderRadius:'50%', background:'#6366F1', animation:`pulse-dot 1.2s ease ${i*0.2}s infinite` }} />
            ))}
          </div>
          <span style={{ color:'#444', fontSize:11 }}>Dot Cluster</span>
        </div>

        {/* 4. Line spinner */}
        <div style={{ display:'flex', flexDirection:'column', alignItems:'center', gap:12 }}>
          <svg width="54" height="54" viewBox="0 0 54 54" style={{ animation:'spin 0.8s cubic-bezier(0.4,0,0.2,1) infinite' }}>
            <circle cx="27" cy="27" r="22" fill="none" stroke="#1a1a1a" strokeWidth="4"/>
            <circle cx="27" cy="27" r="22" fill="none" stroke="#6366F1" strokeWidth="4" strokeLinecap="round" strokeDasharray="138" strokeDashoffset="100"/>
          </svg>
          <span style={{ color:'#444', fontSize:11 }}>Ring Fill</span>
        </div>
      </div>
    </div>
  );
}
