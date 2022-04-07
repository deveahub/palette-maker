import Head from 'next/head';
import { KeyboardEvent, useState } from 'react';
import {
  ChevronDown as ChevronDownIcon,
  ChevronUp as ChevronUpIcon,
  Plus as PlusIcon,
} from 'react-feather';

import Color from '@/components/Color';
import EditableText from '@/components/EditableText';
import IconButton from '@/components/IconButton';
import Input from '@/components/Input';
import PopoverButton, { Close } from '@/components/PopoverButton';
import Select from '@/components/Select';
import Stack from '@/components/Stack';
import useToasts from '@/components/Toast/useToasts';
import { usePalettes } from '@/pods/palette';

const Palette = () => {
  const [color, setColor] = useState('');
  const palettes = usePalettes();
  const toast = useToasts();
  const { data } = usePalettes();

  const properAddColor = () => {
    const result = palettes.handlers.addColor(color);

    if (result) {
      setColor('');
    } else {
      toast.add({ type: 'error', text: `${color} invalid color` });
    }
  };

  const onInputKeyPressEnter = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') properAddColor();
  };

  return (
    <>
      <Head>
        <title>Palette - {palettes.data.current.name}</title>
      </Head>
      <Stack
        direction="column"
        css={{
          gap: 2,
          px: 1,
          height: '100%',
        }}
      >
        <Stack
          alignItems="center"
          css={{
            gap: 1,
          }}
        >
          <PopoverButton
            trigger={<ChevronDownIcon />}
            content={
              <Stack
                direction="column"
                css={{
                  gap: 1,
                }}
              >
                {palettes.data.names
                  .filter((name) => name !== palettes.data.current.name)
                  .map((name) => (
                    <Close
                      css={{
                        textAlign: 'left',
                        color: '$text',
                        fontWeight: 'bold',
                      }}
                      onClick={() =>
                        palettes.handlers.changeCurrentPalette(name)
                      }
                    >
                      {name}
                    </Close>
                  ))}
              </Stack>
            }
          />
          <EditableText
            text={palettes.data.current.name}
            onFinishEdit={(value) => palettes.handlers.changePaletteName(value)}
            css={{
              fontSize: '$lg',
              width: '100%',
              px: 0,
            }}
          />
        </Stack>
        <Stack
          alignItems="center"
          css={{
            gap: 1,
            width: '100%',
          }}
        >
          <Input
            type="color"
            css={{
              p: 0,
              minWidth: 48,
              minHeight: 48,
            }}
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />

          <Input
            fullWidth
            placeholder="Insert your color"
            value={color}
            onKeyPress={onInputKeyPressEnter}
            onChange={(e) => setColor(e.target.value)}
          />
          <IconButton onClick={properAddColor}>
            <PlusIcon />
          </IconButton>
        </Stack>
        <Stack
          direction="column"
          css={{
            height: '100%',
            gap: 3,
            pb: 2,
          }}
        >
          {data?.current.colors.map((pColor) => (
            <Color
              key={pColor.name}
              base={pColor.base}
              name={pColor.name}
              variants={pColor.variants}
              onRemove={() => palettes.handlers.removeColor(pColor.base)}
              onFinishEdit={(nextName) =>
                palettes.handlers.changeColorName(pColor.name, nextName)
              }
            />
          ))}
        </Stack>
      </Stack>
    </>
  );
};

export default Palette;
