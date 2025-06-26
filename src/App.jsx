import { useEffect } from "react";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: true,
      
    });
  }, []);
  return (
    <main>
      {/* Geadient image */}
      <img
        src="/gradient.png"
        alt="Geadient-image"
        className="absolute top-0 right-0 opacity-60 -z-1"
      />
      {/* Blur Effect */}
      <div className="h-0 w-[40rem] absolute top-[20%] right-[-5%] shadow-[0_0_900px_20px_#e99b63] -rotate-[30deg] -z-10"></div>
      <Header />
      <Hero />
    </main>
  );
}

export default App;
