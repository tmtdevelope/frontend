/** @format */

import React from "react";
import { Box, Typography } from "@mui/material";
import { services } from "../components/Services/Data"; 
import TitleSections from "../utils/TitleSections";

const AllServicesPage = () => {
  return (
    <Box sx={{ p: 4 }}>
      <TitleSections text="All Services" />
      {services.map((service, index) => (
        <Box key={index} sx={{ mb: 3 }}>
          <Typography variant="h5">{service.title}</Typography>
          <Typography variant="body1">{service.description}</Typography>
        </Box>
      ))}
    </Box>
  );
};

export default AllServicesPage;  