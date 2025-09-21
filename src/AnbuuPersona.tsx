import { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
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

    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false,
    });
  }, [dark]);

  const projects = [
    {
      title: 'StudyMate',
      desc: 'Notes-sharing platform for students to access study notes before exams.',
      tech: ['Django', 'MySQL', 'Bootstrap'],
      link: 'https://github.com/Anbu302004/clgproject',
      img: Image1,
    },
    {
      title: 'Portfolio Website',
      desc: 'Responsive portfolio to showcase projects and blog posts.',
      tech: ['React', 'Tailwind CSS'],
      link: 'https://github.com/Anbu302004/game-hub',
      img: Image2,
    },
    {
      title: 'E-Commerce Popup System',
      desc: 'Popup feature for an online shopping website using Laravel & MySQL.',
      tech: ['Laravel', 'MySQL', 'JS'],
      link: 'https://github.com/Anbu302004/ecommercesystem',
      img: Image3,
    },
  ];

  const internships = [
    {
      title: 'React.js Internship – LITTETAKE (20 Days)',
      desc: 'Developed a movie listing website using React.js and company API.',
      link: 'https://github.com/Anbu302004/sample-movies',
    },
    {
      title: 'Spring Boot Java Internship – FEMTOSOFT (1 Month)',
      desc: 'Backend development using Spring Boot & Java, building REST APIs.',
      link: 'https://github.com/Anbu302004/librarymanagementsystem-main',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <main className="max-w-6xl mx-auto px-6" id="home">
        {/* Hero Section */}
        <section
          className="grid md:grid-cols-2 gap-8 items-center py-12"
          data-aos="fade-up"
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold" data-aos="fade-right">
              Hi, I'm Anbu N
            </h2>
            <p className="mt-3 text-xl" data-aos="fade-right" data-aos-delay="200">
              Web Developer & University Student
            </p>
            <p
              className="mt-4 text-gray-700 dark:text-gray-300 max-w-lg"
              data-aos="fade-right"
              data-aos-delay="400"
            >
              I build responsive full-stack apps using Django, React, and MySQL.
              Founder of StudyMate, a notes-sharing platform for students.
            </p>
            <div className="mt-6 flex gap-4" data-aos="fade-right" data-aos-delay="600">
              <a
                href="#projects"
                className="px-4 py-2 bg-orange-500 text-white rounded-md hover:opacity-90 hover:scale-105 transform transition-all"
              >
                View Projects
              </a>
            </div>
          </div>
          <div className="flex items-center justify-center" data-aos="zoom-in" data-aos-delay="300">
            <img
              src={ProfilePic}
              alt="Anbuu"
              className="rounded-full shadow-lg w-60 h-60 object-cover hover:scale-105 transition-transform duration-500 animate-float"
            />
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-12">
          <h3 className="text-2xl font-semibold mb-6 text-center text-orange-500" data-aos="fade-up">
            Projects
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p, idx) => (
              <div
                key={p.title}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-shadow overflow-hidden transform hover:scale-105"
                data-aos="fade-up"
                data-aos-delay={idx * 200}
              >
                <img src={p.img} alt={p.title} className="w-full h-48 object-cover" data-aos="zoom-in" data-aos-delay={idx*100}/>
                <div className="p-4">
                  <h4 className="font-semibold text-lg text-orange-500">{p.title}</h4>
                  <p className="mt-2 text-gray-700 dark:text-gray-300 text-sm">{p.desc}</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {p.tech.map((t) => (
                      <span key={t} className="text-xs px-2 py-1 border rounded-full hover:bg-orange-100 dark:hover:bg-gray-700 transition">
                        {t}
                      </span>
                    ))}
                  </div>
                  <a
                    href={p.link}
                    className="text-orange-500 text-sm mt-2 inline-block hover:underline"
                  >
                    View Project →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Internships Section */}
        <section id="internships" className="py-12">
          <h3 className="text-2xl font-semibold mb-6 text-center text-orange-500" data-aos="fade-up">
            Internships
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {internships.map((i, idx) => (
              <div
                key={i.title}
                className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-md hover:shadow-lg transform hover:scale-105 transition-transform"
                data-aos="fade-up"
                data-aos-delay={idx * 200}
              >
                <h4 className="font-semibold text-orange-500">{i.title}</h4>
                <p className="mt-1 text-gray-700 dark:text-gray-300">{i.desc}</p>
                {i.link && (
                  <a
                    href={i.link}
                    className="text-orange-500 text-sm mt-1 inline-block hover:underline"
                  >
                    GitHub →
                  </a>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-12">
          <h3 className="text-3xl font-bold text-center mb-8 text-orange-500" data-aos="fade-up">
            About Me
          </h3>

          <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-6">
            {/* National Events & Internships */}
            <div
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 hover:scale-105 transition-transform"
              data-aos="flip-left"
            >
              <h4 className="text-xl font-semibold mb-4 text-indigo-600">National Events & Internships</h4>
              <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2">
                <li data-aos="fade-right" data-aos-delay="100">Attended <span className="font-medium">IoT Internship</span> – hands-on with Internet of Things applications.</li>
                <li data-aos="fade-right" data-aos-delay="200">Completed <span className="font-medium">Android Studio Internship</span> – mobile app development fundamentals.</li>
                <li data-aos="fade-right" data-aos-delay="300"><span className="font-medium">React.js Internship at LITTETAKE</span> – built a movie listing website with APIs.</li>
                <li data-aos="fade-right" data-aos-delay="400"><span className="font-medium">Spring Boot Java Internship at FEMTOSOFT</span> – backend REST APIs.</li>
              </ul>
            </div>

            {/* Projects & Achievements */}
            <div
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 hover:scale-105 transition-transform"
              data-aos="flip-left"
              data-aos-delay="200"
            >
              <h4 className="text-xl font-semibold mb-4 text-indigo-600">Projects & Achievements</h4>
              <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2">
                <li data-aos="fade-right" data-aos-delay="100">Founder of <span className="font-medium">StudyMate</span>, a notes-sharing platform for students.</li>
                <li data-aos="fade-right" data-aos-delay="200">Built a <span className="font-medium">Portfolio Website</span> with React & Tailwind CSS to showcase work.</li>
                <li data-aos="fade-right" data-aos-delay="300">Developed an <span className="font-medium">E-Commerce Popup System</span> using Laravel & MySQL.</li>
                <li data-aos="fade-right" data-aos-delay="400">Active participation in university events, projects, and collaborative learning.</li>
              </ul>
            </div>

            {/* Technical Expertise */}
            <div
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 hover:scale-105 transition-transform"
              data-aos="flip-left"
              data-aos-delay="400"
            >
              <h4 className="text-xl font-semibold mb-4 text-indigo-600">Technical Expertise</h4>
              <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2">
                <li data-aos="fade-right" data-aos-delay="100">Strong foundation in <span className="font-medium">Web Development</span> (React, Django, Laravel, MySQL).</li>
                <li data-aos="fade-right" data-aos-delay="200">Experience with <span className="font-medium">Automation</span> (UiPath, Whisper for AI meeting assistants).</li>
                <li data-aos="fade-right" data-aos-delay="300">Skilled in <span className="font-medium">Programming</span> (Python, Java, Spring Boot).</li>
                <li data-aos="fade-right" data-aos-delay="400">Solid knowledge of <span className="font-medium">Database Management</span> and Data Structures.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-12 bg-gray-50 dark:bg-gray-900">
          <div className="max-w-6xl mx-auto px-6">
            <h3 className="text-3xl font-bold text-center mb-8 text-indigo-600" data-aos="fade-up">Skills</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { category: "Programming", skills: ["Python", "Java", "Spring Boot", "MySQL"] },
                { category: "Data Technologies", skills: ["Database Management", "Data Warehousing", "Data Structures"] },
                { category: "Web Development", skills: ["React JS", "Django", "Laravel", "Bootstrap", "Node JS", "HTML", "CSS", "JavaScript"] },
                { category: "Emerging Tech", skills: ["Robotic Process Automation (UiPath)", "AI-based Meeting Assistants (Whisper)", "Automated Calendar Scheduling"] },
                { category: "Version Control", skills: ["Git Fundamentals", "Repository Management"] },
                { category: "Soft Skills", skills: ["Leadership", "Time Management", "Team Work", "Problem Solving"] }
              ].map((item, idx) => (
                <div
                  key={item.category}
                  className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 hover:scale-105 transition-transform"
                  data-aos="fade-up"
                  data-aos-delay={idx * 150}
                >
                  <h4 className="text-xl font-semibold mb-3 text-orange-500">{item.category}</h4>
                  <ul className="text-gray-700 dark:text-gray-300 space-y-1">
                    {item.skills.map(skill => (
                      <li key={skill} data-aos="fade-right" data-aos-delay="50">{skill}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section className="py-12">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl font-extrabold mb-6 text-center" data-aos="fade-up">Education</h2>
            <div className="flex flex-col gap-6">
              {/* B.Tech Card */}
              <div
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 hover:scale-105 transition-transform"
                data-aos="fade-right"
              >
                <h3 className="font-semibold text-xl mb-2">Bachelor of Technology (B.Tech.) - Computer Science Engineering</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-1">Christ College of Engineering and Technology, Puducherry</p>
                <p className="text-gray-500 dark:text-gray-400 mb-1">June 2022 - May 2026 (Expected)</p>
                <p className="text-gray-600 dark:text-gray-400 mb-1">CGPA: 8.4</p>
                <p className="text-gray-500 dark:text-gray-400">Relevant Coursework: Database Management Systems, Programming Languages, Data Structures</p>
              </div>

              {/* High School Card */}
              <div
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 hover:scale-105 transition-transform"
                data-aos="fade-left"
              >
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

      {/* Floating Animation */}
      <style>
        {`
          @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
          }
          .animate-float { animation: float 3s ease-in-out infinite; }
        `}
      </style>
    </div>
  );
}
