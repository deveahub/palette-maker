import { globalCss } from './stitches';

const globalStyles = globalCss({
  '@font-face': {
    fontFamily: 'Poppins',
    src: 'url(https://fonts.googleapis.com/css2?family=Poppins:wght@100;300;400;500;600;700&display=swap)',
    fontWeight: 400,
    fontStyle: 'normal',
    fontDisplay: 'swap',
  },
  '*, *::before, *::after': {
    boxSizing: 'border-box',
  },
  '*': {
    margin: 0,
  },
  'html, body, div#__next': {
    height: '100%',
  },
  html: {
    scrollBehavior: 'smooth',
  },
  'div#__next': {
    width: '100%',
  },
  body: {
    backgroundColor: '$bg',
    color: '$text',
    fontFamily:
      '"Poppins","Helvetica Neue","Helvetica","Roboto","Arial",sans-serif',
    lineHeight: 1.66,
    '-webkit-font-smoothing': 'antialiased',
  },
  'button, a': {
    cursor: 'pointer',
    '&[disabled]': {
      cursor: 'not-allowed',
    },
  },
  'input, button, a, select': {
    outlineColor: '$primary-dark',
  },
  'input:focus-visible, button:focus-visible, a:focus-visible, select:focus-visible':
    {
      outlineStyle: 'solid',
      outlineColor: '$primary-dark',
      outlineWidth: 2,
      outlineOffset: 0,
    },
  a: {
    textDecoration: 'none',
    color: '$text',
  },
  '*::-webkit-scrollbar': {
    width: '4px',
    height: '2px',
  },

  '*::-webkit-scrollbar-track': {
    backgroundColor: '$bg' /* color of the tracking area */,
  },

  '*::-webkit-scrollbar-thumb': {
    backgroundColor: '$text',
  },
});

export default globalStyles;
