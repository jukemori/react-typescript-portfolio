import Home from "../components/home/Home";
import About from "../components/about/About";
import Skills from "../components/skills/Skills";
import Background from "../components/background/Background";
import Testimonials from "../components/testimonials/Testimonials";
import Contact from "../components/contact/Contact";
import Work from "../components/work/Work";

function Main() {
  return (
    <main className="main">
      <Home />
      <About />
      <Skills />
      <Background />
      <Work />
      <Testimonials />
      <Contact />
    </main>
  );
}

export default Main;
