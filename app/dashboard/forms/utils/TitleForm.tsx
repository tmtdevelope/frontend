import { Grid, Typography } from "@mui/material";
import React from "react";

const TitleForm = ({ title, primaryColor }: any) => {
  return (
    <>
      <Grid item xs={12}>
        <Typography
          variant="h3"
          align="center"
          sx={{
            fontWeight: 700,
            color: primaryColor,
            fontSize: { xs: "1.5rem", md: "2rem" },
          }}
        >
          Trust Medical Transportation
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography
          variant="subtitle1"
          align="center"
          sx={{
            color: "text.secondary",
            fontSize: { xs: "0.9rem", md: "1rem" },
          }}
        >
          Non-Emergency Medical Transportation
        </Typography>
      </Grid>
      <Grid
        item
        xs={12}
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: 700,
            color: primaryColor,
            fontSize: { xs: "1.5rem", md: "2rem" },
            textAlign: "center",
          }}
        >
          {title}
        </Typography>
      </Grid>
    </>
  );
};

export default TitleForm;
