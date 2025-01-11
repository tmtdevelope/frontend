"use client";

import { Box, Container, Grid, CircularProgress } from "@mui/material";
import { useTheme } from "next-themes";
import { services } from "../components/Services";
import { ServiceCard } from "../components/ServiceCard";
import TitleForm from "../forms/utils/TitleForm";
import { useSelector } from "react-redux";
import { RootState } from "@/app/redux/store/store";
import { useEffect, useState } from "react";

export default function DashboardPage() {
  const { theme } = useTheme();
  const { user, loading } = useSelector(
    (state: RootState) => state.userDetails,
  );
  const isDarkTheme = theme === "dark";
  const primaryColor = isDarkTheme ? "#2563eb" : "#1E40AF";

  const [isLoading, setIsLoading] = useState(true);

  const userRole = user?.role;

  useEffect(() => {
    setIsLoading(loading);
  }, [loading]);

  const filteredServices = !loading
    ? services.filter((service) => {
        if (userRole === "admin") {
          return true;
        } else if (userRole === "special") {
          return service.title === "Special Pay";
        } else {
          return service.title !== "Special Pay";
        }
      })
    : [];

  if (isLoading) {
    return (
      <Container
        maxWidth="lg"
        sx={{
          mt: 20,
          mb: 4,
          p: 3,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CircularProgress />
      </Container>
    );
  }

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

        {user?.role && (
          <Grid container spacing={3} sx={{ mt: 2 }}>
            {filteredServices.map((service) => (
              <Grid
                item
                xs={12}
                sm={6}
                md={3}
                key={service.title}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  flexGrow: 1, // تأكد من أن العناصر تأخذ نفس المساحة
                }}
              >
                <ServiceCard
                  service={service}
                  isDarkTheme={isDarkTheme}
                  large={service.title === "Special Pay"}
                />
              </Grid>
            ))}
          </Grid>
        )}
      </Box>
    </Container>
  );
}
