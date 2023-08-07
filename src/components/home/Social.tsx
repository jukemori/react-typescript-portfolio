import { Slide } from "react-awesome-reveal";

const Social = () => {
  return (
    <Slide>
      <div className="home__social">
        <a
          href="https://www.instagram.com/tinyjap/"
          className="home__social-icon"
          target="_blank"
        >
          <i className="uil uil-instagram"></i>
        </a>

        <a
          href="https://www.linkedin.com/in/jun-ukemori/"
          className="home__social-icon"
          target="_blank"
        >
          <i className="uil uil-linkedin"></i>
        </a>

        <a
          href="https://github.com/jukemori"
          className="home__social-icon"
          target="_blank"
        >
          <i className="uil uil-github"></i>
        </a>
      </div>
    </Slide>
  );
};

export default Social;
