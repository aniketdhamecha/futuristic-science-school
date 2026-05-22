/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0F172A", // Slate 900
        secondary: "#E0F2FE", // Sky 100
        accent: "#D4AF37", // Elegant Gold
        accentHover: "#BFA030", // Deep Gold
        neutralBg: "#F8FAFC", // Slate 50
        slateLight: "#64748B", // Slate 500
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        display: ["Outfit", "sans-serif"],
      },
      boxShadow: {
        'premium': '0 10px 30px -10px rgba(15, 23, 42, 0.08)',
        'premium-hover': '0 20px 40px -15px rgba(15, 23, 42, 0.12)',
        'gold-glow': '0 4px 20px -2px rgba(212, 175, 55, 0.25)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        }
      }
    },
  },
  plugins: [],
}
