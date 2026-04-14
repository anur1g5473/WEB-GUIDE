import { useState } from 'react';

const steps = [
  { title: "What's your name?", field:'Name', placeholder:'Alex Johnson' },
  { title: 'Pick a plan', field:'Plan', placeholder: null },
  { title: "You're all set!", field: null, placeholder: null },
];

export default function MultiStepFormDemo() {
  const [step, setStep] = useState(0);
  const [dir, setDir] = useState<'fwd'|'back'>('fwd');

  const go = (d: 'fwd'|'back') => { setDir(d); setStep(s => d==='fwd'?Math.min(s+1,2):Math.max(s-1,0)); };

  return (
    <div className="demo-container" style={{ background:'#070707', flex:1, display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', padding:20 }}>
      <style>{`@keyframes slideInFwd{from{opacity:0;transform:translateX(30px)}to{opacity:1;transform:translateX(0)}} @keyframes slideInBack{from{opacity:0;transform:translateX(-30px)}to{opacity:1;transform:translateX(0)}}`}</style>

      <div style={{ width:'100%', maxWidth:340 }}>
        {/* Step dots */}
        <div style={{ display:'flex', justifyContent:'center', gap:8, marginBottom:28 }}>
          {steps.map((_, i) => (
            <div key={i} style={{ width:i===step?24:8, height:8, borderRadius:4, background:i<=step?'#6366F1':'#1e1e1e', transition:'all 0.3s ease' }} />
          ))}
        </div>

        {/* Step content */}
        <div key={step} style={{ animation:`${dir==='fwd'?'slideInFwd':'slideInBack'} 0.35s ease`, background:'#111', border:'1px solid #1e1e1e', borderRadius:16, padding:28 }}>
          <h3 style={{ color:'white', fontSize:18, fontWeight:800, marginBottom:20, letterSpacing:-0.5 }}>{steps[step].title}</h3>

          {step === 0 && <input placeholder="Alex Johnson" style={{ width:'100%', background:'#0a0a0a', border:'1px solid #222', borderRadius:8, padding:'10px 14px', color:'white', fontSize:14, outline:'none', boxSizing:'border-box' }}/>}

          {step === 1 && (
            <div style={{ display:'flex', flexDirection:'column', gap:8 }}>
              {['Starter – Free', 'Pro – $12/mo', 'Team – $49/mo'].map((plan, i) => (
                <div key={i} style={{ padding:'12px 16px', borderRadius:8, border:`1px solid ${i===1?'#6366F1':'#1e1e1e'}`, background:i===1?'rgba(99,102,241,0.1)':'transparent', color:i===1?'white':'#666', fontSize:13, cursor:'pointer' }}>{plan}</div>
              ))}
            </div>
          )}

          {step === 2 && (
            <div style={{ textAlign:'center', padding:'10px 0' }}>
              <div style={{ fontSize:48, marginBottom:12 }}>🎉</div>
              <p style={{ color:'#666', fontSize:13 }}>Your workspace is ready. Welcome aboard!</p>
            </div>
          )}
        </div>

        <div style={{ display:'flex', gap:10, marginTop:16 }}>
          {step > 0 && <button onClick={() => go('back')} style={{ flex:1, padding:'10px 0', borderRadius:8, border:'1px solid #222', background:'transparent', color:'#555', fontWeight:600, cursor:'pointer' }}>Back</button>}
          {step < 2 && <button onClick={() => go('fwd')} style={{ flex:1, padding:'10px 0', borderRadius:8, border:'none', background:'#6366F1', color:'white', fontWeight:700, cursor:'pointer' }}>Continue →</button>}
        </div>
      </div>
    </div>
  );
}
