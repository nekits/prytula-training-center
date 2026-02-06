export default function UavIllustration({ className = '' }: { className?: string }) {
  const CX = 300;
  const CY = 200;
  const R = 180;
  const DURATION = 5;

  const targets = [
    { x: 360, y: 155, rotation: -60, angleDeg: 323 },
    { x: 230, y: 260, rotation: 51, angleDeg: 139 },
  ];

  /* Sweep tail — 4 sector slices with increasing opacity (oldest → newest) */
  const TAIL_SLICES = 4;
  const TAIL_SPAN = 60;
  const sliceDeg = TAIL_SPAN / TAIL_SLICES;

  const tailSectors = Array.from({ length: TAIL_SLICES }, (_, i) => {
    const startDeg = -(TAIL_SPAN - i * sliceDeg);
    const endDeg = startDeg + sliceDeg;
    const sr = (startDeg * Math.PI) / 180;
    const er = (endDeg * Math.PI) / 180;
    const x1 = Math.round(CX + R * Math.cos(sr));
    const y1 = Math.round(CY + R * Math.sin(sr));
    const x2 = Math.round(CX + R * Math.cos(er));
    const y2 = Math.round(CY + R * Math.sin(er));
    const opacity = 0.03 + (i / (TAIL_SLICES - 1)) * 0.12;
    return {
      d: `M ${CX} ${CY} L ${x1} ${y1} A ${R} ${R} 0 0 1 ${x2} ${y2} Z`,
      opacity,
    };
  });

  return (
    <svg
      viewBox="0 0 600 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <style>{`
          .uav-sweep{
            transform-origin:${CX}px ${CY}px;
            animation:uav-sweep-rotate ${DURATION}s linear infinite;
            will-change:transform;
          }
          @keyframes uav-sweep-rotate{
            from{transform:rotate(0deg)}
            to{transform:rotate(360deg)}
          }
          @keyframes uav-target-pulse{
            0%,3%{opacity:1}
            50%{opacity:.12}
            100%{opacity:.12}
          }
        `}</style>
        <pattern id="uav-grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#e5e7eb" strokeWidth="0.5" />
        </pattern>
      </defs>

      {/* Background grid */}
      <rect width="600" height="400" fill="url(#uav-grid)" />

      {/* Radar rays */}
      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => {
        const rad = (angle * Math.PI) / 180;
        return (
          <line
            key={angle}
            x1={CX}
            y1={CY}
            x2={CX + Math.cos(rad) * R}
            y2={CY + Math.sin(rad) * R}
            stroke="#e5e7eb"
            strokeWidth="0.75"
            strokeDasharray="4 6"
          />
        );
      })}

      {/* Concentric circles — outer ones clip at viewBox edges */}
      {[60, 120, 180].map((r) => (
        <circle key={r} cx={CX} cy={CY} r={r} fill="none" stroke="#d1d5db" strokeWidth="0.75" />
      ))}
      <circle cx={CX} cy={CY} r={240} fill="none" stroke="#e5e7eb" strokeWidth="0.75" strokeDasharray="4 6" />

      {/* Rotating sweep */}
      <g className="uav-sweep">
        {tailSectors.map((s, i) => (
          <path key={i} d={s.d} fill="#4e51ff" opacity={s.opacity} />
        ))}
        <line
          x1={CX}
          y1={CY}
          x2={CX + R}
          y2={CY}
          stroke="#4e51ff"
          strokeWidth="1.5"
          opacity={0.7}
        />
      </g>

      {/* Targets (UAVs) */}
      {targets.map((t, i) => {
        const delay = -((DURATION * (360 - t.angleDeg)) / 360);
        return (
          <g
            key={i}
            transform={`translate(${t.x}, ${t.y}) rotate(${t.rotation})`}
            style={{
              animation: `uav-target-pulse ${DURATION}s ease-out infinite`,
              animationDelay: `${delay}s`,
              willChange: 'opacity',
            }}
          >
            <polygon
              points="0,-17 15,10 -15,10"
              fill="#4e51ff"
              strokeLinejoin="round"
            />
          </g>
        );
      })}

      {/* Centre dot */}
      <circle cx={CX} cy={CY} r={3} fill="#4e51ff" />
    </svg>
  );
}
