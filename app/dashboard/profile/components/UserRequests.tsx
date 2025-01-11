"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Chip,
  IconButton,
  Box,
  Typography,
} from "@mui/material";
import { Eye, MapPin, Clock } from "lucide-react";
import { useSelector } from "react-redux";
import { useTheme } from "next-themes";

const mockRequests = [
  {
    id: "1",
    tripType: "oneWay",
    serviceType: "wheelchair",
    pickupAddress: "123 Main St, New York, NY 10001",
    dropoffAddress: "Mount Sinai Hospital, 1468 Madison Ave",
    pickupTime: "09:00 AM",
    appointmentTime: "10:00 AM",
  },
  {
    id: "2",
    tripType: "roundTrip",
    serviceType: "ambulatory",
    pickupAddress: "789 Park Ave, New York, NY 10021",
    dropoffAddress: "NYU Langone Medical Center",
    pickupTime: "02:00 PM",
    appointmentTime: "03:00 PM",
  },
];

export function UserRequests() {
  const { theme } = useTheme();
  const isDarkTheme = theme === "dark";

  return (
    <TableContainer
      component={Paper}
      sx={{
        bgcolor: isDarkTheme ? "#374151" : "#ffffff",
        boxShadow: 2,
        borderRadius: 2,
        overflow: "hidden",
      }}
      className="responsive-table"
    >
      <Table>
        <TableHead>
          <TableRow>
            <TableCell
              sx={{
                fontWeight: "bold",
                color: isDarkTheme ? "#ffffff" : "#000000",
              }}
            >
              Trip Type
            </TableCell>
            <TableCell
              sx={{
                fontWeight: "bold",
                color: isDarkTheme ? "#ffffff" : "#000000",
              }}
            >
              Service Type
            </TableCell>
            <TableCell
              sx={{
                fontWeight: "bold",
                color: isDarkTheme ? "#ffffff" : "#000000",
              }}
            >
              Pickup Address
            </TableCell>
            <TableCell
              sx={{
                fontWeight: "bold",
                color: isDarkTheme ? "#ffffff" : "#000000",
              }}
            >
              Dropoff Address
            </TableCell>
            <TableCell
              sx={{
                fontWeight: "bold",
                color: isDarkTheme ? "#ffffff" : "#000000",
              }}
            >
              Time
            </TableCell>
            <TableCell
              sx={{
                fontWeight: "bold",
                color: isDarkTheme ? "#ffffff" : "#000000",
              }}
            >
              Actions
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {mockRequests.map((request) => (
            <TableRow key={request.id} hover>
              <TableCell>
                <Chip
                  label={request.tripType}
                  color={
                    request.tripType === "oneWay" ? "primary" : "secondary"
                  }
                  size="small"
                />
              </TableCell>
              <TableCell>
                <Chip
                  label={request.serviceType}
                  variant="outlined"
                  size="small"
                />
              </TableCell>
              <TableCell>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <MapPin size={16} />
                  <Typography
                    variant="body2"
                    color={isDarkTheme ? "#ffffff" : "#000000"}
                  >
                    {request.pickupAddress}
                  </Typography>
                </Box>
              </TableCell>
              <TableCell>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <MapPin size={16} />
                  <Typography
                    variant="body2"
                    color={isDarkTheme ? "#ffffff" : "#000000"}
                  >
                    {request.dropoffAddress}
                  </Typography>
                </Box>
              </TableCell>
              <TableCell>
                <Box>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                      mb: 1,
                    }}
                  >
                    <Clock size={16} />
                    <Typography
                      variant="body2"
                      color={isDarkTheme ? "#ffffff" : "#000000"}
                    >
                      Pickup: {request.pickupTime}
                    </Typography>
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <Clock size={16} />
                    <Typography
                      variant="body2"
                      color={isDarkTheme ? "#ffffff" : "#000000"}
                    >
                      Appointment: {request.appointmentTime}
                    </Typography>
                  </Box>
                </Box>
              </TableCell>
              <TableCell>
                <IconButton size="small" color="primary">
                  <Eye size={18} />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
