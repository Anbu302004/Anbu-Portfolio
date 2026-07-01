import { useRef, useState } from 'react';
import { Mail, Phone, Github, Linkedin, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';
import { profile } from './portfolioData';

// ---- Formspree endpoint ----
// 1. Go to https://formspree.io, sign up free, create a new form.
// 2. Copy the endpoint it gives you (looks like https://formspree.io/f/xxxxxxxx)
// 3. Paste it below. That's the only setup needed — messages land in your
//    Formspree inbox and get forwarded to your email automatically.
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xbdvzlzd';

const LINKEDIN_URL = 'https://www.linkedin.com/in/anbu-nagarathinam30/';

export default function Contact() {
  const form = useRef(null);
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.current) return;

    setStatus('sending');

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: new FormData(form.current),
      });

      if (res.ok) {
        setStatus('success');
        form.current.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <div className="bg-[#0B1220] text-[#E7ECF3] min-h-screen px-6 py-20 md:py-28">
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(18px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes statusFadeIn {
          from { opacity: 0; transform: translateY(-6px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .hero-line {
          opacity: 0;
          animation: fadeInUp 0.7s ease-out forwards;
        }
        .status-line {
          animation: statusFadeIn 0.35s ease-out forwards;
        }
        @media (prefers-reduced-motion: reduce) {
          .hero-line, .status-line { animation: none; opacity: 1; }
        }
      `}</style>

      <div className="max-w-2xl mx-auto">
        <p
          className="hero-line font-mono text-xs tracking-widest text-amber-400 uppercase mb-2"
          style={{ animationDelay: '0s' }}
        >
          Contact
        </p>
        <h1
          className="hero-line text-3xl md:text-4xl font-semibold mb-4"
          style={{ animationDelay: '0.1s' }}
        >
          Let's talk
        </h1>
        <p
          className="hero-line text-white/60 mb-10"
          style={{ animationDelay: '0.2s' }}
        >
          Open to internships, full-time roles, and interesting side projects.
        </p>

        <div className="flex flex-wrap gap-6 mb-12 text-sm">
          <a
            href={`mailto:${profile.email}`}
            className="hero-line flex items-center gap-2 text-white/70 hover:text-amber-300 hover:-translate-y-0.5 transition-all duration-200"
            style={{ animationDelay: '0.3s' }}
          >
            <Mail size={16} /> {profile.email}
          </a>
          <a
            href={`tel:${profile.phone.replace(/\s/g, '')}`}
            className="hero-line flex items-center gap-2 text-white/70 hover:text-amber-300 hover:-translate-y-0.5 transition-all duration-200"
            style={{ animationDelay: '0.36s' }}
          >
            <Phone size={16} /> {profile.phone}
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hero-line flex items-center gap-2 text-white/70 hover:text-amber-300 hover:-translate-y-0.5 transition-all duration-200"
            style={{ animationDelay: '0.42s' }}
          >
            <Github size={16} /> GitHub
          </a>
          <a
            href={profile.linkedin || LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hero-line flex items-center gap-2 text-white/70 hover:text-amber-300 hover:-translate-y-0.5 transition-all duration-200"
            style={{ animationDelay: '0.48s' }}
          >
            <Linkedin size={16} /> LinkedIn
          </a>
        </div>

        <form
          ref={form}
          onSubmit={handleSubmit}
          className="hero-line rounded-2xl border border-white/10 bg-white/[0.02] p-8 space-y-6"
          style={{ animationDelay: '0.56s' }}
        >
          <div
            className="hero-line"
            style={{ animationDelay: '0.64s' }}
          >
            <label className="block text-xs font-mono tracking-widest uppercase text-white/50 mb-2">Name</label>
            <input
              type="text"
              name="name"
              required
              placeholder="Your name"
              disabled={status === 'sending'}
              className="w-full px-4 py-3 bg-[#0B1220] border border-white/12 rounded-lg text-sm focus:border-amber-400 focus:outline-none transition-colors disabled:opacity-50"
            />
          </div>
          <div
            className="hero-line"
            style={{ animationDelay: '0.7s' }}
          >
            <label className="block text-xs font-mono tracking-widest uppercase text-white/50 mb-2">Email</label>
            <input
              type="email"
              name="email"
              required
              placeholder="your.email@example.com"
              disabled={status === 'sending'}
              className="w-full px-4 py-3 bg-[#0B1220] border border-white/12 rounded-lg text-sm focus:border-amber-400 focus:outline-none transition-colors disabled:opacity-50"
            />
          </div>
          <div
            className="hero-line"
            style={{ animationDelay: '0.76s' }}
          >
            <label className="block text-xs font-mono tracking-widest uppercase text-white/50 mb-2">Message</label>
            <textarea
              name="message"
              rows={5}
              required
              placeholder="What are you building?"
              disabled={status === 'sending'}
              className="w-full px-4 py-3 bg-[#0B1220] border border-white/12 rounded-lg text-sm focus:border-amber-400 focus:outline-none resize-none transition-colors disabled:opacity-50"
            />
          </div>

          <button
            type="submit"
            disabled={status === 'sending'}
            className="hero-line w-full px-6 py-3 rounded-lg bg-amber-400 text-[#0B1220] font-semibold text-sm hover:bg-amber-300 hover:scale-[1.02] transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2"
            style={{ animationDelay: '0.82s' }}
          >
            {status === 'sending' ? (
              <>
                <Loader2 size={16} className="animate-spin" /> Sending...
              </>
            ) : (
              'Send message'
            )}
          </button>

          {status === 'success' && (
            <p className="status-line flex items-center gap-2 text-sm text-emerald-400">
              <CheckCircle2 size={16} /> Thanks — your message is in. I'll get back to you soon.
            </p>
          )}
          {status === 'error' && (
            <p className="status-line flex items-center gap-2 text-sm text-red-400">
              <AlertCircle size={16} /> Something went wrong — try emailing me directly at {profile.email}.
            </p>
          )}
        </form>
      </div>
    </div>
  );
}