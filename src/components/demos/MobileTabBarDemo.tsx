import { useState } from 'react';

const tabs = [
  { icon:'🏠', label:'Home' }, { icon:'🔍', label:'Search' }, { icon:'➕', label:'Post' }, { icon:'❤️', label:'Likes' }, { icon:'👤', label:'Profile' },
];

export default function MobileTabBarDemo() {
  const [active, setActive] = useState(0);

  return (
    <div className="demo-container" style={{ background:'#080808', flex:1, display:'flex', flexDirection:'column', position:'relative' }}>
      {/* Content area */}
      <div style={{ flex:1, display:'flex', alignItems:'center', justifyContent:'center', flexDirection:'column', gap:12 }}>
        <div style={{ fontSize:48 }}>{tabs[active].icon}</div>
        <div style={{ color:'white', fontSize:20, fontWeight:700 }}>{tabs[active].label}</div>
        <div style={{ color:'#444', fontSize:13 }}>Tap tabs below</div>
      </div>

      {/* Tab Bar */}
      <div style={{ background:'rgba(10,10,15,0.95)', backdropFilter:'blur(20px)', borderTop:'1px solid #1a1a1a', padding:'8px 20px 12px', display:'flex', justifyContent:'space-around', position:'relative' }}>
        {/* Active indicator pill */}
        <div style={{
          position:'absolute', top:0, height:2, width:`${100/tabs.length}%`, background:'#6366F1',
          left:`${(active/tabs.length)*100}%`,
          transition:'left 0.3s cubic-bezier(0.34,1.56,0.64,1)',
          borderRadius:'0 0 2px 2px',
        }}/>
        {tabs.map((t, i) => (
          <button key={i} onClick={()=>setActive(i)} style={{ background:'none', border:'none', cursor:'pointer', display:'flex', flexDirection:'column', alignItems:'center', gap:4, padding:'4px 10px', transition:'transform 0.2s ease', transform: active===i ? 'scale(1.15)' : 'scale(1)' }}>
            <span style={{ fontSize:22, filter: active===i?'none':'grayscale(1)', opacity: active===i?1:0.4, transition:'all 0.2s' }}>{t.icon}</span>
            <span style={{ fontSize:9, fontWeight:700, color: active===i?'#6366F1':'#444', letterSpacing:'0.1em', textTransform:'uppercase', transition:'color 0.2s' }}>{t.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
