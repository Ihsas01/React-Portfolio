import { Suspense } from 'react';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ScrollToTop from './components/ScrollToTop';
import LoadingScreen from './components/LoadingScreen';
import ThemeToggle from './components/ThemeToggle';
import ReadingProgress from './components/ReadingProgress';
import CursorFollower from './components/CursorFollower';
import AnimatedBackground from './components/AnimatedBackground';
import PageTransition from './components/PageTransition';

function App() {
  return (
    <div className="min-h-screen bg-primary dark:bg-gray-900 transition-colors duration-300 relative">
      <AnimatedBackground />
      <AnimatePresence mode="wait">
        <LoadingScreen />
      </AnimatePresence>
      <ReadingProgress />
      <CursorFollower />
      <Navbar />
      <ThemeToggle />
      <main className="relative z-10">
        <Suspense fallback={<div>Loading...</div>}>
          <PageTransition>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Contact />
          </PageTransition>
        </Suspense>
      </main>
      <ScrollToTop />
    </div>
  );
}

export default App; 