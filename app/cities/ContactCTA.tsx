/** @format */

"use client";

import { Box, Typography, Button } from "@mui/material";

export function ContactCTA() {
  return (
    <Box textAlign="center" mt={4} sx={{ p: 3 }}>
      <Typography
        variant="body1"
        sx={{
          mb: 2,
        }}
      >
        Need medical transportation in any of these areas?
      </Typography>
      <Button
        variant="contained"
        sx={{
          bgcolor: "primary.main",
          color: "primary.contrastText",
          "&:hover": {
            bgcolor: "primary.dark",
          },
        }}
      >
        Contact Us Today
      </Button>
    </Box>
  );
}
