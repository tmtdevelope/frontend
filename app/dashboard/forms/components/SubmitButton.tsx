"use client";

import { Grid, Button } from "@mui/material";
import { useTheme } from "next-themes";

interface SubmitButtonProps {
  formState: {
    isValid: boolean;
    isSubmitting: boolean;
  };
}

export function SubmitButton() {
  const { theme } = useTheme();
  const isDarkTheme = theme === "dark";

  return (
    <Grid item xs={12}>
      <Button
        type="submit"
        variant="contained"
        size="large"
        fullWidth
        className={`submit-button ${
          isDarkTheme ? "submit-button-dark" : "submit-button-light"
        }`}
        sx={{
          mt: 2,
          height: 56,
          fontSize: "1.1rem",
        }}
      >
        Submit Request
      </Button>
    </Grid>
  );
}
