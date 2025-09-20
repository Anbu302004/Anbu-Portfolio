export default function Nav() {
  return (
    <nav className="bg-gray-50 dark:bg-gray-900 shadow-md sticky top-0 z-50 transition-colors">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo / Name */}
       <a 
          href="#home" 
          className="text-2xl font-bold text-orange-500 hover:text-orange-600 transition-colors"
        >
          Anbu N
        </a>


        {/* Links */}
        <div className="flex items-center gap-6">
          <a
            href="#about"
            className="text-gray-900 dark:text-gray-100 hover:text-orange-500 transition-colors font-medium"
          >
            About
          </a>
          <a
            href="#skills"
            className="text-gray-900 dark:text-gray-100 hover:text-orange-500 transition-colors font-medium"
          >
            Skills
          </a>
          <a
            href="#projects"
            className="text-gray-900 dark:text-gray-100 hover:text-orange-500 transition-colors font-medium"
          >
            Projects
          </a>
          <a
            href="/RESUME.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-900 dark:text-gray-100 hover:text-orange-500 transition-colors font-medium"
          >
            Resume
          </a>
        </div>
      </div>
    </nav>
  );
}
