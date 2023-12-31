import plugins from 'tailwindcss/plugin'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,js,ts,vue}"
  ],
  theme: {
	  colors: {
		  black: '#151515', 
		  white: '#FFF',
		  purple: '#854DFF',
		  grey: '#716F6F',
		  line: '#DCDCDC',
		  red: '#FF5959',
		  'light-grey': '#F0F0F0',
	  },
	  fontFamily: {
      poppins: ["'Poppins'", "sans-serif"],
    },
    fontSize: {
      'heading-l': '6.5rem',
      'heading-m': '2rem',
      'heading-s': '0.875rem',
      'body': '0.875rem',
    },
    lineHeight: {
      'heading-l': '110%',
      'heading-m': 'normal',
      'heading-s': 'normal',
      'body': 'normal',
    },
    letterSpacing: {
      'heading-l': '-0.13rem',
      'heading-m': '0.02rem',
      'heading-s': '0.21875rem',
      'body': '0rem',
    }
  },
  plugins: [
    plugins(({ addUtilities, theme }) => {
      addUtilities({
        '.heading-l': {
          fontFamily: theme('fontFamily.poppins'),
          fontSize: '3.5rem',
          lineHeight: theme('lineHeight.heading-l'),
          letterSpacing: '-0.07rem',
          '@screen md': {
            fontSize: theme('fontSize.heading-l'),
            letterSpacing: theme('letterSpacing.heading-l'),
          }
        },
        '.heading-m': {
          fontFamily: theme('fontFamily.poppins'),
          fontSize: '1.25rem',
          lineHeight: theme('lineHeight.heading-m'),
          letterSpacing: '0.0125rem',
          '@screen md': {
            fontSize: theme('fontSize.heading-m'),
            letterSpacing: theme('letterSpacing.heading-m'),
          }
        },
        '.heading-s': {
          fontFamily: theme('fontFamily.poppins'),
          fontSize: '0.75rem',
          lineHeight: theme('lineHeight.heading-s'),
          letterSpacing: '0.1875rem',
          fontStyle: 'normal',
          '@screen md': {
            fontSize: theme('fontSize.heading-s'),
            letterSpacing: theme('letterSpacing.heading-s'),
          }
        },
        '.body': {
          fontFamily: theme('fontFamily.poppins'),
          fontSize: '0.75rem',
          lineHeight: theme('lineHeight.body'),
          letterSpacing: theme('letterSpacing.body'),
          '@screen md': {
            fontSize: theme('fontSize.body'),
          }
        },
      })
    })
  ],
}
