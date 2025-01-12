import React from "react";
import { Box } from "@mui/material";
import dynamic from "next/dynamic";

 const Hero = dynamic(() => import("../components/Hero/Hero"));
const Services = dynamic(() => import("../components/Services/Services"));
const EventPlanning = dynamic(() => import("../components/EventPlanning/EventPlanning"));
const ServicesTwo = dynamic(() => import("../components/Services_2/ServicesTwo"));
const ServicesSection = dynamic(() => import("../components/Locations/ServicesSection"));
const LocationsList = dynamic(() => import("../components/Locations/LocationsList"));

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