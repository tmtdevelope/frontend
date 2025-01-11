"use client";
import { Box, Dialog, DialogContent, Typography, Button } from "@mui/material";
import { User } from "../../types/user";
import { useTheme } from "next-themes";

interface UserDetailsProps {
  user: User;
  open: boolean;
  onClose: () => void;
  onCopy: (text: string, label: string) => void;
}

export const UserDetails = ({
  user,
  open,
  onClose,
  onCopy,
}: UserDetailsProps) => {
  const { theme } = useTheme();
  const isDarkTheme = theme === "dark";

  const handleCopyAll = () => {
    const textToCopy = `
      Name: ${user.firstName} ${user.lastName}
      Email: ${user.email}
      Phone: ${user.phone}
      Job Title: ${user.jobTitle}
      Organization: ${user.organizationName}
      Facility Address: ${user.facilityAddress}
      Status: ${user.status}
    `;
    onCopy(textToCopy, "All details");
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="md"
      fullWidth
      scroll="paper"
      sx={{
        "& .MuiDialog-paper": {
          backgroundColor: isDarkTheme ? "#1f2937" : "#ffffff",
          color: isDarkTheme ? "#ffffff" : "#000000",
        },
      }}
    >
      <DialogContent>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <Typography variant="h6">User Details</Typography>
          <Typography>
            Name: {user.firstName} {user.lastName}
          </Typography>
          <Typography>Email: {user.email}</Typography>
          <Typography>Phone: {user.phone}</Typography>
          <Typography>Job Title: {user.jobTitle}</Typography>
          <Typography>Organization: {user.organizationName}</Typography>
          <Typography>Facility Address: {user.facilityAddress}</Typography>
          <Typography>Status: {user.status}</Typography>
          <Button onClick={handleCopyAll} variant="contained">
            Copy All Details
          </Button>
        </Box>
      </DialogContent>
    </Dialog>
  );
};
