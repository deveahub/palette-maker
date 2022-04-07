import { styled } from '@/styles';

const Stack = styled('div', {
  display: 'flex',
  variants: {
    spacing: {
      1: {
        gap: 1,
      },
      2: {
        gap: 2,
      },
      3: {
        gap: 3,
      },
      4: {
        gap: 4,
      },
      5: {
        gap: 5,
      },
      6: {
        gap: 6,
      },
      7: {
        gap: 7,
      },
    },
    justifyContent: {
      center: {
        justifyContent: 'center',
      },
      flexEnd: {
        justifyContent: 'flex-end',
      },
      flexStart: {
        justifyContent: 'flex-start',
      },
      spaceAround: {
        justifyContent: 'space-around',
      },
      spaceBetween: {
        justifyContent: 'space-between',
      },
      spaceEvenly: {
        justifyContent: 'space-evenly',
      },
    },
    alignItems: {
      center: {
        alignItems: 'center',
      },
      flexEnd: {
        justifyContent: 'flex-end',
      },
      flexStart: {
        justifyContent: 'flex-start',
      },
    },
    direction: {
      column: {
        flexDirection: 'column',
      },
      row: {
        flexDirection: 'row',
      },
    },
  },
});

export default Stack;
