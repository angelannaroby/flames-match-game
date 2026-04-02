import {
  Box,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

type FlamesHelpDialogProps = {
  open: boolean;
  title: string;
  steps: readonly string[];
  closeButtonLabel: string;
  onClose: () => void;
};

export function FlamesHelpDialog({
  open,
  title,
  steps,
  closeButtonLabel,
  onClose,
}: FlamesHelpDialogProps) {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      maxWidth="sm"
      aria-labelledby="flames-help-dialog-title"
    >
      <DialogTitle id="flames-help-dialog-title" sx={{ pr: 7 }}>
        {title}
        <IconButton
          aria-label={closeButtonLabel}
          onClick={onClose}
          sx={{ position: "absolute", right: 16, top: 16 }}
        >
          <CloseRoundedIcon />
        </IconButton>
      </DialogTitle>

      <DialogContent>
        <Stack spacing={2}>
          {steps.map((step, index) => (
            <Box key={step} sx={{ display: "flex", gap: 1.5 }}>
              <Typography
                variant="body1"
                sx={{
                  minWidth: 24,
                  fontWeight: 700,
                  color: "primary.main",
                }}
              >
                {index + 1}.
              </Typography>

              <Typography variant="body1" color="text.secondary">
                {step}
              </Typography>
            </Box>
          ))}
        </Stack>
      </DialogContent>
    </Dialog>
  );
}