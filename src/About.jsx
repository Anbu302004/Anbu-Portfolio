import { useEffect, useRef, useState } from 'react';
import AOS from 'aos';
import { Award, ArrowUpRight } from 'lucide-react';
import { internships, education, certifications, profile } from './portfolioData';

export default function About() {
  const heroRef = useRef(null);
  const [spot, setSpot] = useState({ x: 50, y: 30 });

  // AOS is initialized once in Nav.jsx on first load — refresh here so it
  // re-scans this page's data-aos elements when arriving via client-side routing.
  useEffect(() => {
    AOS.refresh();
  }, []);

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
        @keyframes drift {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(30px, -20px) scale(1.05); }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(18px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .hero-blob {
          position: absolute;
          border-radius: 9999px;
          filter: blur(90px);
          opacity: 0.14;
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
          mask-image: radial-gradient(ellipse 70% 55% at 25% 15%, black 40%, transparent 90%);
          pointer-events: none;
        }
        .hero-spotlight {
          position: absolute;
          inset: 0;
          pointer-events: none;
          transition: background 0.15s ease-out;
        }
        @media (prefers-reduced-motion: reduce) {
          .hero-blob { animation: none; }
          .hero-line { animation: none; opacity: 1; }
        }
      `}</style>

      {/* ---------- Atmosphere wrapper — same treatment as the Home hero ---------- */}
      <div
        ref={heroRef}
        onMouseMove={handleMouseMove}
        className="relative overflow-hidden px-6 pt-20 pb-8 md:pt-28"
      >
        <div className="hero-grid" />
        <div className="hero-blob w-72 h-72 bg-amber-400 -top-16 -left-16" />
        <div className="hero-blob w-80 h-80 bg-teal-400 top-20 -right-24" style={{ animationDelay: '2.5s' }} />
        <div
          className="hero-spotlight hidden md:block"
          style={{
            background: `radial-gradient(480px circle at ${spot.x}% ${spot.y}%, rgba(242,169,59,0.05), transparent 70%)`,
          }}
        />

        <div className="relative max-w-3xl mx-auto">
          <p
            className="hero-line font-mono text-xs tracking-widest text-amber-400 uppercase mb-2"
            style={{ animationDelay: '0s' }}
          >
            About
          </p>
          <h1
            className="hero-line text-3xl md:text-4xl font-semibold mb-8"
            style={{ animationDelay: '0.1s' }}
          >
            A bit more background
          </h1>

          <p
            className="hero-line text-white/65 leading-relaxed mb-4"
            style={{ animationDelay: '0.2s' }}
          >
            I'm {profile.name}, a Computer Science Engineering student at Christ College of
            Engineering and Technology, Puducherry, with hands-on experience across React, Java,
            RESTful API design, responsive interfaces, and more recently, AI-assisted development.
          </p>
          <p
            className="hero-line text-white/65 leading-relaxed mb-16"
            style={{ animationDelay: '0.3s' }}
          >
            I've interned at LittleTake building React front ends and at Femtosoft Technologies
            building Spring Boot backends. Outside of coursework I experiment with tools like
            Claude Code, build small agentic systems, and turn ideas into working full-stack apps.
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 pb-20 md:pb-28">
        {/* Internships */}
        <section className="mb-16">
          <h2 className="text-xl font-semibold mb-6" data-aos="fade-up">Internships</h2>
          <div className="space-y-5">
            {internships.map((role, i) => (
              <div
                key={role.role}
                className="rounded-xl border border-white/10 bg-white/[0.02] p-6 hover:border-amber-400/30 hover:-translate-y-0.5 transition-all duration-200"
                data-aos="fade-up"
                data-aos-delay={i * 80}
              >
                <div className="flex items-baseline justify-between flex-wrap gap-2 mb-1">
                  <h3 className="font-semibold text-[#E7ECF3]">{role.role}</h3>
                  <span className="font-mono text-xs text-white/40">{role.period}</span>
                </div>
                <p className="text-amber-400 text-sm font-medium mb-3">{role.org}</p>
                <p className="text-white/60 text-sm leading-relaxed mb-3">{role.summary}</p>
                <a
                  href={role.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm text-white/70 hover:text-amber-300 hover:gap-1.5 transition-all duration-200"
                >
                  View repository <ArrowUpRight size={14} />
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="mb-16">
          <h2 className="text-xl font-semibold mb-6" data-aos="fade-up">Education</h2>
          <div
            className="rounded-xl border border-white/10 bg-white/[0.02] p-6 hover:border-amber-400/30 transition-colors duration-200"
            data-aos="fade-up"
          >
            <h3 className="font-semibold text-[#E7ECF3] mb-1">{education.degree}</h3>
            <p className="text-amber-400 text-sm font-medium mb-2">{education.school}</p>
            <p className="text-white/60 text-sm">{education.period} · {education.detail}</p>
          </div>
        </section>

        {/* Certifications */}
        <section>
          <h2 className="text-xl font-semibold mb-6" data-aos="fade-up">Certifications</h2>
          <div className="space-y-4">
            {certifications.map((cert, i) => (
              <div
                key={cert.name}
                className="rounded-xl border border-white/10 bg-white/[0.02] p-5 flex items-start gap-4 hover:border-amber-400/30 hover:-translate-y-0.5 transition-all duration-200"
                data-aos="fade-up"
                data-aos-delay={i * 80}
              >
                <Award className="text-amber-400 mt-0.5 shrink-0" size={20} />
                <div>
                  <h3 className="font-semibold text-[#E7ECF3] text-sm mb-1">{cert.name}</h3>
                  <p className="text-white/50 text-xs">{cert.org} · {cert.date}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}