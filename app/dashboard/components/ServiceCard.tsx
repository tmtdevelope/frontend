"use client";

import { Button, Card, Grid, Typography } from "@mui/material";
import { useRouter } from "next/navigation";

 

export function ServiceCard({service } : any)  {
  const router = useRouter();

  return (
    <Card
    sx={{
      p: 3,
      height: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      transition: "transform 0.2s",
      "&:hover": {
        transform: "translateY(-4px)",
      },
    }}
  >
    <service.icon
      sx={{ 
        fontSize: 48, 
        color: service.color,
        mb: 2
      }}
    />
    <Typography variant="h6" gutterBottom align="center">
      {service.title}
    </Typography>
    <Button
      variant="contained"
      fullWidth
      sx={{ 
        mt: "auto",
        bgcolor: service.color,
        "&:hover": {
          bgcolor: service.color,
          opacity: 0.9
        }
      }}
      onClick={() => router.push(service.path)}
    >
      Start Request
    </Button>
  </Card>
  );
}