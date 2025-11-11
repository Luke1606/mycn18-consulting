/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', 
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
  ],
  theme: {
    extend: {
      colors: {
        'cosmic-void': 'var(--cosmic-void)', 
        'nitrogen-red': 'var(--nitrogen-red)', 
        'oxygen-blue': 'var(--oxygen-blue)', 
        'guide-light': 'var(--guide-light)', 
        'golden-touch': 'var(--golden-touch)',
        
        'accent': 'var(--accent)', 
      },
      boxShadow: {
        'header': '0 2px 8px rgba(0, 0, 0, 0.2)',
        'default': '0 2px 6px rgba(0, 0, 0, 0.25), 0 8px 24px rgba(0, 0, 0, 0.33), 0 16px 32px rgba(0, 0, 0, 0.5)',
        'dark': '0 2px 6px rgba(255, 255, 255, 0.1), 0 8px 24px rgba(255, 255, 255, 0.15), 0 16px 32px rgba(255, 255, 255, 0.2)',
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            '--tw-prose-body': theme('colors.cosmic-void'), 
            '--tw-prose-headings': theme('colors.cosmic-void'), 
            '--tw-prose-links': theme('colors.oxygen-blue'), 
            '--tw-prose-bold': theme('colors.cosmic-void'), 
            '--tw-prose-hr': theme('colors.cosmic-void'), 
            '--tw-prose-quote-borders': theme('colors.oxygen-blue'), 
            '--tw-prose-code': theme('colors.nitrogen-red'), 
            '--tw-prose-pre-bg': '#e0e0e0',
            '--tw-prose-pre-code': theme('colors.cosmic-void'),

            'h1': { fontSize: '3.052em' },
            'h2': { fontSize: '2.441em' },
            'h3': { fontSize: '1.953em' },
            'h4': { fontSize: '1.563em' },
            'h5': { fontSize: '1.25em' },
            
            '.dark &': {
              '--tw-prose-body': theme('colors.guide-light'),
              '--tw-prose-headings': theme('colors.guide-light'),
              '--tw-prose-links': theme('colors.oxygen-blue'),
              '--tw-prose-bold': theme('colors.guide-light'),
              '--tw-prose-hr': theme('colors.guide-light'),
              '--tw-prose-quote-borders': theme('colors.nitrogen-red'),
              '--tw-prose-code': theme('colors.nitrogen-red'),
              '--tw-prose-pre-bg': '#1a1a1a',
              '--tw-prose-pre-code': theme('colors.guide-light'),
            },
            
            'p': {
                marginBottom: '1em',
            },
          }
        }
      })
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};