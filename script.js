import { useEffect, useState } from "react";

const sections = ["home", "about", "projects", "contact"];

export default function Navbar() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      let current = "home";

      // ✅ Fix: Top of page always = home
      if (window.scrollY < 100) {
        setActive("home");
        return;
      }

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

      // ✅ Prevent unnecessary updates
      setActive((prev) => (prev !== current ? current : prev));
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (id) => {
    setActive(id);

    // ✅ Close mobile menu after click
    const menu = document.getElementById("navMenu");
    if (menu && menu.classList.contains("show")) {
      menu.classList.remove("show");
    }
  };

  return (
    <nav
      className={`navbar navbar-expand-lg ${
        active === "home" ? "navbar-transparent" : "navbar-colored"
      }`}
    >
      <div className="container-fluid">

        {/* Logo */}
        <a className="navbar-brand" href="#home">
          LOGO
        </a>

        {/* Toggle */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navMenu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menu */}
        <div className="collapse navbar-collapse" id="navMenu">
          <ul className="navbar-nav ms-auto">

            {sections.map((section) => (
              <li key={section} className="nav-item">
                <a
                  href={`#${section}`}
                  className={`nav-link ${
                    active === section ? "active" : ""
                  }`}
                  onClick={() => handleClick(section)}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </a>
              </li>
            ))}

          </ul>
        </div>

      </div>
    </nav>
  );
}