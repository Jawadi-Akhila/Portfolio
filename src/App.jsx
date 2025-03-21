import React from 'react';
import './App.css';

const App = () => {
  return (
    <div className="portfolio">
      {/* Header Section */}
      <header className="header">
        <h1 className="header-title animate-bounce">My Portfolio</h1>
        <nav>
          <ul className="nav-list">
            <li><a href="#about" className="nav-link">About</a></li>
            <li><a href="#skills" className="nav-link">Skills</a></li>
            <li><a href="#projects" className="nav-link">Projects</a></li>
            <li><a href="#contact" className="nav-link">Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* About Section */}
      <section id="about" className="about-section">
        <div>

        <h2 className="section-title animate-fade-in">About Me</h2>
        <p className="about-text animate-fade-in-up">
        Hi, I'm <span>Jawadi Akhila</span>, a passionate frontend developer dedicated to crafting engaging and user-friendly web experiences. With expertise in modern web technologies, I specialize in building responsive, high-performance, and visually appealing interfaces. I love transforming ideas into interactive digital solutions that enhance user engagement.
        With a strong foundation in HTML, CSS, JavaScript, and frameworks like React, I focus on creating seamless UI/UX that enhances user engagement. I enjoy solving design challenges, optimizing performance, and ensuring accessibility across all devices.
Let's connect and create something amazing together!


        </p>
        </div>
        <img src="" class="image1" />
      </section>
      <section id="skills">
        <h2 className="section-title animate-fade-in">Skills</h2>
        <div class="skill">
          <img src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/portfolio-skills-html-img.png" alt="" class="image hi"/>
          {/* <p>HTML</p> */}
          <img src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/portfolio-skills-css-img.png" alt="" class="image hi"/>
        </div>
        <div class="skill">
          <img src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/portfolio-skills-bootstrap-img.png" alt="" class="image hi" />
          <img src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/portfolio-skills-js-img.png" alt="" class="image hi"/>

        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects-section">
        <h2 className="section-title animate-fade-in">Projects</h2>
        <div className="projects-grid">
          <div className="project-card animate-fade-in-up">
            <h3>Project 1</h3>
            <p>Google Clone.</p>
          </div>
          <div className="project-card animate-fade-in-up">
            <h3>Project 2</h3>
            <p>Hotstar Clone.</p>
          </div>
          <div className="project-card animate-fade-in-up">
            <h3>Project 3</h3>
            <p>Power Bi.</p>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer id="contact" className="footer">
        <h2 className="section-title animate-fade-in">Contact Me</h2>
        <p className="hello">Email: jchandrakala8575@gmail.comm</p>
        <p className="hello">Phone: 6305817480</p>
        <div className="social-links">
          <a href="https://github.com/Jawadi-Akhila" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/jawadiakhila/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
        </div>
      </footer>
    </div>
  );
};

export default App;