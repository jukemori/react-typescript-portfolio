import { Fade } from "react-awesome-reveal";

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
        I'm a creative developer based in Tokyo, and I'm very passionate and
        dedicated to my work.
      </p>
      <a href="#about" className="button button--flex">
        Scroll Down
        <i className="bx bx-down-arrow-alt scrolldown__icon"></i>
      </a>
    </div>
  );
};

export default Data;
