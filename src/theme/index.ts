import { extendTheme, UsageTheme } from "@yamada-ui/react";

// import styles from './styles'
// import components from './components'
import { semantics } from "./semantics";
import tokens from "./tokens";

const customTheme: UsageTheme = {
  // styles,
  // components,
  ...tokens,
  semantics,
};

export default extendTheme(customTheme)();
