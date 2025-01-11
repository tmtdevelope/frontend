"use client";
import { Typography, Button, Box } from "@mui/material";
import { Refresh } from "@mui/icons-material";

interface UserListHeaderProps {
  onRefresh: () => void;
}

export const UserListHeader = ({ onRefresh }: UserListHeaderProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        mb: 2,
      }}
    >
      <Typography variant="h4">User Management</Typography>
      <Button variant="contained" startIcon={<Refresh />} onClick={onRefresh}>
        Refresh
      </Button>
    </Box>
  );
};
