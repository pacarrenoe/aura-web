import Header from "./components/layout/Header/Header";
import Hero from "./components/sections/Hero/Hero";
import Plans from "./components/sections/Plans/Plans";
import About from "./components/sections/About/About";
import Contact from "./components/sections/Contact/Contact";
import Footer from "./components/layout/Footer/Footer";

function App() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <Plans />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
