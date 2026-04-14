import { useRef } from 'react';

export default function MagneticButtonDemo() {
  const btn1Ref = useRef<HTMLButtonElement>(null);
  const btn2Ref = useRef<HTMLButtonElement>(null);
  const btn3Ref = useRef<HTMLButtonElement>(null);

  const makeMagnetic = (ref: React.RefObject<HTMLButtonElement | null>, strength = 0.4) => ({
    onMouseMove: (e: React.MouseEvent) => {
      const el = ref.current; if (!el) return;
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left - rect.width/2) * strength;
      const y = (e.clientY - rect.top - rect.height/2) * strength;
      el.style.transform = `translate(${x}px, ${y}px)`;
    },
    onMouseLeave: () => { if (ref.current) ref.current.style.transform = 'translate(0,0)'; },
  });

  const btnStyle: React.CSSProperties = { border:'none', cursor:'pointer', fontWeight:700, transition:'transform 0.3s cubic-bezier(0.34,1.56,0.64,1)', display:'inline-flex', alignItems:'center', justifyContent:'center' };

  return (
    <div className="demo-container" style={{ background:'#050505', flex:1, display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', gap:40 }}>
      <p style={{ color:'#333', fontSize:12, letterSpacing:'0.1em', textTransform:'uppercase' }}>Hover over each button slowly</p>

      <div {...makeMagnetic(btn1Ref)}>
        <button ref={btn1Ref} style={{ ...btnStyle, padding:'16px 40px', borderRadius:50, background:'#6366F1', color:'white', fontSize:16 }}>
          Magnetic Pull
        </button>
      </div>

      <div {...makeMagnetic(btn2Ref, 0.5)}>
        <button ref={btn2Ref} style={{ ...btnStyle, width:80, height:80, borderRadius:'50%', background:'transparent', border:'1px solid #333', color:'white', fontSize:24 }}>
          ✦
        </button>
      </div>

      <div {...makeMagnetic(btn3Ref, 0.3)}>
        <button ref={btn3Ref} style={{ ...btnStyle, padding:'12px 28px', borderRadius:8, background:'transparent', border:'1px solid #6366F1', color:'#818CF8', fontSize:14 }}>
          Try me →
        </button>
      </div>
    </div>
  );
}
