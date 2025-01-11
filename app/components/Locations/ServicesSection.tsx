/** @format */

"use client";

import { Container, Grid, Box } from "@mui/material";
import ServiceCard from "./ServiceCard";
import { Shield, AttachMoney, AccessTime } from "@mui/icons-material";

export default function ServicesSection() {
  return (
    <Box component="section" sx={{ py: 4 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4} sx={{ mt: 4 }}>
          <Grid item xs={12} md={4}>
            <ServiceCard
              icon={
                <Shield
                  sx={{
                    width: 48,
                    height: 48,
                    color: "#3498db",
                  }}
                />
              }
              title="CPR-Certified Drivers with Background Checks"
              description="All our drivers are CPR-certified and undergo thorough background checks to ensure you receive the highest level of care and professionalism during every ride."
            />
          </Grid>

          <Grid item xs={12} md={4}>
            <ServiceCard
              icon={
                <AttachMoney
                  sx={{
                    width: 48,
                    height: 48,
                    color: "#3498db",
                  }}
                />
              }
              title="Flat Rate Fees"
              description="We offer Flat Rate Fees for our services, providing transparency and affordability for all your transportation needs, with no hidden costs or surprises."
            />
          </Grid>

          <Grid item xs={12} md={4}>
            <ServiceCard
              icon={
                <AccessTime
                  sx={{
                    width: 48,
                    height: 48,
                    color: "#3498db",
                  }}
                />
              }
              title="Reliable Medical Transportation Services"
              description="We pride ourselves on providing reliable and dependable transportation services, ensuring you reach your destination safely and on time, every time."
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
