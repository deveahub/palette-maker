import copy from 'copy-to-clipboard';
import { readableColor } from 'polished';
import { FC } from 'react';

import { styled } from '@/styles';

import Text from './Text';
import useToasts from './Toast/useToasts';

const StyledColorSwatch = styled('button', {
  minWidth: 80,
  minHeight: 80,
  border: 'none',
  borderRadius: '100%',
});

const ColorSwatch: FC<{ value: string }> = ({ value }) => {
  const toasts = useToasts();
  const onCopy = () => {
    copy(value);
    toasts.add({
      type: 'success',
      text: `${value} color copied`,
    });
  };
  return (
    <StyledColorSwatch
      onClick={onCopy}
      css={{
        color: readableColor(value),
        backgroundColor: value,
      }}
    >
      <Text>{value}</Text>
    </StyledColorSwatch>
  );
};

export default ColorSwatch;
