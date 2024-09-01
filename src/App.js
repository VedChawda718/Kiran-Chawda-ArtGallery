import React, { useState } from "react";
import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import About from "./components/About";
import Marquee from "./components/Marquee";

function App() {
  const [isNavbarActive, setIsNavbarActive] = useState(false);

  const toggleNavbar = () => {
    setIsNavbarActive(!isNavbarActive);
  };

  return (
    <div className="App bg-zinc-950 h-screen w-full">
      <Navbar toggleNavbar={toggleNavbar} isNavbarActive={isNavbarActive} />
      {isNavbarActive ? null : (
        <>
          <LandingPage />
          <Marquee />
          <About />
        </>
      )}
    </div>
  );
}

export default App;
