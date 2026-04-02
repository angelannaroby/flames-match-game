import { Box } from "@mui/material";

type PageShellProps = {
  ariaLabel: string;
};

export function PageShell({ ariaLabel }: PageShellProps) {
  return (
    <Box
      component="main"
      aria-label={ariaLabel}
      sx={{
        minHeight: "100vh",
        width: "100%",
        bgcolor: "background.default",
        color: "text.primary",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        px: 3,
        py: 4,
      }}
    />
  );
}