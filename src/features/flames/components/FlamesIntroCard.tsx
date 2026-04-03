import { Button, Stack, Typography } from "@mui/material";

import { FeatureCard } from "../../../shared/components";

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
    <FeatureCard>
      <Stack spacing={3} alignItems="center" textAlign="center">
        <Stack spacing={1.5}>
          <Typography variant="h4" fontWeight={700}>
            {title}
          </Typography>

          <Typography
            variant="body1"
            color="text.secondary"
            sx={{
              maxWidth: 420,
              mx: "auto",
              lineHeight: 1.7,
            }}
          >
            {description}
          </Typography>
        </Stack>

        <Button
          variant="contained"
          size="medium"
          onClick={onContinue}
          sx={{
            minWidth: 160,
            px: 3,
            py: 1.2,
            borderRadius: 999,
          }}
        >
          {buttonLabel}
        </Button>
      </Stack>
    </FeatureCard>
  );
}