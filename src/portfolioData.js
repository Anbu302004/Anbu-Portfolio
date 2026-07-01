// Central data file — edit content here once, it flows through Nav/Home/About/Contact/Projects.

export const profile = {
  name: 'Anbu Nagarathinam',
  role: 'Software Engineer',
  tagline: 'I build backends that hold up and interfaces that feel considered.',
  location: 'Puducherry, India',
  email: 'anbunagarathinam30@gmail.com',
  phone: '+91 9025468686',
  github: 'https://github.com/Anbu302004',
  linkedin: 'https://linkedin.com',
  resume: '/RESUME.pdf',
};

// Skill counts drive the radar chart on the Skills section — each number is simply
// how many tools/technologies fall in that category, kept objective rather than
// a self-rated "proficiency" score.
export const skillGroups = [
  { key: 'lang', label: 'Languages', items: ['Java', 'JavaScript'] },
  { key: 'web', label: 'Web', items: ['React', 'HTML', 'CSS', 'Bootstrap'] },
  { key: 'backend', label: 'Backend', items: ['Node.js', 'Spring Boot', 'REST APIs'] },
  { key: 'data', label: 'DataBase', items: ['MySQL'] },
  { key: 'tools', label: 'Tooling', items: ['Git', 'GitHub', 'Postman'] },
  { key: 'concepts', label: 'Core Concepts', items: ['OOP', 'DSA', 'MVC'] },
];

export const projects = [
  {
    slug: 'smartmail-agent',
    title: 'SmartMail Agent',
    category: 'Full Stack',
    summary:
      'Agentic email automation that auto-classifies Gmail via IMAP through a Perception → Decision → Action loop, behind a JWT-secured dashboard.',
    details:
      'Final-year project connecting to Gmail over IMAP and running a Perception → Decision → Action loop to sort incoming mail into company folders automatically. Includes a JWT-secured dashboard for monitoring activity, attachment downloading, and dynamic URL handling for deployment. Built with teammates under mentor guidance.',
    tech: ['Node.js', 'Express.js', 'MySQL', 'IMAP', 'JWT'],
    link: 'https://github.com/Anbu302004/SmartMailAgent',
    demo: '',
    year: '2026',
  },
  {
    slug: 'talentapply',
    title: 'TalentApply',
    category: 'Full Stack',
    summary:
      'Job-application platform with secure login and bulk To/CC/BCC email with attachments, built end-to-end and Dockerized.',
    details:
      'Full-stack platform to streamline sending job applications in bulk, with authentication and To/CC/BCC email support including attachments. Node.js and React end-to-end, Dockerized for deployment, developed with heavy use of Claude Code as an AI-assisted workflow experiment.',
    tech: ['Node.js', 'React', 'REST API', 'Docker'],
    link: 'https://github.com/Anbu302004/TalentApply',
    demo: '',
    year: '2026',
  },
  {
    slug: 'ai-resume-screener',
    title: 'AI Resume Screener',
    category: 'AI',
    summary:
      'LLM-powered screening tool using LLaMA 3.3-70b via Groq to score resumes against job descriptions.',
    details:
      'Uses LLaMA 3.3-70b via the Groq API to evaluate candidate resumes against job descriptions and surface a match score. React frontend, Node.js backend, MySQL for screening history — built to explore dropping fast LLM inference into a real hiring workflow.',
    tech: ['React.js', 'Node.js', 'Groq API', 'MySQL'],
    link: 'https://github.com/Anbu302004/AI-ResumeScreener',
    demo: '',
    year: '2025',
  },
  {
    slug: 'react-auth-system',
    title: 'React Authentication System',
    category: 'Backend',
    summary:
      'RESTful auth APIs with OTP login, role-based access control and JWT sessions on a normalized MySQL schema.',
    details:
      'REST APIs supporting OTP-based login, role-based access control, and JWT session management, backed by a normalized MySQL schema — built to practice a secure, production-style auth flow from scratch.',
    tech: ['Node.js', 'REST APIs', 'MySQL', 'JWT'],
    link: 'https://github.com/Anbu302004/React-Auth',
    demo: '',
    year: '2025',
  },
  {
    slug: 'library-management-system',
    title: 'Library Management System',
    category: 'Backend',
    summary: 'Spring Boot backend with CRUD APIs for books, users, and borrowing records.',
    details:
      'Spring Boot backend built during an internship at Femtosoft Technologies to manage core library operations — CRUD APIs for books, users, and borrowing records, with a clean controller/service/repository layering.',
    tech: ['Java', 'Spring Boot'],
    link: 'https://github.com/Anbu302004/librarymanagementsystem-main',
    demo: '',
    year: '2025',
  },
  {
    slug: 'movie-listing-application',
    title: 'Movie Listing Application',
    category: 'Frontend',
    summary: 'Responsive React app for browsing movies, with REST API integration validated via Postman.',
    details:
      'Responsive React interface for browsing movies and viewing details, with REST API integration validated using Postman. Built during an internship at LittleTake, focused on clean component structure and real-world CRUD data flows.',
    tech: ['React', 'HTML', 'CSS', 'REST API'],
    link: 'https://github.com/Anbu302004/Movies-List',
    demo: '',
    year: '2025',
  },
];

export const internships = [
  {
    role: 'Java Backend Intern (Spring Boot)',
    org: 'Femtosoft Technologies, Chennai',
    period: 'Jun 2025 – Jul 2025',
    summary: 'Built a Spring Boot backend for library operations, including full CRUD API coverage.',
    link: 'https://github.com/Anbu302004/librarymanagementsystem-main',
  },
  {
    role: 'Web Developer Intern',
    org: 'LittleTake, Puducherry',
    period: 'Mar 2025 – Apr 2025',
    summary: 'Built a responsive movie listing app in React.js, integrated REST APIs, handled frontend CRUD flows.',
    link: 'https://github.com/Anbu302004/Movies-List',
  },
];

export const education = {
  degree: 'B.Tech. Computer Science Engineering',
  school: 'Christ College of Engineering and Technology, Puducherry',
  period: 'Nov 2022 – May 2026 (Expected)',
  detail: 'CGPA: 8.6',
};

export const certifications = [
  { name: 'IBM SkillsBuild – Artificial Intelligence (A+)', org: 'IBM SkillsBuild | ICT Academy', date: 'Dec 2025' },
  { name: 'Mastering Modern Java Programming: Beginner to Pro', org: 'Udemy | 70.5 Hours', date: 'Jun 2026' },
];