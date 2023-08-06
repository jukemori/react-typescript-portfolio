import "./skills.css";
import { useState } from "react";

function Skills() {
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index: number) => {
    setToggleState(index);
  };

  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">My Skills</h2>
      <span className="section__subtitle">What I offer</span>

      <div className="skills__container container grid">
        <div className="skills__content">
          <div>
            <i className="uil uil-web-grid skills__icon"></i>
            <h3 className="skills__title">
              Frontend <br /> Development
            </h3>
          </div>

          <span className="skills__button" onClick={() => toggleTab(1)}>
            View More
            <i className="uil uil-arrow-right skills__button-icon"></i>
          </span>

          <div
            className={
              toggleState === 1 ? "skills__modal active-modal" : "skills__modal"
            }
          >
            <div className="skills__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times skills__modal-close"
              ></i>

              <h3 className="skills__modal-title">Frontend Development</h3>
              <p className="skills__modal-description">
                Development of responsive web pages with React.js. Validate UX
                on Figma.
              </p>

              <ul className="skills__modal-skills grid">
                <li className="skills__modal-skill">
                  <i className="uil uil-check-circle skills__modal-icon"></i>
                  <p className="skills__modal-info">HTML</p>
                </li>

                <li className="skills__modal-skill">
                  <i className="uil uil-check-circle skills__modal-icon"></i>
                  <p className="skills__modal-info">CSS</p>
                </li>

                <li className="skills__modal-skill">
                  <i className="uil uil-check-circle skills__modal-icon"></i>
                  <p className="skills__modal-info">Javascript</p>
                </li>

                <li className="skills__modal-skill">
                  <i className="uil uil-check-circle skills__modal-icon"></i>
                  <p className="skills__modal-info">React</p>
                </li>

                <li className="skills__modal-skill">
                  <i className="uil uil-check-circle skills__modal-icon"></i>
                  <p className="skills__modal-info">Figma</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="skills__content">
          <div>
            <i className="uil uil-arrow skills__icon"></i>
            <h3 className="skills__title">
              Backend <br /> Development
            </h3>
          </div>

          <span onClick={() => toggleTab(2)} className="skills__button">
            View More
            <i className="uil uil-arrow-right skills__button-icon"></i>
          </span>

          <div
            className={
              toggleState === 2 ? "skills__modal active-modal" : "skills__modal"
            }
          >
            <div className="skills__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times skills__modal-close"
              ></i>

              <h3 className="skills__modal-title">Backend Development</h3>
              <p className="skills__modal-description">
                Object-oriented programming and build MVC software from scratch.
                Relational databases and SQL.
              </p>

              <ul className="skills__modal-skills grid">
                <li className="skills__modal-skill">
                  <i className="uil uil-check-circle skills__modal-icon"></i>
                  <p className="skills__modal-info">Ruby</p>
                </li>

                <li className="skills__modal-skill">
                  <i className="uil uil-check-circle skills__modal-icon"></i>
                  <p className="skills__modal-info">Ruby on Rails</p>
                </li>

                <li className="skills__modal-skill">
                  <i className="uil uil-check-circle skills__modal-icon"></i>
                  <p className="skills__modal-info">PostgreSQL</p>
                </li>

                <li className="skills__modal-skill">
                  <i className="uil uil-check-circle skills__modal-icon"></i>
                  <p className="skills__modal-info">Heroku</p>
                </li>

                <li className="skills__modal-skill">
                  <i className="uil uil-check-circle skills__modal-icon"></i>
                  <p className="skills__modal-info">Git</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="skills__content">
          <div>
            <i className="uil uil-english-to-chinese skills__icon"></i>
            <h3 className="skills__title">
              <br />
              Trilingual
            </h3>
          </div>

          <span onClick={() => toggleTab(3)} className="skills__button">
            View More
            <i className="uil uil-arrow-right skills__button-icon"></i>
          </span>

          <div
            className={
              toggleState === 3 ? "skills__modal active-modal" : "skills__modal"
            }
          >
            <div className="skills__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times skills__modal-close"
              ></i>

              <h3 className="skills__modal-title">Trilingual</h3>
              <p className="skills__modal-description">
                I studied in the USA and worked in Mexico. Fluent in three
                languages - Japanese, English, and Spanish
              </p>

              <ul className="skills__modal-skills grid">
                <li className="skills__modal-skill">
                  <i className="uil uil-check-circle skills__modal-icon"></i>
                  <p className="skills__modal-info">
                    Japanese (Native Speaker)
                  </p>
                </li>

                <li className="skills__modal-skill">
                  <i className="uil uil-check-circle skills__modal-icon"></i>
                  <p className="skills__modal-info">English</p>
                </li>

                <li className="skills__modal-skill">
                  <i className="uil uil-check-circle skills__modal-icon"></i>
                  <p className="skills__modal-info">Spanish</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
