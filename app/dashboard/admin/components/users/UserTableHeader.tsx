"use client";
import { TableHead, TableRow, TableCell } from "@mui/material";
import { useTheme } from "next-themes";

export const UserTableHeader: React.FC = () => {
  const { theme } = useTheme();
  const isDarkTheme = theme === "dark";
  const color = isDarkTheme ? "#ffffff" : "#000000";
  const backgroundColor = isDarkTheme ? "#000000" : "#eeeeee";

  return (
    <TableHead>
      <TableRow sx={{ backgroundColor }}>
        <TableCell sx={{ color, fontWeight: "bold" }}>Name</TableCell>
        <TableCell sx={{ color, fontWeight: "bold" }}>Email</TableCell>
        <TableCell sx={{ color, fontWeight: "bold" }}>Phone</TableCell>
        <TableCell sx={{ color, fontWeight: "bold" }}>Job Title</TableCell>
        <TableCell sx={{ color, fontWeight: "bold" }}>Organization</TableCell>
        <TableCell sx={{ color, fontWeight: "bold" }}>
          Facility Address
        </TableCell>
        <TableCell sx={{ color, fontWeight: "bold" }}>Status</TableCell>
        <TableCell sx={{ color, fontWeight: "bold" }}>Actions</TableCell>
      </TableRow>
    </TableHead>
  );
};
