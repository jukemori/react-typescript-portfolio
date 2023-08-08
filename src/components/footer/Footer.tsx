import { NavLink } from "react-router-dom";
import "./footer.css";

const Footer = () => {
  function scrollToSection(sectionId: string) {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Jun Ukemori</h1>

        <ul className="footer__list">
          <li>
            <NavLink
              to="/"
              className="footer__link"
              onClick={() => scrollToSection("about")}
            >
              About
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/"
              className="footer__link"
              onClick={() => scrollToSection("skills")}
            >
              Skills
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/"
              className="footer__link"
              onClick={() => scrollToSection("background")}
            >
              Background
            </NavLink>
          </li>
        </ul>

        <div className="footer__social">
          <a
            href="https://www.facebook.com/jukemori/"
            className="footer__social-link"
            target="_blank"
          >
            <i className="bx bxl-facebook"></i>
          </a>

          <a
            href="https://www.instagram.com/tinyjap/"
            className="footer__social-link"
            target="_blank"
          >
            <i className="bx bxl-instagram"></i>
          </a>

          <a
            href="https://twitter.com/liljap22"
            className="footer__social-link"
            target="_blank"
          >
            <i className="bx bxl-twitter"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
