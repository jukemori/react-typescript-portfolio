import { useEffect } from "react";
import "./scrollup.css";

function ScrollUp() {
  useEffect(() => {
    const scrollUp = document.querySelector(".scrollup");

    if (scrollUp) {
      const handleScroll = () => {
        if (window.scrollY >= 560) {
          scrollUp.classList.add("show-scroll");
        } else {
          scrollUp.classList.remove("show-scroll");
        }
      };

      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  return (
    <a href="#" className="scrollup">
      <i className="uil uil-arrow-up scrollup__icon"></i>
    </a>
  );
}

export default ScrollUp;
