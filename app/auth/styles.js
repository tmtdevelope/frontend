export const baseSelectStyles = (isDarkTheme) => ({
  color: isDarkTheme ? "#fff" : "#000",
  "& .MuiSelect-icon": {
    color: isDarkTheme ? "rgba(255, 255, 255, 0.7)" : undefined,
  },
});

export const baseMenuItemStyles = (isDarkTheme) => ({
  color: isDarkTheme ? "#fff" : "#000",
  "&:hover": {
    backgroundColor: isDarkTheme ? "rgba(255, 255, 255, 0.08)" : undefined,
  },
  "&.Mui-selected": {
    backgroundColor: isDarkTheme ? "rgba(144, 202, 249, 0.16)" : undefined,
  },
});

export const radioStyles = (isDarkTheme) => ({
  "& .MuiFormControlLabel-label": {
    color: isDarkTheme ? "#fff" : "#000",
  },
  "& .MuiRadio-root": {
    color: isDarkTheme ? "rgba(255, 255, 255, 0.7)" : undefined,
    "&.Mui-checked": {
      color: isDarkTheme ? "#90caf9" : "#1976d2",
    },
  },
});

export const inputLabelStyles = (isDarkTheme) => ({
  "& .MuiInputLabel-root": {
    color: isDarkTheme ? "rgba(255, 255, 255, 0.7)" : undefined,
    "&.Mui-focused": {
      color: isDarkTheme ? "#90caf9" : "#1976d2",
    },
  },
});

export const outlinedInputStyles = (isDarkTheme) => ({
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: isDarkTheme ? "rgba(255, 255, 255, 0.23)" : undefined,
    },
    "&:hover fieldset": {
      borderColor: isDarkTheme ? "rgba(255, 255, 255, 0.4)" : undefined,
    },
    "&.Mui-focused fieldset": {
      borderColor: isDarkTheme ? "#90caf9" : "#1976d2",
    },
  },
});
