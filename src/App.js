import About from "./components/About";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Experience from "./components/Experience";
import SocialLinks from "./components/SocialLinks";

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Experience />
      <Skills />
      <Contact />

      <SocialLinks />
    </div>
  );
}

export default App;