import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import {
  Box,
  Dialog,
  DialogContent,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";

import { FeatureCard } from "../../shared/components";
import { appPalette } from "../../shared/theme/palette";
import { flamesContent } from "../../shared/content/locale";
import { flamesHelpDialogStyles } from "../styles/flamesHelpDialog.styles";

type FlamesHelpDialogProps = {
  open: boolean;
  title: string;
  closeButtonLabel: string;
  onClose: () => void;
};

export function FlamesHelpDialog({
  open,
  title,
  closeButtonLabel,
  onClose,
}: FlamesHelpDialogProps) {
  const descriptionId = "flames-help-dialog-description";

  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      maxWidth="sm"
      aria-labelledby="flames-help-dialog-title"
      aria-describedby={descriptionId}
      PaperProps={{
        sx: flamesHelpDialogStyles.dialogPaper,
      }}
    >
      <DialogContent sx={flamesHelpDialogStyles.dialogContent}>
        <FeatureCard
          variant="glow"
          maxWidth={640}
          contentPaddingX={{ xs: 2.75, sm: 3.5 }}
          contentPaddingY={{ xs: 2.75, sm: 3.25 }}
          contentSx={flamesHelpDialogStyles.cardContent}
        >
          <Box aria-hidden="true" sx={flamesHelpDialogStyles.ambientGlow} />

          <IconButton
            aria-label={closeButtonLabel}
            onClick={onClose}
            sx={flamesHelpDialogStyles.closeButton}
          >
            <CloseRoundedIcon />
          </IconButton>

          <Stack spacing={2.5} sx={flamesHelpDialogStyles.stack}>
            <Stack spacing={1}>
              <Typography
                id="flames-help-dialog-title"
                variant="h4"
                sx={flamesHelpDialogStyles.title}
              >
                {title}
              </Typography>

              <Typography
                id={descriptionId}
                variant="body1"
                color="text.secondary"
                sx={flamesHelpDialogStyles.introText}
              >
                {flamesContent.help.intro}
              </Typography>
            </Stack>

            <Box sx={flamesHelpDialogStyles.sectionCard}>
              <Stack spacing={2}>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 700,
                    textAlign: "center",
                  }}
                >
                  {flamesContent.help.sections.stepsTitle}
                </Typography>

                <Stack spacing={1.5}>
                  {flamesContent.help.steps.map((step, index) => (
                    <Box
                      key={step}
                      sx={{
                        display: "grid",
                        gridTemplateColumns: "32px 1fr",
                        gap: 1.5,
                        alignItems: "start",
                      }}
                    >
                      <Box
                        sx={{
                          width: 28,
                          height: 28,
                          borderRadius: "50%",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          backgroundColor: "rgba(167, 139, 250, 0.12)",
                          border: `1px solid ${appPalette.border.subtle}`,
                        }}
                      >
                        <Typography
                          variant="body2"
                          sx={{
                            fontWeight: 800,
                            color: appPalette.brand.secondary,
                            lineHeight: 1,
                          }}
                        >
                          {index + 1}
                        </Typography>
                      </Box>

                      <Typography
                        variant="body1"
                        color="text.secondary"
                        sx={{
                          lineHeight: 1.75,
                          pt: 0.1,
                        }}
                      >
                        {step}
                      </Typography>
                    </Box>
                  ))}
                </Stack>
              </Stack>
            </Box>

            <Box sx={flamesHelpDialogStyles.sectionCard}>
              <Stack spacing={1.75}>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 700,
                    textAlign: "center",
                  }}
                >
                  {flamesContent.help.sections.rulesTitle}
                </Typography>

                <Stack spacing={1.25}>
                  {flamesContent.help.rules.map((rule) => (
                    <Box
                      key={rule}
                      sx={{
                        display: "grid",
                        gridTemplateColumns: "18px 1fr",
                        gap: 1.25,
                        alignItems: "start",
                      }}
                    >
                      <Typography
                        aria-hidden="true"
                        sx={{
                          color: appPalette.brand.secondary,
                          fontWeight: 800,
                          lineHeight: 1.6,
                        }}
                      >
                        •
                      </Typography>

                      <Typography
                        variant="body1"
                        color="text.secondary"
                        sx={{
                          lineHeight: 1.75,
                        }}
                      >
                        {rule}
                      </Typography>
                    </Box>
                  ))}
                </Stack>
              </Stack>
            </Box>
          </Stack>
        </FeatureCard>
      </DialogContent>
    </Dialog>
  );
}