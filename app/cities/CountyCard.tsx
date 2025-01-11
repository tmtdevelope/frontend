/** @format */

"use client";

import React from "react";
import { motion } from "framer-motion";
import { CityGrid } from "./CityGrid";
import { County } from "./Data";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Icon,
  useTheme,
} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { useTheme as useNextTheme } from "next-themes";

interface CountyCardProps {
  county: County;
}

export function CountyCard({ county }: CountyCardProps) {
  const { theme } = useNextTheme();
  const cardBgColor = theme === "dark" ? "#2c3e50" : "#ecf0f1";
  const textColor = theme === "dark" ? "#ffffff" : "#2c3e50";

  return (
    <Card
      sx={{
        borderRadius: 3,
        boxShadow: 3,
        backgroundColor: cardBgColor,
        color: textColor,
        transition: "all 0.3s ease",
      }}
    >
      <CardContent>
        <Box display="flex" alignItems="center" mb={2}>
          <Icon
            sx={{
              mr: 1,
              display: "flex",
              color: "#1976d2",
            }}
          >
            <LocationOnIcon />
          </Icon>
          <Typography variant="h6" fontWeight="bold">
            {county.name}
          </Typography>
        </Box>
        <Typography variant="body2" sx={{ mb: 4 }}>
          {county.description}
        </Typography>
        <CityGrid cities={county.cities} />
      </CardContent>
    </Card>
  );
}
