/** @format */

"use client";

import React from "react";
import { Box, Typography } from "@mui/material";
interface CityGridProps {
  cities: string[];
}

export function CityGrid({ cities }: CityGridProps) {
  return (
    <Box
      display="grid"
      gridTemplateColumns={{
        xs: "repeat(2, 1fr)",
        sm: "repeat(3, 1fr)",
        md: "repeat(4, 1fr)",
      }}
      gap={2}
    >
      {cities.map((city) => (
        <div
          key={city}
          style={{
            borderRadius: "8px",
            padding: "16px",
            textAlign: "center",
          }}
        >
          <Typography
            variant="body2"
            sx={{
              borderRadius: "8px",
              p: 1,
              boxShadow: 1,
              backgroundColor: "#3498db",
            }}
          >
            {city}
          </Typography>
        </div>
      ))}
    </Box>
  );
}
