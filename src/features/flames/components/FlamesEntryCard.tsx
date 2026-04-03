import { useMemo, useState } from "react";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { motion } from "motion/react";

import { FeatureCard } from "../../../shared/components";
import { flamesContent } from "../../../shared/content/locale";
import { normalizePlayerName } from "../lib/normalizePlayerName";
import { validatePlayerName } from "../lib/validatePlayerName";
import type { FlamesFormValues } from "../types/flames.types";

type FlamesEntryCardProps = {
  onSubmit: (values: FlamesFormValues) => void;
};

type FlamesFormErrors = {
  firstPlayerName: string;
  secondPlayerName: string;
};

const MotionBox = motion.create(Box);

const initialFormValues: FlamesFormValues = {
  firstPlayerName: "",
  secondPlayerName: "",
};

const initialFormErrors: FlamesFormErrors = {
  firstPlayerName: "",
  secondPlayerName: "",
};

export function FlamesEntryCard({ onSubmit }: FlamesEntryCardProps) {
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);

  const validationMessages = useMemo(
    () => ({
      requiredMessage: flamesContent.validation.requiredName,
      lettersOnlyMessage: flamesContent.validation.lettersOnly,
      minimumLengthMessage: flamesContent.validation.minimumLength,
    }),
    [],
  );

  const getFieldCharacterCount = (value: string) =>
    normalizePlayerName(value).replace(/\s/g, "").length;

  const isSubmitDisabled =
    getFieldCharacterCount(formValues.firstPlayerName) < 3 ||
    getFieldCharacterCount(formValues.secondPlayerName) < 3;

  const updateFieldValue = (
    fieldName: keyof FlamesFormValues,
    fieldValue: string,
  ) => {
    setFormValues((previousValues) => ({
      ...previousValues,
      [fieldName]: fieldValue,
    }));

    setFormErrors((previousErrors) => ({
      ...previousErrors,
      [fieldName]: "",
    }));
  };

  const validateForm = () => {
    const nextErrors: FlamesFormErrors = {
      firstPlayerName: validatePlayerName(
        normalizePlayerName(formValues.firstPlayerName),
        validationMessages,
      ),
      secondPlayerName: validatePlayerName(
        normalizePlayerName(formValues.secondPlayerName),
        validationMessages,
      ),
    };

    setFormErrors(nextErrors);

    return !nextErrors.firstPlayerName && !nextErrors.secondPlayerName;
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!validateForm()) {
      return;
    }

    onSubmit({
      firstPlayerName: normalizePlayerName(formValues.firstPlayerName),
      secondPlayerName: normalizePlayerName(formValues.secondPlayerName),
    });
  };

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <FeatureCard>
        <Stack component="form" spacing={3} onSubmit={handleSubmit} noValidate>
          <Stack spacing={1.5} textAlign="center">
            <Typography variant="h4" fontWeight={700}>
              {flamesContent.form.cardTitle}
            </Typography>

            <MotionBox
              animate={{
                y: [0, -10, 0],
                rotate: [0, -8, 8, 0],
                scale: [1, 1.08, 1],
              }}
              transition={{
                duration: 1.8,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
              sx={{
                fontSize: "1.8rem",
                lineHeight: 1,
              }}
            >
              {flamesContent.form.cardEmoji}
            </MotionBox>
          </Stack>

          <TextField
            label={flamesContent.form.firstNameLabel}
            value={formValues.firstPlayerName}
            onChange={(event) =>
              updateFieldValue("firstPlayerName", event.target.value)
            }
            error={Boolean(formErrors.firstPlayerName)}
            helperText={formErrors.firstPlayerName || " "}
            fullWidth
          />

          <TextField
            label={flamesContent.form.secondNameLabel}
            value={formValues.secondPlayerName}
            onChange={(event) =>
              updateFieldValue("secondPlayerName", event.target.value)
            }
            error={Boolean(formErrors.secondPlayerName)}
            helperText={formErrors.secondPlayerName || " "}
            fullWidth
          />

          <Box sx={{ display: "flex", justifyContent: "center", pt: 1 }}>
            <Button
              type="submit"
              variant="contained"
              size="medium"
              disabled={isSubmitDisabled}
              sx={{
                minWidth: 180,
                px: 3,
                py: 1.2,
                borderRadius: 999,
              }}
            >
              {flamesContent.form.submitButtonLabel}
            </Button>
          </Box>
        </Stack>
      </FeatureCard>
    </Box>
  );
}