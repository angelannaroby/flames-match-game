import type { SxProps, Theme } from "@mui/material/styles";

export const flamesEntryCardStyles = {
  form: {
    width: "100%",
    maxWidth: 460,
    mx: "auto",
  } satisfies SxProps<Theme>,

  header: {
    alignItems: "center",
  } satisfies SxProps<Theme>,

  title: {
    fontWeight: 800,
    fontSize: {
      xs: "1.55rem",
      sm: "1.9rem",
    },
    lineHeight: 1.08,
    letterSpacing: "-0.03em",
  } satisfies SxProps<Theme>,

  emoji: {
    fontSize: {
      xs: "2rem",
      sm: "2.3rem",
    },
    lineHeight: 1,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    userSelect: "none",
  } satisfies SxProps<Theme>,

  fieldsStack: {
    width: "100%",
  } satisfies SxProps<Theme>,

  textField: {
    "& .MuiOutlinedInput-root": {
      borderRadius: 999,
      backgroundColor: "rgba(255,255,255,0.03)",
    },
    "& .MuiInputLabel-root": {
      color: "text.secondary",
    },
    "& .MuiFormHelperText-root": {
      mx: 1.5,
    },
  } satisfies SxProps<Theme>,

  buttonContainer: {
    display: "flex",
    justifyContent: "center",
    pt: 0.5,
  } satisfies SxProps<Theme>,

  submitButton: {
    minWidth: 180,
    px: 3.25,
    py: 1.05,
    borderRadius: 999,
    color: "text.primary",
    background:
      "linear-gradient(135deg, rgba(124,58,237,0.95) 0%, rgba(167,139,250,0.95) 100%)",
    "&:hover": {
      background:
        "linear-gradient(135deg, rgba(120,84,255,0.9) 0%, rgba(255,96,176,0.9) 100%)",
      boxShadow:
        "0 8px 22px rgba(255, 72, 166, 0.2), 0 0 18px rgba(133, 92, 255, 0.2)",
    },
    "&.Mui-disabled": {
      color: "rgba(255,255,255,0.42)",
      background:
        "linear-gradient(135deg, rgba(88,82,118,0.42) 0%, rgba(104,88,112,0.42) 100%)",
    },
  } satisfies SxProps<Theme>,

  decorativeHeart: {
    position: "absolute",
    right: { xs: 12, sm: 16 },
    bottom: { xs: 12, sm: 14 },
    fontSize: { xs: "1.1rem", sm: "1.35rem" },
    opacity: 0.54,
    filter: "drop-shadow(0 0 8px rgba(255, 90, 160, 0.24))",
    userSelect: "none",
    pointerEvents: "none",
  } satisfies SxProps<Theme>,
} as const;