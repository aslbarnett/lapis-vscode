import { BaseVariant, Shade, Theme, Variant } from './types';

const themeMap = [
  { label: 'lapis', color: 'lapis' },
  { label: 'lapis-amethyst', color: 'amethyst' },
  { label: 'lapis-ruby', color: 'ruby' },
  { label: 'lapis-amber', color: 'amber' },
  { label: 'lapis-peridot', color: 'peridot' },
  { label: 'lapis-aquamarine', color: 'aquamarine' },
  { label: 'lapis-quartz', alias: 'lapis-onyx', color: 'quartz' },
];

const variants = ['default', 'stealth', 'dark', 'dark-stealth', 'light', 'italic'];

export const themes: Array<Theme> = [
  ...themeMap
    .map(({ label, color, alias }) => {
      return variants.map((variant) => ({
        name: `${variant === 'light' && color === 'quartz' ? alias : label}${
          variant === 'default' ? '' : `-${variant}`
        }`,
        baseVariant: variant.includes('stealth') ? ('stealth' as BaseVariant) : ('default' as BaseVariant),
        variant: color as Variant,
        ...(variant.includes('dark') && { shade: 'dark' as Shade }),
        ...(variant.includes('light') && { shade: 'light' as Shade }),
        italics: variant === 'italic',
      }));
    })
    .reduce((acc, curr) => [...acc, ...curr], []),
];
