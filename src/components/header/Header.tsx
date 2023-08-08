import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./header.css";

function Header() {
  // Change Background Header
  useEffect(() => {
    const header = document.querySelector(".header");

    if (header) {
      const handleScroll = () => {
        if (window.scrollY >= 80) {
          header.classList.add("scroll-header");
        } else {
          header.classList.remove("scroll-header");
        }
      };

      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  // Toggle Menu
  const [Toggle, showMenu] = useState(false);

  return (
    <header className="header">
      <nav className="nav container">
        <a href="index.html" className="nav__logo"></a>
        <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list">
            <li className="nav__item">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "nav__link active-link" : "nav__link"
                }
              >
                <i className="uil uil-estate nav__icon"></i> Home
              </NavLink>
            </li>

            <li className="nav__item">
              <NavLink
                to="/projects"
                className={({ isActive }) =>
                  isActive ? "nav__link active-link" : "nav__link"
                }
              >
                <i className="uil uil-scenery nav__icon"></i> Projects
              </NavLink>
            </li>

            <li className="nav__item">
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? "nav__link active-link" : "nav__link"
                }
              >
                <i className="uil uil-message nav__icon"></i> Contact
              </NavLink>
            </li>
          </ul>

          <i
            className="uil uil-times nav__close"
            onClick={() => showMenu(!Toggle)}
          ></i>
        </div>
        <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
          <i className="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  );
}

export default Header;
