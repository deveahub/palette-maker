import { Color, Palette, Palettes } from '../domain';
import {
  DEFAULT_PALETTE,
  DEFAULT_PALETTES,
  STORAGE_PALETTE_KEY,
  STORAGE_PALETTES_KEY,
} from './constants';

const makePaletteKey = (name: string) =>
  `${STORAGE_PALETTE_KEY}-${name.replaceAll(' ', '_')}`;

const getPalette = (name: string) => {
  const cached = localStorage.getItem(makePaletteKey(name));
  return cached ? (JSON.parse(cached) as Palette) : DEFAULT_PALETTE;
};

const getPalettes = () => {
  const cached = localStorage.getItem(STORAGE_PALETTES_KEY);
  return cached ? (JSON.parse(cached) as Palettes) : DEFAULT_PALETTES;
};

const addPalette = (palette: Palette) => {
  try {
    // palette
    localStorage.setItem(makePaletteKey(palette.name), JSON.stringify(palette));

    // palettes
    const cachedPalettes = getPalettes();
    const newPalettes: Palettes = {
      current: palette,
      names: cachedPalettes.names.concat(palette.name),
    };
    localStorage.setItem(STORAGE_PALETTES_KEY, JSON.stringify(newPalettes));
    return true;
  } catch (_) {
    return false;
  }
};

const getPalettesAndCreateIfNotExists = () => {
  const cached = localStorage.getItem(STORAGE_PALETTES_KEY);

  if (cached) {
    return JSON.parse(cached) as Palettes;
  }

  addPalette(DEFAULT_PALETTE);
  return getPalettes();
};

const removePalette = (paletteName: string) => {
  try {
    localStorage.removeItem(makePaletteKey(paletteName));
    const cachedPalettes = getPalettes();

    const filteredNames = cachedPalettes.names.filter(
      (name) => name !== paletteName
    );
    const newPalettes: Palettes = {
      current: filteredNames[0]
        ? getPalette(filteredNames[0])
        : DEFAULT_PALETTE,
      names: filteredNames,
    };

    localStorage.setItem(STORAGE_PALETTES_KEY, JSON.stringify(newPalettes));
    return true;
  } catch (_) {
    return false;
  }
};

const setPalettes = (palettes: Palettes) =>
  localStorage.setItem(STORAGE_PALETTES_KEY, JSON.stringify(palettes));

const changeCurrentPalette = (paletteName: string) => {
  const palette = localStorage.getItem(makePaletteKey(paletteName));
  const palettes = getPalettes();

  if (palette) {
    setPalettes({
      ...palettes,
      current: JSON.parse(palette),
    });
    return true;
  }

  return false;
};

const changePaletteName = (newName: string) => {
  const palettes = getPalettes();
  const exists = palettes.names.find(
    (name) => name.toLowerCase() === newName.toLowerCase()
  );

  if (exists) return false;

  removePalette(palettes.current.name);
  const newPalette = {
    ...palettes.current,
    name: newName,
  };
  addPalette(newPalette);

  const newPalettes: Palettes = {
    current: newPalette,
    names: [
      newName,
      ...palettes.names.filter((name) => name !== palettes.current.name),
    ],
  };
  setPalettes(newPalettes);
  return true;
};

const addColor = (color: Color) => {
  try {
    const palettes = getPalettes();

    const newPalette: Palette = {
      ...palettes.current,
      colors: [color, ...palettes.current.colors],
    };

    addPalette(newPalette);
    setPalettes({
      ...palettes,
      current: newPalette,
    });
    return true;
  } catch (_) {
    return false;
  }
};

const removeColor = (colorBase: string) => {
  try {
    const palettes = getPalettes();

    const newPalette: Palette = {
      ...palettes.current,
      colors: palettes.current.colors.filter((c) => c.base !== colorBase),
    };

    addPalette(newPalette);
    setPalettes({
      ...palettes,
      current: newPalette,
    });
    return true;
  } catch (_) {
    return false;
  }
};

const changeColorName = (currentName: string, nextName: string) => {
  try {
    const palettes = getPalettes();

    const exists = palettes.current.colors.find((c) => c.name === nextName);

    if (exists) {
      return false;
    }
    const newPalette: Palette = {
      ...palettes.current,
      colors: palettes.current.colors.map((c) => ({
        ...c,
        name: c.name === currentName ? nextName : c.name,
      })),
    };

    addPalette(newPalette);
    setPalettes({
      ...palettes,
      current: newPalette,
    });

    return true;
  } catch (_) {
    return false;
  }
};

const storage = {
  addColor,
  addPalette,
  changeCurrentPalette,
  changeColorName,
  changePaletteName,
  getPalette,
  getPalettes,
  removeColor,
  removePalette,
  getPalettesAndCreateIfNotExists,
};

export default storage;
