"use client";

import {
  Box,
  Typography,
  Chip,
  Button,
  Divider,
  IconButton,
  Tooltip,
} from "@mui/material";
import { ContentCopy, Close as CloseIcon } from "@mui/icons-material";
import { useTheme } from "next-themes";
import { Request } from "../../../types/request";

interface RequestDetailsHeaderProps {
  request: Request;
  onCopyAll: () => void;
  onCopyCustomer: () => void;
  onClose: () => void;
}

export const RequestDetailsHeader = ({
  request,
  onCopyAll,
  onCopyCustomer,
  onClose,
}: RequestDetailsHeaderProps) => {
  const { theme } = useTheme();
  const isDarkTheme = theme === "dark";

  return (
    <Box
      width="100%"
      sx={{
        mb: 4,
        p: 2,
        bgcolor: isDarkTheme ? "#1f2937" : "background.paper",
        borderRadius: 2,
        boxShadow: 1,
        position: "relative",
      }}
    >
      {/* Close Button */}
      <Box sx={{ position: "absolute", right: 12, top: 12, zIndex: 1 }}>
        <Tooltip title="Close">
          <IconButton
            onClick={onClose}
            sx={{
              color: isDarkTheme ? "#ffffff" : "#000000",
              bgcolor: isDarkTheme
                ? "rgba(255, 255, 255, 0.1)"
                : "rgba(0, 0, 0, 0.1)",
              p: 1.5,
              borderRadius: "50%",
              boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
              transition: "all 0.3s ease",
              "&:hover": {
                bgcolor: isDarkTheme
                  ? "rgba(255, 255, 255, 0.15)"
                  : "rgba(0, 0, 0, 0.15)",
                boxShadow: "0px 6px 10px rgba(0, 0, 0, 0.2)",
              },
            }}
          >
            <CloseIcon fontSize="small" />
          </IconButton>
        </Tooltip>
      </Box>

      {/* Title */}
      <Typography
        variant="h5"
        sx={{
          mb: 2,
          fontWeight: "bold",
          color: isDarkTheme ? "#ffffff" : "#000000",
        }}
      >
        Request Details
      </Typography>

      <Divider sx={{ mb: 2, bgcolor: isDarkTheme ? "#374151" : "#e5e7eb" }} />

      {/* Content Row */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 2,
        }}
      >
        {/* Category Chip */}
        <Chip
          label={request.category.toUpperCase()}
          color="primary"
          sx={{
            fontWeight: "bold",
            fontSize: "0.9rem",
            py: 0.5,
            bgcolor: isDarkTheme ? "#3b82f6" : "#2563eb",
            color: "#ffffff",
          }}
        />

        {/* Buttons */}
        <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
          {/* Copy Customer Button */}
          <Tooltip title="Copy Customer Details">
            <Button
              startIcon={<ContentCopy />}
              onClick={onCopyCustomer}
              variant="outlined"
              sx={{
                textTransform: "none",
                fontWeight: "bold",
                color: isDarkTheme ? "#ffffff" : "#000000",
                borderColor: isDarkTheme ? "#4b5563" : "#d1d5db",
                "&:hover": {
                  bgcolor: isDarkTheme
                    ? "rgba(255, 255, 255, 0.1)"
                    : "rgba(0, 0, 0, 0.1)",
                  borderColor: isDarkTheme ? "#6b7280" : "#9ca3af",
                },
              }}
            >
              Copy Customer
            </Button>
          </Tooltip>

          {/* Copy All Button */}
          <Tooltip title="Copy All Details">
            <Button
              startIcon={<ContentCopy />}
              onClick={onCopyAll}
              variant="contained"
              color="primary"
              sx={{
                textTransform: "none",
                fontWeight: "bold",
                bgcolor: isDarkTheme ? "#3b82f6" : "#2563eb",
                "&:hover": {
                  bgcolor: isDarkTheme ? "#1d4ed8" : "#1e40af",
                },
              }}
            >
              Copy All Details
            </Button>
          </Tooltip>
        </Box>
      </Box>
    </Box>
  );
};
