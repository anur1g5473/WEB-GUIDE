export default function ShimmerTextDemo() {
  return (
    <div className="demo-container" style={{ background:'#060606', flex:1, display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', gap:32, padding:32 }}>
      <style>{`
        @keyframes shimmerMove{0%{background-position:-400px 0}100%{background-position:400px 0}}
        @keyframes pulseOpacity{0%,100%{opacity:0.4}50%{opacity:1}}
        .sk{background:linear-gradient(90deg,#111 25%,#1e1e1e 50%,#111 75%);background-size:800px 100%;animation:shimmerMove 1.8s infinite linear;border-radius:6px}
        .pulse{animation:pulseOpacity 1.6s ease infinite}
      `}</style>

      {/* Generating text shimmer */}
      <div style={{ textAlign:'center' }}>
        <div style={{ color:'#333', fontSize:11, letterSpacing:'0.12em', textTransform:'uppercase', marginBottom:20 }}>AI Generating Response</div>
        <div className="sk" style={{ height:20, width:280, marginBottom:10 }} />
        <div className="sk" style={{ height:20, width:240, marginBottom:10 }} />
        <div className="sk" style={{ height:20, width:200 }} />
      </div>

      {/* Pulse avatar row */}
      <div style={{ display:'flex', gap:16, alignItems:'center' }}>
        {[1,2,3].map(i => (
          <div key={i} style={{ display:'flex', flexDirection:'column', alignItems:'center', gap:8 }}>
            <div className="pulse sk" style={{ width:48, height:48, borderRadius:'50%', animationDelay:`${i*0.2}s` }} />
            <div className="sk" style={{ height:10, width:48 }} />
          </div>
        ))}
      </div>

      {/* Shimmer card */}
      <div style={{ background:'#111', border:'1px solid #1a1a1a', borderRadius:12, padding:20, width:280 }}>
        <div style={{ display:'flex', alignItems:'center', gap:12, marginBottom:16 }}>
          <div className="sk" style={{ width:40, height:40, borderRadius:8, flexShrink:0 }} />
          <div style={{ flex:1 }}>
            <div className="sk" style={{ height:12, width:'70%', marginBottom:8 }} />
            <div className="sk" style={{ height:10, width:'45%' }} />
          </div>
        </div>
        <div className="sk" style={{ height:10, width:'100%', marginBottom:8 }} />
        <div className="sk" style={{ height:10, width:'80%' }} />
      </div>
    </div>
  );
}
