import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import FloatingEditorButton from "./components/FloatingEditorButton";
import ProjectDetail from "./components/ProjectDetail";

function App() {
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(
    null,
  );

  return (
    <div className="min-h-screen bg-[var(--color-surface)] text-[var(--color-on-surface)] font-sans antialiased overflow-x-hidden">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-[var(--color-primary-container)] focus:text-[var(--color-on-surface)] focus:font-bold focus:rounded-full"
      >
        본문으로 건너뛰기
      </a>

      {!selectedProjectId && <Navbar />}

      <main id="main-content">
        {selectedProjectId ? (
          <ProjectDetail
            projectId={selectedProjectId}
            onBack={() => setSelectedProjectId(null)}
          />
        ) : (
          <>
            <Hero />
            <About />
            <Skills />
            <Projects onSelectProject={setSelectedProjectId} />
            <Blog />
            <Contact />
          </>
        )}
      </main>

      {!selectedProjectId && (
        <footer className="bg-[var(--color-surface-low)] py-12 text-center text-[var(--color-on-surface-muted)] text-sm relative mt-24">
          <div className="container mx-auto px-6">
            <p className="headline-text font-semibold mb-2">
              The Ethereal Gallery
            </p>
            <p>© {new Date().getFullYear()} 홍길동. All rights reserved.</p>
          </div>
        </footer>
      )}

      <FloatingEditorButton />
    </div>
  );
}

export default App;
