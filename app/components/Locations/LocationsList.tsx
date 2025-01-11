/** @format */

"use client";

import { Box, Chip, Typography, Container } from "@mui/material";
import { locations } from "./Data";

export default function LocationsList() {
  return (
    <Container>
      <Box sx={{ textAlign: "center" }}>
        <Typography variant="h5" sx={{ mb: 6, fontWeight: "bold" }}>
          We Pick You Up Anywhere
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: 2,
          }}
        >
          {locations.map((location) => (
            <Chip
              key={location}
              label={location}
              sx={{
                backgroundColor: "#3498db",
                color: "white",
                borderRadius: "10px",
              }}
            />
          ))}
        </Box>
      </Box>
    </Container>
  );
}
