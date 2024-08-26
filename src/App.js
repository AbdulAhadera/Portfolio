import AnimatedCursor from "react-animated-cursor";
import MobileNavbar from "./components/MobileNavbar";
import Hero from "./components/Hero";
import './App.css';


function App() {


  return (
    <div className="App">
      <MobileNavbar />
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
      <Hero />
    </div>
  );
}

export default App;
