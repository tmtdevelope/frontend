/** @format */

import React from "react";
import { ServiceCard } from "./ServiceCard";
import { services } from "./Data";
import { Box, Container, Typography, Grid } from "@mui/material";

export const EventPlanning: React.FC = () => {
  return (
    <Box component="section" sx={{ py: 4 }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center", mb: 4 }}>
          <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2 }}>
            Plan Your Next Event With Us
          </Typography>
          <Typography variant="body1" sx={{ maxWidth: "600px", mx: "auto" }}>
            Experience exceptional medical transportation services tailored to
            your needs. Whether it&apos;s personal transport, airport transfers,
            or city tours, we&apos;ve got you covered.
          </Typography>
        </Box>
        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid item xs={12} md={6} lg={4} key={index}>
              <ServiceCard {...service} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};
