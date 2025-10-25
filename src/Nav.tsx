import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Nav() {
  useEffect(() => {
    AOS.init({
      duration: 800,      // animation duration
      easing: 'ease-in-out',
      once: true,         // animate only once
    });
  }, []);

  return (
    <nav
      className="bg-gray-50 dark:bg-gray-900 shadow-md sticky top-0 z-50 transition-colors"
      data-aos="fade-down"
      data-aos-delay="100"
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo / Name */}
        <a
          href="#home"
          className="text-2xl font-bold text-orange-500 hover:text-orange-600 transition-transform duration-500 transform hover:scale-110 animate-bounce-once"
        >
          Anbu N
        </a>

        {/* Links */}
        <div className="flex items-center gap-6">
          {[
            { href: '#about', label: 'About' },
            { href: '#skills', label: 'Skills' },
            { href: '#projects', label: 'Projects' },
            { href: '/RESUME.pdf', label: 'Resume', target: '_blank' },
          ].map((link, idx) => (
            <a
              key={link.label}
              href={link.href}
              target={link.target || '_self'}
              rel={link.target ? 'noopener noreferrer' : undefined}
              className="text-gray-900 dark:text-gray-100 hover:text-orange-500 transition-colors font-medium relative group"
              data-aos="fade-down"
              data-aos-delay={150 + idx * 100} // staggered animation
            >
              {link.label}
              {/* Underline animation */}
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-orange-500 transition-all group-hover:w-full"></span>
            </a>
          ))}
        </div>
      </div>

    </nav>
  );
}
