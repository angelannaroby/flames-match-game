import { useState } from "react";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { motion } from "motion/react";
import type { FormEvent } from "react";

import { flamesContent } from "../../shared/content/locale";
import { normalizePlayerName } from "../lib/normalizePlayerName";
import { validatePlayerName } from "../lib/validatePlayerName";
import { flamesEntryCardStyles } from "../styles/flamesEntryCard.styles";
import type { FlamesFormValues } from "../types/flames.types";
import { FlamesCardShell } from "./FlamesCardShell";

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

const validationMessages = {
  requiredMessage: flamesContent.validation.requiredName,
  lettersOnlyMessage: flamesContent.validation.lettersOnly,
  minimumLengthMessage: flamesContent.validation.minimumLength,
};

export function FlamesEntryCard({ onSubmit }: FlamesEntryCardProps) {
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);

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

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
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
    <FlamesCardShell>
      <Stack
        component="form"
        spacing={{ xs: 2.5, sm: 3 }}
        onSubmit={handleSubmit}
        noValidate
        sx={{
          ...flamesEntryCardStyles.form,
          width: "100%",
          position: "relative",
          zIndex: 1,
        }}
      >
        <Stack
          spacing={1.5}
          textAlign="center"
          sx={flamesEntryCardStyles.header}
        >
          <Typography variant="h3" sx={flamesEntryCardStyles.title}>
            {flamesContent.form.cardTitle}
          </Typography>

          <MotionBox
            animate={{
              y: [0, -8, 0],
              rotate: [0, -6, 6, 0],
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 1.8,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
            sx={flamesEntryCardStyles.emoji}
          >
            {flamesContent.form.cardEmoji}
          </MotionBox>
        </Stack>

        <Stack spacing={2.5} sx={flamesEntryCardStyles.fieldsStack}>
          <TextField
            label={flamesContent.form.firstNameLabel}
            value={formValues.firstPlayerName}
            onChange={(event) =>
              updateFieldValue("firstPlayerName", event.target.value)
            }
            error={Boolean(formErrors.firstPlayerName)}
            helperText={formErrors.firstPlayerName || " "}
            fullWidth
            variant="outlined"
            InputLabelProps={{ shrink: true }}
            sx={flamesEntryCardStyles.textField}
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
            variant="outlined"
            InputLabelProps={{ shrink: true }}
            sx={flamesEntryCardStyles.textField}
          />
        </Stack>

        <Box sx={flamesEntryCardStyles.buttonContainer}>
          <Button
            type="submit"
            variant="contained"
            size="large"
            disabled={isSubmitDisabled}
            sx={flamesEntryCardStyles.submitButton}
          >
            {flamesContent.form.submitButtonLabel}
          </Button>
        </Box>
      </Stack>

      <Box aria-hidden sx={flamesEntryCardStyles.decorativeHeart}>
        ❤️
      </Box>
    </FlamesCardShell>
  );
}
