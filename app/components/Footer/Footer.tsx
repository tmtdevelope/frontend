/** @format */

"use client";

import React from "react";
import {
  Container,
  Grid,
  Typography,
  Box,
  Link,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { useTheme } from "next-themes";
import { navigationItems } from "../Header/NavigationItem";
import { contactInfo } from "./ContactInfo";
import { socialLinks } from "./SocialLinks";

const Footer = () => {
  const { theme } = useTheme();
  const isDarkMode = theme === "dark";

  const textColor = isDarkMode ? "text-gray-300" : "text-gray-700";
  const iconColor = isDarkMode ? "#ffffff" : "#000000";
  const iconHoverColor = isDarkMode ? "#bbbbbb" : "#1976d2";

  return (
    <footer className={`pt-16 pb-8 border-b`}>
      <Container>
        <Grid container spacing={8}>
          <Grid item xs={12} md={4}>
            <Typography
              variant="h2"
              component="h2"
              sx={{ fontSize: { xs: "1.5rem", sm: "1.75rem", md: "2rem" } }}  
            >
              Follow Us
            </Typography>
            <Typography className={`${textColor} mb-4`}>
              Stay connected with us through our social media channels. Follow
              us for the latest updates and news.
            </Typography>
            <Box display="flex" gap={2}>
              {socialLinks.map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  target="_blank"
                  aria-label={`Follow us on ${social.name}`}
                  className="hover:opacity-75 transition-opacity"
                  tabIndex={0}
                >
                  <Box
                    sx={{
                      color: iconColor,
                      "&:hover": { color: iconHoverColor },
                    }}
                  >
                    {social.icon}
                  </Box>
                </Link>
              ))}
            </Box>
          </Grid>

          <Grid item xs={12} md={4}>
            <Typography
              variant="h2"
              component="h2"
              sx={{ fontSize: { xs: "1.5rem", sm: "1.75rem", md: "2rem" } }} 
            >
              Quick Links
            </Typography>
            <List role="list">
              {navigationItems.map((item) => (
                <ListItem key={item.id} disablePadding role="listitem">
                  <Link
                    href={item.href}
                    className={`${textColor} underline hover:text-blue-600`}
                    tabIndex={0}
                  >
                    {item.label}
                  </Link>
                </ListItem>
              ))}
            </List>
          </Grid>

          <Grid item xs={12} md={4}>
            <Typography
              variant="h2"
              component="h2"
              sx={{ fontSize: { xs: "1.5rem", sm: "1.75rem", md: "2rem" } }}  
            >
              Contact Info
            </Typography>
            <List role="list">
              {contactInfo.map((info, index) => (
                <ListItem key={index} disablePadding role="listitem">
                  <ListItemIcon className="min-w-0 mr-2">
                    <Box
                      sx={{
                        color: iconColor,
                        "&:hover": { color: iconHoverColor },
                      }}
                    >
                      {info.icon}
                    </Box>
                  </ListItemIcon>
                  <Link
                    href={info.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${textColor} hover:text-blue-600`}
                    tabIndex={0}
                  >
                    <ListItemText primary={info.text} />
                  </Link>
                </ListItem>
              ))}
            </List>
          </Grid>
        </Grid>
      </Container>
      <Box className={`border-t mt-12 pt-8 text-center`}>
        <Typography className={textColor}>
          © {new Date().getFullYear()} Trust Medical Transportation. All rights
          reserved.
        </Typography>
      </Box>
    </footer>
  );
};

export default Footer;