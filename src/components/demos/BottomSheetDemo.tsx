import { useState } from 'react';

export default function BottomSheetDemo() {
  const [open, setOpen] = useState(false);

  return (
    <div className="demo-container" style={{ background:'#060606', flex:1, position:'relative', overflow:'hidden', display:'flex', alignItems:'center', justifyContent:'center' }}>
      <style>{`@keyframes sheetIn{from{transform:translateY(100%)}to{transform:translateY(0)}}`}</style>

      {/* Background content */}
      <button onClick={()=>setOpen(true)} style={{ padding:'12px 28px', borderRadius:10, background:'#6366F1', border:'none', color:'white', fontWeight:700, cursor:'pointer', fontSize:14 }}>
        Share Location
      </button>

      {/* Backdrop */}
      {open && <div onClick={()=>setOpen(false)} style={{ position:'absolute', inset:0, background:'rgba(0,0,0,0.6)', backdropFilter:'blur(4px)' }} />}

      {/* Bottom Sheet */}
      <div style={{
        position:'absolute', bottom:0, left:0, right:0,
        background:'#111', borderRadius:'20px 20px 0 0',
        border:'1px solid #1e1e1e', padding:'0 0 20px',
        transform: open ? 'translateY(0)' : 'translateY(100%)',
        transition:'transform 0.4s cubic-bezier(0.34,1.1,0.64,1)',
        zIndex:10,
      }}>
        {/* Drag handle */}
        <div style={{ display:'flex', justifyContent:'center', padding:'12px 0 20px' }}>
          <div style={{ width:40, height:4, borderRadius:2, background:'#2a2a2a' }} />
        </div>
        <div style={{ padding:'0 24px', fontSize:16, fontWeight:800, color:'white', marginBottom:16 }}>Share to</div>
        {['Copy Link','Send via Message','Post to Feed','Save to Bookmarks'].map((a,i) => (
          <div key={i} onClick={()=>setOpen(false)} style={{ display:'flex', alignItems:'center', gap:14, padding:'14px 24px', cursor:'pointer', transition:'background 0.15s' }}
            onMouseEnter={e=>(e.currentTarget.style.background='#1a1a1a')} onMouseLeave={e=>(e.currentTarget.style.background='transparent')}>
            <span style={{fontSize:18}}>{'🔗📱📣🔖'[i]}</span>
            <span style={{ color:'rgba(255,255,255,0.8)', fontSize:14 }}>{a}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
