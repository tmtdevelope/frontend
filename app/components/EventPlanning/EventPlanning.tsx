/** @format */

import React from "react";
import { ServiceCard } from "./ServiceCard";
import { services } from "./Data";
import { Box, Container, Typography, Grid } from "@mui/material";
import TitleSections from "@/app/utils/TitleSections";

const EventPlanning: React.FC = () => {
  return (
    <Box component="section" sx={{ py: 8 }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center", mb: 6 }}>
          <TitleSections text="Event Planning Services" />
          <Typography
            variant="body1"
            sx={{
              maxWidth: "600px",
              mx: "auto",
              fontSize: { xs: "0.9rem", sm: "1rem" },
             }}
          >
            Experience exceptional medical transportation services tailored to
            your needs. Whether it&apos;s personal transport, airport transfers,
            or city tours, we&apos;ve got you covered.
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <ServiceCard {...service} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default EventPlanning;