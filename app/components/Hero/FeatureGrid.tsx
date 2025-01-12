import React from "react";
import { Grid, Box, Typography, IconButton } from "@mui/material";
import { features } from "./Data";

const FeatureGrid = React.memo(() => {
  return (
    <Grid
      container
      spacing={4}
      sx={{
        flexWrap: "wrap",
        justifyContent: { xs: "center", md: "space-between" },
      }}
    >
      {features.map((feature, index) => (
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
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
              backgroundColor: "rgba(41, 128, 185, 0.1)",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              transition: "transform 0.3s ease",
              "&:hover": {
                transform: "scale(1.05)",
              },
              textAlign: { xs: "center", md: "left" },
              width: "100%",
            }}
          >
            <IconButton
              sx={{
                color: "#2980b9",
              }}
              aria-label={feature.title}
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
});

export default FeatureGrid;