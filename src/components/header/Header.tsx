import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./header.css";

function Header() {
  // Change Background Header
  useEffect(() => {
    const header = document.querySelector(".header");

    const isScreenWidthAboveThreshold = window.innerWidth > 768;

    if (header && isScreenWidthAboveThreshold) {
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

  return (
    <header className="header">
      <nav className="nav container">
        <NavLink to="/" className="nav__logo"></NavLink>
        <div className="nav__menu">
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
        </div>
      </nav>
    </header>
  );
}

export default Header;
