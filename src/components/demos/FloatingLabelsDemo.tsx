export default function FloatingLabelsDemo() {
  return (
    <div className="demo-container" style={{ background:'#060606', flex:1, display:'flex', alignItems:'center', justifyContent:'center', padding:32 }}>
      <style>{`
        .fl-group{position:relative;margin-bottom:24px}
        .fl-input{width:100%;padding:18px 16px 8px;background:#111;border:1px solid #222;border-radius:10px;color:white;font-size:15px;outline:none;transition:border-color 0.25s ease;box-sizing:border-box}
        .fl-input:focus{border-color:#6366F1}
        .fl-input:focus~.fl-label,.fl-input:not(:placeholder-shown)~.fl-label{transform:translateY(-10px) scale(0.78);color:#6366F1}
        .fl-label{position:absolute;left:16px;top:50%;transform:translateY(-50%);color:#444;font-size:15px;pointer-events:none;transition:transform 0.2s ease,color 0.2s ease;transform-origin:left;background:#111;padding:0 4px}
        .fl-input:focus{box-shadow:0 0 0 3px rgba(99,102,241,0.15)}
      `}</style>
      <div style={{ width:'100%', maxWidth:320 }}>
        <div style={{ color:'#333', fontSize:11, letterSpacing:'0.12em', textTransform:'uppercase', marginBottom:24 }}>Floating Label Inputs</div>
        {[{label:'Full Name', type:'text'}, {label:'Email Address', type:'email'}, {label:'Password', type:'password'}].map((f, i) => (
          <div key={i} className="fl-group">
            <input className="fl-input" type={f.type} placeholder=" " />
            <label className="fl-label">{f.label}</label>
          </div>
        ))}
        <button style={{ width:'100%', padding:'14px 0', borderRadius:10, background:'#6366F1', border:'none', color:'white', fontWeight:700, fontSize:15, cursor:'pointer', marginTop:4 }}>
          Continue →
        </button>
      </div>
    </div>
  );
}
