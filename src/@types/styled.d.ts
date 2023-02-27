import 'styled-components';
import { DefaultThemes } from '../styles/themes/default';

type ThemeType = typeof DefaultThemes;

declare module 'styled-components' {
    export interface DefaultTheme extends ThemeType {}
}