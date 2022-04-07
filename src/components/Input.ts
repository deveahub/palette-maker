import { styled } from '@/styles';

const Input = styled('input', {
  p: 2,
  borderRadius: '$sm',
  border: '1px solid',
  borderColor: '$foreground',
  backgroundColor: '$bg',
  color: '$text',
  variants: {
    fullWidth: {
      true: {
        width: '100%',
      },
    },
  },
});

export default Input;
