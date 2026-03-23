/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          emerald: '#10B981',
          sky: '#0EA5E9',
          slate: '#0F172A',
          mist: '#F8FAFC',
          helitube: '#8B5CF6',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Montserrat', 'Inter', 'system-ui', 'sans-serif'],
        cta: ['Montserrat', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 28px 120px rgba(14, 165, 233, 0.25)',
        panel: '0 24px 70px rgba(15, 23, 42, 0.16)',
      },
      backgroundImage: {
        'hero-grid':
          'linear-gradient(rgba(148, 163, 184, 0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(148, 163, 184, 0.08) 1px, transparent 1px)',
        'soft-radial':
          'radial-gradient(circle at top, rgba(16, 185, 129, 0.16), transparent 36%), radial-gradient(circle at bottom right, rgba(139, 92, 246, 0.16), transparent 34%), radial-gradient(circle at bottom left, rgba(14, 165, 233, 0.18), transparent 28%)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        drift: {
          '0%': { transform: 'translate3d(0, 0, 0)' },
          '50%': { transform: 'translate3d(12px, -10px, 0)' },
          '100%': { transform: 'translate3d(0, 0, 0)' },
        },
        shimmer: {
          '0%': { opacity: '0.45' },
          '50%': { opacity: '0.85' },
          '100%': { opacity: '0.45' },
        },
      },
      animation: {
        float: 'float 10s ease-in-out infinite',
        drift: 'drift 16s ease-in-out infinite',
        shimmer: 'shimmer 12s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
