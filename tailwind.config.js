/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    fontFamily: {
      display: "Futura Extra Bold Condensed Oblique",
      body: "Open Sans, Helvetica, sans-serif"
    },
    extend: {
      colors: {
        'body': 'var(--color-body)',
        'body-bg': 'var(--color-body-bg)',
        'body-secondary-bg': 'var(--color-body-secondary-bg)',
        'emphasis': 'var(--color-emphasis)',
        'accent-1': 'var(--color-accent-1)',
        'accent-2': 'var(--color-accent-2)',
      }
    },
  },
  plugins: [],
}

