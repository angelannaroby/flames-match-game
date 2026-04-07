import { Button, Stack, Typography } from "@mui/material";

import { appPalette } from "../../shared/theme/palette";
import { FlamesCardShell } from "./FlamesCardShell";

type FlamesIntroCardProps = {
  title: string;
  description: string;
  buttonLabel: string;
  onContinue: () => void;
};

export function FlamesIntroCard({
  title,
  description,
  buttonLabel,
  onContinue,
}: FlamesIntroCardProps) {
  return (
    <FlamesCardShell>
      <Stack
        spacing={{ xs: 2.5, sm: 3 }}
        alignItems="center"
        textAlign="center"
        sx={{ width: "100%", position: "relative", zIndex: 1 }}
      >
        <Stack spacing={2.25}>
          <Typography
            variant="h3"
            sx={{
              fontWeight: 800,
              fontSize: {
                xs: "1.65rem",
                sm: "2rem",
              },
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
            }}
          >
            {title}
          </Typography>

          <Typography
            variant="body1"
            color="text.secondary"
            sx={{
              maxWidth: 430,
              mx: "auto",
              lineHeight: 1.85,
              whiteSpace: "pre-line",
              fontSize: {
                xs: "0.98rem",
                sm: "1.05rem",
              },
            }}
          >
            {description}
          </Typography>
        </Stack>

        <Button
          variant="contained"
          size="large"
          onClick={onContinue}
          sx={{
            minWidth: 170,
            px: 3.25,
            py: 1.05,
            borderRadius: 999,
            background: `linear-gradient(135deg, ${appPalette.brand.primary} 0%, ${appPalette.brand.secondary} 100%)`,
            color: "text.primary",
          }}
        >
          {buttonLabel}
        </Button>
      </Stack>
    </FlamesCardShell>
  );
}