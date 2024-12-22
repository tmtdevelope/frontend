"use client";

import { Box, Typography, IconButton, CircularProgress } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useFormTheme } from "../utils/theme";
import Image from "next/image";

interface FilePreviewProps {
  file: string;
  onDelete: () => void;
  isLoading?: boolean;
}

export function FilePreview({
  file,
  onDelete,
  isLoading = false,
}: FilePreviewProps) {
  const { isDarkTheme } = useFormTheme();
  const isImage = /\.jpg$|\.png$|\.gif$/.test(file);

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "calc(25% - 16px)",
        margin: "8px",
        p: 1,
        borderRadius: 1,
        bgcolor: isDarkTheme ? "rgba(255, 255, 255, 0.05)" : "background.paper",
        border: 1,
        borderColor: isDarkTheme
          ? "rgba(255, 255, 255, 0.1)"
          : "rgba(0, 0, 0, 0.1)",
        position: "relative",
      }}
    >
      {isLoading ? (
        <CircularProgress size={24} />
      ) : isImage ? (
        <Box
          sx={{
            width: "100%",
            height: 100,
            position: "relative",
            borderRadius: 1,
            overflow: "hidden",
            bgcolor: "gray",
          }}
        >
          <Image src={file} alt="preview" fill style={{ objectFit: "cover" }} />
        </Box>
      ) : (
        <Box
          sx={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: 40,
            px: 2,
            py: 1,
            bgcolor: "gray",
            borderRadius: 1,
            color: "#fff",
          }}
        >
          <Typography variant="body2" noWrap>
            .{file.split(".").pop()}
          </Typography>
        </Box>
      )}
      <IconButton
        onClick={onDelete}
        size="small"
        sx={{
          color: isDarkTheme ? "#fff" : "error.main",
          position: "absolute",
          top: 8,
          right: 8,
          bgcolor: "gray",
        }}
      >
        <DeleteIcon fontSize="small" />
      </IconButton>
    </Box>
  );
}
