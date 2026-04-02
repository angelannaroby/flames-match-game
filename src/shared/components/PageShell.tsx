import type { PropsWithChildren } from "react";
import { Box } from "@mui/material";

type PageShellProps = PropsWithChildren<{
  ariaLabel: string;
}>;

export function PageShell({ ariaLabel, children }: PageShellProps) {
  return (
    <Box
      component="main"
      aria-label={ariaLabel}
      sx={{
        position: "relative",
        minHeight: "100vh",
        width: "100%",
        overflow: "hidden",
        bgcolor: "background.default",
        color: "text.primary",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        px: 3,
        py: 4,
      }}
    >
      {children}
    </Box>
  );
}