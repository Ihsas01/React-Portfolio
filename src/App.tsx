import { Suspense, useEffect, lazy } from 'react';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ScrollToTop from './components/ScrollToTop';
import LoadingScreen from './components/LoadingScreen';
import ReadingProgress from './components/ReadingProgress';
import CursorFollower from './components/CursorFollower';
import AnimatedBackground from './components/AnimatedBackground';
import PageTransition from './components/PageTransition';

// Lazy load components that aren't immediately visible
const About = lazy(() => import('./components/About'));
const Skills = lazy(() => import('./components/Skills'));
const Projects = lazy(() => import('./components/Projects'));
const Contact = lazy(() => import('./components/Contact'));

function App() {
  // Scroll to top on page load/refresh
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Also handle browser back/forward navigation
    const handlePopState = () => {
      window.scrollTo(0, 0);
    };
    
    window.addEventListener('popstate', handlePopState);
    
    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  return (
    <div className="min-h-screen bg-primary text-light font-sans transition-colors duration-300 relative overflow-x-hidden">
      {/* Background Effects */}
      <AnimatedBackground />
      
      {/* Loading Screen */}
      <AnimatePresence mode="wait">
        <LoadingScreen />
      </AnimatePresence>
      
      {/* Progress Indicators */}
      <ReadingProgress />
      <CursorFollower />
      
      {/* Navigation */}
      <Navbar />
      
      {/* Main Content */}
      <main className="relative z-10">
        <Suspense fallback={
          <div className="min-h-screen flex items-center justify-center">
            <div className="text-center">
              <div className="w-16 h-16 border-4 border-secondary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
              <p className="text-tertiary">Loading...</p>
            </div>
          </div>
        }>
          <PageTransition>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Contact />
          </PageTransition>
        </Suspense>
      </main>
      
      {/* Scroll to Top */}
      <ScrollToTop />
      
      {/* Footer */}
      <footer className="relative z-10 bg-primary-dark/50 backdrop-blur-sm border-t border-white/10 py-8">
        <div className="container-custom">
          <div className="text-center">
            <p className="text-tertiary text-sm">
              © 2024 Ihsas Ifthikar. Built with ❤️ using React, TypeScript, and Tailwind CSS.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App; 