/** @format */

"use client";
import React from "react";
import { Container, Grid } from "@mui/material";
import { ServiceCard } from "./ServiceCard";
import TitleSections from "@/app/utils/TitleSections";
import { services } from "./Data";

export const ServicesTwo: React.FC = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <TitleSections text="What makes us different?" />

      <Grid
        container
        spacing={4}
        sx={{
          mt: 4,
        }}
      >
        {services.map((service, index) => (
          <Grid item xs={12} md={4} key={index}>
            <ServiceCard
              Icon={service.Icon}
              title={service.title}
              description={service.description}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ServicesTwo;
