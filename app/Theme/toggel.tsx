"use client";

import { IconButton } from "@mui/material";
import { useTheme } from "next-themes";
import { DarkMode, LightMode } from "@mui/icons-material";

export default function ModeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  const handleThemeToggle = () => {
    setTheme(resolvedTheme === "light" ? "dark" : "light");
  };

  return (
    <IconButton onClick={handleThemeToggle} color="inherit">
      {resolvedTheme === "light" ? <LightMode /> : <DarkMode />}
    </IconButton>
  );
}
