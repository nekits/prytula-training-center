export default function MedicIllustration({ className = '' }: { className?: string }) {
  const CYCLE_W = 300;
  const CYCLES = 2;
  const DURATION = 2.4;
  const PL = 100;

  /* One ECG cycle scaled to 300px wide, peaks enlarged */
  const ecgCycle: [number, number][] = [
    [0, 200], [45, 200],
    [57, 187], [75, 200],
    [98, 200], [105, 208],
    [114, 115], [125, 240],
    [134, 200], [165, 200],
    [186, 178], [207, 200],
    [300, 200],
  ];

  const segments: string[] = [];
  for (let c = 0; c < CYCLES; c++) {
    for (const [x, y] of ecgCycle) {
      const absX = x + c * CYCLE_W;
      segments.push(segments.length === 0 ? `M ${absX} ${y}` : `L ${absX} ${y}`);
    }
  }
  const ecgPath = segments.join(' ');

  /* Trail layers: longest = 100% (always visible) */
  const layers = [
    { length: 100, width: 6, opacity: 0.03 },
    { length: 85, width: 3, opacity: 0.07 },
    { length: 55, width: 2.5, opacity: 0.16 },
    { length: 30, width: 2, opacity: 0.35 },
    { length: 10, width: 2.5, opacity: 0.7 },
    { length: 2, width: 2.5, opacity: 1 },
  ];

  return (
    <svg
      viewBox="0 0 600 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      overflow="hidden"
      aria-hidden="true"
    >
      <defs>
        <pattern id="medic-grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#e5e7eb" strokeWidth="0.5" />
        </pattern>
      </defs>

      {/* Background grid */}
      <rect width="600" height="400" fill="url(#medic-grid)" />

      {/* Static ECG path — dim baseline */}
      <path id="ecg-line" d={ecgPath} stroke="#d1d5db" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />

      {/* Leading circle */}
      <circle r="6" fill="#4e51ff">
        <animateMotion dur={`${DURATION}s`} repeatCount="indefinite">
          <mpath href="#ecg-line" />
        </animateMotion>
      </circle>

      {/* Animated fading trail */}
      {layers.map((l, i) => (
        <path
          key={i}
          d={ecgPath}
          pathLength={PL}
          stroke="#4e51ff"
          strokeWidth={l.width}
          opacity={l.opacity}
          strokeDasharray={`${l.length} ${PL - l.length}`}
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        >
          <animate
            attributeName="stroke-dashoffset"
            from={`${l.length}`}
            to={`${l.length - PL}`}
            dur={`${DURATION}s`}
            repeatCount="indefinite"
          />
        </path>
      ))}
    </svg>
  );
}
