/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-bg': '#060911',
        'cyber-dark': '#070b19',
        'cyber-card': 'rgba(16, 22, 46, 0.64)',
        'cyber-card-hover': 'rgba(26, 34, 70, 0.85)',
        'cyber-cyan': '#00f4ff',
        'cyber-purple': '#7a57ff',
        'cyber-pink': '#ff3db8',
        'cyber-text-muted': '#9aa6c9',
      },
      fontFamily: {
        header: ['Sora', 'sans-serif'],
        body: ['Manrope', 'sans-serif'],
      },
      animation: {
        'avatar-pulse': 'avatarPulse 2s infinite ease-in-out',
        'soft-float': 'softFloat 5s infinite ease-in-out',
      },
      keyframes: {
        avatarPulse: {
          '0%, 100%': { transform: 'scale(1)', boxShadow: '0 0 35px rgba(0, 244, 255, 0.35)' },
          '50%': { transform: 'scale(1.05)', boxShadow: '0 0 58px rgba(122, 87, 255, 0.65)' },
        },
        softFloat: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      }
    },
  },
  plugins: [],
}
