import Home from "./components/Home"
import Nav from "./components/Nav"
import './css/main.css';

const App = () => {
  return (
    <div className="bgColor">
      <Nav/>
      <Home/>
    </div>
  )
}

export default App