import type { PropsWithChildren } from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";

import { appTheme } from "../../shared/theme/theme";

export function AppThemeProvider({ children }: PropsWithChildren) {
  return (
    <ThemeProvider theme={appTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}