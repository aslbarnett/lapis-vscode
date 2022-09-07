import { writeFile } from 'fs';
import { uiTemplate, BaseVariant, Variant } from './template';

const createTheme = (
  name: string,
  baseVariant: BaseVariant,
  variant: Variant
) => {
  const themeName = name
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
    .replace(/stealth/i, '(stealth version)');
  const template = uiTemplate(themeName, baseVariant, variant);

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

// Lapis
createTheme('lapis', 'default', 'lapis');
createTheme('lapis-stealth', 'stealth', 'lapis');

// Lapis Amethyst
createTheme('lapis-amethyst', 'default', 'amethyst');
createTheme('lapis-amethyst-stealth', 'stealth', 'amethyst');

// Lapis Ruby
createTheme('lapis-ruby', 'default', 'ruby');
createTheme('lapis-ruby-stealth', 'stealth', 'ruby');

// Lapis Amber
createTheme('lapis-amber', 'default', 'amber');
createTheme('lapis-amber-stealth', 'stealth', 'amber');

// Lapis Peridot
createTheme('lapis-peridot', 'default', 'peridot');
createTheme('lapis-peridot-stealth', 'stealth', 'peridot');

// Lapis Aquamarine
createTheme('lapis-aquamarine', 'default', 'aquamarine');
createTheme('lapis-aquamarine-stealth', 'stealth', 'aquamarine');

// Lapis Quartz
createTheme('lapis-quartz', 'default', 'quartz');
createTheme('lapis-quartz-stealth', 'stealth', 'quartz');
