export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      {/* Header */}
      <header className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
        <h1 className="text-xl font-bold">Anbuu N</h1>
        <a href="/" className="px-3 py-1 border rounded-md text-sm">Home</a>
      </header>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-1/2">
          <h2 className="text-4xl font-extrabold mb-4">About Me</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
            I am Anbuu N, a passionate Web Developer and University student. I enjoy building practical projects that solve real-world problems, like StudyMate, a notes-sharing platform for students.
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
            I started with HTML, CSS, and JavaScript, then learned Django and React to build full-stack applications. I also explore photography and reading to improve my creativity and attention to detail.
          </p>
          <div className="flex gap-4 mt-6">
            <a href="/contact" className="px-4 py-2 bg-indigo-600 text-white rounded-md">Contact Me</a>
            <a href="#projects" className="px-4 py-2 border rounded-md">View Projects</a>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <img src="https://via.placeholder.com/300x300?text=Your+Photo" alt="Anbuu" className="rounded-full shadow-lg" />
        </div>
      </section>

      {/* Skills Section */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <h3 className="text-2xl font-semibold mb-6">Skills</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="p-4 border rounded-lg">
            <h4 className="font-semibold">Frontend</h4>
            <ul className="mt-3 text-sm space-y-2 text-gray-700 dark:text-gray-200">
              <li>HTML, CSS, Tailwind</li>
              <li>JavaScript, React</li>
              <li>Responsive Design & Accessibility</li>
            </ul>
          </div>
          <div className="p-4 border rounded-lg">
            <h4 className="font-semibold">Backend</h4>
            <ul className="mt-3 text-sm space-y-2 text-gray-700 dark:text-gray-200">
              <li>Django (REST APIs)</li>
              <li>Node.js & Express</li>
              <li>Authentication, File uploads</li>
            </ul>
          </div>
          <div className="p-4 border rounded-lg">
            <h4 className="font-semibold">Database & Tools</h4>
            <ul className="mt-3 text-sm space-y-2 text-gray-700 dark:text-gray-200">
              <li>MySQL, MongoDB basics</li>
              <li>Git, GitHub, VS Code</li>
              <li>Photoshop (basic)</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
