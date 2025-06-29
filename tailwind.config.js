/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0a0a0f",
          light: "#1a1a2e",
          dark: "#000000",
          glass: "rgba(10, 10, 15, 0.8)",
        },
        secondary: {
          DEFAULT: "#00d4ff",
          light: "#4ddbff",
          dark: "#0099cc",
          neon: "#00ffff",
        },
        tertiary: {
          DEFAULT: "#8892b0",
          light: "#a8b2d1",
          dark: "#6b7280",
        },
        light: {
          DEFAULT: "#ffffff",
          dark: "#e2e8f0",
          bright: "#f8fafc",
        },
        accent: {
          DEFAULT: "#ff0080",
          light: "#ff4da6",
          dark: "#cc0066",
          neon: "#ff1493",
        },
        success: {
          DEFAULT: "#00ff88",
          light: "#4dffaa",
          dark: "#00cc6a",
        },
        warning: {
          DEFAULT: "#ffaa00",
          light: "#ffc04d",
          dark: "#cc8800",
        },
        error: {
          DEFAULT: "#ff0040",
          light: "#ff4d6b",
          dark: "#cc0033",
        },
        glass: {
          DEFAULT: "rgba(255, 255, 255, 0.1)",
          dark: "rgba(0, 0, 0, 0.1)",
          blur: "rgba(255, 255, 255, 0.05)",
        },
        gradient: {
          primary: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          secondary: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
          neon: "linear-gradient(135deg, #00d4ff 0%, #ff0080 100%)",
          sunset: "linear-gradient(135deg, #ff6b6b 0%, #feca57 50%, #48dbfb 100%)",
          ocean: "linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)",
          fire: "linear-gradient(135deg, #ff0080 0%, #ffaa00 50%, #00ff88 100%)",
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
        display: ['Poppins', 'sans-serif'],
        futura: ['Futura', 'Arial', 'sans-serif'],
      },
      animation: {
        'gradient-x': 'gradient-x 15s ease infinite',
        'gradient-y': 'gradient-y 15s ease infinite',
        'gradient-xy': 'gradient-xy 15s ease infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 3s infinite',
        'slide-up': 'slide-up 0.5s ease-out',
        'slide-down': 'slide-down 0.5s ease-out',
        'slide-left': 'slide-left 0.5s ease-out',
        'slide-right': 'slide-right 0.5s ease-out',
        'fade-in': 'fade-in 0.5s ease-out',
        'scale-in': 'scale-in 0.5s ease-out',
        'rotate-in': 'rotate-in 0.5s ease-out',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'shimmer': 'shimmer 2s linear infinite',
        'wave': 'wave 1.5s ease-in-out infinite',
        'typing': 'typing 3.5s steps(40, end)',
        'blink': 'blink 1s infinite',
        'neon-pulse': 'neon-pulse 2s ease-in-out infinite alternate',
        'morph': 'morph 8s ease-in-out infinite',
        'float-slow': 'float-slow 8s ease-in-out infinite',
        'spin-slow': 'spin-slow 20s linear infinite',
        'wiggle': 'wiggle 1s ease-in-out infinite',
        'heartbeat': 'heartbeat 2s ease-in-out infinite',
        'ripple': 'ripple 1s ease-out infinite',
        'slide-up-slow': 'slide-up-slow 1s ease-out',
        'fade-in-up': 'fade-in-up 0.8s ease-out',
        'scale-bounce': 'scale-bounce 0.6s ease-out',
        'rotate-3d': 'rotate-3d 10s linear infinite',
        'parallax': 'parallax 20s linear infinite',
        'text-shimmer': 'text-shimmer 2.5s linear infinite',
        'border-glow': 'border-glow 2s ease-in-out infinite alternate',
        'particle-float': 'particle-float 6s ease-in-out infinite',
      },
      keyframes: {
        'gradient-y': {
          '0%, 100%': {
            'background-size': '400% 400%',
            'background-position': 'center top'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'center center'
          }
        },
        'gradient-x': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          }
        },
        'gradient-xy': {
          '0%, 100%': {
            'background-size': '400% 400%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          }
        },
        'float': {
          '0%, 100%': {
            transform: 'translateY(0)',
          },
          '50%': {
            transform: 'translateY(-20px)',
          },
        },
        'float-slow': {
          '0%, 100%': {
            transform: 'translateY(0) rotate(0deg)',
          },
          '50%': {
            transform: 'translateY(-30px) rotate(5deg)',
          },
        },
        'slide-up': {
          '0%': {
            transform: 'translateY(100%)',
            opacity: '0',
          },
          '100%': {
            transform: 'translateY(0)',
            opacity: '1',
          },
        },
        'slide-down': {
          '0%': {
            transform: 'translateY(-100%)',
            opacity: '0',
          },
          '100%': {
            transform: 'translateY(0)',
            opacity: '1',
          },
        },
        'slide-left': {
          '0%': {
            transform: 'translateX(100%)',
            opacity: '0',
          },
          '100%': {
            transform: 'translateX(0)',
            opacity: '1',
          },
        },
        'slide-right': {
          '0%': {
            transform: 'translateX(-100%)',
            opacity: '0',
          },
          '100%': {
            transform: 'translateX(0)',
            opacity: '1',
          },
        },
        'fade-in': {
          '0%': {
            opacity: '0',
          },
          '100%': {
            opacity: '1',
          },
        },
        'fade-in-up': {
          '0%': {
            opacity: '0',
            transform: 'translateY(30px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        'scale-in': {
          '0%': {
            transform: 'scale(0)',
            opacity: '0',
          },
          '100%': {
            transform: 'scale(1)',
            opacity: '1',
          },
        },
        'scale-bounce': {
          '0%': {
            transform: 'scale(0)',
            opacity: '0',
          },
          '50%': {
            transform: 'scale(1.1)',
            opacity: '1',
          },
          '100%': {
            transform: 'scale(1)',
            opacity: '1',
          },
        },
        'rotate-in': {
          '0%': {
            transform: 'rotate(-180deg) scale(0)',
            opacity: '0',
          },
          '100%': {
            transform: 'rotate(0deg) scale(1)',
            opacity: '1',
          },
        },
        'rotate-3d': {
          '0%': {
            transform: 'rotateY(0deg) rotateX(0deg)',
          },
          '100%': {
            transform: 'rotateY(360deg) rotateX(360deg)',
          },
        },
        'glow': {
          '0%': {
            boxShadow: '0 0 20px rgba(0, 212, 255, 0.3)',
          },
          '100%': {
            boxShadow: '0 0 30px rgba(0, 212, 255, 0.6), 0 0 40px rgba(0, 212, 255, 0.3)',
          },
        },
        'neon-pulse': {
          '0%': {
            boxShadow: '0 0 5px rgba(0, 212, 255, 0.5), 0 0 10px rgba(0, 212, 255, 0.3), 0 0 15px rgba(0, 212, 255, 0.1)',
          },
          '100%': {
            boxShadow: '0 0 10px rgba(0, 212, 255, 0.8), 0 0 20px rgba(0, 212, 255, 0.5), 0 0 30px rgba(0, 212, 255, 0.3)',
          },
        },
        'border-glow': {
          '0%': {
            borderColor: 'rgba(0, 212, 255, 0.3)',
            boxShadow: '0 0 10px rgba(0, 212, 255, 0.2)',
          },
          '100%': {
            borderColor: 'rgba(0, 212, 255, 0.8)',
            boxShadow: '0 0 20px rgba(0, 212, 255, 0.4)',
          },
        },
        'shimmer': {
          '0%': {
            backgroundPosition: '-200% 0',
          },
          '100%': {
            backgroundPosition: '200% 0',
          },
        },
        'text-shimmer': {
          '0%': {
            backgroundPosition: '-200% 0',
          },
          '100%': {
            backgroundPosition: '200% 0',
          },
        },
        'wave': {
          '0%, 100%': {
            transform: 'rotate(0deg)',
          },
          '25%': {
            transform: 'rotate(20deg)',
          },
          '75%': {
            transform: 'rotate(-20deg)',
          },
        },
        'typing': {
          'from': {
            width: '0',
          },
          'to': {
            width: '100%',
          },
        },
        'blink': {
          '0%, 50%': {
            opacity: '1',
          },
          '51%, 100%': {
            opacity: '0',
          },
        },
        'morph': {
          '0%, 100%': {
            borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
          },
          '50%': {
            borderRadius: '30% 60% 70% 40% / 50% 60% 30% 60%',
          },
        },
        'spin-slow': {
          '0%': {
            transform: 'rotate(0deg)',
          },
          '100%': {
            transform: 'rotate(360deg)',
          },
        },
        'wiggle': {
          '0%, 100%': {
            transform: 'rotate(-3deg)',
          },
          '50%': {
            transform: 'rotate(3deg)',
          },
        },
        'heartbeat': {
          '0%, 100%': {
            transform: 'scale(1)',
          },
          '50%': {
            transform: 'scale(1.1)',
          },
        },
        'ripple': {
          '0%': {
            transform: 'scale(0)',
            opacity: '1',
          },
          '100%': {
            transform: 'scale(4)',
            opacity: '0',
          },
        },
        'slide-up-slow': {
          '0%': {
            transform: 'translateY(50px)',
            opacity: '0',
          },
          '100%': {
            transform: 'translateY(0)',
            opacity: '1',
          },
        },
        'parallax': {
          '0%': {
            transform: 'translateY(0px)',
          },
          '100%': {
            transform: 'translateY(-100px)',
          },
        },
        'particle-float': {
          '0%, 100%': {
            transform: 'translateY(0px) translateX(0px)',
          },
          '25%': {
            transform: 'translateY(-20px) translateX(10px)',
          },
          '50%': {
            transform: 'translateY(-10px) translateX(-5px)',
          },
          '75%': {
            transform: 'translateY(-30px) translateX(15px)',
          },
        },
      },
      boxShadow: {
        'glow': '0 0 20px rgba(0, 212, 255, 0.3)',
        'glow-lg': '0 0 40px rgba(0, 212, 255, 0.4)',
        'glow-xl': '0 0 60px rgba(0, 212, 255, 0.5)',
        'neon': '0 0 10px rgba(0, 212, 255, 0.5), 0 0 20px rgba(0, 212, 255, 0.3), 0 0 30px rgba(0, 212, 255, 0.1)',
        'neon-lg': '0 0 20px rgba(0, 212, 255, 0.6), 0 0 40px rgba(0, 212, 255, 0.4), 0 0 60px rgba(0, 212, 255, 0.2)',
        'accent-glow': '0 0 20px rgba(255, 0, 128, 0.3)',
        'accent-glow-lg': '0 0 40px rgba(255, 0, 128, 0.4)',
        'success-glow': '0 0 20px rgba(0, 255, 136, 0.3)',
        'glass': '0 8px 32px rgba(0, 0, 0, 0.1)',
        'glass-light': '0 8px 32px rgba(255, 255, 255, 0.1)',
        'inner-glow': 'inset 0 0 20px rgba(0, 212, 255, 0.2)',
        'text-glow': '0 0 10px rgba(0, 212, 255, 0.5)',
        'card-hover': '0 20px 40px rgba(0, 0, 0, 0.1), 0 0 20px rgba(0, 212, 255, 0.1)',
        'floating': '0 10px 30px rgba(0, 0, 0, 0.1), 0 0 10px rgba(0, 212, 255, 0.1)',
      },
      backdropBlur: {
        'xs': '2px',
        '4xl': '72px',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-neon': 'linear-gradient(135deg, #00d4ff 0%, #ff0080 100%)',
        'gradient-ocean': 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)',
        'gradient-sunset': 'linear-gradient(135deg, #ff6b6b 0%, #feca57 50%, #48dbfb 100%)',
        'gradient-fire': 'linear-gradient(135deg, #ff0080 0%, #ffaa00 50%, #00ff88 100%)',
        'gradient-aurora': 'linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #f5576c 75%, #ff6b6b 100%)',
        'shimmer': 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent)',
        'noise': "url('data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E')",
      },
      backgroundSize: {
        'shimmer': '200% 100%',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
      },
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
      },
      transitionTimingFunction: {
        'bounce-in': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'spring': 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
      },
    },
  },
  plugins: [],
} 