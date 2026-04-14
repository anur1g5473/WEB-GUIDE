import { useState } from 'react';

type State = 'idle'|'loading'|'success'|'error';

export default function TransitionStatesDemo() {
  const [state, setState] = useState<State>('idle');

  const trigger = () => {
    setState('loading');
    const success = Math.random() > 0.3;
    setTimeout(() => setState(success?'success':'error'), 2000);
  };

  const configs: Record<State,{ bg:string; icon:string; title:string; sub:string }> = {
    idle:    { bg:'#111', icon:'💳', title:'Checkout', sub:'Ready to process your payment' },
    loading: { bg:'#0d0d1f', icon:'⏳', title:'Processing…', sub:'Contacting your bank securely' },
    success: { bg:'#041a0f', icon:'✅', title:'Payment Complete!', sub:'$49.00 charged to Visa •••• 4242' },
    error:   { bg:'#1a0404', icon:'❌', title:'Card Declined', sub:'Please check your details and retry' },
  };
  const c = configs[state];

  return (
    <div className="demo-container" style={{ background:'#070707', flex:1, display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', gap:24 }}>
      <style>{`@keyframes fadeUp{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:translateY(0)}} @keyframes spinAnim{to{transform:rotate(360deg)}}`}</style>

      <div key={state} style={{ width:300, background:c.bg, border:'1px solid #1e1e1e', borderRadius:16, padding:28, textAlign:'center', animation:'fadeUp 0.4s ease' }}>
        <div style={{ fontSize:44, marginBottom:16, display:'block', animation: state==='loading'?'spinAnim 1.5s linear infinite':'none' }}>{c.icon}</div>
        <h3 style={{ color:'white', fontSize:18, fontWeight:800, marginBottom:8, letterSpacing:-0.5 }}>{c.title}</h3>
        <p style={{ color:'#555', fontSize:13 }}>{c.sub}</p>
      </div>

      <div style={{ display:'flex', gap:10 }}>
        <button onClick={trigger} disabled={state==='loading'}
          style={{ padding:'10px 20px', borderRadius:8, background:'#6366F1', border:'none', color:'white', fontWeight:700, cursor:state!=='loading'?'pointer':'not-allowed', fontSize:13 }}>
          {state === 'loading' ? 'Processing…' : state === 'idle' ? 'Pay Now' : 'Try Again'}
        </button>
        {state !== 'idle' && <button onClick={()=>setState('idle')} style={{ padding:'10px 20px', borderRadius:8, background:'transparent', border:'1px solid #222', color:'#555', fontWeight:600, cursor:'pointer', fontSize:13 }}>Reset</button>}
      </div>
    </div>
  );
}
