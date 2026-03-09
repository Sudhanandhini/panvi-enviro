import { useState, useEffect, useCallback } from 'react';
import img1 from "../assets/Picture1.png"
import img2 from "../assets/Picture2.jpg"
import img3 from "../assets/Picture4.png"
import img4 from "../assets/Picture3.jpg"
import img5 from "../assets/Picture5.png"

const SOFTENER_IMAGES = [
  { src: img1, caption: 'Residential Water Softener' },
 
  { src: img3, caption: 'Ion Exchange Resin System' },
  { src: img4, caption: 'Industrial Grade Unit' },
  { src: img5, caption: 'Ion Exchange Resin System' },
];

export default function WaterSoftenerSlider() {
  const [current, setCurrent] = useState(0);
  const [fade, setFade] = useState(true);

  const goTo = useCallback((index) => {
    setFade(false);
    setTimeout(() => {
      setCurrent(index);
      setFade(true);
    }, 250);
  }, []);

  const prev = () => goTo((current - 1 + SOFTENER_IMAGES.length) % SOFTENER_IMAGES.length);
  const next = () => goTo((current + 1) % SOFTENER_IMAGES.length);

  // Auto-play
  useEffect(() => {
    const timer = setInterval(next, 4000);
    return () => clearInterval(timer);
  }, [current]);

  const img = SOFTENER_IMAGES[current];

  return (
    <div style={{ position: 'relative', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 24px rgba(26,143,209,0.12)', background: '#f0f9ff', userSelect: 'none' }}>
      {/* Image */}
      <div style={{ position: 'relative', width: '100%', aspectRatio: '4/3', overflow: 'hidden' }}>
        <img
          src={img.src}
          alt={img.caption}
          style={{
            width: '100%', height: '100%', objectFit: 'contain',
            opacity: fade ? 1 : 0,
            transition: 'opacity 0.3s ease',
          }}
        />
        {/* Caption overlay */}
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0,
          background: 'linear-gradient(transparent, rgba(0,31,63,0.65))',
          padding: '28px 16px 14px',
          opacity: fade ? 1 : 0,
          transition: 'opacity 0.3s ease',
        }}>
          <p style={{ color: '#fff', fontSize: '13px', fontWeight: 600, margin: 0, textAlign: 'center' }}>{img.caption}</p>
        </div>

        {/* Prev / Next arrows */}
        {[
          { dir: 'prev', symbol: '‹', action: prev, side: '10px' },
          { dir: 'next', symbol: '›', action: next, side: null, right: '10px' },
        ].map(({ dir, symbol, action, side, right }) => (
          <button
            key={dir}
            onClick={action}
            style={{
              position: 'absolute', top: '50%', transform: 'translateY(-50%)',
              left: side, right: right,
              background: 'rgba(255,255,255,0.85)', border: 'none',
              borderRadius: '50%', width: '34px', height: '34px',
              fontSize: '22px', lineHeight: '34px', textAlign: 'center',
              cursor: 'pointer', color: '#1a8fd1', fontWeight: 700,
              boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
              transition: 'background 0.2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = '#1a8fd1'; e.currentTarget.style.color = '#fff'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.85)'; e.currentTarget.style.color = '#1a8fd1'; }}
          >
            {symbol}
          </button>
        ))}
      </div>

      {/* Dot indicators */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '7px', padding: '12px 0 14px' }}>
        {SOFTENER_IMAGES.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            style={{
              width: i === current ? '22px' : '8px',
              height: '8px',
              borderRadius: '4px',
              border: 'none',
              background: i === current ? '#1a8fd1' : '#bae6fd',
              cursor: 'pointer',
              padding: 0,
              transition: 'all 0.3s ease',
            }}
          />
        ))}
      </div>
    </div>
  );
}