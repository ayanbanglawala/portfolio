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
    </div>
  )
}

export default App