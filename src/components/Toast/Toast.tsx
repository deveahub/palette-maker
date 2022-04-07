import { FC, useEffect, useRef } from 'react';

import { ComponentProps, styled } from '@/styles';

import { ToastData } from './types';

const ToastContainer = styled('button', {
  p: 2,
  backgroundColor: '$bg',
  border: '1px solid',
  color: '$text',
  borderRadius: '$lg',
  variants: {
    type: {
      success: {
        borderColor: '$success',

        '&:hover': {
          backgroundColor: '$success',
          color: 'white',
        },
      },
      error: {
        borderColor: '$error',

        '&:hover': {
          backgroundColor: '$error',
          color: 'white',
        },
      },
    },
  },
});

const Toast: FC<ToastData & ComponentProps<typeof ToastContainer>> = ({
  text,
  onClick,
  ...props
}) => {
  const timer = useRef<number>();

  useEffect(() => {
    if (onClick) {
      timer.current = setTimeout(onClick, 1500);
    }
    return () => {
      if (timer.current) {
        clearInterval(timer.current);
        timer.current = undefined;
      }
    };
  }, [onClick]);

  return (
    <ToastContainer onClick={onClick} {...props}>
      {text}
    </ToastContainer>
  );
};

export default Toast;
