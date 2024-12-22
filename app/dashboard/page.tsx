"use client";

import { Box, Container, Grid, Typography } from "@mui/material";

 import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'; 
import { services } from "./components/Services";
import { ServiceCard } from "./components/ServiceCard";
 export default function DashboardPage() {

   
  return (

          
    <Container maxWidth="lg" sx={{ mt: 20, mb: 4 }}>
    <Box>
      <Typography variant="h4" gutterBottom>
        Trust Medical Transportation
      </Typography>
      <Typography variant="subtitle1" gutterBottom color="text.secondary">
        Non-Emergency Medical Transportation Services
      </Typography>

      <Grid container spacing={3} sx={{ mt: 2 }}>
        {services.map((service) => (
          <Grid item xs={12} sm={6} md={3} key={service.title}>
            <ServiceCard service={service} />
          </Grid>
        ))}
      </Grid>
    </Box>
    </Container>

  );
}