import { useState } from "react";
import "./background.css";
import BackgroundItems from "./BackgroundItems";
import { Educations, Experiences } from "./Data";

function Background() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index: number) => {
    setToggleState(index);
  };

  return (
    <section className="background section" id="background">
      <h2 className="section__title">Background</h2>
      <span className="section__subtitle">My personal journey</span>
      <div className="background__container container">
        <div className="background__tabs">
          <div
            className={
              toggleState === 1
                ? "background__button background__active button--flex"
                : "background__button button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap background__icon"></i>
            Education
          </div>

          <div
            className={
              toggleState === 2
                ? "background__button background__active button--flex"
                : "background__button button--flex"
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-briefcase-alt background__icon"></i>
            Experience
          </div>
        </div>
        <div className="background__sections">
          <div
            className={
              toggleState === 1
                ? "background__content background__content-active"
                : "background__content "
            }
          >
            {Educations.map((item) => {
              return <BackgroundItems key={item.id} item={item} />;
            })}
          </div>
          <div
            className={
              toggleState === 2
                ? "background__content background__content-active"
                : "background__content "
            }
          >
            {Experiences.map((item) => {
              return <BackgroundItems key={item.id} item={item} />;
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Background;
