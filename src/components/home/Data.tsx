import { Fade } from "react-awesome-reveal";
import { NavLink } from "react-router-dom";

const Data = () => {
  return (
    <div className="home__data">
      <h1 className="home__title">
        <Fade delay={1e3} cascade damping={1e-1}>
          Hi, I'm Jun
        </Fade>
      </h1>

      <h3 className="home__subtitle">Fullstack Developer</h3>
      <p className="home__description">
        I'm a web developer based in Tokyo. I enjoy building fullstack
        applications using React and Rails.
      </p>

      <NavLink to="/projects" className="button button--flex">
        About Me
        <i className="bx bx-right-arrow-alt scrollright__icon"></i>
      </NavLink>
    </div>
  );
};

export default Data;
