import { useState } from 'react';

export default function LoadingButtonDemo() {
  const [state, setState] = useState<'idle'|'loading'|'success'|'error'>('idle');

  const trigger = (outcome: 'success'|'error') => {
    if (state !== 'idle') return;
    setState('loading');
    setTimeout(() => { setState(outcome); setTimeout(() => setState('idle'), 2000); }, 2000);
  };

  const cfg = {
    idle:    { bg:'#6366F1', label:'Submit Payment', icon:null },
    loading: { bg:'#4338CA', label:'Processing…', icon:'spin' },
    success: { bg:'#059669', label:'Payment Complete!', icon:'check' },
    error:   { bg:'#DC2626', label:'Card Declined', icon:'x' },
  }[state];

  return (
    <div className="demo-container" style={{ background:'#070707', flex:1, display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', gap:24 }}>
      <style>{`@keyframes spin{to{transform:rotate(360deg)}} @keyframes popIn{0%{transform:scale(0)}60%{transform:scale(1.2)}100%{transform:scale(1)}}`}</style>

      <div style={{ background:'#0f0f0f', border:'1px solid #1e1e1e', borderRadius:16, padding:32, width:320 }}>
        <div style={{ fontSize:13, color:'#555', marginBottom:24, textAlign:'center' }}>Click a button to see state transitions</div>

        <button onClick={() => trigger('success')} disabled={state !== 'idle'}
          style={{ width:'100%', padding:'14px 0', borderRadius:10, border:'none', cursor: state==='idle'?'pointer':'not-allowed',
            background: cfg.bg, color:'white', fontWeight:700, fontSize:15,
            transition:'all 0.4s cubic-bezier(0.34,1.56,0.64,1)',
            display:'flex', alignItems:'center', justifyContent:'center', gap:10 }}>
          {state === 'loading' && <svg width="18" height="18" viewBox="0 0 18 18" style={{animation:'spin 0.7s linear infinite'}}><circle cx="9" cy="9" r="7" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="2.5"/><path d="M9 2A7 7 0 0 1 16 9" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round"/></svg>}
          {state === 'success' && <span style={{animation:'popIn 0.3s ease'}}>✓</span>}
          {state === 'error' && <span style={{animation:'popIn 0.3s ease'}}>✕</span>}
          {cfg.label}
        </button>

        <button onClick={() => trigger('error')} disabled={state !== 'idle'}
          style={{ marginTop:10, width:'100%', padding:'10px 0', borderRadius:8, border:'1px solid #222', cursor: state==='idle'?'pointer':'not-allowed',
            background:'transparent', color:'#555', fontWeight:500, fontSize:13, transition:'all 0.2s ease' }}>
          Simulate Error Instead
        </button>
      </div>
    </div>
  );
}
