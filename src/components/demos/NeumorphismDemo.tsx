import { useState } from 'react';
import '../../demos2.css';

export default function NeumorphismDemo() {
  const [playing, setPlaying] = useState(false);
  return (
    <div className="demo-container">
      <div className="demo-neu-wrapper">
        <div className="demo-neu-player">
          <div className="demo-neu-album">🎵</div>
          <div className="demo-neu-title">Midnight Drive</div>
          <div className="demo-neu-artist">Neon Atlas</div>
          <div className="demo-neu-controls">
            <button className="demo-neu-btn">⏮</button>
            <button className="demo-neu-btn play" onClick={() => setPlaying(!playing)}>
              {playing ? '⏸' : '▶'}
            </button>
            <button className="demo-neu-btn">⏭</button>
          </div>
        </div>
      </div>
    </div>
  );
}
