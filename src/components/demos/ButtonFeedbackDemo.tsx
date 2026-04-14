import { useState } from 'react';

export default function ButtonFeedbackDemo() {
  const [state, setState] = useState<'idle'|'loading'|'success'>('idle');

  const handleClick = () => {
    if (state !== 'idle') return;
    setState('loading');
    setTimeout(() => { setState('success'); setTimeout(() => setState('idle'), 1500); }, 1800);
  };

  return (
    <div className="demo-container" style={{ background:'#080808', flex:1, display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', gap:32 }}>
      {/* Ripple button */}
      <div>
        <p style={{ color:'rgba(255,255,255,0.3)', fontSize:11, textAlign:'center', marginBottom:16, letterSpacing:'0.1em', textTransform:'uppercase' }}>Press & Hold</p>
        <button
          onClick={handleClick}
          disabled={state !== 'idle'}
          style={{
            position:'relative', overflow:'hidden',
            padding:'14px 36px', borderRadius:12,
            background: state === 'success' ? '#10B981' : state === 'loading' ? '#4F46E5' : '#6366F1',
            color:'white', border:'none', fontWeight:700, fontSize:16,
            cursor: state === 'idle' ? 'pointer' : 'not-allowed',
            transition:'all 0.4s cubic-bezier(0.34,1.56,0.64,1)',
            transform: state === 'idle' ? 'scale(1)' : 'scale(0.97)',
            boxShadow: state === 'success' ? '0 0 30px rgba(16,185,129,0.5)' : '0 0 30px rgba(99,102,241,0.3)',
            minWidth:180,
          }}
        >
          {state === 'idle' && 'Deploy to Production'}
          {state === 'loading' && (
            <span style={{ display:'flex', alignItems:'center', justifyContent:'center', gap:10 }}>
              <svg width="16" height="16" viewBox="0 0 16 16" style={{ animation:'spin 0.8s linear infinite' }}>
                <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
                <circle cx="8" cy="8" r="6" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="2"/>
                <path d="M8 2 A6 6 0 0 1 14 8" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              Deploying…
            </span>
          )}
          {state === 'success' && '✓ Deployed!'}
        </button>
      </div>

      {/* Toggle row of micro buttons */}
      <div style={{ display:'flex', gap:12, alignItems:'center' }}>
        {['⚡ Quick', '🚀 Deploy', '🔒 Secure'].map((label, i) => (
          <button key={i} style={{
            padding:'8px 16px', borderRadius:8, border:'1px solid rgba(255,255,255,0.1)',
            background:'rgba(255,255,255,0.05)', color:'rgba(255,255,255,0.7)',
            fontWeight:600, fontSize:13, cursor:'pointer',
            transition:'all 0.15s ease',
          }}
          onMouseEnter={e => { (e.target as HTMLButtonElement).style.background='rgba(99,102,241,0.2)'; (e.target as HTMLButtonElement).style.borderColor='rgba(99,102,241,0.4)'; (e.target as HTMLButtonElement).style.color='white'; }}
          onMouseLeave={e => { (e.target as HTMLButtonElement).style.background='rgba(255,255,255,0.05)'; (e.target as HTMLButtonElement).style.borderColor='rgba(255,255,255,0.1)'; (e.target as HTMLButtonElement).style.color='rgba(255,255,255,0.7)'; }}
          onMouseDown={e => { (e.target as HTMLButtonElement).style.transform='scale(0.94)'; }}
          onMouseUp={e => { (e.target as HTMLButtonElement).style.transform='scale(1)'; }}
          >{label}</button>
        ))}
      </div>
    </div>
  );
}
