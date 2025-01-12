// styles/navbarStyles.ts
type Theme = "dark" | "light";

export const getMenuStyles = (theme: Theme) => ({
  backgroundColor: theme === "dark" ? "#1e1e1e" : "#fff",
  color: theme === "dark" ? "#fff" : "#000",
  border: `1px solid ${theme === "dark" ? "#333" : "#ddd"}`,
  width: 200,
  mt: 1,
});

export const getSharedStyles = (theme: Theme) => ({
  backgroundImage:
    theme === "dark"
      ? "linear-gradient(109.6deg, rgb(63, 76, 119), rgb(16, 37, 60) 51.2%, rgb(0, 0, 0) 98.6%)"
      : "linear-gradient(to top, #dfe9f3 0%, white 100%)",
  color: theme === "dark" ? "#fff" : "#000",
});

export const getAvatarStyles = (theme: Theme) => ({
  width: 40,
  height: 40,
  backgroundColor: theme === "dark" ? "#4f46e5" : "#1e40af",
  color: theme === "dark" ? "#fff" : "#fff",
  border: `2px solid ${theme === "dark" ? "#fff" : "#000"}`,
  boxShadow:
    theme === "dark"
      ? "0 4px 6px rgba(255, 255, 255, 0.1)"
      : "0 4px 6px rgba(0, 0, 0, 0.1)",
  transition: "all 0.3s ease",
  "&:hover": {
    transform: "scale(1.1)",
  },
});

export const loginButtonStyles = {
  display: { xs: "flex", md: "inline-flex" },
  justifyContent: { xs: "center", md: "initial" },
  alignItems: "center",
  gap: 1,
  backgroundColor: "#1976d2",
  color: "#ffffff",
  px: { xs: 2, md: 3 },
  py: 1.5,
  borderRadius: "8px",
  textTransform: "none",
  fontSize: "1rem",
  fontWeight: "bold",
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  transition: "background-color 0.3s ease",
  width: { xs: "100%", md: "auto" },
  "&:hover": {
    backgroundColor: "#125aa6",
  },
  "&:focus": {
    outline: "2px solid #1976d2",
    outlineOffset: "2px",
  },
};