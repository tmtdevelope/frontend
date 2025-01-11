"use client";
import {
  Container,
  Typography,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

const ServiceRates = () => {
  return (
    <Container maxWidth="md" sx={{ padding: "40px", marginTop: "40px" }}>
      <Typography
        variant="h4"
        sx={{ fontWeight: "bold", marginBottom: "20px" }}
      >
        Trust Medical Transportation (TMT)
      </Typography>
      <Typography variant="h5" sx={{ marginBottom: "20px" }}>
        Service Rates
      </Typography>
      <List sx={{ marginBottom: "20px" }}>
        <ListItem>
          <ListItemText
            primary="Vans for up to 4 passengers: $100 per hour (minimum 8 hours)"
            sx={{ fontSize: "18px", color: "#348" }}
          />
        </ListItem>
      </List>

      <Typography variant="body1" sx={{ marginBottom: "30px" }}>
        We are dedicated to delivering a smooth, gate-to-gate service that makes
        your travel experience with us worry-free, no matter where you’re
        headed.
      </Typography>
      <Typography
        variant="h6"
        sx={{ fontWeight: "bold", marginBottom: "15px" }}
      >
        Cancellation and Change Policy:
      </Typography>
      <Typography variant="body1" sx={{ marginBottom: "20px" }}>
        We at Trust Medical Transportation TMT understand that plans can change,
        and we are here to assist with any adjustments you may need. We kindly
        request that you provide us with at least a 24-hour notice for any
        changes or cancellations to your scheduled services. Please be aware
        that for any changes or cancellations made with less than 24 hours’
        notice, we will require the full cost of the scheduled service. This
        policy helps us ensure that we can maintain the highest standard of
        service for all our clients, without compromise. Thank you for your
        understanding and cooperation.
      </Typography>
      <Typography
        variant="h6"
        sx={{ fontWeight: "bold", marginBottom: "15px" }}
      >
        Please Note:
      </Typography>
      <Typography variant="body1" sx={{ marginBottom: "20px" }}>
        For trips extending beyond a certain number of miles outside city
        limits, additional fees may apply. These may include charges for extra
        mileage, bridge tolls, and other related expenses.
      </Typography>
    </Container>
  );
};

export default ServiceRates;
