import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Home from "./components/Home"
import Nav from "./components/Nav"
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import './css/main.css';

const App = () => {
 
  return (
    <div className="bgColor">
      <Nav/>
      <Home/>
      <Skills/>
      <Projects/>
      <Experience/>
      <Contact/>
    </div>
  )
}

export default App