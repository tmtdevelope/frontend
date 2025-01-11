"use client";

import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from "@mui/material";
import { useTheme } from "next-themes"; // استيراد useTheme من next-themes

interface CustomPopupProps {
  open: boolean;
  onClose: () => void;
  title: string;
  message: string;
  onConfirm?: () => void;
  confirmText?: string;
  cancelText?: string;
}

export function CustomPopup({
  open,
  onClose,
  title,
  message,
  onConfirm,
  confirmText = "Confirm",
  cancelText = "Cancel",
}: CustomPopupProps) {
  const { theme } = useTheme(); // استخدام useTheme من next-themes

  // ألوان النافذة المنبثقة بناءً على الثيم
  const dialogStyle = {
    backgroundColor: theme === "dark" ? "#121212" : "#ffffff", // خلفية داكنة أو فاتحة
    color: theme === "dark" ? "#ffffff" : "#000000", // نص أبيض أو أسود
  };

  // ألوان الأزرار بناءً على الثيم
  const buttonStyle = {
    color: theme === "dark" ? "#ffffff" : "#000000", // نص أبيض أو أسود
    "&:hover": {
      backgroundColor: theme === "dark" ? "#1e1e1e" : "#f5f5f5", // خلفية داكنة أو فاتحة عند التمرير
    },
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      PaperProps={{
        style: dialogStyle, // تطبيق الألوان على النافذة
      }}
    >
      <DialogTitle id="alert-dialog-title" sx={{ fontWeight: "bold" }}>
        {title}
      </DialogTitle>
      <DialogContent>
        <DialogContentText
          id="alert-dialog-description"
          sx={{ color: theme === "dark" ? "#aaaaaa" : "#666666" }} // نص ثانوي داكن أو فاتح
        >
          {message}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={onClose}
          sx={buttonStyle} // تطبيق الألوان على الزر
        >
          {cancelText}
        </Button>
        {onConfirm && ( // عرض زر التأكيد فقط إذا تم تمرير دالة onConfirm
          <Button
            onClick={() => {
              onConfirm();
              onClose();
            }}
            sx={{
              ...buttonStyle,
              color: "#f44336", // لون أحمر لزر التأكيد
            }}
            autoFocus
          >
            {confirmText}
          </Button>
        )}
      </DialogActions>
    </Dialog>
  );
}
