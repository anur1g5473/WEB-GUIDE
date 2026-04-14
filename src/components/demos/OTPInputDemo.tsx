import { useState } from 'react';

export default function OTPInputDemo() {
  const [otp, setOtp] = useState(['','','','','','']);
  const [status, setStatus] = useState<'idle'|'success'|'error'>('idle');
  const refs = Array.from({length:6}, () => null as HTMLInputElement|null);

  const handleChange = (val: string, i: number) => {
    if (!/^\d?$/.test(val)) return;
    const next = [...otp]; next[i] = val; setOtp(next);
    if (val && i < 5) (document.getElementById(`otp-${i+1}`) as HTMLInputElement)?.focus();
    const code = next.join('');
    if (code.length === 6) {
      setTimeout(() => { setStatus(code === '123456' ? 'success' : 'error'); setTimeout(() => { setOtp(['','','','','','']); setStatus('idle'); }, 1500); }, 200);
    }
  };

  const handleKey = (e: React.KeyboardEvent, i: number) => {
    if (e.key === 'Backspace' && !otp[i] && i > 0) (document.getElementById(`otp-${i-1}`) as HTMLInputElement)?.focus();
  };

  const borderColor = status === 'success' ? '#10B981' : status === 'error' ? '#EF4444' : '#2a2a2a';

  return (
    <div className="demo-container" style={{ background:'#070707', flex:1, display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', gap:24 }}>
      <style>{`@keyframes shake{0%,100%{transform:translateX(0)}25%{transform:translateX(-6px)}75%{transform:translateX(6px)}}`}</style>
      <p style={{ color:'#555', fontSize:13 }}>Type 123456 to succeed</p>
      <div style={{ display:'flex', gap:10, animation: status==='error'?'shake 0.4s ease':'none' }}>
        {otp.map((d, i) => (
          <input key={i} id={`otp-${i}`} maxLength={1} value={d}
            onChange={e => handleChange(e.target.value, i)}
            onKeyDown={e => handleKey(e, i)}
            style={{
              width:46, height:56, textAlign:'center', fontSize:22, fontWeight:800,
              background:'#111', border:`2px solid ${d ? borderColor : '#1e1e1e'}`,
              borderRadius:10, color:'white', outline:'none', transition:'border-color 0.2s ease',
              caretColor:'transparent',
            }}
          />
        ))}
      </div>
      {status !== 'idle' && (
        <div style={{ fontSize:14, fontWeight:700, color: status==='success'?'#10B981':'#EF4444', animation:'fadeIn 0.2s ease' }}>
          {status === 'success' ? '✓ Verified successfully!' : '✕ Incorrect code, try again'}
        </div>
      )}
    </div>
  );
}
