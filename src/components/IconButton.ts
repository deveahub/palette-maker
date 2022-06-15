import { styled } from '@/styles';

const IconButton = styled('button', {
  size: 6,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '$sm',
  backgroundColor: '$primary',
  border: 'none',
  color: 'white',

  '& svg': {
    color: '$primary-dark-3',
  },

  '&:hover': {
    backgroundColor: '$primary-dark-3',

    '& svg': {
      color: '$primary',
    },
  },

  variants: {
    rounded: {
      true: {
        borderRadius: '100%',
      },
    },
    size: {
      small: {
        minWidth: 32,
        minHeight: 32,
      },
      medium: {
        minWidth: 48,
        minHeight: 48,
      },
      big: {
        minWidth: 64,
        minHeight: 64,
      },
    },
  },
  defaultVariants: {
    size: 'medium',
  },
});

export default IconButton;
