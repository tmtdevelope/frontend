  
import Hero from "../components/Hero/Hero";
import React from "react";
import Services from "../components/Services/Services";
import { EventPlanning } from "../components/EventPlanning/EventPlanning";
import ServicesTwo from "../components/Services_2/ServicesTwo";
import ServicesSection from "../components/Locations/ServicesSection";
import LocationsList from "../components/Locations/LocationsList";
import { Box } from "@mui/material";

function Home() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      <Hero />
      <Services />
      <ServicesTwo />
      <EventPlanning />
      <LocationsList />
      <ServicesSection />
    </Box>
  );
}

export default Home;
