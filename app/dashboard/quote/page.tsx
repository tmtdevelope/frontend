"use client";

import { Box, Container, Grid  } from "@mui/material";
import { useTheme } from "next-themes";

import { services } from "../components/Services";
import { ServiceCard } from "../components/ServiceCard";
import TitleForm from "../forms/utils/TitleForm";

export default function DashboardPage() {
  const { theme } = useTheme();
  const isDarkTheme = theme === "dark";
  const primaryColor = isDarkTheme ? "#2563eb" : "#1E40AF";
  return (
    <Container
      maxWidth="lg"
      sx={{
        mt: 20,
        mb: 4,

        p: 3,
      }}
    >
      <Box>
        <Grid container spacing={2} sx={{ mb: 4 }}>
          <TitleForm title="" primaryColor={primaryColor} />
        </Grid>

        <Grid container spacing={3} sx={{ mt: 2 }}>
          {services.map((service) => (
            <Grid item xs={12} sm={6} md={3} key={service.title}>
              <ServiceCard service={service} isDarkTheme={isDarkTheme} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}
