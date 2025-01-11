// app/_not-found.tsx
import { Box, Typography, Button } from "@mui/material";
import Link from "next/link";

const NotFoundPage = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        textAlign: "center",
        backgroundColor: "#f8f9fa",
      }}
    >
      <Typography variant="h1" sx={{ fontSize: "6rem", fontWeight: "bold", color: "#333" }}>
        404
      </Typography>
      <Typography variant="h4" sx={{ mt: 2, color: "#666" }}>
        Page Not Found
      </Typography>
      <Link href="/" passHref>
        <Button
          variant="contained"
          sx={{ mt: 4, px: 4, py: 2, fontSize: "1rem" }}
        >
          Go Back Home
        </Button>
      </Link>
    </Box>
  );
};

export default NotFoundPage;