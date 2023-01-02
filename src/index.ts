import { writeFile } from 'fs';
import { uiTemplate } from './template';
import { Shade, Variant, BaseVariant, Theme } from './types';
import { themes } from './themes';

const createTheme = ({ name, baseVariant, variant, shade }: Theme) => {
  const themeName = name
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
    .replace(/stealth/i, '(stealth version)');
  const template = uiTemplate({
    baseVariant,
    variant,
    shade,
    name: themeName,
  });

  writeFile(
    `themes/${name}-color-theme.json`,
    JSON.stringify(template),
    (error) => {
      if (error) {
        console.log('There was an unexpected error: ', error);
      }
    }
  );
};

themes.forEach((theme) => createTheme(theme));
