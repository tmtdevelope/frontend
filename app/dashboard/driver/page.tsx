import { Container, Typography, Paper } from "@mui/material";

 const DriverPage = () => {
  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Driver
      </Typography>
      <Paper sx={{ p: 4 }}>
        <Typography>Driver management coming soon...</Typography>
      </Paper>
    </Container>
  );
};
export default DriverPage;