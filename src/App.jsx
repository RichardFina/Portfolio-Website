import Contact from "./components/contact/Contact";
import Introduction from "./components/introduction/Introduction";
import Navbar from "./components/navbar/Navbar";
import Portfolio from "./components/portfolio/Portfolio";
import Menu from "./components/menu/Menu"
import "./app.scss"
import { useState } from "react";

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div className="app">
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="sections">
        <Introduction/>
        <Portfolio/>
        <Contact/>
      </div>
    </div>
  );
}

export default App;
