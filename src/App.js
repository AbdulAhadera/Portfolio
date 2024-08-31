import AnimatedCursor from "react-animated-cursor";
import MobileNavbar from "./components/MobileNavbar";
import Hero from "./components/Hero";
import LaptopNavbar from "./components/LaptopNavbar";
import './App.css';
import About from "./components/About";


function App() {


  return (
    <div className="App">

      <div className="mobile-nav">
        <MobileNavbar />
      </div>
      <div className="laptop-nav">
        <LaptopNavbar />
      </div>

      <AnimatedCursor
        innerSize={10}
        outerSize={12}
        color='38, 173, 255'
        outerAlpha={0.2}
        innerScale={0.5}
        outerScale={3}
        clickables={[
          'a',
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          'label[for]',
          'select',
          'textarea',
          'button',
          '.link'
        ]}
      />
      <div className="body">
        <Hero />
        <About />
      </div>
    </div>
  );
}

export default App;
