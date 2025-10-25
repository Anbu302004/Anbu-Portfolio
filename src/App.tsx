import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./Nav"; 
import AnbuuPersonaPortfolio from "./AnbuuPersona";
import About from "./About";
import Contact from "./Contact";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<AnbuuPersonaPortfolio />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
