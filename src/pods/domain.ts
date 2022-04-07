export interface Color {
  name: string;
  base: string;
  variants: Array<string>;
}

export interface Palette {
  name: string;
  colors: Array<Color>;
}

export interface Palettes {
  current: Palette;
  names: Array<string>;
}
