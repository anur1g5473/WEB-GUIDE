import { useState } from 'react';

export default function NotificationStackDemo() {
  const [notifs, setNotifs] = useState<{id:number;msg:string;icon:string;color:string}[]>([]);
  let nextId = 0;

  const messages = [
    { msg:'Deploy succeeded ✓', icon:'🚀', color:'#10B981' },
    { msg:'New team member joined', icon:'👋', color:'#6366F1' },
    { msg:'Stripe payment received', icon:'💳', color:'#F59E0B' },
    { msg:'Build failed — check logs', icon:'⚠️', color:'#EF4444' },
  ];

  const push = () => {
    const m = messages[Math.floor(Math.random()*messages.length)];
    const id = Date.now();
    setNotifs(n => [{ id, ...m }, ...n].slice(0, 4));
    setTimeout(() => setNotifs(n => n.filter(x => x.id !== id)), 3500);
  };

  return (
    <div className="demo-container" style={{ background:'#070707', flex:1, display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', gap:24 }}>
      <style>{`@keyframes notifIn{from{opacity:0;transform:translateY(-16px) scale(0.95)}to{opacity:1;transform:translateY(0) scale(1)}}`}</style>
      
      <div style={{ position:'relative', width:300, height:180, display:'flex', flexDirection:'column', gap:8 }}>
        {notifs.map((n, i) => (
          <div key={n.id} style={{
            background:'#111', border:`1px solid ${n.color}40`, borderRadius:12, padding:'12px 16px',
            display:'flex', alignItems:'center', gap:12,
            animation:'notifIn 0.35s cubic-bezier(0.34,1.56,0.64,1)',
            transform:`scale(${1-i*0.03}) translateY(${i*2}px)`,
            opacity: 1-i*0.15,
            boxShadow:`0 4px 20px rgba(0,0,0,0.4)`,
          }}>
            <span style={{fontSize:18}}>{n.icon}</span>
            <span style={{ color:'rgba(255,255,255,0.8)', fontSize:13, flex:1 }}>{n.msg}</span>
            <div style={{ width:4, height:4, borderRadius:'50%', background:n.color }} />
          </div>
        ))}
        {notifs.length === 0 && <div style={{ color:'#222', fontSize:12, textAlign:'center', paddingTop:60 }}>No notifications yet</div>}
      </div>

      <button onClick={push} style={{ padding:'10px 24px', borderRadius:8, background:'#6366F1', border:'none', color:'white', fontWeight:700, cursor:'pointer', fontSize:13 }}>
        Push Notification
      </button>
    </div>
  );
}
