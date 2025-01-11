"use client";
import { Box, Typography, Card, CardContent, Grid } from "@mui/material";
import React from "react";

const DashboardAdmin = () => {
  return (
    <Box sx={{ display: "flex", minHeight: "100vh", backgroundColor: "#f5f5f5" }}>
       <Box
        sx={{
          width: "240px",
          backgroundColor: "#1e293b",
          color: "#fff",
          padding: "20px",
          boxShadow: "2px 0 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: "bold", mb: 4 }}>
          Admin Panel
        </Typography>
        <Typography variant="body1" sx={{ mb: 2, cursor: "pointer" }}>
          Dashboard
        </Typography>
        <Typography variant="body1" sx={{ mb: 2, cursor: "pointer" }}>
          Users
        </Typography>
        <Typography variant="body1" sx={{ mb: 2, cursor: "pointer" }}>
          Settings
        </Typography>
      </Box>

      {/* Main Content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          padding: "24px",
          transition: "margin-left 0.3s ease",
        }}
      >
        {/* Navbar */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 4,
            backgroundColor: "#fff",
            padding: "16px",
            borderRadius: "8px",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
          }}
        >
          <Typography variant="h5" sx={{ fontWeight: "bold" }}>
            Admin Dashboard
          </Typography>
          <Typography variant="body1">Welcome, Admin!</Typography>
        </Box>

        {/* Cards Section */}
        <Grid container spacing={3}>
          {/* Card 1 */}
          <Grid item xs={12} sm={6} md={4}>
            <Card
              sx={{
                backgroundColor: "#3b82f6",
                color: "#fff",
                borderRadius: "8px",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              }}
            >
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
                  Total Users
                </Typography>
                <Typography variant="h4">1,234</Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Card 2 */}
          <Grid item xs={12} sm={6} md={4}>
            <Card
              sx={{
                backgroundColor: "#10b981",
                color: "#fff",
                borderRadius: "8px",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              }}
            >
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
                  Active Projects
                </Typography>
                <Typography variant="h4">56</Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Card 3 */}
          <Grid item xs={12} sm={6} md={4}>
            <Card
              sx={{
                backgroundColor: "#ef4444",
                color: "#fff",
                borderRadius: "8px",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              }}
            >
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
                  Pending Tasks
                </Typography>
                <Typography variant="h4">12</Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default DashboardAdmin;