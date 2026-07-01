import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react';
import Projects from './Projects';
import SkillsRadar from './SkillsRadar';
import { profile } from './portfolioData';

export default function Home() {
  const location = useLocation();
  const heroRef = useRef(null);
  const [spot, setSpot] = useState({ x: 50, y: 40 });

  // Support links like /#skills coming from another page: scroll to the
  // section once we've mounted and the DOM for it actually exists.
  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) requestAnimationFrame(() => el.scrollIntoView({ behavior: 'smooth' }));
    }
  }, [location]);

  // Cursor-tracked glow — subtle, desktop-only in feel (harmless on touch, it just won't move).
  const handleMouseMove = (e) => {
    const rect = heroRef.current?.getBoundingClientRect();
    if (!rect) return;
    setSpot({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  };

  return (
    <div className="bg-[#0B1220] text-[#E7ECF3] min-h-screen">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500&family=JetBrains+Mono:wght@400;500&display=swap');
        .font-display { font-family: 'Space Grotesk', sans-serif; }
        body, .font-body { font-family: 'Inter', sans-serif; }
        .font-mono { font-family: 'JetBrains Mono', monospace; }

        @keyframes drift {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(30px, -20px) scale(1.05); }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(18px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulseDot {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(0.85); }
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); opacity: 0.5; }
          50% { transform: translateY(6px); opacity: 1; }
        }
        @keyframes gradientShift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .hero-blob {
          position: absolute;
          border-radius: 9999px;
          filter: blur(90px);
          opacity: 0.16;
          pointer-events: none;
          animation: drift 12s ease-in-out infinite;
        }
        .hero-line {
          opacity: 0;
          animation: fadeInUp 0.7s ease-out forwards;
        }
        .hero-grid {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(231,236,243,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(231,236,243,0.05) 1px, transparent 1px);
          background-size: 42px 42px;
          mask-image: radial-gradient(ellipse 70% 60% at 30% 20%, black 40%, transparent 90%);
          pointer-events: none;
        }
        .hero-spotlight {
          position: absolute;
          inset: 0;
          pointer-events: none;
          transition: background 0.15s ease-out;
        }
        .status-dot {
          animation: pulseDot 2s ease-in-out infinite;
        }
        .scroll-cue {
          animation: bounce 1.8s ease-in-out infinite;
        }
        .gradient-word {
          background: linear-gradient(90deg, #F2A93B, #3FD0C9, #F2A93B);
          background-size: 200% auto;
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          animation: gradientShift 5s ease-in-out infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .hero-blob, .status-dot, .scroll-cue, .gradient-word { animation: none; }
          .hero-line { animation: none; opacity: 1; }
        }
      `}</style>

      {/* ---------- Hero ---------- */}
      <section
        id="home"
        ref={heroRef}
        onMouseMove={handleMouseMove}
        className="relative overflow-hidden px-6 pt-20 pb-28 md:pt-28 md:pb-36"
      >
        {/* Layered atmosphere: grid, drifting blobs, cursor-tracked glow — in that stacking order */}
        <div className="hero-grid" />
        <div className="hero-blob w-72 h-72 bg-amber-400 -top-10 -left-10" />
        <div className="hero-blob w-96 h-96 bg-teal-400 top-1/3 -right-20" style={{ animationDelay: '3s' }} />
        <div
          className="hero-spotlight hidden md:block"
          style={{
            background: `radial-gradient(500px circle at ${spot.x}% ${spot.y}%, rgba(242,169,59,0.06), transparent 70%)`,
          }}
        />

        <div className="relative max-w-5xl mx-auto">
          <div className="hero-line flex items-center gap-3 mb-6" style={{ animationDelay: '0s' }}>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-emerald-400/30 bg-emerald-400/10">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 status-dot" />
              <span className="font-mono text-[11px] tracking-wide text-emerald-300">Open to work</span>
            </span>
            <p className="font-mono text-xs tracking-widest text-amber-400 uppercase">
              {profile.role} · {profile.location}
            </p>
          </div>

          <h1
            className="hero-line font-display text-4xl md:text-6xl font-semibold leading-[1.1] mb-6 max-w-3xl"
            style={{ animationDelay: '0.15s' }}
          >
            I build backends that hold up and <span className="gradient-word">interfaces</span> that feel considered.
          </h1>
          <p
            className="hero-line text-white/60 max-w-2xl leading-relaxed mb-9"
            style={{ animationDelay: '0.28s' }}
          >
            I'm {profile.name} — a Computer Science Engineering student who ships full-stack
            products end to end: React on the front, Node.js and Spring Boot behind it, and
            lately, agentic AI workflows tying the two together.
          </p>

          <div className="hero-line flex flex-wrap items-center gap-4" style={{ animationDelay: '0.4s' }}>
            <a
              href="#projects"
              className="px-5 py-3 rounded-lg bg-amber-400 text-[#0B1220] font-semibold text-sm hover:bg-amber-300 hover:scale-105 active:scale-100 transition-all duration-200"
            >
              View projects
            </a>
            <a
              href="#skills"
              className="px-5 py-3 rounded-lg border border-white/15 text-white/80 font-semibold text-sm hover:border-white/30 hover:scale-105 active:scale-100 transition-all duration-200"
            >
              See skills
            </a>
            <div className="flex items-center gap-4 ml-2">
              <a href={profile.github} target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-amber-300 hover:-translate-y-0.5 transition-all duration-200 inline-block">
                <Github size={19} />
              </a>
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-amber-300 hover:-translate-y-0.5 transition-all duration-200 inline-block">
                <Linkedin size={19} />
              </a>
              <a href={`mailto:${profile.email}`} className="text-white/40 hover:text-amber-300 hover:-translate-y-0.5 transition-all duration-200 inline-block">
                <Mail size={19} />
              </a>
            </div>
          </div>
        </div>

        <a
          href="#skills"
          aria-label="Scroll to skills"
          className="scroll-cue absolute bottom-8 left-1/2 -translate-x-1/2 text-white/30 hover:text-amber-300 transition-colors"
        >
          <ArrowDown size={20} />
        </a>
      </section>

      {/* ---------- Skills ---------- */}
      <section id="skills" className="px-6 py-24 border-t border-white/8">
        <div className="max-w-5xl mx-auto">
          <p className="font-mono text-xs tracking-widest text-amber-400 uppercase mb-2" data-aos="fade-up">
            Toolkit
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold mb-10" data-aos="fade-up" data-aos-delay="80">
            Skills
          </h2>
          <div data-aos="fade-up" data-aos-delay="160">
            <SkillsRadar />
          </div>
        </div>
      </section>

      {/* ---------- Projects ---------- */}
      <div className="border-t border-white/8">
        <Projects />
      </div>

      <footer className="py-10 px-6 border-t border-white/8">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-3 text-sm text-white/40">
          <span>© {new Date().getFullYear()} {profile.name}</span>
          <span className="font-mono text-xs">Built with React · Tailwind</span>
        </div>
      </footer>
    </div>
  );
}
