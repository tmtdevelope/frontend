"use client";
import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import { useTheme } from "next-themes";
import { outlinedInputStyles } from "../../styles/styles";

interface StatusUpdateFormProps {
  open: boolean;
  onClose: () => void;
  onSubmit: (input: string) => void;
}

export const StatusUpdateForm: React.FC<StatusUpdateFormProps> = React.memo(
  ({ open, onClose, onSubmit }) => {
    const [input, setInput] = useState("");
    const { theme } = useTheme();
    const isDarkMode = theme === "dark";

    const handleSubmit = () => {
      onSubmit(input);
      setInput("");
      onClose();
    };

    const backgroundColor = isDarkMode ? "#1e1e1e" : "#ffffff";
    const textColor = isDarkMode ? "#ffffff" : "#000000";

    return (
      <Dialog
        open={open}
        onClose={onClose}
        PaperProps={{
          sx: {
            borderRadius: "12px",
            boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.25)",
            background: backgroundColor,
            color: textColor,
          },
        }}
      >
        <DialogTitle sx={{ fontWeight: "bold", fontSize: "1.25rem" }}>
          Enter Cancellation Reason
        </DialogTitle>
        <DialogContent>
          <Box sx={{ mt: 2 }}>
            <TextField
              fullWidth
              multiline
              rows={4}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Enter the reason for cancellation..."
              sx={{
                ...outlinedInputStyles(isDarkMode),
                "& .MuiInputBase-input": {
                  color: textColor,
                },
              }}
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={onClose}
            sx={{
              color: textColor,
              "&:hover": {
                backgroundColor: isDarkMode ? "#333" : "#f5f5f5",
              },
            }}
          >
            Cancel
          </Button>
          <Button
            onClick={handleSubmit}
            variant="contained"
            sx={{
              backgroundColor: isDarkMode ? "#90caf9" : "#1976d2",
              color: "#ffffff",
              "&:hover": {
                backgroundColor: isDarkMode ? "#64b5f6" : "#1565c0",
              },
            }}
          >
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    );
  },
);
