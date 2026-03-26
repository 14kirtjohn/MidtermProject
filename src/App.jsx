import { useState, useEffect } from "react";
import "./App.css";
import kirtID from "../img/kirtid.jpg";

function App() {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  const navigateTo = (section) => {
    setOpenSection(section);
    const el = document.getElementById(section);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  // Small typing component for header
  const Typing = ({ text, speed = 80, className = "" }) => {
    const [display, setDisplay] = useState("");
    useEffect(() => {
      let i = 0;
      setDisplay("");
      const id = setInterval(() => {
        i += 1;
        setDisplay(text.slice(0, i));
        if (i >= text.length) clearInterval(id);
      }, speed);
      return () => clearInterval(id);
    }, [text, speed]);

    return (
      <p className={className}>
        {display}
        <span className="typing-cursor">|</span>
      </p>
    );
  };

  const Section = ({ title, id, children }) => (
    <div id={id} className="relative mb-5 overflow-hidden bg-black/30 backdrop-blur-sm border border-white/8 hover:border-blue-400/40 transition-all duration-300">
      {/* vertical accent stripe */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-400 to-purple-400" />

      <button
        onClick={() => toggleSection(id)}
        className="w-full text-left px-10 py-4 bg-transparent hover:bg-white/5 active:scale-[0.98] transition-all duration-300 font-semibold text-lg tracking-wide"
      >
        {title}
      </button>

      <div
        className={`overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] ${
          openSection === id ? "max-h-[1200px] opacity-100 py-6 px-10" : "max-h-0 opacity-0 py-0 px-10"
        } bg-transparent`}
      >
        <div className="text-left">{children}</div>
      </div>
    </div>
  );

  return (
    <div className="relative min-h-screen text-white px-6 py-10 overflow-hidden">

      {/* Background (fixed to viewport so it always fills the screen) */}
      <div className="fixed inset-0 z-0 bg-gradient-to-br from-[#020617] via-[#04102a] to-[#0b1220]" />

      {/* Glow Lights (fixed so they're not clipped by parent padding) */}
      <div className="fixed top-[-200px] left-[-200px] w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[120px] z-0" />
      <div className="fixed bottom-[-200px] right-[-200px] w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-[120px] z-0" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto">

        {/* Header (topbar + hero) */}
        <header className="relative mb-12">
          {/* Top bar: brand left, centered nav, github right */}
          <div className="absolute inset-x-0 top-4 flex items-center justify-between px-6 z-20">
            <div className="flex items-center gap-3">
              <span className="font-semibold text-lg"></span>
            </div>

            <nav className="flex items-center gap-6 ml-6">
              <ul className="flex gap-6">
                <li>
                  <a href="#about" onClick={(e)=>{e.preventDefault(); navigateTo('about');}} className="text-gray-300 hover:text-white transition">About Me</a>
                </li>
                <li>
                  <a href="#accomplishments" onClick={(e)=>{e.preventDefault(); navigateTo('accomplishments');}} className="text-gray-300 hover:text-white transition">Interests</a>
                </li>
                <li>
                  <a href="#skills" onClick={(e)=>{e.preventDefault(); navigateTo('skills');}} className="text-gray-300 hover:text-white transition">Skills</a>
                </li>
                <li>
                  <a href="#projects" onClick={(e)=>{e.preventDefault(); navigateTo('projects');}} className="text-gray-300 hover:text-white transition">Projects</a>
                </li>
                <li>
                  <a href="#reflection" onClick={(e)=>{e.preventDefault(); navigateTo('reflection');}} className="text-gray-300 hover:text-white transition">Reflection</a>
                </li>
              </ul>
            </nav>

            <a href="https://github.com/14kirtjohn" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-white" xmlns="http://www.w3.org/2000/svg"><path d="M12 .5C5.648.5.5 5.648.5 12c0 5.084 3.292 9.39 7.87 10.91.576.106.785-.25.785-.556 0-.274-.01-1-.015-1.96-3.2.696-3.878-1.542-3.878-1.542-.523-1.33-1.277-1.684-1.277-1.684-1.044-.714.08-.7.08-.7 1.155.082 1.763 1.186 1.763 1.186 1.026 1.757 2.692 1.25 3.347.956.104-.743.402-1.25.73-1.537-2.553-.291-5.238-1.276-5.238-5.676 0-1.254.448-2.279 1.183-3.083-.119-.292-.513-1.468.112-3.06 0 0 .965-.31 3.162 1.179a10.99 10.99 0 0 1 2.88-.387c.977.005 1.96.132 2.88.387 2.195-1.49 3.158-1.179 3.158-1.179.627 1.592.233 2.768.114 3.06.737.804 1.18 1.829 1.18 3.083 0 4.412-2.69 5.381-5.252 5.667.413.356.78 1.056.78 2.128 0 1.538-.014 2.777-.014 3.156 0 .308.206.669.79.555C20.713 21.387 24 17.083 24 12c0-6.352-5.148-11.5-11.5-11.5z" fill="currentColor"/></svg>
            </a>
          </div>

          {/* Hero: left text, right portrait */}
          <div className="pt-12">
            <div className="grid md:grid-cols-2 items-center gap-8">
              <div className="space-y-6">
                <Typing text={"Hello, I'm"} speed={70} className="text-lg md:text-2xl text-gray-400" />
                <h2 className="text-5xl md:text-7xl font-extrabold leading-tight">
                  <span className="gradient-animate block">Kirt John</span>
                  <span className="gradient-animate block">Dionson Balasabas</span>
                </h2>
                <p className="text-gray-400 max-w-xl text-justify">Student • Aspiring Web & Software Developer</p>
                <a href="#contact" className="inline-block mt-2 text-sm font-semibold text-white border-b border-white/30">Occidental Mindoro State College - Mamburao Campus</a>
              </div>

              <div className="flex justify-center md:justify-end">
                <div className="w-64 h-80 bg-white/5 rounded-[28px] overflow-hidden border border-white/10 shadow-xl">
                  <img src={kirtID} alt="Kirt John Balasabas" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* About Me */}
        <Section title="About Me" id="about">
          <p className="leading-relaxed text-gray-300 text-justify">
            I am Kirt John Dionson Balasabas, born and raised in Santa Cruz,
            Occidental Mindoro. I have two younger sisters and currently reside
            in Poblacion 2, Santa Cruz, Occidental Mindoro.
            <br /><br />
            My interest in technology started when I was in Grade 1 through
            playing video games in a computer shop. This curiosity later grew
            into exploring how software systems work and how technology can be
            used to build creative and helpful solutions.
          </p>
        </Section>

        {/* Accomplishments */}
        <Section title="Accomplishments & Interests" id="accomplishments">
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="inline-flex items-center justify-center w-8 h-8 bg-white/5 rounded transition-transform duration-200">
                <img src="https://img.icons8.com/ios-filled/50/ffffff/certificate.png" alt="certificate" className="w-5 h-5" loading="lazy" />
              </span>
              <span className="text-gray-300">CSS NC II Holder</span>
            </li>

            <li className="flex items-start gap-3">
              <span className="inline-flex items-center justify-center w-8 h-8 bg-white/5 rounded transition-transform duration-200">
                <img src="https://img.icons8.com/ios-filled/50/ffffff/groups.png" alt="groups" className="w-5 h-5" loading="lazy" />
              </span>
              <span className="text-gray-300">District Multimedia Head of our Church</span>
            </li>

            <li className="flex items-start gap-3">
              <span className="inline-flex items-center justify-center w-8 h-8 bg-white/5 rounded transition-transform duration-200">
                <img src="https://img.icons8.com/ios-filled/50/ffffff/trophy.png" alt="trophy" className="w-5 h-5" loading="lazy" />
              </span>
              <span className="text-gray-300">Ranked 1st in Project System Presentation (2025)</span>
            </li>
          </ul>

          <p className="mt-4 text-gray-300 text-justify">
            Interested in software editing tools and learning how different
            software systems are created using creative ideas to build useful
            and impactful applications.
          </p>
        </Section>

        {/* Skills */}
        <Section title="Skills" id="skills">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-3">Programming Languages</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-3">
                  <span className="inline-flex items-center justify-center w-12 h-12 bg-white/5 rounded transition-transform duration-300 transform hover:scale-105 hover:brightness-105 hover:shadow-[0_0_14px_rgba(96,165,250,0.18)]">
                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" alt="HTML5" className="w-8 h-8" loading="lazy" />
                  </span>
                  <span className="text-gray-300">HTML</span>
                </li>

                <li className="flex items-center gap-3">
                  <span className="inline-flex items-center justify-center w-12 h-12 bg-white/5 rounded transition-transform duration-300 transform hover:scale-105 hover:brightness-105 hover:shadow-[0_0_14px_rgba(96,165,250,0.18)]">
                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" alt="CSS3" className="w-8 h-8" loading="lazy" />
                  </span>
                  <span className="text-gray-300">CSS</span>
                </li>

                <li className="flex items-center gap-3">
                  <span className="inline-flex items-center justify-center w-12 h-12 bg-white/5 rounded transition-transform duration-300 transform hover:scale-105 hover:brightness-105 hover:shadow-[0_0_14px_rgba(96,165,250,0.18)]">
                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="JavaScript" className="w-8 h-8" loading="lazy" />
                  </span>
                  <span className="text-gray-300">JavaScript</span>
                </li>

                <li className="flex items-center gap-3">
                  <span className="inline-flex items-center justify-center w-12 h-12 bg-white/5 rounded transition-transform duration-300 transform hover:scale-105 hover:brightness-105 hover:shadow-[0_0_14px_rgba(96,165,250,0.18)]">
                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg" alt="PHP" className="w-8 h-8" loading="lazy" />
                  </span>
                  <span className="text-gray-300">PHP (Beginner)</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-3">Tools & Frameworks</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-3">
                  <span className="inline-flex items-center justify-center w-12 h-12 bg-white/5 rounded transition-transform duration-300 transform hover:scale-105 hover:brightness-105 hover:shadow-[0_0_14px_rgba(96,165,250,0.18)]">
                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" alt="React" className="w-8 h-8" loading="lazy" />
                  </span>
                  <span className="text-gray-300">React</span>
                </li>

                <li className="flex items-center gap-3">
                  <span className="inline-flex items-center justify-center w-12 h-12 bg-white/5 rounded transition-transform duration-300 transform hover:scale-105 hover:brightness-105 hover:shadow-[0_0_14px_rgba(96,165,250,0.18)]">
                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain.svg" alt="Bootstrap" className="w-8 h-8" loading="lazy" />
                  </span>
                  <span className="text-gray-300">Bootstrap</span>
                </li>

                <li className="flex items-center gap-3">
                  <span className="inline-flex items-center justify-center w-12 h-12 bg-[#06B6D4]/10 rounded transition-transform duration-300 transform hover:scale-105 hover:brightness-105 hover:shadow-[0_0_14px_rgba(96,165,250,0.18)]">
                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-plain.svg" alt="Tailwind CSS" className="w-8 h-8" loading="lazy" />
                  </span>
                  <span className="text-gray-300">Tailwind CSS</span>
                </li>

                <li className="flex items-center gap-3">
                  <span className="inline-flex items-center justify-center w-12 h-12 bg-white/5 rounded transition-transform duration-300 transform hover:scale-105 hover:brightness-105 hover:shadow-[0_0_14px_rgba(96,165,250,0.18)]">
                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/vscode/vscode-original.svg" alt="VS Code" className="w-8 h-8" loading="lazy" />
                  </span>
                  <span className="text-gray-300">Visual Studio Code</span>
                </li>

                <li className="flex items-center gap-3">
                  <span className="inline-flex items-center justify-center w-12 h-12 bg-white/5 rounded transition-transform duration-300 transform hover:scale-105 hover:brightness-105 hover:shadow-[0_0_14px_rgba(96,165,250,0.18)]">
                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg" alt="Git" className="w-8 h-8" loading="lazy" />
                  </span>
                  <span className="text-gray-300">Git</span>
                </li>
              </ul>
            </div>
          </div>
        </Section>

        {/* Projects */}
        <Section title="Projects" id="projects">
          <div className="space-y-4 text-gray-300">
            <div>
              <h4 className="font-semibold">
                GreenBin
              </h4>
              <p className="text-gray-300 text-justify">
                An environmental project designed to promote proper waste segregation and responsible disposal. It features collection mapping and a real-time update system, allowing communities to monitor waste collection and manage disposal efficiently. The project aims to reduce pollution, improve cleanliness, and foster sustainable practices in schools, barangays, and public areas.
              </p>
              <p className="text-sm text-gray-400">
                Technologies: HTML, CSS, JavaScript, PHP
              </p>
              <p className="text-sm text-gray-400">
                Role: Full-Stack Developer
              </p>
            </div>

            <div>
              <h4 className="font-semibold">
                AutoBin
              </h4>
              <p className="text-gray-300 text-justify">
                An IoT-based project designed to monitor garbage bin waste levels and provide real-time alerts. It features automatic sensing and instant notifications, allowing communities to track bin capacity and schedule timely waste collection. The project aims to prevent overflow, improve cleanliness, and support efficient waste management in schools, barangays, and public areas.
              </p>
              <p className="text-sm text-gray-400">
                Technologies: HTML, CSS, JavaScript, PHP
              </p>
              <p className="text-sm text-gray-400">
                Role: Full-Stack Developer
              </p>
            </div>

            <div>
              <h4 className="font-semibold">BarangayCare</h4>
              <p className="text-gray-300 text-justify">
                A digital project designed to streamline appointments and provide information updates for Barangay Health Workers (BHWs). It features online scheduling and real-time notifications, allowing residents to stay informed efficiently. The project aims to improve community health service delivery, enhance communication, and support organized and accessible healthcare in barangays.
              </p>
              <p className="text-sm text-gray-400">
                Technologies: HTML, CSS, JavaScript, PHP
              </p>
              <p className="text-sm text-gray-400">
                Role: Full-Stack Developer
              </p>
            </div>
          </div>
        </Section>

        {/* Reflection */}
        <Section title="Reflection" id="reflection">
          <div className="space-y-4 text-gray-300">
            <p className="text-justify">
              <strong>Technologies used and why:</strong> For this portfolio, I mainly used React.js with Vite for building the web interface because it is fast, modern, and efficient for creating interactive applications. I also used Tailwind CSS to style the components easily and achieve a clean, responsive design. These technologies helped me organize my project better and make it visually appealing while keeping the code simple and maintainable.
            </p>

            <p className="text-justify">
              <strong>Easiest part:</strong> The easiest parts for me were structuring the layout and adding basic content. Since I already have experience with HTML, CSS, and some JavaScript, setting up the pages and arranging sections felt straightforward. Styling components with Tailwind also made it easier to apply consistent colors, spacing, and typography. Also, I used AI to help me generate some parts of the code.
            </p>

            <p className="text-justify">
              <strong>Most challenging part:</strong> The most challenging part was making the portfolio interactive, especially when adding dynamic effects like hover animations and light/gradient effects. I had to experiment with different approaches and tweak the code several times to achieve the look and functionality I wanted.
            </p>

            <p className="text-justify">
              <strong>Technologies I want to learn:</strong> I am most interested in technologies like GIS mapping, Artificial Intelligence, and Machine Learning. I want to explore how these tools can be integrated into real-world applications to make systems smarter, more efficient, and capable of handling complex data.
            </p>

            <p className="text-justify">
              <strong>Future applications:</strong> I want to build practical and community-focused applications, such as smart environmental management systems, health monitoring platforms, or intelligent public service tools. Projects that solve real problems, improve everyday life, and promote sustainability using emerging technologies.
            </p>
          </div>
        </Section>

      </div>
    </div>
  );
}

export default App;
