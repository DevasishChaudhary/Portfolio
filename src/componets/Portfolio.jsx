import React, { useState, useEffect } from 'react';
import { Github, Mail, Phone, Code, Briefcase, User, Menu, X } from 'lucide-react';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const skills = [
    { name: 'React', level: 80 },
    { name: 'JavaScript', level: 85 },
    { name: 'HTML', level: 80 },
    { name: 'CSS', level: 85 },
    { name: 'Git & GitHub', level: 80 }
  ];

  const projects = [
    {
      title: 'Gym Management System ',
      description: 'A complete gym management application focused on admin and member operations, including authentication, trainer/class/equipment management, membership plans, and payment handling. Designed with multiple admin pages and full CRUD functionality. ',
      tech: ['Node.js, Express, MongoDB, JWT, Nodemailer, HTML, CSS, JavaScript']
    },
    {
      title: 'Tic-Tac-Toe Game',
      description: 'A two-player turn-based game with real-time win/draw detection, turn indicator, and restart functionality. Features a colorful and engaging interface designed for a fun gameplay experience while exploring state management in React.',
      tech: ['React, JavaScript, CSS ']
    },
    {
      title: 'Todo List Application',
      description: 'Task management app that allows users to add, delete, and reorder tasks using up/down buttons,offering a smooth experience with a simple and modern interface. ',
      tech: ['React', 'JavaScript', 'CSS']
    }
  ];

  const scrollToSection = (section) => {
    setActiveSection(section);
    setIsMenuOpen(false);
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold bg-linear-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              DC
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`hover:text-purple-400 transition-colors ${activeSection === item.toLowerCase() ? 'text-purple-400' : ''}`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-900/95 backdrop-blur-sm">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left px-3 py-2 hover:bg-purple-900/50 rounded-md transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-16">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-8 relative">
            <div className="w-32 h-32 mx-auto bg-linear-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-5xl font-bold shadow-2xl">
              DC
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-fade-in">
            Devasish Chaudhary
          </h1>
          <p className="text-xl md:text-2xl text-purple-300 mb-8">
            Frontend Developer | BSc CSIT Student
          </p>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Crafting beautiful, responsive web experiences with React, JavaScript, and modern web technologies
          </p>
          <div className="flex gap-4 justify-center">
            <button 
              onClick={() => scrollToSection('projects')}
              className="bg-linear-to-r from-purple-600 to-pink-600 px-8 py-3 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all"
            >
              View Projects
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="border-2 border-purple-500 px-8 py-3 rounded-full font-semibold hover:bg-purple-500/20 transition-all"
            >
              Contact Me
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">
            <User className="inline-block mr-2 mb-1" />
            About Me
          </h2>
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-xl">
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              I'm a passionate frontend developer and BSc CSIT student with a strong foundation in modern web technologies. 
              I specialize in building responsive, user-friendly web applications using React and the latest web standards.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              My journey in web development is driven by a love for creating intuitive interfaces and solving complex problems 
              through clean, maintainable code. I'm constantly learning and exploring new technologies to stay at the forefront 
              of web development.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 bg-slate-900/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">
            <Code className="inline-block mr-2 mb-1" />
            Skills
          </h2>
          <div className="grid gap-6">
            {skills.map((skill, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 shadow-xl">
                <div className="flex justify-between mb-2">
                  <span className="text-lg font-semibold">{skill.name}</span>
                  <span className="text-purple-400">{skill.level}%</span>
                </div>
                <div className="w-full bg-slate-700 rounded-full h-3">
                  <div 
                    className="bg-linear-to-r from-purple-500 to-pink-500 h-3 rounded-full transition-all duration-1000"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">
            <Briefcase className="inline-block mr-2 mb-1" />
            Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300">
                <h3 className="text-2xl font-bold mb-3 text-purple-400">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="bg-purple-900/50 px-3 py-1 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-slate-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12">Get In Touch</h2>
          <p className="text-lg text-gray-300 mb-8">
            I'm always open to new opportunities and collaborations. Feel free to reach out!
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <a 
              href="mailto:devasishchaudhary7000000@gmail.com"
              className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 hover:bg-slate-700/50 transition-all hover:scale-105 shadow-xl"
            >
              <Mail className="w-12 h-12 mx-auto mb-4 text-purple-400" />
              <h3 className="font-semibold mb-2">Email</h3>
              <p className="text-sm text-gray-400 break-all">devasishchaudhary7000000@gmail.com</p>
            </a>
            <a 
              href="tel:+9779866816187"
              className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 hover:bg-slate-700/50 transition-all hover:scale-105 shadow-xl"
            >
              <Phone className="w-12 h-12 mx-auto mb-4 text-purple-400" />
              <h3 className="font-semibold mb-2">Phone</h3>
              <p className="text-sm text-gray-400">+977 9866816187</p>
            </a>
            <a 
              href="https://github.com/devasishchaudhary"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 hover:bg-slate-700/50 transition-all hover:scale-105 shadow-xl"
            >
              <Github className="w-12 h-12 mx-auto mb-4 text-purple-400" />
              <h3 className="font-semibold mb-2">GitHub</h3>
              <p className="text-sm text-gray-400">View My Work</p>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-gray-400 border-t border-slate-800">
        <p>© 2024 Devasish Chaudhary. All rights reserved.</p>
      </footer>
    </div>
  );
}