import React, { useState } from 'react';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <nav className="sticky top-0 bg-indigo-600 text-white shadow-md z-10">
        <div className="container mx-auto px-6 py-3 flex justify-between items-center">
          <div className="text-xl font-bold">Akhila Jawadi</div>
          <div className="hidden md:flex space-x-8">
            {['home', 'about', 'skills', 'projects', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`capitalize ${
                  activeSection === section ? 'font-bold border-b-2' : 'hover:text-gray-200'
                }`}
              >
                {section}
              </button>
            ))}
          </div>
          {/* Mobile menu button - can be expanded for mobile responsiveness */}
          <div className="md:hidden">
            <button className="focus:outline-none">
              <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                <path d="M4 5h16v2H4zM4 11h16v2H4zM4 17h16v2H4z" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section with Background Image */}
      <section 
        id="home" 
        className="relative bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-20"
        style={{
          backgroundImage: "url('/api/placeholder/1920/1080')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundBlendMode: "overlay"
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="mb-6 mx-auto rounded-full overflow-hidden w-40 h-40 border-4 border-white shadow-lg">
            <img src="https://res.cloudinary.com/dtmxe0t6r/image/upload/v1742707371/akhila_mlygmk.jpg" alt="Akhila Jawadi" className="w-full h-full object-cover" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-black">Akhila Jawadi</h1>
          <p className="text-xl md:text-2xl mb-8">Web Developer </p>
          <button 
            onClick={() => scrollToSection('contact')}
            className="bg-white text-indigo-600 px-6 py-3 rounded-full font-bold hover:bg-gray-100 transition duration-300"
          >
            Get In Touch
          </button>
        </div>
      </section>

      {/* About Section with Image */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
          <div className="max-w-5xl mx-auto md:flex items-center">
            <div className="md:w-2/5 mb-8 md:mb-0 md:pr-8">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img src="https://tse2.mm.bing.net/th?id=OIP.oMqLPvgHIQptI0FkI87X8gHaHa&pid=Api&P=0&h=220" alt="Professional portrait" className="w-full h-auto" />
              </div>
            </div>
            <div className="md:w-3/5">
              <p className="text-lg text-gray-700 mb-6">
              I'm a digital craftsperson who transforms designs into functional websites using HTML, CSS, and JavaScript. I solve complex problems by writing clean, efficient code that creates seamless user experiences. Whether specializing in frontend aesthetics or backend architecture, I constantly adapt to evolving technologies. 
              </p>
              <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-3">Education</h3>
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <div className="mr-4 bg-indigo-100 p-2 rounded-full">
                      <svg className="w-6 h-6 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-semibold">Sreenidhi Institute Of Science and Technology</div>
                      <div className="text-gray-600">Currently Pursuing (2022-Present)</div>
                    </div>
                  </li>
                  <li className="flex items-center">
                    <div className="mr-4 bg-indigo-100 p-2 rounded-full">
                      <svg className="w-6 h-6 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-semibold">Prathibha Junior College, 2021</div>
                      <div className="text-gray-600">Intermediate (MPC) - 96.8%</div>
                    </div>
                  </li>
                  <li className="flex items-center">
                    <div className="mr-4 bg-indigo-100 p-2 rounded-full">
                      <svg className="w-6 h-6 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-semibold">Little Scholars School, 2019</div>
                      <div className="text-gray-600">Secondary School Certificate (SSC) - GPA: 9.3</div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section with Background */}
      <section 
        id="skills" 
        className="py-20 relative"
        style={{
          // background-image: linear-gra
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div className="absolute inset-0 bg-indigo-900 opacity-90"></div>
        <div className="container mx-auto px-6 relative z-10">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">My Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <img src="https://tse2.mm.bing.net/th?id=OIP.A2MRW03sgwbVEfU3zdNFbQHaGJ&pid=Api&P=0&h=220" alt="Programming icon" className="w-12 h-12 mr-4 rounded" />
                <h3 className="text-xl font-bold text-indigo-600">Programming Languages</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {['HTML', 'CSS', 'JavaScript', 'Python'].map((skill) => (
                  <span 
                    key={skill}
                    className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <img src="https://tse4.mm.bing.net/th?id=OIP.cqyWFlk60iSrWCJASKaZmwHaHa&pid=Api&P=0&h=220" alt="Other skills icon" className="w-12 h-12 mr-4 rounded" />
                <h3 className="text-xl font-bold text-indigo-600">Other Skills</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {['Data Structures & Algorithms', 'Problem Solving', 'Team Collaboration', 'Communication', 'Power BI'].map((skill) => (
                  <span 
                    key={skill}
                    className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section with Images */}
      <section id="projects" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:transform hover:scale-105">
              <div className="h-48 overflow-hidden">
                <img src="https://tse2.mm.bing.net/th?id=OIP.JMAP9lGWKChkbDQKFxFV4wHaHa&pid=Api&P=0&h=220" alt="Power BI Project" className="w-100 h-50 object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Power BI Project</h3>
                <p className="text-gray-700 mb-4">
                  Used Power BI tools to transform Excel data into visual representations like pie charts and bar graphs for easier understanding.
                </p>
                <div className="flex flex-wrap gap-2">
                  {['Power BI', 'Data Visualization', 'Excel'].map((tech) => (
                    <span 
                      key={tech}
                      className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:transform hover:scale-105">
           
              <div className="h-48 overflow-hidden">
                <img src="https://tse4.mm.bing.net/th?id=OIP.cdqUIzE0IEXiIkex0exI7AHaEb&pid=Api&P=0&h=220" alt="Portfolio Website" className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Portfolio Website</h3>
                <p className="text-gray-700 mb-4">
                  Designed and developed a responsive portfolio website using React.js and Tailwind CSS to showcase skills and projects.
                </p>
                <div className="flex flex-wrap gap-2">
                  {['React.js', 'Tailwind CSS', 'JavaScript', 'Responsive Design'].map((tech) => (
                    <span 
                      key={tech}
                      className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:transform hover:scale-105">
           
              <div className="h-48 overflow-hidden">
                <img src="https://tse3.mm.bing.net/th?id=OIP.DoYuESoRecI9l-vyqdrEnQHaE-&pid=Api&P=0&h=220" alt="Portfolio Website" className="w-full h-50 object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">GoogleClone</h3>
                <p className="text-gray-700 mb-4">
                I developed a Google search clone using HTML, CSS, and Bootstrap, replicating its clean UI and responsive design. The project focuses on a user-friendly layout with a sleek search bar and modern styling.
                </p>
                <div className="flex flex-wrap gap-2">
                  {['Html', 'CSS', 'Bootstrap'].map((tech) => (
                    <span 
                      key={tech}
                      className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:transform hover:scale-105">
           
              <div className="h-48 overflow-hidden">
                <img src="https://tse1.mm.bing.net/th?id=OIP.QULyNqVnKC8OMFcikuPDgQHaDy&pid=Api&P=0&h=220" alt="Portfolio Website" className="w-full h-50 object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">HotstarClone</h3>
                <p className="text-gray-700 mb-4">
                I developed a Hotstar clone using HTML, CSS, and Bootstrap, replicating its clean UI and responsive design. The project focuses on a user-friendly layout with a sleek navigation bar and modern styling.
                </p>
                <div className="flex flex-wrap gap-2">
                  {['Html', 'CSS', 'Bootstrap'].map((tech) => (
                    <span 
                      key={tech}
                      className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section with Images */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Certifications</h2>
          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl">
                <div className="flex items-center mb-4">
                  <img src="https://tse1.mm.bing.net/th?id=OIP.6nvosRsjfKtm6HAbwPspsQHaE8&pid=Api&P=0&h=220" alt="Android Development" className="w-16 h-16 mr-4 rounded-lg object-cover" />
                  <div>
                    <h3 className="font-semibold">Google Android Development (AICTE)</h3>
                    <p className="text-gray-600 text-sm">Certification in Android application development</p>
                  </div>
                </div>
                <div className="mt-4 bg-green-100 text-green-800 text-xs px-2 py-1 rounded inline-block">Verified</div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl">
                <div className="flex items-center mb-4">
                  <img src="https://tse3.mm.bing.net/th?id=OIP.L2XFx35QtcEYDePQ44DgwQHaEK&pid=Api&P=0&h=220" alt="Power BI" className="w-13 h-16 mr-4 rounded-lg object-cover" />
                  <div>
                    <h3 className="font-semibold">Power BI Project</h3>
                    <p className="text-gray-600 text-sm">Certification in data visualization using Power BI</p>
                  </div>
                </div>
                <div className="mt-4 bg-green-100 text-green-800 text-xs px-2 py-1 rounded inline-block">Verified</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section with Map Image */}
      <section 
        id="contact" 
        className="py-20 bg-indigo-600 text-white relative"
        style={{
          backgroundImage: "url('/api/placeholder/1920/800')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div className="absolute inset-0 bg-indigo-900 opacity-80"></div>
        <div className="container mx-auto px-6 relative z-10">
          <h2 className="text-3xl font-bold text-center mb-12">Get In Touch</h2>
          <div className="max-w-3xl mx-auto bg-white text-gray-800 rounded-lg shadow-lg overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2 p-8">
                <h3 className="text-2xl font-bold mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <svg className="w-6 h-6 text-indigo-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <div>
                      <p className="font-semibold">Email</p>
                      <a href="mailto:jchandrakala8575@gmail.com" className="text-indigo-600 hover:underline">jchandrakala8575@gmail.com</a>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-6 h-6 text-indigo-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <div>
                      <p className="font-semibold">Phone</p>
                      <a href="tel:+916305817480" className="text-indigo-600 hover:underline">+91 6305817480</a>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-6 h-6 text-indigo-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    <div>
                      <p className="font-semibold">LinkedIn</p>
                      <a href="https://www.linkedin.com/in/jawadiakhila" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">linkedin.com/in/jawadiakhila</a>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h4 className="font-semibold mb-2">Find Me</h4>
                  <div className="rounded-lg overflow-hidden border border-gray-200 h-40">
                    <img src="https://tse4.mm.bing.net/th?id=OIP.U9R8UZ_9kyupsVNQnoqL7AHaEU&pid=Api&P=0&h=220" alt="Location map" className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>
              <div className="md:w-1/2 bg-indigo-100 p-8">
                <h3 className="text-2xl font-bold mb-4">Send a Message</h3>
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                    <input type="text" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input type="email" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                    <textarea rows="4" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"></textarea>
                  </div>
                  <button type="submit" className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition duration-300 flex items-center justify-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
                  <img src="https://tse4.mm.bing.net/th?id=OIP.hGSCbXlcOjL_9mmzerqAbQHaHa&pid=Api&P=0&h=220" alt="Logo" className="w-full h-full object-cover" />
                </div>
                <span className="text-xl font-bold">Akhila Jawadi</span>
              </div>
            </div>
            <div className="text-center md:text-right">
              <p>&copy; {new Date().getFullYear()} All rights reserved.</p>
              <div className="flex justify-center md:justify-end space-x-6 mt-4">
                <a href="https://www.linkedin.com/in/jawadiakhila" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
                <a href="mailto:jchandrakala8575@gmail.com" className="hover:text-indigo-400">
                  <span className="sr-only">Email</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                </a>
                <a href="https://github.com/Jawadi-Akhila" className="hover:text-indigo-400">
  <span className="sr-only">GitHub</span>
  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
    <path 
      fill-rule="evenodd" 
      clip-rule="evenodd" 
      d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.66-.21.66-.47 
      0-.23-.01-.82-.01-1.61-2.78.61-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 
      1.01.07 1.54 1.04 1.54 1.04.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.56-1.11-4.56-4.93 
      0-1.09.39-1.98 1.03-2.68-.1-.26-.45-1.3.1-2.71 0 0 .84-.27 2.75 1.02A9.57 9.57 0 0 1 12 6.8c.85 0 1.71.11 2.51.31 
      1.91-1.29 2.75-1.02 2.75-1.02.55 1.41.2 2.45.1 2.71.64.7 1.03 1.59 1.03 2.68 
      0 3.83-2.34 4.68-4.57 4.92.36.31.68.92.68 1.85 0 1.34-.01 2.42-.01 2.75 
      0 .26.16.57.67.47A10.02 10.02 0 0 0 22 12c0-5.52-4.48-10-10-10z" 
    />
  </svg>
</a>

              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;