import Home from "./components/Home"
import Nav from "./components/Nav"
import Skills from "./components/Skills";
import './css/main.css';

const App = () => {
  return (
    <div className="bgColor">
      <Nav/>
      <Home/>
      <Skills/>
    </div>
  )
}

export default App