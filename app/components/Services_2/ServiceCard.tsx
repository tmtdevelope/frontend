/** @format */

"use client";
import React from "react";
import { Paper, Typography, Box, IconButton } from "@mui/material";
import { useTheme } from "next-themes";
import { ServiceItem } from "./types";

export const ServiceCard: React.FC<ServiceItem> = ({
  Icon,
  title,
  description,
}) => {
  const { theme } = useTheme();

  return (
    <Paper
      elevation={3}
      sx={{
        backgroundColor: theme === "dark" ? "#2c3e50" : "#ffffff",
        color: theme === "dark" ? "#ffffff" : "#000000",
        padding: 3,
        borderRadius: 2,
        transition: "background-color 0.3s ease, transform 0.3s ease",
        "&:hover": {
          transform: "scale(1.05)",
        },
        width: "100%",
        maxWidth: "400px",
        margin: "0 auto",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          mb: 2,
          flexWrap: "wrap",
        }}
      >
        <IconButton>
          <Icon
            sx={{
              fontSize: 40,
              color: "#2980b9",
              marginRight: 2,
              marginBottom: 3,
            }}
          />
        </IconButton>

        <Typography
          variant="h5"
          component="h2"
          sx={{ fontWeight: "bold", flex: 1 }}
        >
          {title}
        </Typography>
      </Box>

      <Typography
        variant="body1"
        sx={{
          fontSize: "1rem",
          lineHeight: 1.6,
          color: theme === "dark" ? "#ecf0f1" : "#2c3e50",
        }}
      >
        {description}
      </Typography>
    </Paper>
  );
};
