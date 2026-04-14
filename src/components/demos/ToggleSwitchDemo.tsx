import { useState } from 'react';

const toggles = [
  { label: 'Dark Mode', color: '#6366F1' },
  { label: 'Notifications', color: '#10B981' },
  { label: 'Auto-Deploy', color: '#F59E0B' },
  { label: 'Analytics', color: '#EC4899' },
];

export default function ToggleSwitchDemo() {
  const [states, setStates] = useState([true, false, true, false]);
  const toggle = (i: number) => setStates(s => s.map((v, idx) => idx === i ? !v : v));

  return (
    <div className="demo-container" style={{ background:'#0a0a0a', flex:1, display:'flex', alignItems:'center', justifyContent:'center' }}>
      <div style={{ background:'#111', border:'1px solid #1e1e1e', borderRadius:16, padding:'8px 0', width:280 }}>
        {toggles.map((t, i) => (
          <div key={i} style={{ display:'flex', alignItems:'center', justifyContent:'space-between', padding:'16px 20px', borderBottom: i < toggles.length-1 ? '1px solid #1a1a1a' : 'none' }}>
            <span style={{ color: states[i] ? 'white' : '#555', fontSize:14, fontWeight:500, transition:'color 0.3s' }}>{t.label}</span>
            <button
              onClick={() => toggle(i)}
              style={{
                width:48, height:26, borderRadius:13, border:'none', cursor:'pointer', position:'relative',
                background: states[i] ? t.color : '#2a2a2a',
                transition:'background 0.3s cubic-bezier(0.34,1.56,0.64,1)',
              }}
            >
              <div style={{
                position:'absolute', top:3, left: states[i] ? 25 : 3,
                width:20, height:20, borderRadius:'50%', background:'white',
                transition:'left 0.3s cubic-bezier(0.34,1.56,0.64,1)',
                boxShadow:'0 2px 4px rgba(0,0,0,0.3)',
              }}/>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
