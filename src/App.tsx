import "./index.css";
import { Route } from "react-router-dom";
import SlideRoutes from "react-slide-routes";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import ScrollUp from "./components/scrollup/ScrollUp";
import Main from "./pages/Main";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
// import Blogs from "./pages/Blogs";
import About from "./pages/about/About";

function App() {
  return (
    <>
      <Header />

      <SlideRoutes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        {/* <Route path="/blogs" element={<Blogs />} /> */}
        <Route path="/contact" element={<Contact />} />
      </SlideRoutes>

      <Footer />
      <ScrollUp />
    </>
  );
}

export default App;
