import colors from 'tailwindcss/colors'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: colors.blue,
        secondary: colors.orange,
        textHeading: colors.slate[950],
        textHeadingDark: colors.gray[200],
        textSecondary: '#888888',
        textSecondaryDark: colors.gray[400],

      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation: {
        slide_down: 'slide_down 0.44s ease-in-out',
        slide_in_right: 'slide_in_right 0.25s ease-in-out',
        slide_in_left: 'slide_in_left 0.25s ease-in-out',
        rotateIn: 'rotateIn 0.5s ease-in-out',
        pendulum: 'pendulum 0.5s ease-in-out ',
      },
      keyframes: {
        pendulum: {
          '0%': { transform: 'rotate(-25deg)' },
        },
        slide_down: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(0%)' },
        },
        rotateIn: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(-90deg)' },
        },
        slide_in_right: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        slide_in_left: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}
