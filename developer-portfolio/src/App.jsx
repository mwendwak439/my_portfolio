import  './App.css'

function App(){
 return(
    <div>
      {/* nav bar */}
        <nav>
          <h2>Kennedy.dev</h2>
          <ul>
                 <li>
                <a href="#home">Home</a>
                </li>
                <li>
                <a href="#about">About</a>
                </li>
                <li>
                <a href="#skills">Skills</a>
                </li>
                <li>
                <a href="#projects">Projects</a>
                </li>
                <li>
                <a href="#contact">Contact</a>

                </li>
          </ul>
        </nav>

        {/* hero section */}
     <section className="hero">
        <p className="welcome">WELCOME TO MY PORTFOLIO</p>

        <h1>
          Hi, I'm Kennedy.
          <br />
          <span>Full-Stack Developer</span>
        </h1>

        <p className="hero-description">
          I build practical web applications using React, Django, and MySQL.
          I enjoy learning new technologies and turning ideas into useful
          digital solutions.
        </p>
<div className="hero-buttons">

  <button className="primary-button">
    View My Projects
  </button>

  <button className="secondary-button">
    Contact Me
  </button>

  <a
    href="/documents/Kennedy-CV.pdf"
    download
    className="cv-button"
  >
    Download My CV
  </a>

</div>
      </section>

      {/* about section */}
<section className="about" id="about">
  <div className="about-content">
    <p className="section-label">GET TO KNOW ME</p>

    <h2>About Me</h2>

    <p>
      I'm a Computer Science student focused on full-stack web development.
      I build web applications using React and Django, with an interest
      in creating practical solutions to real-world problems.
    </p>

    <p>
      I'm eager to apply my skills, collaborate with other developers,
      and continue growing professionally through practical projects
      and new challenges.
    </p>
  </div>
</section>
   {/* skills section */}
   
<section className="skills" id="skills">
  <div className="skills-container">
    <p className="section-label">WHAT I WORK WITH</p>

    <h2>My Technical Skills</h2>

    <p className="skills-description">
      These are the technologies I use to build and develop web applications.
    </p>

    <div className="skills-grid">
      <div className="skill-card">
        <h3>HTML</h3>
        <p>Web Structure</p>
      </div>

      <div className="skill-card">
        <h3>CSS</h3>
        <p>Web Styling</p>
      </div>

      <div className="skill-card">
        <h3>JavaScript</h3>
        <p>Programming</p>
      </div>

      <div className="skill-card">
        <h3>React</h3>
        <p>Frontend Development</p>
      </div>

      <div className="skill-card">
        <h3>Python</h3>
        <p>Programming</p>
      </div>

      <div className="skill-card">
        <h3>Django</h3>
        <p>Backend Development</p>
      </div>

      <div className="skill-card">
        <h3>MySQL</h3>
        <p>Database Management</p>
      </div>
    </div>
  </div>
</section>
    {/* project section */}
    
<section className="projects" id="projects">
  <div className="projects-container">

    <p className="section-label">MY RECENT WORK</p>

    <h2>Featured Projects</h2>

    <p className="projects-description">
      Here are some applications I have developed while
      improving my full-stack development skills.
    </p>

    <div className="projects-grid">

      {/* PesaTrack */}
      <div className="project-card">
          <img
      src="/projects/pesatrack.png"
      alt="PesaTrack application dashboard"
      className="project-image"
    />

        <div className="project-info">
          <h3>PesaTrack</h3>

          <p>
            A financial tracking application designed to
            help users monitor and manage their finances.
          </p>

          <div className="tech-tags">
            <span>React</span>
            <span>Django</span>
            <span>MySQL</span>
          </div>

          <div className="project-links">
            <a href="" target="_blank">Live Demo</a>
           <a href="https://github.com/mwendwak439/PesaTrack.git"
          target="_blank"
          rel="noopener noreferrer">
          View Source Code
        </a>
          </div>
        </div>
      </div>

      {/* Student Assignment Manager */}
      <div className="project-card">
       
<img
  src="/projects/studenttask.png"
  alt="Student Assignment Manager dashboard"
  className="project-image"
/>
        <div className="project-info">
          <h3>Student Assignment Manager</h3>

          <p>
            A web application that helps students create,
            organize, and track their academic assignments.
          </p>

          <div className="tech-tags">
            <span>React</span>
            <span>Django</span>
            <span>MySQL</span>
          </div>

          <div className="project-links">
            <a href="#" target="_blank">Live Demo</a>
            <a href="  https://github.com/mwendwak439/student-assignment-manager.git"
   target="_blank"
   rel="noopener noreferrer">
  View Source Code
         </a>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>

    {/* contact section */}
    <section className="contact" id="contact">
  <h2>Get In Touch</h2>

  <p>
    I'm always open to discussing new opportunities,
    projects, and collaborations.
  </p>

  <div className="contact-details">
    <p>Email:mwendwak439@gmail.com</p>
    <p>Location: Kenya</p>
  </div>

  <a href="mailto:mwendwak439@gmail.com" className="contact-button">
    Send Me an Email
  </a>
</section>
{/* footer */}
<footer className="footer">
  <p>© 2026 Kennedy. All Rights Reserved.</p>

  <div className="footer-links">
    <a href="#home">Home</a>
    <a href="#about">About</a>
    <a href="#projects">Projects</a>
    <a href="#contact">Contact</a>
  </div>

  <p>Built by kennedy</p>
  <div className="social-links">
  <a
    href="https://github.com/mwendwak439"
    target="_blank"
    rel="noopener noreferrer"
  >
    GitHub
  </a>

  <a
    href="https://www.linkedin.com/in/kennedy-kimanzi-890787448/"
    target="_blank"
    rel="noopener noreferrer"
  >
    LinkedIn
  </a>
</div>
</footer>
  
    </div>
 );


}
export default App