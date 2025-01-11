import { useTheme } from "next-themes";

export const useFormTheme = () => {
  const { theme } = useTheme();
  const isDarkTheme = theme === "dark";

  const getInputStyles = () => ({
    "& .MuiOutlinedInput-root": {
      borderRadius: "8px",
      "& fieldset": {
        borderColor: isDarkTheme
          ? "rgba(255, 255, 255, 0.23)"
          : "rgba(0, 0, 0, 0.23)",
      },
      "&:hover fieldset": {
        borderColor: isDarkTheme ? "#90caf9" : "#1976d2",
      },
      backgroundColor: isDarkTheme
        ? "rgba(255, 255, 255, 0.05)"
        : "transparent",
    },
  });

  const inputProps = {
    style: {
      color: isDarkTheme ? "#ffffff" : "#000000",
      fontSize: "1rem",
    },
  };

  const labelProps = {
    style: {
      color: isDarkTheme ? "#b3b3b3" : "#666666",
    },
  };

  return {
    isDarkTheme,
    getInputStyles,
    inputProps,
    labelProps,
  };
};
