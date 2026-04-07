import { Box } from "@mui/material";
import type { PropsWithChildren, ReactNode } from "react";
import type { SxProps, Theme } from "@mui/material/styles";

import { FeatureCard } from "../../shared/components";
import { flamesTokens } from "../constants/flames.tokens";

type FlamesCardShellProps = PropsWithChildren<{
  backgroundSlot?: ReactNode;
  contentSx?: SxProps<Theme>;
}>;

export function FlamesCardShell({
  children,
  backgroundSlot,
  contentSx,
}: FlamesCardShellProps) {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", width: "100%" }}>
      <FeatureCard
        variant="glow"
        maxWidth={flamesTokens.layout.cardMaxWidth}
        contentPaddingX={{ xs: 3, sm: 4 }}
        contentPaddingY={{ xs: 3.5, sm: 4 }}
        contentSx={{
          position: "relative",
          overflow: "hidden",
          minHeight: flamesTokens.layout.cardMinHeight,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          ...contentSx,
        }}
      >
        {backgroundSlot}
        {children}
      </FeatureCard>
    </Box>
  );
}