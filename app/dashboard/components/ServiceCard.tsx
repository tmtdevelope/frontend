"use client";

import { Button, Card, Grid, Typography } from "@mui/material";
import { useRouter } from "next/navigation";

export function ServiceCard({ service, isDarkTheme }: any) {
  const router = useRouter();

  return (
    <Card
      sx={{
        p: 3,
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: isDarkTheme ? "#1f2937" : "#f5f5f5",
        color: isDarkTheme ? "#fff" : "#000",
        transition: "transform 0.2s",
        flexGrow: 1, 
        "&:hover": {
          transform: "translateY(-4px)",
        },
      }}
    >
      <service.icon
        sx={{
          fontSize: 48,
          color: service.color,
          mb: 2,
        }}
      />
      <Typography
        variant="h6"
        gutterBottom
        align="center"
        sx={{ textAlign: "center" }}
      >
        {service.title}
      </Typography>
      <Button
        variant="contained"
        fullWidth
        sx={{
          mt: "auto",
          bgcolor: service.color,
          width: "100%", // تأكد من أن الزر يأخذ العرض الكامل
          "&:hover": {
            bgcolor: service.color,
            opacity: 0.9,
          },
        }}
        onClick={() => router.push(service.path)}
      >
        Start Request
      </Button>
    </Card>
  );
}
