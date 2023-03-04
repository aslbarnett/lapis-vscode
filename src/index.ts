import { writeFile } from 'fs';
import { uiTemplate } from './template';
import { Theme } from './types';
import { themes } from './themes';

const createTheme = ({ name, baseVariant, variant, shade, italics }: Theme) => {
	const themeName = name
		.split('-')
		.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
		.join(' ')
		.replace(/stealth/i, '(stealth version)')
		.replace(/italic/i, 'with Italics');
	const template = uiTemplate({
		baseVariant,
		variant,
		shade,
		name: themeName,
		italics,
	});

	writeFile(`themes/${name}-color-theme.json`, JSON.stringify(template), (error) => {
		if (error) {
			console.log('There was an unexpected error: ', error);
		}
	});
};

themes
	.filter((theme) => (theme.name.includes('italic') && theme.variant === 'lapis') || !theme.name.includes('italic'))
	.forEach((theme) => createTheme(theme));
