import { Box, Chip, Typography, IconButton } from "@mui/material";
import {
  LocalTaxi as TaxiIcon,
  LocationOn as LocationIcon,
  AccessTime as TimeIcon,
} from "@mui/icons-material";
import HandicapIcon from "@mui/icons-material/Accessible";
import StairsIcon from "@mui/icons-material/Stairs";
import { WheelchairPickup as StandardWheelchairIcon } from "@mui/icons-material";
import { Request } from "../../types/request";
import { getTripTypeColor, getServiceTypeColor } from "./style";

export const columns = [
  {
    id: "tripType",
    label: "Trip Type",
    render: (request: Request, isDarkTheme: boolean) => (
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <Chip
          icon={
            <TaxiIcon
              sx={{
                color: getTripTypeColor(request.tripType, isDarkTheme),
              }}
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
    ),
  },
  {
    id: "serviceType",
    label: "Service Type",
    render: (request: Request, isDarkTheme: boolean) => (
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
            borderColor: getServiceTypeColor(request.serviceType, isDarkTheme),
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
                sx={{
                  backgroundColor: "#FFA500",
                  color: "#ffffff",
                }}
              >
                <HandicapIcon />
              </IconButton>
            )}
            {request.wheelchairSize === "bariatric" && (
              <IconButton
                sx={{
                  backgroundColor: "#FF0000",
                  color: "#ffffff",
                }}
              >
                <StandardWheelchairIcon />
              </IconButton>
            )}
            {request.stairsAssistance === "yes" && (
              <IconButton
                sx={{
                  backgroundColor: "#FF9800",
                  color: "#ffffff",
                }}
              >
                <StairsIcon />
              </IconButton>
            )}
          </Box>
        )}
      </Box>
    ),
  },
  {
    id: "pickupAddress",
    label: "Pickup Address",
    render: (request: Request, isDarkTheme: boolean) => (
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
    ),
  },
  {
    id: "dropoffAddress",
    label: "Dropoff Address",
    render: (request: Request, isDarkTheme: boolean) => (
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
    ),
  },
  {
    id: "pickupTime",
    label: "Pickup & Appointment Time",
    render: (request: Request, isDarkTheme: boolean) => (
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
    ),
  },
  {
    id: "distanceDuration",
    label: "Distance & Duration",
    render: (request: Request, isDarkTheme: boolean) => (
      <>
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
      </>
    ),
  },
];
