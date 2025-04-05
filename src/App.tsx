import { useRef } from "react";
import { AboutUs } from "./components/AboutUs";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { Portfolio } from "./components/Portfolio";
import { Tecno } from "./components/Tecno";

function App() {
  const homeRef = useRef<HTMLElement | null>(null);
  const aboutRef = useRef<HTMLElement | null>(null);
  const portfolioRef = useRef<HTMLElement | null>(null);
  return (
    <>
      <Header
        homeRef={homeRef}
        aboutRef={aboutRef}
        portfolioRef={portfolioRef}
      />
      <Home />
      <AboutUs aboutRef={aboutRef} />
      <Tecno />
      <Portfolio portfolioRef={portfolioRef} />
      <Footer
        homeRef={homeRef}
        aboutRef={aboutRef}
        portfolioRef={portfolioRef}
      />
    </>
  );
}

export default App;
