import { writeFile } from 'fs';
import { uiTemplate } from './template';
import { Shade, Variant, BaseVariant } from './types';

const createTheme = ({
  name,
  baseVariant,
  variant,
  shade,
}: {
  name: string;
  baseVariant: BaseVariant;
  variant: Variant;
  shade?: Shade;
}) => {
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

// Lapis
createTheme({ name: 'lapis', baseVariant: 'default', variant: 'lapis' });
createTheme({
  name: 'lapis-stealth',
  baseVariant: 'stealth',
  variant: 'lapis',
});

// Lapis Amethyst
createTheme({
  name: 'lapis-amethyst',
  baseVariant: 'default',
  variant: 'amethyst',
});
createTheme({
  name: 'lapis-amethyst-stealth',
  baseVariant: 'stealth',
  variant: 'amethyst',
});

// Lapis Ruby
createTheme({
  name: 'lapis-ruby',
  baseVariant: 'default',
  variant: 'ruby',
});
createTheme({
  name: 'lapis-ruby-stealth',
  baseVariant: 'stealth',
  variant: 'ruby',
});

// Lapis Amber
createTheme({
  name: 'lapis-amber',
  baseVariant: 'default',
  variant: 'amber',
});
createTheme({
  name: 'lapis-amber-stealth',
  baseVariant: 'stealth',
  variant: 'amber',
});

// Lapis Peridot
createTheme({
  name: 'lapis-peridot',
  baseVariant: 'default',
  variant: 'peridot',
});
createTheme({
  name: 'lapis-peridot-stealth',
  baseVariant: 'stealth',
  variant: 'peridot',
});

// Lapis Aquamarine
createTheme({
  name: 'lapis-aquamarine',
  baseVariant: 'default',
  variant: 'aquamarine',
});
createTheme({
  name: 'lapis-aquamarine-stealth',
  baseVariant: 'stealth',
  variant: 'aquamarine',
});

// Lapis Quartz
createTheme({
  name: 'lapis-quartz',
  baseVariant: 'default',
  variant: 'quartz',
});
createTheme({
  name: 'lapis-quartz-stealth',
  baseVariant: 'stealth',
  variant: 'quartz',
});

// Lapis Dark
createTheme({
  name: 'lapis-dark',
  baseVariant: 'default',
  variant: 'lapis',
  shade: 'dark',
});
createTheme({
  name: 'lapis-dark-stealth',
  baseVariant: 'stealth',
  variant: 'lapis',
  shade: 'dark',
});

// Lapis Amethyst Dark
createTheme({
  name: 'lapis-amethyst-dark',
  baseVariant: 'default',
  variant: 'amethyst',
  shade: 'dark',
});
createTheme({
  name: 'lapis-amethyst-dark-stealth',
  baseVariant: 'stealth',
  variant: 'amethyst',
  shade: 'dark',
});

// Lapis Ruby Dark
createTheme({
  name: 'lapis-ruby-dark',
  baseVariant: 'default',
  variant: 'ruby',
  shade: 'dark',
});
createTheme({
  name: 'lapis-ruby-dark-stealth',
  baseVariant: 'stealth',
  variant: 'ruby',
  shade: 'dark',
});

// Lapis Amber Dark
createTheme({
  name: 'lapis-amber-dark',
  baseVariant: 'default',
  variant: 'amber',
  shade: 'dark',
});
createTheme({
  name: 'lapis-amber-dark-stealth',
  baseVariant: 'stealth',
  variant: 'amber',
  shade: 'dark',
});

// Lapis Peridot Dark
createTheme({
  name: 'lapis-peridot-dark',
  baseVariant: 'default',
  variant: 'peridot',
  shade: 'dark',
});
createTheme({
  name: 'lapis-peridot-dark-stealth',
  baseVariant: 'stealth',
  variant: 'peridot',
  shade: 'dark',
});

// Lapis Aquamarine Dark
createTheme({
  name: 'lapis-aquamarine-dark',
  baseVariant: 'default',
  variant: 'aquamarine',
  shade: 'dark',
});
createTheme({
  name: 'lapis-aquamarine-dark-stealth',
  baseVariant: 'stealth',
  variant: 'aquamarine',
  shade: 'dark',
});

// Lapis Quartz Dark
createTheme({
  name: 'lapis-quartz-dark',
  baseVariant: 'default',
  variant: 'quartz',
  shade: 'dark',
});
createTheme({
  name: 'lapis-quartz-dark-stealth',
  baseVariant: 'stealth',
  variant: 'quartz',
  shade: 'dark',
});

// Lapis Light
createTheme({
  name: 'lapis-light',
  baseVariant: 'default',
  variant: 'lapis',
  shade: 'light',
});

// Lapis Amethyst Light
createTheme({
  name: 'lapis-amethyst-light',
  baseVariant: 'default',
  variant: 'amethyst',
  shade: 'light',
});

// Lapis Ruby Light
createTheme({
  name: 'lapis-ruby-light',
  baseVariant: 'default',
  variant: 'ruby',
  shade: 'light',
});

// Lapis Amber Light
createTheme({
  name: 'lapis-amber-light',
  baseVariant: 'default',
  variant: 'amber',
  shade: 'light',
});

// Lapis Peridot Light
createTheme({
  name: 'lapis-peridot-light',
  baseVariant: 'default',
  variant: 'peridot',
  shade: 'light',
});

// Lapis Aquamarine Light
createTheme({
  name: 'lapis-aquamarine-light',
  baseVariant: 'default',
  variant: 'aquamarine',
  shade: 'light',
});

// Lapis Onyx Light
createTheme({
  name: 'lapis-onyx-light',
  baseVariant: 'default',
  variant: 'quartz',
  shade: 'light',
});
