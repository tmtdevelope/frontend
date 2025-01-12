/** @format */
import React from "react";
import { Box, Typography } from "@mui/material";

const TitleSections = ({ text }: { text: string }) => {
  const title = text;

  return (
    <Box
      sx={{
        position: "relative",
        textAlign: "center",
        width: "100%",
        mx: "auto",
        py: { xs: 4, md: 6 },
      }}
    >
      <Typography
        variant="h2"
        sx={{
          fontSize: { xs: "40px", sm: "50px", md: "70px" },
          fontWeight: "bold",
          letterSpacing: "0.1em",
          opacity: 0.1,
          color: "primary.main",
        }}
      >
        {title}
      </Typography>

      <Typography
        variant="h3"
        sx={{
          fontSize: { xs: "24px", sm: "30px", md: "40px" },
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          fontWeight: "700",
          letterSpacing: 1.5,
          color: "primary.dark",
          textTransform: "uppercase",
        }}
      >
        {title}
      </Typography>
    </Box>
  );
};

export default TitleSections;