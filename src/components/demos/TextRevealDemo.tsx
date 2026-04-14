import { useState, useEffect } from 'react';
import '../../demos-scroll.css';

const wordGroups = [
  { text: 'We', accent: false },
  { text: 'build', accent: false },
  { text: 'digital', accent: true },
  { text: 'experiences', accent: false },
  { text: 'that', accent: false },
  { text: 'leave', accent: false },
  { text: 'people', accent: false },
  { text: 'speechless.', accent: true },
];

export default function TextRevealDemo() {
  const [revealed, setRevealed] = useState(false);
  const [count, setCount] = useState(0);

  const replay = () => {
    setRevealed(false);
    setTimeout(() => { setRevealed(true); setCount(c => c + 1); }, 80);
  };

  useEffect(() => { setTimeout(() => setRevealed(true), 300); }, []);

  return (
    <div className="demo-container">
      <div className="demo-textreveal-wrapper" onClick={replay}>
        <div className="demo-textreveal-bg-text">WORDS</div>
        <h2 className="demo-reveal-headline">
          {wordGroups.map((w, i) => (
            <span
              key={`${count}-${i}`}
              className={`demo-reveal-word ${revealed ? 'revealed' : ''} ${w.accent ? 'accent' : ''}`}
              style={{ transitionDelay: revealed ? `${i * 0.09}s` : '0s' }}
            >
              {w.text}
            </span>
          ))}
        </h2>
        <p className="demo-reveal-hint">Click to replay animation</p>
      </div>
    </div>
  );
}
