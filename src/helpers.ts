import { defaultTheme, lightTheme } from './colors';
import { Shade } from './types';

export const generateColorPalette = (shade?: Shade) => {
  const basePalette =
    shade === 'light' ? lightTheme.editor : defaultTheme.editor;

  return {
    basePalette: basePalette,
    colorPalette:
      shade === 'light'
        ? lightTheme.syntax.default
        : defaultTheme.syntax.default,
    lightColorPalette:
      shade === 'light' ? lightTheme.syntax.light : defaultTheme.syntax.light,
    primaryBgColor:
      shade === 'dark' ? basePalette.backgroundDark : basePalette.background,
    secondaryBgColor:
      shade === 'dark' ? basePalette.background : basePalette.backgroundDark,
  };
};

export const alpha = (color: string, value: number) => {
  return `${color}${value * 100}`;
};
