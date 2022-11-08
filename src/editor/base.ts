import { alpha } from '../helpers';
import { BasePalette, ColorPalette } from '../types';

export default function base(
  basePalette: BasePalette,
  colorPalette: ColorPalette
) {
  return {
    focusBorder: alpha(basePalette.selection, 0.5),
    foreground: basePalette.foreground,
    'widget.shadow': basePalette.shadow,
    'selection.background': alpha(basePalette.selection, 0.7),
    descriptionForeground: basePalette.foreground,
    errorForeground: colorPalette.ruby,
  };
}
