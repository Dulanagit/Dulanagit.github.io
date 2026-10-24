import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
import About from './components/sections/About';
import Academic from './components/sections/Academic';
import Contact from './components/sections/Contact';
import Engineering from './components/sections/Engineering';
import Hero from './components/sections/Hero';
import Leadership from './components/sections/Leadership';
import './App.css';

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Academic />
        <Engineering />
        <Leadership />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
