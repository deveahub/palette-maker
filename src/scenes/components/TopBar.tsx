import copy from 'copy-to-clipboard';
import {
  Copy as CopyIcon,
  Download as DownloadIcon,
  Plus as PlusIcon,
  Trash as TrashIcon,
} from 'react-feather';

import IconButton from '@/components/IconButton';
import Stack from '@/components/Stack';
import ThemeVariantButton from '@/components/ThemeVariantButton';
import useToasts from '@/components/Toast/useToasts';
import { Color, Palette } from '@/pods/domain';
import { usePalettes } from '@/pods/palette';
import { DEFAULT_PALETTE } from '@/pods/palette/constants';

const makeThemePartialVariant = (
  name: string,
  prefix: string,
  partialVariant: Color['variants']
) =>
  partialVariant.reduce(
    (acc, variant, idx) => ({
      ...acc,
      [`${name}-${prefix}-${idx}`]: variant,
    }),
    {}
  );

const makeThemeVariant = (color: Color) => ({
  [color.name]: color.base,
  ...makeThemePartialVariant(color.name, 'dark', color.variants.slice(0, 3)),
  ...makeThemePartialVariant(color.name, 'light', color.variants.slice(3, 6)),
  [`${color.name}-saturate`]: color.variants[color.variants.length - 2],
  [`${color.name}-desaturate`]: color.variants[color.variants.length - 1],
});

const makeThemeObject = (colors: Palette['colors']) =>
  colors.reduce(
    (acc, color) => ({
      ...acc,
      ...makeThemeVariant(color),
    }),
    {}
  );

const TopBar = () => {
  const toasts = useToasts();
  const palettes = usePalettes();

  const onCopy = () => {
    copy(JSON.stringify(makeThemeObject(palettes.data.current.colors)));
    toasts.add({ type: 'success', text: 'Copied to clipboard' });
  };

  const onDownload = () => {
    const link = document.createElement('a');
    const file = new Blob(
      [JSON.stringify(makeThemeObject(palettes.data.current.colors))],
      {
        type: 'application/json',
      }
    );
    link.href = URL.createObjectURL(file);
    document.body.appendChild(link);
    link.download = `${palettes.data.current.name}-theme.json`;
    link.click();
    link.remove();
  };

  const onAddPalette = () => {
    palettes.handlers.addPalette({
      ...DEFAULT_PALETTE,
      name: `Palette ${palettes.data.names.length + 1}`,
    });
  };

  return (
    <Stack
      justifyContent={{
        '@initial': 'spaceBetween',
        '@bp1': 'flexStart',
      }}
      css={{
        zIndex: '$topbar',
        gap: 2,
        position: 'sticky',
        top: 0,
        backgroundColor: '$bg',
        py: 1,
      }}
    >
      <ThemeVariantButton />
      {!palettes.isEmptyPalette && (
        <>
          <IconButton rounded onClick={onCopy}>
            <CopyIcon />
          </IconButton>
          <IconButton rounded onClick={onDownload}>
            <DownloadIcon />
          </IconButton>
        </>
      )}
      {palettes.hasMultiplePalettes && (
        <IconButton
          rounded
          onClick={() =>
            palettes.handlers.removePalette(palettes.data.current.name)
          }
        >
          <TrashIcon />
        </IconButton>
      )}
      {!palettes.isEmptyPalette && (
        <IconButton rounded onClick={onAddPalette}>
          <PlusIcon />
        </IconButton>
      )}
    </Stack>
  );
};

export default TopBar;
