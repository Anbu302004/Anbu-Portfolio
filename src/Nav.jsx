import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { profile } from './portfolioData';

// Section anchors only exist on the home page ("/"). From another route,
// these links first navigate home, then Home.jsx scrolls to the hash on mount.
const links = [
  { href: '/#skills', label: 'Skills' },
  { href: '/#projects', label: 'Projects' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
  { href: profile.resume, label: 'Resume', external: true },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    AOS.init({ duration: 700, easing: 'ease-out', once: true });
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location]);

  return (
    <nav
      className="sticky top-0 z-50 bg-[#060910] backdrop-blur-md border-b border-white/8"
      data-aos="fade-down"
      data-aos-duration="500"
    >
      <div className="max-w-5xl mx-auto px-6">
        <div className="h-16 flex items-center justify-between">
          <Link
            to="/"
            className="font-mono text-base tracking-widest text-amber-400 hover:text-amber-300 transition-colors"
          >
            ANBU<span className="text-white/40">.N</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {links.map((link) =>
              link.external ? (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-white/60 hover:text-amber-300 transition-colors"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.label}
                  to={link.href}
                  className="relative py-1 text-sm font-medium text-white/60 hover:text-amber-300 transition-colors group"
                >
                  {link.label}
                  <span
                    className={`absolute left-0 -bottom-0.5 h-[1.5px] bg-amber-400 transition-all duration-300 ${
                      location.pathname === link.href ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  />
                </Link>
              )
            )}
          </div>

          <button
            className="md:hidden text-white/80"
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-5 flex flex-col gap-1">
            {links.map((link) =>
              link.external ? (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-3 rounded-lg text-sm font-medium text-white/70 hover:bg-white/5 hover:text-amber-300 transition-colors"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.label}
                  to={link.href}
                  className="px-3 py-3 rounded-lg text-sm font-medium text-white/70 hover:bg-white/5 hover:text-amber-300 transition-colors"
                >
                  {link.label}
                </Link>
              )
            )}
          </div>
        )}
      </div>
    </nav>
  );
}