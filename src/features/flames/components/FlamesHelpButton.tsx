import { Fab, Tooltip } from "@mui/material";
import HelpOutlineRoundedIcon from "@mui/icons-material/HelpOutlineRounded";

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
          right: 24,
          bottom: 24,
        }}
      >
        <HelpOutlineRoundedIcon />
      </Fab>
    </Tooltip>
  );
}