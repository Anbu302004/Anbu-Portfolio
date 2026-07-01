import { useEffect, useState } from 'react';
import { skillGroups } from './portfolioData';

// A small, self-contained SVG radar chart — no charting library required.
// Each axis is a skill category; the plotted value is how many tools sit in
// that category, so the shape is an honest reflection of the data above,
// not a self-rated "skill level".

const SIZE = 340;
const CENTER = SIZE / 2;
const RADIUS = SIZE / 2 - 56;
const LEVELS = 4;

function pointOnAxis(index, total, value, maxValue) {
  const angle = (Math.PI * 2 * index) / total - Math.PI / 2;
  const r = (value / maxValue) * RADIUS;
  return [CENTER + r * Math.cos(angle), CENTER + r * Math.sin(angle)];
}

export default function SkillsRadar() {
  const [active, setActive] = useState(null);
  const [drawn, setDrawn] = useState(false);
  const total = skillGroups.length;
  const maxValue = Math.max(...skillGroups.map((g) => g.items.length));

  // Draw the shape in from the center the first time it scrolls into view,
  // rather than having it just appear — small nod to it being a "live" reading.
  useEffect(() => {
    const t = setTimeout(() => setDrawn(true), 120);
    return () => clearTimeout(t);
  }, []);

  const dataPoints = skillGroups.map((g, i) => pointOnAxis(i, total, g.items.length, maxValue));
  const polygonPath = dataPoints.map((p) => p.join(',')).join(' ');

  return (
    <div className="grid md:grid-cols-[340px_1fr] gap-10 items-center">
      <svg viewBox={`0 0 ${SIZE} ${SIZE}`} className="w-full max-w-[340px] mx-auto overflow-visible">
        <style>{`
          @keyframes ringFadeIn {
            from { opacity: 0; transform: scale(0.85); }
            to { opacity: 1; transform: scale(1); }
          }
          @keyframes axisGrow {
            from { transform: scaleX(0); }
            to { transform: scaleX(1); }
          }
          @keyframes dotPop {
            0% { opacity: 0; transform: scale(0); }
            60% { opacity: 1; transform: scale(1.35); }
            100% { opacity: 1; transform: scale(1); }
          }
          @keyframes labelFadeIn {
            from { opacity: 0; transform: translateY(4px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes legendFadeUp {
            from { opacity: 0; transform: translateY(14px); }
            to { opacity: 1; transform: translateY(0); }
          }

          .radar-ring {
            transform-origin: ${CENTER}px ${CENTER}px;
            opacity: 0;
            animation: ringFadeIn 0.5s ease-out forwards;
          }
          .radar-axis {
            transform-box: fill-box;
            transform-origin: 0% 0%;
            animation: axisGrow 0.5s ease-out forwards;
          }
          @media (prefers-reduced-motion: no-preference) {
            .radar-shape {
              transform-origin: ${CENTER}px ${CENTER}px;
              transform: scale(${drawn ? 1 : 0});
              opacity: ${drawn ? 1 : 0};
              transition: transform 0.8s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.5s ease-out;
            }
          }
          .radar-dot {
            opacity: 0;
            transform-box: fill-box;
            transform-origin: center;
            animation: dotPop 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
          }
          .radar-label {
            opacity: 0;
            animation: labelFadeIn 0.5s ease-out forwards;
          }
          .legend-card {
            opacity: 0;
            animation: legendFadeUp 0.6s ease-out forwards;
          }
          @media (prefers-reduced-motion: reduce) {
            .radar-ring, .radar-axis, .radar-dot, .radar-label, .legend-card {
              animation: none !important;
              opacity: 1 !important;
              transform: none !important;
            }
          }
        `}</style>
        {/* grid rings — fade/scale in from the center, outer rings trailing slightly */}
        {Array.from({ length: LEVELS }).map((_, ringIdx) => {
          const ringRadius = (RADIUS * (ringIdx + 1)) / LEVELS;
          const ringPoints = skillGroups
            .map((_, i) => pointOnAxis(i, total, ringRadius, RADIUS).join(','))
            .join(' ');
          return (
            <polygon
              key={ringIdx}
              className="radar-ring"
              points={ringPoints}
              fill="none"
              stroke="rgba(231,236,243,0.10)"
              strokeWidth="1"
              style={{ animationDelay: `${ringIdx * 80}ms` }}
            />
          );
        })}

        {/* axes — sweep outward from center like a radar spoke */}
        {skillGroups.map((g, i) => {
          const [x, y] = pointOnAxis(i, total, RADIUS, RADIUS);
          return (
            <line
              key={g.key}
              className="radar-axis"
              x1={CENTER}
              y1={CENTER}
              x2={x}
              y2={y}
              stroke="rgba(231,236,243,0.10)"
              strokeWidth="1"
              style={{ animationDelay: `${i * 45}ms` }}
            />
          );
        })}

        {/* data shape — animates in via the .radar-shape transform above */}
        <g className="radar-shape">
          <polygon
            points={polygonPath}
            fill="rgba(242,169,59,0.18)"
            stroke="#F2A93B"
            strokeWidth="2"
            strokeLinejoin="round"
          />

          {dataPoints.map(([x, y], i) => (
            <circle
              key={skillGroups[i].key}
              className="radar-dot"
              cx={x}
              cy={y}
              r={active === i ? 6 : 4}
              fill="#F2A93B"
              stroke="#0B1220"
              strokeWidth="2"
              style={{ animationDelay: `${600 + i * 70}ms` }}
              onMouseEnter={() => setActive(i)}
              onMouseLeave={() => setActive(null)}
            />
          ))}
        </g>

        {/* labels — fade in just after their matching dot pops */}
        {skillGroups.map((g, i) => {
          const [x, y] = pointOnAxis(i, total, RADIUS + 34, RADIUS);
          return (
            <text
              key={g.key}
              className="radar-label"
              x={x}
              y={y}
              textAnchor="middle"
              dominantBaseline="middle"
              style={{ animationDelay: `${700 + i * 70}ms` }}
              fill={active === i ? '#F2A93B' : '#8B95A7'}
              fontSize="12"
              fontFamily="'JetBrains Mono', monospace"
              onMouseEnter={() => setActive(i)}
              onMouseLeave={() => setActive(null)}
            >
              {g.label.toUpperCase()}
            </text>
          );
        })}
      </svg>

      <div className="space-y-3">
        {skillGroups.map((g, i) => (
          <div
            key={g.key}
            onMouseEnter={() => setActive(i)}
            onMouseLeave={() => setActive(null)}
            className={`legend-card rounded-lg border px-4 py-3 transition-colors duration-150 hover:-translate-y-0.5 ${
              active === i ? 'border-amber-400/60 bg-amber-400/5' : 'border-white/8 bg-white/[0.02]'
            }`}
            style={{ animationDelay: `${i * 90}ms` }}
          >
            <div className="flex items-baseline justify-between mb-2">
              <span
                className="font-mono text-[11px] tracking-widest uppercase"
                style={{ color: active === i ? '#F2A93B' : '#8B95A7' }}
              >
                {g.label}
              </span>
              <span className="font-mono text-[11px] text-white/30">{g.items.length} tools</span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {g.items.map((item) => (
                <span
                  key={item}
                  className="px-2.5 py-1 rounded-full text-xs font-medium bg-white/[0.04] border border-white/10 text-[#E7ECF3] transition-transform duration-150 hover:scale-105"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}