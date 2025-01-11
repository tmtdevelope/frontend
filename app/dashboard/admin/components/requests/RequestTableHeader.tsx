"use client";

import { TableHead, TableRow, TableCell } from "@mui/material";
import { useTheme } from "next-themes";

export const RequestTableHeader: React.FC = () => {
  const { theme } = useTheme();
  const isDarkTheme = theme === "dark";
  const color = isDarkTheme ? "#ffffff" : "#000000";
  const backgroundColor = isDarkTheme ? "#000000" : "#ffffff";

  return (
    <TableHead>
      <TableRow sx={{ backgroundColor }}>
        <TableCell sx={{ color, fontWeight: "bold" }}>Trip Type</TableCell>
        <TableCell sx={{ color, fontWeight: "bold" }}>Service Type</TableCell>
        <TableCell sx={{ color, fontWeight: "bold" }}>Pickup Address</TableCell>
        <TableCell sx={{ color, fontWeight: "bold" }}>
          Dropoff Address
        </TableCell>
        <TableCell sx={{ color, fontWeight: "bold" }}>
          Pickup & Appointment Time
        </TableCell>
        <TableCell sx={{ color, fontWeight: "bold" }}>
          Distance & Duration
        </TableCell>
        <TableCell sx={{ color, fontWeight: "bold" }}>Actions</TableCell>
      </TableRow>
    </TableHead>
  );
};
