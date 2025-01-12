"use client";
import React from "react";
import { Card, CardContent, Typography, List, ListItem } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Service } from "./types";
import { useTheme } from "next-themes";
import Image from "next/image";

export const ServiceCard: React.FC<Service> = ({
  title,
  subtitle,
  description,
  imageUrl,
  features,
}) => {
  const { theme } = useTheme();
  const isDarkMode = theme === "dark";

  return (
    <Card
      sx={{
        backgroundColor: isDarkMode ? "#34495e" : "#ecf0f1",
        color: isDarkMode ? "#ecf0f1" : "#2c3e50",
        boxShadow: 3,
        display: "flex",
        flexDirection: "column",
        height: "100%",
        "&:hover": {
          boxShadow: 6,
        },
        transition: "box-shadow 0.3s",
      }}
    >
      <Image
        height={200}
        width={400}
        src={imageUrl}
        alt={title}
        style={{
          width: "100%",
          height: "auto",
          objectFit: "cover",
        }}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
          {title}
        </Typography>
        <Typography variant="subtitle1" sx={{ mb: 4 }}>
          {subtitle}
        </Typography>
        <Typography variant="body2" sx={{ mb: 4 }}>
          {description}
        </Typography>
        <List>
          {features.map((feature, index) => (
            <ListItem
              key={index}
              sx={{
                display: "flex",
                alignItems: "center",
                color: isDarkMode ? "#ecf0f1" : "#2c3e50",
              }}
            >
              <CheckCircleIcon
                sx={{
                  marginRight: 1,
                  fontSize: 18,
                  color: "#3498db",
                }}
              />
              <Typography variant="body2">{feature}</Typography>
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
};