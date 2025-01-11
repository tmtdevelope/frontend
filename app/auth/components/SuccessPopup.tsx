import { Box, Typography, Button, Modal, Paper } from "@mui/material";
import Link from "next/link";

interface SuccessPopupProps {
  open: boolean;
  onClose: () => void;
}

export default function SuccessPopup({ open, onClose }: SuccessPopupProps) {
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="success-popup"
      aria-describedby="success-popup-description"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Paper
        sx={{
          padding: 4,
          borderRadius: "10px",
          maxWidth: "500px",
          textAlign: "center",
          backgroundColor: "#fff",
        }}
      >
        <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
          Thank you for signing up with Trust Medical Transportation!
        </Typography>

        <Typography variant="body1" sx={{ mb: 3 }}>
          Your account request is now under review. We will send you an email
          once your account is activated. Please allow up to 24 hours for this
          process.
        </Typography>

        <Typography variant="body1" sx={{ mb: 3 }}>
          Thank you for choosing us for your transportation needs. We look
          forward to assisting you soon!
        </Typography>

        <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
          <Button
            variant="contained"
            onClick={onClose}
            sx={{
              background: "linear-gradient(45deg, #1E40AF 30%, #2563eb 90%)",
              color: "#fff",
              "&:hover": {
                background: "linear-gradient(45deg, #2563eb 30%, #1E40AF 90%)",
              },
            }}
          >
            Close
          </Button>

          <Link href="/" passHref>
            <Button
              variant="contained"
              sx={{
                background: "linear-gradient(45deg, #1E40AF 30%, #2563eb 90%)",
                color: "#fff",
                "&:hover": {
                  background:
                    "linear-gradient(45deg, #2563eb 30%, #1E40AF 90%)",
                },
              }}
            >
              Go to Homepage
            </Button>
          </Link>
        </Box>
      </Paper>
    </Modal>
  );
}
