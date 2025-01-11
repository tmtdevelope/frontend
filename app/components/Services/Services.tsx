/** @format */

"use client";
import { Box, Container, Button } from "@mui/material";
import ServiceCard from "../../components/Services/ServiceCard";
import { services } from "../../components/Services/Data";
import TitleSections from "@/app/utils/TitleSections";
import Link from "next/link";

const Services = () => {
  return (
    <Container>
      <TitleSections text="Our Services" />
      <Box
        display="flex"
        flexWrap="wrap"
        justifyContent="center"
        sx={{
          gap: 4,
          marginBottom: 4,
        }}
      >
        {services.slice(0, 4).map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            description={service.description}
            Icon={service.Icon}
          />
        ))}
      </Box>
      <Box display="flex" justifyContent="center" sx={{ marginTop: 4 }}>
        <Link href="/services" passHref>
          <Button
            variant="contained"
            color="primary"
            sx={{
              padding: "10px 20px",
              fontSize: "16px",
              fontWeight: "bold",
              textTransform: "none",
            }}
          >
            View All Services
          </Button>
        </Link>
      </Box>
    </Container>
  );
};

export default Services;
