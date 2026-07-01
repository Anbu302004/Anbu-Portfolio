import { skillGroups } from './portfolioData';

export default function SkillsSection() {
  return (
    <section id="skills" className="w-full py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3 auto-rows-fr items-stretch">
          {skillGroups.map((group, index) => (
            <div
              key={group.key}
              className="skill-card group relative h-full min-h-[96px] overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-2"
              style={{ animationDelay: `${index * 60}ms` }}
            >
              <div className="skill-card-glow pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="absolute -top-14 left-1/2 h-20 w-20 -translate-x-1/2 rounded-full bg-amber-400/10 blur-3xl" />
              </div>

              <div className="skill-card-shine pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0" />

              <div className="relative flex h-full flex-col">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="text-[10px] uppercase tracking-[0.25em] font-mono text-white/55 transition-colors duration-300 group-hover:text-amber-300">
                    {group.label}
                  </h3>
                  <span className="text-[10px] font-mono text-white/25">
                    {group.items.length} tools
                  </span>
                </div>

                <div className="flex flex-wrap gap-1">
                  {group.items.map((item, itemIndex) => (
                    <span
                      key={item}
                      className="skill-pill px-2 py-0.5 rounded-full text-[12px] font-medium bg-white/[0.05] border border-white/10 text-white/80"
                      style={{ animationDelay: `${index * 60 + itemIndex * 28}ms` }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .skill-card {
          transform: translateY(10px);
          opacity: 0;
          box-shadow: 0 0 0 rgba(0, 0, 0, 0);
          animation: cardIn 0.6s ease forwards;
          transition:
            transform 0.2s ease,
            border-color 0.2s ease,
            background 0.2s ease,
            box-shadow 0.2s ease;
        }

        .skill-card:hover {
          transform: translateY(-3px) scale(1.002);
          border-color: rgba(251, 191, 36, 0.22);
          background: rgba(255, 255, 255, 0.04);
          box-shadow: 0 10px 24px rgba(0, 0, 0, 0.2);
        }

        .skill-card:hover .skill-card-shine {
          opacity: 1;
          animation: shineSweep 0.9s ease forwards;
        }

        .skill-pill {
          transform: translateY(6px);
          opacity: 0;
          animation: pillIn 0.45s ease forwards;
          transition:
            transform 0.18s ease,
            border-color 0.18s ease,
            color 0.18s ease,
            background 0.18s ease;
        }

        .skill-pill:hover {
          transform: translateY(-1px) scale(1.03);
          border-color: rgba(251, 191, 36, 0.34);
          color: rgb(254 243 199);
          background: rgba(255, 255, 255, 0.06);
        }

        @keyframes cardIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes pillIn {
          from {
            opacity: 0;
            transform: translateY(6px) scale(0.985);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes shineSweep {
          0% {
            transform: translateX(-120%);
          }
          100% {
            transform: translateX(120%);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .skill-card,
          .skill-pill,
          .skill-card-shine {
            animation: none !important;
            transition: none !important;
            opacity: 1 !important;
            transform: none !important;
          }
        }
      `}</style>
    </section>
  );
}