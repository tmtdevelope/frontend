import React from "react";
import { Grid, Box, Typography, IconButton } from "@mui/material";
import { features } from "./Data";

const FeatureGrid = () => {
  return (
    <Grid
      container
      spacing={4}
      sx={{
        flexWrap: "wrap", // Ensures wrapping of items
        justifyContent: { xs: "center", md: "space-between" }, // Center items on small screens
      }}
    >
      {features.map((feature, index) => (
        <Grid
          item
          xs={12} // Full width on small screens
          sm={6} // Half width on medium screens
          md={4} // One-third width on larger screens
          key={index}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
              padding: 2,
              borderRadius: 2,
              backdropFilter: "blur(6px)",
              backgroundColor: "rgba(41, 128, 185, 0.1)", // Light background color
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // Subtle shadow for depth
              transition: "transform 0.3s ease",
              "&:hover": {
                transform: "scale(1.05)", // Slight zoom effect on hover
              },
              textAlign: { xs: "center", md: "left" }, // Center text on small screens
              width: "100%", // Ensure the box fits its container
            }}
          >
            <IconButton
              sx={{
                color: "#2980b9",
              }}
            >
              {feature.icon}
            </IconButton>
            <div>
              <Typography variant="h6" fontWeight="bold">
                {feature.title}
              </Typography>
              <Typography variant="body2">{feature.description}</Typography>
            </div>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
};

export default FeatureGrid;
