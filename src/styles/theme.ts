const theme = {
  colors: {
    bg: '#FFF',
    'bg-alpha-1': '#ffffffc9',
    text: '#333',
    primary: '#33f',
    error: '#600',
    'primary-light': '#33f',
    'primary-dark': '#006',
    foreground: '#9f9d9d',
    'foreground-light': '#e1dddd',
    success: '#2ecc71',
    'success-light': '#54d98c',
    'success-dark': '#25a25a',
  },
  radii: {
    sm: '3px',
    md: '6px',
    lg: '9px',
  },
  shadows: {
    sm: '0 0 2px $colors$foreground',
    md: '0 0 8px $colors$foreground',
  },
  transitions: {
    fast: 'all 0.1s',
    smooth: 'all 0.2s',
  },
  zIndices: {
    topbar: 2000,
  },
  fontSizes: {
    xs: '0.8rem',
    sm: '1rem',
    md: '1.5rem',
    lg: '2rem',
  },
  sizes: {},
};

export default theme;
