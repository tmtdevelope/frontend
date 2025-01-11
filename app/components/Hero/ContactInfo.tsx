/** @format */

"use client";
import { Box, Typography, Link, Grid, IconButton } from "@mui/material";
import { Phone, Mail } from "@mui/icons-material";
import { Printer } from "lucide-react";
import { useTheme } from "next-themes";

const ContactInfo = () => {
  const { theme } = useTheme();

  return (
    <Box sx={{ paddingX: "20px", paddingTop: "10px" }}>
      <Grid
        container
        spacing={2}
        justifyContent="center"
        alignItems="center"
        sx={{
          paddingX: "20px",
          borderRadius: "8px",
        }}
      >
        <Grid item>
          <Link
            href="tel:+18886604441"
            display="flex"
            alignItems="center"
            sx={{
              textDecoration: "none",
              "&:hover": {
                textDecoration: "underline",
              },
            }}
          >
            <IconButton sx={{ marginRight: "10px" }}>
              <Phone sx={{ color: "primary.main" }} />
            </IconButton>
            <Typography
              variant="body1"
              sx={{
                fontWeight: "bold",
                color: theme === "dark" ? "#fff" : "text.primary",
              }}
            >
              +1 (888) 660-4441
            </Typography>
          </Link>
        </Grid>

        <Grid item>
          <Link
            href="mailto:trustmtrans@outlook.com"
            display="flex"
            alignItems="center"
            sx={{
              textDecoration: "none",
              "&:hover": {
                textDecoration: "underline",
              },
            }}
          >
            <IconButton sx={{ marginRight: "10px" }}>
              <Mail sx={{ color: "primary.main" }} />
            </IconButton>
            <Typography
              variant="body1"
              sx={{
                fontWeight: "bold",
                color: theme === "dark" ? "#fff" : "text.primary",
              }}
            >
              trustmtrans@outlook.com
            </Typography>
          </Link>
        </Grid>

        <Grid item>
          <Box display="flex" alignItems="center">
            <IconButton sx={{ marginRight: "10px" }}>
              <Printer className="text-[#3498db]" />
            </IconButton>
            <Typography variant="body1" sx={{ fontWeight: "bold" }}>
              Fax: +1 (650) 292-2323
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ContactInfo;
