import { BasePalette, ColorPalette } from '../types';

export default function base(
  basePalette: BasePalette,
  colorPalette: ColorPalette
) {
  return {
    focusBorder: `${basePalette.selection}50`,
    foreground: basePalette.foreground,
    'widget.shadow': basePalette.shadow,
    'selection.background': `${basePalette.selection}70`,
    descriptionForeground: basePalette.foreground,
    errorForeground: colorPalette.ruby,
  };
}
