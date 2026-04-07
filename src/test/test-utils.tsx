/* eslint-disable react-refresh/only-export-components */

import type { PropsWithChildren, ReactElement } from "react";
import { render } from "@testing-library/react";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";

function TestProviders({ children }: PropsWithChildren) {
  const theme = createTheme();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}

export function renderWithProviders(ui: ReactElement) {
  return render(ui, {
    wrapper: TestProviders,
  });
}