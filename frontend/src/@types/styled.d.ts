import "styled-components";
import type { styledTheme } from "../theme";

type Theme = typeof styledTheme;

declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}
