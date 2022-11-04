export type BasePalette = {
  backgroundDark: string;
  background: string;
  foreground: string;
  selectionDark: string;
  selection: string;
  textDark: string;
  textMid: string;
  text: string;
  shadow: string;
};

export type ColorPalette = {
  lapis: string;
  amethyst: string;
  ruby: string;
  amber: string;
  peridot: string;
  aquamarine: string;
  quartz: string;
};

export type BaseVariant = 'default' | 'stealth';

export type Variant =
  | 'lapis'
  | 'amethyst'
  | 'ruby'
  | 'amber'
  | 'peridot'
  | 'aquamarine'
  | 'quartz';

export type Shade = 'default' | 'dark' | 'light';
