import { useState, useEffect } from 'react';
import ProfilePic from './assets/profile.jpg';
import Image1 from './assets/img1.png';
import Image2 from './assets/img2.png';
import Image3 from './assets/img3.png';

export default function AnbuuPersonaPortfolio() {
  const [dark] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') === 'dark';
    }
    return false;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (dark) root.classList.add('dark');
    else root.classList.remove('dark');
    localStorage.setItem('theme', dark ? 'dark' : 'light');
  }, [dark]);

  const projects = [
    {
      title: 'StudyMate',
      desc: 'Notes-sharing platform for students to access study notes before exams.',
      tech: ['Django', 'MySQL', 'Bootstrap'],
      link: 'https://github.com/Anbu302004/clgproject',
      img: Image1
    },
    {
      title: 'Portfolio Website',
      desc: 'Responsive portfolio to showcase projects and blog posts.',
      tech: ['React', 'Tailwind CSS'],
      link: 'https://github.com/Anbu302004/game-hub',
      img: Image2
    },
    {
      title: 'E-Commerce Popup System',
      desc: 'Popup feature for an online shopping website using Laravel & MySQL.',
      tech: ['Laravel', 'MySQL', 'JS'],
      link: 'https://github.com/Anbu302004/ecommercesystem',
      img: Image3
    }
  ];

  const internships = [
    {
      title: 'React.js Internship – LITTETAKE (20 Days)',
      desc: 'Developed a movie listing website using React.js and company API.',
      link: 'https://github.com/Anbu302004/sample-movies'
    },
    {
      title: 'Spring Boot Java Internship – FEMTOSOFT (1 Month)',
      desc: 'Backend development using Spring Boot & Java, building REST APIs.',
      link: 'https://github.com/Anbu302004/librarymanagementsystem-main'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      {/* Header */}
       

      <main className="max-w-6xl mx-auto px-6" id="home">
        {/* Hero Section */}
        <section className="grid md:grid-cols-2 gap-8 items-center py-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold">Hi, I'm Anbu N</h2>
            <p className="mt-3 text-xl">Web Developer & University Student</p>
            <p className="mt-4 text-gray-700 dark:text-gray-300 max-w-lg">
              I build responsive full-stack apps using Django, React, and MySQL. Founder of StudyMate, a notes-sharing platform for students.
            </p>
            <div className="mt-6 flex gap-4">
              <a href="#projects" className="px-4 py-2 bg-orange-500 text-white rounded-md hover:opacity-90 transition-opacity">
                View Projects
              </a>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <img src={ProfilePic} alt="Anbuu" className="rounded-full shadow-lg w-60 h-60 object-cover" />
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-12">
          <h3 className="text-2xl font-semibold mb-6">Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p) => (
              <div key={p.title} className="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-shadow overflow-hidden transform hover:scale-105">
                <img src={p.img} alt={p.title} className="w-full h-48 object-cover"/>
                <div className="p-4">
                  <h4 className="font-semibold text-lg text-orange-500">{p.title}</h4>
                  <p className="mt-2 text-gray-700 dark:text-gray-300 text-sm">{p.desc}</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {p.tech.map((t) => (
                      <span key={t} className="text-xs px-2 py-1 border rounded-full">{t}</span>
                    ))}
                  </div>
                  <a href={p.link} className="text-orange-500 text-sm mt-2 inline-block hover:underline">View Project →</a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Internships Section */}
        <section id="internships" className="py-12">
          <h3 className="text-2xl font-semibold mb-6">Internships</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {internships.map((i) => (
              <div key={i.title} className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-md hover:shadow-lg transform hover:scale-105">
                <h4 className="font-semibold text-orange-500">{i.title}</h4>
                <p className="mt-1 text-gray-700 dark:text-gray-300">{i.desc}</p>
                {i.link && (
                  <a href={i.link} className="text-orange-500 text-sm mt-1 inline-block hover:underline">
                    GitHub →
                  </a>
                )}
              </div>
            ))}
          </div>
        </section>
        {/* About Section */}
<section id="about" className="py-12">
  <h3 className="text-3xl font-bold text-center mb-8 text-orange-500">About Me</h3>

  <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-6">
    {/* National Events & Internships */}
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 hover:scale-105 transition-transform">
      <h4 className="text-xl font-semibold mb-4 text-indigo-600">National Events & Internships</h4>
      <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2">
        <li>Attended <span className="font-medium">IoT Internship</span> – hands-on with Internet of Things applications.</li>
        <li>Completed <span className="font-medium">Android Studio Internship</span> – mobile app development fundamentals.</li>
        <li><span className="font-medium">React.js Internship at LITTETAKE</span> – built a movie listing website with APIs.</li>
        <li><span className="font-medium">Spring Boot Java Internship at FEMTOSOFT</span> – backend REST APIs.</li>
      </ul>
    </div>

    {/* Projects & Achievements */}
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 hover:scale-105 transition-transform">
      <h4 className="text-xl font-semibold mb-4 text-indigo-600">Projects & Achievements</h4>
      <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2">
        <li>Founder of <span className="font-medium">StudyMate</span>, a notes-sharing platform for students.</li>
        <li>Built a <span className="font-medium">Portfolio Website</span> with React & Tailwind CSS to showcase work.</li>
        <li>Developed an <span className="font-medium">E-Commerce Popup System</span> using Laravel & MySQL.</li>
        <li>Active participation in university events, projects, and collaborative learning.</li>
      </ul>
    </div>

    {/* Technical Expertise */}
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 hover:scale-105 transition-transform">
      <h4 className="text-xl font-semibold mb-4 text-indigo-600">Technical Expertise</h4>
      <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2">
        <li>Strong foundation in <span className="font-medium">Web Development</span> (React, Django, Laravel, MySQL).</li>
        <li>Experience with <span className="font-medium">Automation</span> (UiPath, Whisper for AI meeting assistants).</li>
        <li>Skilled in <span className="font-medium">Programming</span> (Python, Java, Spring Boot).</li>
        <li>Solid knowledge of <span className="font-medium">Database Management</span> and Data Structures.</li>
      </ul>
    </div>
  </div>
</section>

        {/* Skills Section */}
<section id="skills" className="py-12 bg-gray-50 dark:bg-gray-900">
  <div className="max-w-6xl mx-auto px-6">
    <h3 className="text-3xl font-bold text-center mb-8 text-indigo-600">Skills</h3>

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
      {/* Programming */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 hover:scale-105 transition-transform">
        <h4 className="text-xl font-semibold mb-3 text-orange-500">Programming</h4>
        <ul className="text-gray-700 dark:text-gray-300 space-y-1">
          <li>Python</li>
          <li>Java</li>
          <li>Spring Boot</li>
          <li>MySQL</li>
        </ul>
      </div>

      {/* Data Technologies */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 hover:scale-105 transition-transform">
        <h4 className="text-xl font-semibold mb-3 text-orange-500">Data Technologies</h4>
        <ul className="text-gray-700 dark:text-gray-300 space-y-1">
          <li>Database Management</li>
          <li>Data Warehousing</li>
          <li>Data Structures</li>
        </ul>
      </div>

      {/* Web Development */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 hover:scale-105 transition-transform">
        <h4 className="text-xl font-semibold mb-3 text-orange-500">Web Development</h4>
        <ul className="text-gray-700 dark:text-gray-300 space-y-1">
           <li>React JS</li>
          <li>Django</li>
          <li>Laravel</li>
          <li>Bootstrap</li>
          <li>Node JS</li>
          <li>HTML, CSS</li>
          <li>JavaScript</li>
        </ul>
      </div>

      {/* Emerging Tech */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 hover:scale-105 transition-transform">
        <h4 className="text-xl font-semibold mb-3 text-orange-500">Emerging Tech</h4>
        <ul className="text-gray-700 dark:text-gray-300 space-y-1">
          <li>Robotic Process Automation (UiPath)</li>
        <li>AI-based Meeting Assistants (Whisper)</li>
        <li>Automated Calendar Scheduling</li>
        </ul>
      </div>

      {/* Version Control */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 hover:scale-105 transition-transform">
        <h4 className="text-xl font-semibold mb-3 text-orange-500">Version Control</h4>
        <ul className="text-gray-700 dark:text-gray-300 space-y-1">
          <li>Git Fundamentals</li>
          <li>Repository Management</li>
        </ul>
      </div>

      {/* Soft Skills */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 hover:scale-105 transition-transform">
        <h4 className="text-xl font-semibold mb-3 text-orange-500">Soft Skills</h4>
        <ul className="text-gray-700 dark:text-gray-300 space-y-1">
          <li>Leadership</li>
          <li>Time Management</li>
          <li>Team Work</li>
          <li>Problem Solving</li>
        </ul>
      </div>
    </div>
  </div>
</section>

        <section>
            <div className="max-w-4xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-extrabold mb-6 text-center">Education</h2>
        <div className="flex flex-col gap-6">
          {/* B.Tech Card */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 hover:scale-105 transition-transform">
            <h3 className="font-semibold text-xl mb-2">Bachelor of Technology (B.Tech.) - Computer Science Engineering</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-1">Christ College of Engineering and Technology, Puducherry</p>
            <p className="text-gray-500 dark:text-gray-400 mb-1">June 2022 - May 2026 (Expected)</p>
            <p className="text-gray-600 dark:text-gray-400 mb-1">CGPA: 8.4</p>
            <p className="text-gray-500 dark:text-gray-400">Relevant Coursework: Database Management Systems, Programming Languages, Data Structures</p>
          </div>

          {/* High School Card */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 hover:scale-105 transition-transform">
            <h3 className="font-semibold text-xl mb-2">High School - Computer Science</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-1">Petit Seminaire Higher Secondary School, Puducherry</p>
            <p className="text-gray-500 dark:text-gray-400">June 2010 - May 2022</p>
          </div>
        </div>
      </div>
        </section>
        <div className="text-center py-4 border-t border-gray-300 dark:border-gray-700 text-sm">
        &copy; {new Date().getFullYear()} Anbuu N. All rights reserved.
      </div>
      </main>
    </div>
  );
}
