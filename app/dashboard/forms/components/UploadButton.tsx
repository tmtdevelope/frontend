"use client";

import { Button } from "@mui/material";
import { useFormTheme } from "../utils/theme";
import { ALLOWED_FILE_TYPES } from "../constants/fileUpload";

interface UploadButtonProps {
  icon: React.ReactNode;
  label: string;
  onUpload: (event: React.ChangeEvent<HTMLInputElement>) => void;
  type: "documents" | "images";
}

export function UploadButton({
  icon,
  label,
  onUpload,
  type,
}: UploadButtonProps) {
  const { isDarkTheme } = useFormTheme();

  return (
    <Button
      variant="outlined"
      component="label"
      startIcon={icon}
      fullWidth
      sx={{
        height: 56,
        borderColor: isDarkTheme
          ? "rgba(255, 255, 255, 0.23)"
          : "rgba(0, 0, 0, 0.23)",
        color: isDarkTheme ? "#fff" : "inherit",
        "&:hover": {
          borderColor: isDarkTheme
            ? "rgba(255, 255, 255, 0.4)"
            : "rgba(0, 0, 0, 0.4)",
        },
      }}
    >
      {label}
      <input
        type="file"
        hidden
        multiple
        accept={ALLOWED_FILE_TYPES[type].join(",")}
        onChange={onUpload}
      />
    </Button>
  );
}
