import 'styled-components';
import { theme } from '../styles/theme';
import { CSSProp } from "styled-components";

// type Theme = typeof theme;

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}

declare module "react" {
  interface Attributes {
    css?: CSSProp | CSSObject;
  }
}