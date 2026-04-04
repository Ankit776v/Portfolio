import Logo from '../Images/logo.png';
import Image from '../Images/IMG1.png';
import { useEffect, useState } from "react";

const sections = ["skills", "testimonials", "homes", "abouts", "services", "portfolios", "pricings", "contacts"];

export default function Navbar() {
  const [active, setActive] = useState("homes");
  const [scrollProgress, setScrollProgress] = useState(0); // ✅ FIXED

  useEffect(() => {
    const handleScroll = () => {
      let current = "homes";

      sections.forEach((id) => {
        const section = document.getElementById(id);

        if (section) {
          const top = section.offsetTop - 120;
          const height = section.offsetHeight;

          if (window.scrollY >= top && window.scrollY < top + height) {
            current = id;
          }
        }
      });

      setActive((prev) => (prev !== current ? current : prev));

      // 🔥 Scroll progress
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      const progress = (scrollTop / docHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="navbarm">

      {/* ✅ HEAD BACKGROUND LOGIC */}
      <div className={`head ${active === "homes" ? "head-transparent" : "head-grey"}`}>

        <nav
          className={`navbar navbar-expand-lg ${
            active === "homes" ? "navbar-transparent" : "navbar-colored"
          }`}
        >

          {/* ✅ SCROLL PROGRESS BAR */}
          <div
            className="scroll-progress"
            style={{ borderRadius: `${scrollProgress}%` }}
          ></div>

          <div className="container-fluid">

            {/* Logo */}
            <a className="navbar-brand" href="#homes">
              <img src={Logo} alt="Logo" />
            </a>

            {/* Menu */}
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav ms-auto">

                {sections.map((section) => (
                  <li key={section} className="nav-item">
                    <a
                      href={`#${section}`}
                      className={`nav-link ${
                        active === section ? "active" : "" }`}
                      id={`nav-${section}`}
                    >
                      {section.slice(0, -1).charAt(0).toUpperCase() +
                        section.slice(0, -1).slice(1)}
                    </a>
                  </li>
                ))}

              </ul>
            </div>
          </div>
        </nav>
      </div>

      {/* HERO */}
      <div className="hero" id="homes">
        <div className="text">
          <h3>ANKIT VISHWAKARMA</h3>
          <h1>I’m a Full Stack Web Developer</h1>
          <h4>
            I design and build modern, scalable, and high-performance web
            applications using HTML, CSS, JavaScript, React, and Node.js.
          </h4>
          <div className="buttons">
            <button>View My Work</button>
            <button>Hire Me</button>
          </div>
        </div>
        <div className="image">
          <img src={Image} alt="Image" />
        </div>
      </div>
    </div>
  );
}