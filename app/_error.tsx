// pages/_error.tsx
import { NextPage } from "next";
import { useRouter } from "next/router";
import { Box, Typography, Button } from "@mui/material";

interface ErrorPageProps {
  statusCode?: number;
}

const ErrorPage: NextPage<ErrorPageProps> = ({ statusCode }) => {
  const router = useRouter();

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
        {statusCode || "Error"}
      </Typography>
      <Typography variant="h4" sx={{ mt: 2, color: "#666" }}>
        {statusCode === 404
          ? "Page Not Found"
          : "An error occurred on the server"}
      </Typography>
      <Button
        variant="contained"
        sx={{ mt: 4, px: 4, py: 2, fontSize: "1rem" }}
        onClick={() => router.push("/")}
      >
        Go Back Home
      </Button>
    </Box>
  );
};

ErrorPage.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default ErrorPage;