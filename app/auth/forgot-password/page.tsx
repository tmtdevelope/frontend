"use client";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {
  TextField,
  Button,
  Box,
  Link,
  Container,
  Typography,
  Paper,
  Snackbar,
  Alert,
} from "@mui/material";
import { useTheme } from "next-themes";
import Image from "next/image";
import logo from "../../../public/logo.png";
 import { useFormTheme } from "@/app/dashboard/forms/utils/theme";
import { useDispatch, useSelector } from "react-redux";
import {
  forgotPassword,
  clearError,
  clearMessage,
} from "@/app/redux/slice/users/userSlice";
import { AppDispatch, RootState } from "@/app/redux/store/store";
import { useEffect, useState } from "react";

// Validation schema
const schema = yup.object().shape({
  email: yup
    .string()
    .email("Invalid email address")
    .required("Email is required"),
});

export default function ForgotPasswordForm() {
  const { theme } = useTheme();
  const isDarkTheme = theme === "dark";
  const { getInputStyles, inputProps, labelProps } = useFormTheme();
   const dispatch = useDispatch<AppDispatch>();
  const { loading, error, message } = useSelector(
    (state: RootState) => state.usreManagePassword,
  );

  // States for Snackbar
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState<"success" | "error">(
    "success",
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: { email: string }) => {
    dispatch(forgotPassword(data.email));
  };

  // Effect to handle errors and messages
  useEffect(() => {
    if (error) {
      setSnackbarMessage(
        typeof error === "string" ? error : "An error occurred",
      );
      setSnackbarSeverity("error");
      setOpenSnackbar(true);
      dispatch(clearError());
    }
    if (message) {
      setSnackbarMessage(
        typeof message === "string"
          ? message
          : "Check your email for the reset link",
      );
      setSnackbarSeverity("success");
      setOpenSnackbar(true);
      dispatch(clearMessage());
      
    }
  }, [error, message, dispatch]);

  // Close Snackbar
  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <Container
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      sx={{
        width: { xs: "90%", sm: "60%", md: "50%", lg: "40%" },
        paddingY: "20px",
        marginTop: "120px",
        textAlign: "center",
      }}
    >
      <Paper
        elevation={3}
        sx={{
          backgroundColor: isDarkTheme ? "#1f2937" : "#fff",
          padding: 4,
          borderRadius: "10px",
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            src={logo}
            alt="Logo"
            width={300}
            loading="lazy"
            height={200}
          />
        </Box>

        <Typography
          variant="h6"
          sx={{
            marginTop: 2,
            marginBottom: 4,
            fontSize: { xs: "1rem", md: "1.25rem" },
            color: isDarkTheme ? "#3b82f6" : "#1d4ed8",
          }}
        >
          Reset Your Password
        </Typography>

        <TextField
          margin="normal"
          fullWidth
          label="Email Address"
          autoComplete="email"
          error={!!errors.email}
          helperText={errors.email?.message}
          {...register("email")}
          InputProps={inputProps}
          InputLabelProps={labelProps}
          sx={getInputStyles()}
        />

        <Button
          type="submit"
          fullWidth
          variant="contained"
          disabled={loading}
          sx={{
            mt: 3,
            mb: 2,
            py: { xs: 1, md: 1.5 },
            fontSize: { xs: "0.875rem", md: "1rem" },
            textTransform: "none",
            borderRadius: "8px",
          }}
        >
          {loading ? "Sending..." : "Send Reset Link"}
        </Button>

        <Box sx={{ textAlign: "center" }}>
          <Link
            href="/auth/login"
            variant="body2"
            sx={{
              color: isDarkTheme ? "#3b82f6" : "#1d4ed8",
              textDecoration: "none",
              "&:hover": { textDecoration: "underline" },
            }}
          >
            Back to Login
          </Link>
        </Box>
      </Paper>

      {/* Snackbar for messages and errors */}
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbarSeverity}
          sx={{ width: "100%" }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Container>
  );
}
