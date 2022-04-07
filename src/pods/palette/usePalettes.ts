import { darken, desaturate, lighten, saturate } from 'polished';
import { useMemo } from 'react';
import useSWRImmutable from 'swr/immutable';

import { arrayOf } from '../common/utils';
import { Palette, Palettes } from '../domain';
import { DEFAULT_PALETTES, STORAGE_PALETTES_KEY } from './constants';
import storage from './storage';

const makeLightenVariants = (base: string) =>
  arrayOf(4).map((idx: number) => lighten((idx + 1) / 10, base));

const makeDarkenVariants = (base: string) =>
  arrayOf(4).map((idx: number) => darken((idx + 1) / 10, base));

const usePalettes = () => {
  const { data, error, isValidating, mutate } = useSWRImmutable<Palettes>(
    STORAGE_PALETTES_KEY,
    storage.getPalettesAndCreateIfNotExists
  );
  const namesLength = data?.names.length || 0;
  const paletteColorsLength = data?.current.colors.length || 0;
  const hasOnlyOnePalette = useMemo(() => namesLength === 1, [namesLength]);
  const hasMultiplePalettes = useMemo(() => namesLength > 1, [namesLength]);
  const isEmptyPalettes = useMemo(() => namesLength === 1, [namesLength]);
  const isEmptyPalette = useMemo(
    () => paletteColorsLength === 0,
    [paletteColorsLength]
  );

  const addPalette = (palette: Palette) => {
    const output = storage.addPalette(palette);
    mutate();
    return output;
  };

  const removePalette = (name: string) => {
    const output = storage.removePalette(name);
    mutate();
    return output;
  };

  const changePaletteName = (nextName: string) => {
    const output = storage.changePaletteName(nextName);
    mutate();
    return output;
  };

  const changeCurrentPalette = (name: string) => {
    const output = storage.changeCurrentPalette(name);
    mutate();
    return output;
  };

  const changeColorName = (currentName: string, nextName: string) => {
    const output = storage.changeColorName(currentName, nextName);
    mutate();
    return output;
  };

  const addColor = (color: string) => {
    const output = storage.addColor({
      base: color,
      name: color,
      variants: [
        ...makeDarkenVariants(color),
        ...makeLightenVariants(color),
        saturate(0.1, color),
        desaturate(0.1, color),
      ],
    });
    mutate();
    return output;
  };

  const removeColor = (name: string) => {
    const output = storage.removeColor(name);
    mutate();
    return output;
  };

  return {
    data: data || DEFAULT_PALETTES,
    hasOnlyOnePalette,
    hasMultiplePalettes,
    isEmptyPalettes,
    isEmptyPalette,
    error,
    isLoading: isValidating && !data,
    handlers: {
      addPalette,
      removePalette,
      changePaletteName,
      changeCurrentPalette,
      addColor,
      removeColor,
      changeColorName,
    },
  };
};

export default usePalettes;
