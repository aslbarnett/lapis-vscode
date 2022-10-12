import { writeFile } from 'fs';
import { uiTemplate, BaseVariant, Variant, Shade } from './template';

const createTheme = (
  name: string,
  baseVariant: BaseVariant,
  variant: Variant,
  shade?: Shade
) => {
  const themeName = name
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
    .replace(/stealth/i, '(stealth version)');
  const template = uiTemplate(themeName, baseVariant, variant, shade);

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

// Lapis Dark
createTheme('lapis-dark', 'default', 'lapis', 'dark');
createTheme('lapis-dark-stealth', 'stealth', 'lapis', 'dark');

// Lapis Amethyst Dark
createTheme('lapis-amethyst-dark', 'default', 'amethyst', 'dark');
createTheme('lapis-amethyst-dark-stealth', 'stealth', 'amethyst', 'dark');

// Lapis Ruby Dark
createTheme('lapis-ruby-dark', 'default', 'ruby', 'dark');
createTheme('lapis-ruby-dark-stealth', 'stealth', 'ruby', 'dark');

// Lapis Amber Dark
createTheme('lapis-amber-dark', 'default', 'amber', 'dark');
createTheme('lapis-amber-dark-stealth', 'stealth', 'amber', 'dark');

// Lapis Peridot Dark
createTheme('lapis-peridot-dark', 'default', 'peridot', 'dark');
createTheme('lapis-peridot-dark-stealth', 'stealth', 'peridot', 'dark');

// Lapis Aquamarine Dark
createTheme('lapis-aquamarine-dark', 'default', 'aquamarine', 'dark');
createTheme('lapis-aquamarine-dark-stealth', 'stealth', 'aquamarine', 'dark');

// Lapis Quartz Dark
createTheme('lapis-quartz-dark', 'default', 'quartz', 'dark');
createTheme('lapis-quartz-dark-stealth', 'stealth', 'quartz', 'dark');
