import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-50 font-sans antialiased overflow-x-hidden">
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <footer className="bg-slate-950 py-8 text-center text-slate-500 text-sm relative">
        <div className="container mx-auto px-6">
          <p>© {new Date().getFullYear()} 홍길동. All rights reserved.</p>
        </div>
        <a
          href="./admin/"
          className="absolute bottom-4 right-4 p-2 text-slate-600 hover:text-slate-300 transition-colors"
          title="Admin Login"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>
        </a>
      </footer>
    </div>
  );
}

export default App;
