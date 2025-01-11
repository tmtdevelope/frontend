import React from "react";
import { Box, Typography, Chip, IconButton, TableCell } from "@mui/material";
import {
  LocalTaxi as TaxiIcon,
  AccessTime as TimeIcon,
  LocationOn as LocationIcon,
  Accessible as HandicapIcon,
  Stairs as StairsIcon,
  WheelchairPickup as StandardWheelchairIcon,
} from "@mui/icons-material";

interface RequestColumnsProps {
  request: any;
  isDarkTheme: boolean;
}

export const getTripTypeColor = (
  tripType: string,
  isDarkTheme: boolean,
): string => {
  switch (tripType) {
    case "oneWay":
      return isDarkTheme ? "#00BCD4" : "#0097A7";
    case "roundTrip":
      return isDarkTheme ? "#FFA500" : "#FF8C00";
    case "waitReturn":
      return isDarkTheme ? "#9C27B0" : "#7B1FA2";
    case "discharge":
      return isDarkTheme ? "#4CAF50" : "#000000";
    default:
      return isDarkTheme ? "#ffffff" : "#000000";
  }
};

export const getServiceTypeColor = (
  serviceType: string,
  isDarkTheme: boolean,
): string => {
  switch (serviceType) {
    case "wheelchair":
      return isDarkTheme ? "#FF5722" : "#E64A19";
    case "stretcher":
      return isDarkTheme ? "#E91E63" : "#C2185B";
    case "ambulatory":
      return isDarkTheme ? "#00BCD4" : "#0097A7";
    case "airport":
      return isDarkTheme ? "#4CAF50" : "#388E3C";
    default:
      return isDarkTheme ? "#ffffff" : "#000000";
  }
};

export const RequestColumns: React.FC<RequestColumnsProps> = ({
  request,
  isDarkTheme,
}) => {
  return (
    <>
      <TableCell>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Chip
            icon={
              <TaxiIcon
                sx={{ color: getTripTypeColor(request.tripType, isDarkTheme) }}
              />
            }
            label={request.tripType}
            size="small"
            variant="outlined"
            sx={{
              color: getTripTypeColor(request.tripType, isDarkTheme),
              borderColor: getTripTypeColor(request.tripType, isDarkTheme),
              fontWeight: "bold",
            }}
          />
          {request.requiresOxygen === "yes" && (
            <Chip
              label="O₂"
              size="small"
              sx={{
                backgroundColor: "green",
                color: "#FFFFFF",
                fontWeight: "bold",
              }}
            />
          )}
        </Box>
      </TableCell>
      <TableCell>
        <Box
          sx={{
            position: "relative",
            display: "inline-flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Chip
            label={request.serviceType}
            size="small"
            variant="outlined"
            sx={{
              color: getServiceTypeColor(request.serviceType, isDarkTheme),
              borderColor: getServiceTypeColor(
                request.serviceType,
                isDarkTheme,
              ),
              fontWeight: "bold",
              position: "relative",
            }}
          />
          {request.serviceType === "wheelchair" &&
            request.needsWheelchair === "yes" && (
              <Box
                sx={{
                  width: 16,
                  height: 16,
                  borderRadius: "50%",
                  backgroundColor: "#80ed99",
                  position: "absolute",
                  top: -4,
                  right: -4,
                }}
              />
            )}
          {request.serviceType === "wheelchair" && (
            <Box sx={{ display: "flex", gap: 1, mt: 1 }}>
              {request.wheelchairSize === "scooter" && (
                <IconButton
                  sx={{ backgroundColor: "#FFA500", color: "#ffffff" }}
                >
                  <HandicapIcon />
                </IconButton>
              )}
              {request.wheelchairSize === "bariatric" && (
                <IconButton
                  sx={{ backgroundColor: "#FF0000", color: "#ffffff" }}
                >
                  <StandardWheelchairIcon />
                </IconButton>
              )}
              {request.stairsAssistance === "yes" && (
                <IconButton
                  sx={{ backgroundColor: "#FF9800", color: "#ffffff" }}
                >
                  <StairsIcon />
                </IconButton>
              )}
            </Box>
          )}
        </Box>
      </TableCell>
      <TableCell>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <LocationIcon
            fontSize="small"
            sx={{ color: isDarkTheme ? "#ffffff" : "#000000" }}
          />
          <Typography
            variant="body2"
            sx={{
              fontWeight: "bold",
              color: isDarkTheme ? "#ffffff" : "#000000",
            }}
          >
            {request.pickupAddress}
          </Typography>
        </Box>
      </TableCell>
      <TableCell>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <LocationIcon
            fontSize="small"
            sx={{ color: isDarkTheme ? "#ffffff" : "#000000" }}
          />
          <Typography
            variant="body2"
            sx={{
              fontWeight: "bold",
              color: isDarkTheme ? "#ffffff" : "#000000",
            }}
          >
            {request.dropoffAddress}
          </Typography>
        </Box>
      </TableCell>
      <TableCell>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <TimeIcon
              fontSize="small"
              sx={{ color: isDarkTheme ? "#ffffff" : "#000000" }}
            />
            <Typography
              variant="body2"
              sx={{ color: isDarkTheme ? "#ffffff" : "#000000" }}
            >
              Pickup: {request.pickupTime}
            </Typography>
          </Box>
          {request.appointmentTime && (
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <TimeIcon
                fontSize="small"
                sx={{ color: isDarkTheme ? "#ffffff" : "#000000" }}
              />
              <Typography
                variant="body2"
                sx={{ color: isDarkTheme ? "#ffffff" : "#000000" }}
              >
                Appointment: {request.appointmentTime}
              </Typography>
            </Box>
          )}
        </Box>
      </TableCell>
      <TableCell>
        {request.distance && request.duration && (
          <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
            <Typography
              variant="body2"
              sx={{ color: isDarkTheme ? "#ffffff" : "#000000" }}
            >
              Distance: {request.distance}
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: isDarkTheme ? "#ffffff" : "#000000" }}
            >
              Duration: {request.duration}
            </Typography>
          </Box>
        )}
      </TableCell>
    </>
  );
};
