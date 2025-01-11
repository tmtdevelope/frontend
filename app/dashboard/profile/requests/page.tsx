"use client";

import { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Chip,
  Grid,
  Tab,
  Tabs,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { Ambulance, Calendar, MapPin, Clock, AlertCircle } from "lucide-react";
import { useTheme } from "next-themes";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`request-tabpanel-${index}`}
      aria-labelledby={`request-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ py: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `request-tab-${index}`,
    "aria-controls": `request-tabpanel-${index}`,
  };
}

const mockRequests = [
  {
    id: "1",
    patientName: "John Doe",
    serviceType: "wheelchair",
    tripType: "oneWay",
    pickupAddress: "123 Main St",
    dropoffAddress: "456 Hospital Ave",
    pickupDate: "2024-03-20",
    pickupTime: "09:00 AM",
    status: "pending",
  },
  // Add more mock data as needed
];

export default function RequestsPage() {
  const [value, setValue] = useState(0);
  const { theme } = useTheme();
  const isDarkTheme = theme === "dark";

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "pending":
        return "warning";
      case "confirmed":
        return "success";
      case "cancelled":
        return "error";
      default:
        return "default";
    }
  };

  return (
    <Box>
      <Typography
        variant="h4"
        gutterBottom
        sx={{ color: isDarkTheme ? "#ffffff" : "#000000" }}
      >
        My Requests
      </Typography>

      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ bgcolor: isDarkTheme ? "#374151" : "#ffffff" }}>
            <CardContent>
              <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <Ambulance color={isDarkTheme ? "#ffffff" : "#000000"} />
                <Box>
                  <Typography
                    color={isDarkTheme ? "#ffffff" : "#000000"}
                    gutterBottom
                  >
                    Total Requests
                  </Typography>
                  <Typography
                    variant="h4"
                    sx={{ color: isDarkTheme ? "#ffffff" : "#000000" }}
                  >
                    24
                  </Typography>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        {/* Add more summary cards as needed */}
      </Grid>

      <Card sx={{ bgcolor: isDarkTheme ? "#374151" : "#ffffff" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs value={value} onChange={handleChange} aria-label="request tabs">
            <Tab
              label="All Requests"
              {...a11yProps(0)}
              sx={{ color: isDarkTheme ? "#ffffff" : "#000000" }}
            />
            <Tab
              label="Pending"
              {...a11yProps(1)}
              sx={{ color: isDarkTheme ? "#ffffff" : "#000000" }}
            />
            <Tab
              label="Confirmed"
              {...a11yProps(2)}
              sx={{ color: isDarkTheme ? "#ffffff" : "#000000" }}
            />
            <Tab
              label="Completed"
              {...a11yProps(3)}
              sx={{ color: isDarkTheme ? "#ffffff" : "#000000" }}
            />
            <Tab
              label="Cancelled"
              {...a11yProps(4)}
              sx={{ color: isDarkTheme ? "#ffffff" : "#000000" }}
            />
          </Tabs>
        </Box>

        <TabPanel value={value} index={0}>
          <TableContainer
            component={Paper}
            sx={{ bgcolor: isDarkTheme ? "#374151" : "#ffffff" }}
          >
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell
                    sx={{ color: isDarkTheme ? "#ffffff" : "#000000" }}
                  >
                    Request ID
                  </TableCell>
                  <TableCell
                    sx={{ color: isDarkTheme ? "#ffffff" : "#000000" }}
                  >
                    Service Type
                  </TableCell>
                  <TableCell
                    sx={{ color: isDarkTheme ? "#ffffff" : "#000000" }}
                  >
                    Trip Details
                  </TableCell>
                  <TableCell
                    sx={{ color: isDarkTheme ? "#ffffff" : "#000000" }}
                  >
                    Date & Time
                  </TableCell>
                  <TableCell
                    sx={{ color: isDarkTheme ? "#ffffff" : "#000000" }}
                  >
                    Status
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {mockRequests.map((request) => (
                  <TableRow key={request.id}>
                    <TableCell
                      sx={{ color: isDarkTheme ? "#ffffff" : "#000000" }}
                    >
                      {request.id}
                    </TableCell>
                    <TableCell>
                      <Chip
                        label={request.serviceType}
                        size="small"
                        sx={{ color: isDarkTheme ? "#ffffff" : "#000000" }}
                      />
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
                          <MapPin
                            size={16}
                            color={isDarkTheme ? "#ffffff" : "#000000"}
                          />
                          <Typography
                            variant="body2"
                            sx={{ color: isDarkTheme ? "#ffffff" : "#000000" }}
                          >
                            From: {request.pickupAddress}
                          </Typography>
                        </Box>
                        <Box
                          sx={{ display: "flex", alignItems: "center", gap: 1 }}
                        >
                          <MapPin
                            size={16}
                            color={isDarkTheme ? "#ffffff" : "#000000"}
                          />
                          <Typography
                            variant="body2"
                            sx={{ color: isDarkTheme ? "#ffffff" : "#000000" }}
                          >
                            To: {request.dropoffAddress}
                          </Typography>
                        </Box>
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
                          <Calendar
                            size={16}
                            color={isDarkTheme ? "#ffffff" : "#000000"}
                          />
                          <Typography
                            variant="body2"
                            sx={{ color: isDarkTheme ? "#ffffff" : "#000000" }}
                          >
                            {request.pickupDate}
                          </Typography>
                        </Box>
                        <Box
                          sx={{ display: "flex", alignItems: "center", gap: 1 }}
                        >
                          <Clock
                            size={16}
                            color={isDarkTheme ? "#ffffff" : "#000000"}
                          />
                          <Typography
                            variant="body2"
                            sx={{ color: isDarkTheme ? "#ffffff" : "#000000" }}
                          >
                            {request.pickupTime}
                          </Typography>
                        </Box>
                      </Box>
                    </TableCell>
                    <TableCell>
                      <Chip
                        label={request.status}
                        color={getStatusColor(request.status)}
                        size="small"
                        sx={{ color: isDarkTheme ? "#ffffff" : "#000000" }}
                      />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </TabPanel>
        {/* Repeat TabPanel for other status tabs */}
      </Card>
    </Box>
  );
}
