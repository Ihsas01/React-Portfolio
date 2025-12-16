import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface ThemeContextType {
  isDark: boolean;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [isDark, setIsDark] = useState(() => {
    // Check localStorage first
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      if (saved) {
        return saved === 'dark';
      }
      // Check system preference
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return true; // Default to dark
  });

  // Apply theme immediately on mount (before React renders)
  useEffect(() => {
    const root = document.documentElement;
    const body = document.body;
    
    // Get initial theme
    const saved = localStorage.getItem('theme');
    const initialIsDark = saved 
      ? saved === 'dark' 
      : window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (initialIsDark) {
      root.classList.add('dark');
      root.style.setProperty('--theme-bg', '#0a0a0f');
      root.style.setProperty('--theme-text', '#ffffff');
      body.style.backgroundColor = '#0a0a0f';
      body.style.color = '#ffffff';
    } else {
      root.classList.remove('dark');
      root.style.setProperty('--theme-bg', '#f8fafc');
      root.style.setProperty('--theme-text', '#0a0a0f');
      body.style.backgroundColor = '#f8fafc';
      body.style.color = '#0a0a0f';
    }
  }, []);

  // Update theme when state changes
  useEffect(() => {
    const root = document.documentElement;
    const body = document.body;
    
    if (isDark) {
      root.classList.add('dark');
      root.style.setProperty('--theme-bg', '#0a0a0f');
      root.style.setProperty('--theme-text', '#ffffff');
      body.style.backgroundColor = '#0a0a0f';
      body.style.color = '#ffffff';
    } else {
      root.classList.remove('dark');
      root.style.setProperty('--theme-bg', '#f8fafc');
      root.style.setProperty('--theme-text', '#0a0a0f');
      body.style.backgroundColor = '#f8fafc';
      body.style.color = '#0a0a0f';
    }
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(prev => !prev);
  };

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

