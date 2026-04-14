import { useState } from 'react';

const results = ['Design Systems', 'Dark Mode Patterns', 'Data Visualization', 'Micro-interactions', 'Scroll Animations'];

export default function SearchInputDemo() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const filtered = results.filter(r => r.toLowerCase().includes(query.toLowerCase()));

  return (
    <div className="demo-container" style={{ background:'#060606', flex:1, display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', padding:32, gap:16 }}>
      <style>{`@keyframes dropIn{from{opacity:0;transform:translateY(-8px)}to{opacity:1;transform:translateY(0)}}`}</style>

      <div style={{ position:'relative', width:'100%', maxWidth:340 }}>
        {/* Search bar */}
        <div style={{ display:'flex', alignItems:'center', gap:10, background:'#111', border:`1px solid ${open?'#6366F1':'#1e1e1e'}`, borderRadius:12,
          padding:'12px 16px', transition:'border-color 0.25s, box-shadow 0.25s',
          boxShadow: open ? '0 0 0 3px rgba(99,102,241,0.15)' : 'none' }}>
          <span style={{ color: open?'#6366F1':'#333', fontSize:16, transition:'color 0.25s' }}>🔍</span>
          <input value={query} onChange={e=>setQuery(e.target.value)} onFocus={()=>setOpen(true)} onBlur={()=>setTimeout(()=>setOpen(false),150)}
            placeholder="Search patterns…" style={{ background:'transparent', border:'none', outline:'none', color:'white', fontSize:14, flex:1 }} />
          {query && <button onClick={()=>setQuery('')} style={{ background:'none', border:'none', color:'#444', cursor:'pointer', fontSize:16 }}>×</button>}
        </div>

        {/* Dropdown */}
        {open && (
          <div style={{ position:'absolute', top:'calc(100% + 8px)', left:0, right:0, background:'#111', border:'1px solid #1e1e1e',
            borderRadius:12, overflow:'hidden', animation:'dropIn 0.2s ease', zIndex:10, boxShadow:'0 20px 40px rgba(0,0,0,0.4)' }}>
            {(query ? filtered : results).map((r, i) => (
              <div key={r} onMouseDown={()=>setQuery(r)} style={{ padding:'12px 16px', color:'rgba(255,255,255,0.7)', fontSize:14, cursor:'pointer',
                borderBottom: i < results.length-1 ? '1px solid #1a1a1a' : 'none', transition:'background 0.15s',
                animation:`dropIn 0.25s ease ${i*0.04}s both` }}
                onMouseEnter={e=>(e.currentTarget.style.background='#1a1a1a')} onMouseLeave={e=>(e.currentTarget.style.background='transparent')}>
                <span style={{ color:'#444', marginRight:10 }}>↗</span>{r}
              </div>
            ))}
            {query && filtered.length === 0 && <div style={{ padding:'16px', color:'#333', fontSize:13, textAlign:'center' }}>No results for "{query}"</div>}
          </div>
        )}
      </div>
      <p style={{ color:'#2a2a2a', fontSize:12 }}>Click the search bar to expand</p>
    </div>
  );
}
