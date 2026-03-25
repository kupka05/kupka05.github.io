import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import FloatingEditorButton from './components/FloatingEditorButton';

function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-50 font-sans antialiased overflow-x-hidden">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-sky-500 focus:text-slate-950 focus:font-bold focus:rounded-md"
      >
        본문으로 건너뛰기
      </a>

      <Navbar />

      <main id="main-content">
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
      </footer>

      <FloatingEditorButton />
    </div>
  );
}

export default App;
