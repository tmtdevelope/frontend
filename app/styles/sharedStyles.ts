export const getInputStyles = (theme: string) => ({
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: theme === "dark" ? "rgba(255, 255, 255, 0.23)" : "rgba(0, 0, 0, 0.23)",
      },
      "&:hover fieldset": {
        borderColor: theme === "dark" ? "#90caf9" : "#1976d2",
      },
      backgroundColor: theme === "dark" ? "rgba(255, 255, 255, 0.05)" : "transparent",
    },
  });
  
  export const inputProps = (theme: string) => ({
    style: {
      color: theme === "dark" ? "#ffffff" : "#000000",
      fontSize: "1rem",
    },
  });
  
  export const labelProps = (theme: string) => ({
    style: {
      color: theme === "dark" ? "#b3b3b3" : "#666666",
    },
  });
  
  export const containerStyles = (theme: string) => ({
    width: { xs: "90%", sm: "60%", md: "50%", lg: "40%" },
    paddingY: "20px",
    marginTop: "120px",
    textAlign: "center",
    backgroundColor: theme === "dark" ? "rgba(255, 255, 255, 0.1)" : "#ffffff",
    borderRadius: "16px",
    boxShadow:
      theme === "dark"
        ? "0px 4px 20px rgba(0, 0, 0, 0.5)"
        : "0px 4px 20px rgba(0, 0, 0, 0.1)",
  });
  