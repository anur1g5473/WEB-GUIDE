import { useState } from 'react';

function validate(email: string) {
  if (!email) return 'idle';
  if (email.length < 3) return 'typing';
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ? 'valid' : 'invalid';
}

export default function InputValidationDemo() {
  const [email, setEmail] = useState('');
  const [shook, setShook] = useState(false);
  const state = validate(email);

  const handleSubmit = () => {
    if (state !== 'valid') { setShook(true); setTimeout(() => setShook(false), 500); }
  };

  const borderColor = { idle:'#1e1e1e', typing:'#F59E0B', valid:'#10B981', invalid:'#EF4444' }[state];
  const icon = { idle:null, typing:'✏️', valid:'✓', invalid:'✕' }[state];
  const iconColor = { idle:'', typing:'#F59E0B', valid:'#10B981', invalid:'#EF4444' }[state];

  return (
    <div className="demo-container" style={{ background:'#060606', flex:1, display:'flex', alignItems:'center', justifyContent:'center', padding:32 }}>
      <style>{`@keyframes shake{0%,100%{transform:translateX(0)}20%,60%{transform:translateX(-6px)}40%,80%{transform:translateX(6px)}}`}</style>
      <div style={{ width:'100%', maxWidth:320 }}>
        <div style={{ color:'#333', fontSize:11, letterSpacing:'0.12em', textTransform:'uppercase', marginBottom:24 }}>Real-time Validation</div>

        <div style={{ position:'relative', animation: shook ? 'shake 0.4s ease' : 'none' }}>
          <input value={email} onChange={e => setEmail(e.target.value)} placeholder="your@email.com" type="email"
            style={{ width:'100%', padding:'14px 44px 14px 16px', background:'#111', border:`1.5px solid ${borderColor}`, borderRadius:10,
              color:'white', fontSize:14, outline:'none', transition:'border-color 0.25s, box-shadow 0.25s', boxSizing:'border-box',
              boxShadow: state==='valid'?'0 0 0 3px rgba(16,185,129,0.15)':state==='invalid'?'0 0 0 3px rgba(239,68,68,0.15)':'none' }} />
          {icon && <span style={{ position:'absolute', right:14, top:'50%', transform:'translateY(-50%)', color:iconColor, fontWeight:900, fontSize:15, transition:'all 0.2s' }}>{icon}</span>}
        </div>

        {state === 'invalid' && <p style={{ color:'#EF4444', fontSize:12, marginTop:8, animation:'fadeIn 0.2s ease' }}>Please enter a valid email address.</p>}
        {state === 'valid' && <p style={{ color:'#10B981', fontSize:12, marginTop:8 }}>Looks great!</p>}

        <button onClick={handleSubmit} style={{ width:'100%', marginTop:16, padding:'13px 0', borderRadius:10, border:'none',
          background: state==='valid'?'#10B981':'#1e1e1e', color: state==='valid'?'white':'#444',
          fontWeight:700, fontSize:14, cursor:'pointer', transition:'all 0.3s ease' }}>
          {state==='valid' ? 'Subscribe ✓' : 'Subscribe'}
        </button>
      </div>
    </div>
  );
}
