import { Fab, Tooltip } from "@mui/material";
import HelpOutlineRoundedIcon from "@mui/icons-material/HelpOutlineRounded";

import { flamesTokens } from "../constants/flames.tokens";

type FlamesHelpButtonProps = {
  label: string;
  onClick: () => void;
};

export function FlamesHelpButton({
  label,
  onClick,
}: FlamesHelpButtonProps) {
  return (
    <Tooltip title={label}>
      <Fab
        aria-label={label}
        color="primary"
        onClick={onClick}
        sx={{
          position: "fixed",
          right: flamesTokens.layout.helpButtonOffset,
          bottom: flamesTokens.layout.helpButtonOffset,
        }}
      >
        <HelpOutlineRoundedIcon />
      </Fab>
    </Tooltip>
  );
}