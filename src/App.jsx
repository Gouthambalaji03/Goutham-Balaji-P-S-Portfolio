import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

// Animated Background Component
const AnimatedBackground = () => (
  <div className="animated-bg">
    <div className="gradient-orb gradient-orb-1"></div>
    <div className="gradient-orb gradient-orb-2"></div>
    <div className="gradient-orb gradient-orb-3"></div>
    <div className="grid-pattern"></div>
  </div>
);

function App() {
  return (
    <div className="min-h-screen bg-dark text-text-secondary font-inter relative">
      <AnimatedBackground />
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Certifications />
          <Contact />
        </main>
        <Footer />
        <ScrollToTop />
      </div>
    </div>
  );
}

export default App;
