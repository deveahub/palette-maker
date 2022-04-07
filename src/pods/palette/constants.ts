import { Palette, Palettes } from '../domain';

export const STORAGE_PALETTES_KEY = 'palettes';
export const STORAGE_PALETTE_KEY = 'palette';

export const DEFAULT_PALETTE: Palette = {
  name: 'Palette',
  colors: [],
};

export const DEFAULT_PALETTES: Palettes = {
  current: DEFAULT_PALETTE,
  names: [],
};
