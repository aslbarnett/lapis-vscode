import { Shade } from './template';
import {
  base,
  baseLightTheme,
  lightPalette,
  lightPaletteLightTheme,
  palette,
  paletteLightTheme,
} from './colors';

export const generateColorPalette = (shade?: Shade) => {
  const basePalette = shade === 'light' ? baseLightTheme : base;

  return {
    basePalette: basePalette,
    colorPalette: shade === 'light' ? lightPalette : palette,
    lightColorPalette:
      shade === 'light' ? lightPaletteLightTheme : paletteLightTheme,
    primaryBgColor:
      shade === 'dark' ? basePalette.backgroundDark : basePalette.background,
    secondaryBgColor:
      shade === 'dark' ? basePalette.background : basePalette.backgroundDark,
  };
};
