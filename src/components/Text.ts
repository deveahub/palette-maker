import { styled } from '@/styles';

const Text = styled('p', {
  variants: {
    textAlign: {
      center: {
        textAlign: 'center',
      },
      left: {
        textAlign: 'left',
      },
      right: {
        textAlign: 'right',
      },
    },
  },
});

export default Text;
