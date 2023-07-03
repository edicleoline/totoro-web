import { ThemeOptions, createTheme } from '@mui/material/styles';
import colors from 'assets/scss/_themes-vars.module.scss';
import componentStyleOverrides from './compStyleOverride';
import { themePaletteLight, themePaletteDark } from './palette';
import themeTypography from './typography';
import { MixinsOptions } from '@mui/material/styles/createMixins';

declare module '@mui/material/styles' {
    interface Palette {
        tertiary: Palette['primary'];
        neutral: Palette['primary'];
    }

    interface PaletteOptions {
        tertiary: PaletteOptions['primary'];
        neutral: PaletteOptions['primary'];
    }
}

export type Theme = 'light' | 'dark';

export const themes = (dark: boolean) => {
    return dark ? theme(themePaletteDark(colors)) : theme(themePaletteLight(colors));
};

export const theme = (palette) => {
    const defaultOptions = {
        colors: colors
    };

    const mixins: MixinsOptions = {};

    const themeOptions: ThemeOptions = {
        direction: 'ltr',
        palette: palette,
        mixins: mixins,
        typography: themeTypography(palette)
    };

    const themes = createTheme(themeOptions);
    themes.components = componentStyleOverrides(defaultOptions);

    return themes;
};
