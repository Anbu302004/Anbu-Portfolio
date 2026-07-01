import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { Github, ExternalLink, X } from 'lucide-react';
import { projects } from './portfolioData';

const categories = ['All', ...new Set(projects.map((p) => p.category))];

export default function Projects() {
  const [filter, setFilter] = useState('All');
  const [selected, setSelected] = useState(null);

  const visible = filter === 'All' ? projects : projects.filter((p) => p.category === filter);

  useEffect(() => {
    document.body.style.overflow = selected ? 'hidden' : '';
    const onKey = (e) => e.key === 'Escape' && setSelected(null);
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [selected]);

  return (
    <section id="projects" className="py-24 px-6" data-aos="fade-up">
      {/* ---------- Global keyframes/styles — always mounted so the modal's
          animation classes resolve immediately on first open ---------- */}
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(18px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes popIn {
          from { opacity: 0; transform: scale(0.96) translateY(8px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
        .hero-line {
          opacity: 0;
          animation: fadeInUp 0.7s ease-out forwards;
        }
        .modal-backdrop {
          animation: fadeIn 0.2s ease-out;
        }
        .modal-card {
          animation: popIn 0.25s ease-out;
        }
        @media (prefers-reduced-motion: reduce) {
          .hero-line { animation: none; opacity: 1; }
          .modal-backdrop, .modal-card { animation: none; }
        }
      `}</style>

      <div className="max-w-5xl mx-auto">
        <div className="flex items-end justify-between flex-wrap gap-4 mb-10">
          <div>
            <p
              className="hero-line font-mono text-xs tracking-widest text-amber-400 uppercase mb-2"
              style={{ animationDelay: '0s' }}
            >
              Selected work
            </p>
            <h2
              className="hero-line text-3xl md:text-4xl font-semibold text-[#E7ECF3]"
              style={{ animationDelay: '0.1s' }}
            >
              Projects
            </h2>
          </div>

          <div
            className="hero-line flex flex-wrap gap-2"
            style={{ animationDelay: '0.2s' }}
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-mono tracking-wide border transition-all duration-150 hover:scale-105 ${
                  filter === cat
                    ? 'bg-amber-400 text-[#0B1220] border-amber-400 font-semibold'
                    : 'border-white/12 text-white/50 hover:text-white hover:border-white/30'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          {visible.map((p, i) => (
            <button
              key={p.slug}
              onClick={() => setSelected(p)}
              data-aos="fade-up"
              data-aos-delay={i * 60}
              className="text-left rounded-xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] hover:border-amber-400/40 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/30 transition-all duration-200 p-6 flex flex-col gap-4 group"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-[11px] tracking-widest uppercase text-amber-400">{p.category}</span>
                <span className="font-mono text-[11px] text-white/30">{p.year}</span>
              </div>
              <h3 className="text-lg font-semibold text-[#E7ECF3] group-hover:text-amber-300 transition-colors">
                {p.title}
              </h3>
              <p className="text-sm text-white/55 leading-relaxed line-clamp-3">{p.summary}</p>
              <div className="flex flex-wrap gap-1.5 mt-auto pt-2">
                {p.tech.slice(0, 3).map((t) => (
                  <span key={t} className="px-2 py-0.5 rounded-full text-[11px] font-mono bg-white/[0.04] border border-white/10 text-white/60">
                    {t}
                  </span>
                ))}
              </div>
            </button>
          ))}
        </div>
      </div>

      {selected &&
        createPortal(
          <div
            className="modal-backdrop fixed inset-0 z-[1000] flex items-center justify-center p-5 bg-[#05070C]/85 backdrop-blur-sm"
            onClick={() => setSelected(null)}
          >
            <div
              className="modal-card relative w-full max-w-xl max-h-[85vh] overflow-y-auto bg-[#0F1729] border border-white/10 rounded-2xl shadow-2xl p-8"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelected(null)}
                className="absolute top-5 right-5 w-9 h-9 rounded-full bg-white/5 border border-white/10 text-white/70 flex items-center justify-center hover:bg-amber-400 hover:text-[#0B1220] hover:border-amber-400 transition-colors"
              >
                <X size={17} />
              </button>

              <span className="font-mono text-[11px] tracking-widest uppercase text-amber-400">{selected.category} · {selected.year}</span>
              <h3 className="text-2xl font-semibold text-[#E7ECF3] mt-2 mb-4">{selected.title}</h3>
              <p className="text-white/65 leading-relaxed mb-6">{selected.details}</p>

              <div className="flex flex-wrap gap-2 mb-8">
                {selected.tech.map((t) => (
                  <span key={t} className="px-2.5 py-1 rounded-full text-xs font-mono bg-white/[0.04] border border-white/10 text-white/70">
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                {selected.demo && (
                  <a
                    href={selected.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 min-w-[140px] text-center px-5 py-3 rounded-lg font-semibold text-sm bg-amber-400 text-[#0B1220] hover:bg-amber-300 transition-colors flex items-center justify-center gap-2"
                  >
                    <ExternalLink size={16} /> Live demo
                  </a>
                )}
                <a
                  href={selected.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex-1 min-w-[140px] text-center px-5 py-3 rounded-lg font-semibold text-sm transition-colors flex items-center justify-center gap-2 ${
                    selected.demo
                      ? 'border border-white/15 text-white/80 hover:bg-white/5'
                      : 'bg-amber-400 text-[#0B1220] hover:bg-amber-300'
                  }`}
                >
                  <Github size={16} /> View code
                </a>
              </div>
            </div>
          </div>,
          document.body
        )}
    </section>
  );
}