import { FC } from 'react';
import { Delete as DeleteIcon } from 'react-feather';

import { Color as ColorData } from '@/pods/domain';

import { ButtonLink } from './Button';
import ColorSwatch from './ColorSwatch';
import EditableText from './EditableText';
import Stack from './Stack';

interface ColorProps extends ColorData {
  onRemove: () => void;
  onFinishEdit: (value: string) => boolean;
}

const Color: FC<ColorProps> = ({
  base,
  name,
  variants,
  onRemove,
  onFinishEdit,
}) => (
  <Stack
    direction="column"
    css={{
      gap: 1,
    }}
  >
    <Stack alignItems="center">
      <ButtonLink
        onClick={onRemove}
        css={{
          transform: 'rotateZ(180deg)',
        }}
      >
        <DeleteIcon />
      </ButtonLink>
      <EditableText
        css={{
          width: '100%',
        }}
        text={name}
        onFinishEdit={onFinishEdit}
      />
    </Stack>
    <Stack
      justifyContent="center"
      css={{
        gap: 1,
        flexWrap: 'wrap',
      }}
    >
      <ColorSwatch value={base} />
      {variants.map((v) => (
        <ColorSwatch value={v} />
      ))}
    </Stack>
  </Stack>
);

export default Color;
