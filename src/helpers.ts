import { Shade } from './template';
import {
  base,
  baseLightTheme,
  lightPalette,
  lightPaletteLightTheme,
  palette,
  paletteLightTheme,
} from './colors';

export const getBasePalette = (shade?: Shade) => {
  if (shade === 'light') {
    return baseLightTheme;
  }

  return base;
};

export const getColorPalette = (shade?: Shade) => {
  if (shade === 'light') {
    return lightPalette;
  }

  return palette;
};

export const getLightColorPalette = (shade?: Shade) => {
  if (shade === 'light') {
    return lightPaletteLightTheme;
  }

  return paletteLightTheme;
};
