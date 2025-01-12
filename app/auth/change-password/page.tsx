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
 import { useRouter } from "next/navigation";
import { useFormTheme } from "@/app/dashboard/forms/utils/theme";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  changePassword,
  clearError,
  clearMessage,
} from "@/app/redux/slice/users/userSlice";
import { AppDispatch, RootState } from "@/app/redux/store/store";
import { IMAGES } from "@/app/utils/images";

// Validation schema
const schema = yup.object().shape({
  currentPassword: yup.string().required("Current Password is required"),
  newPassword: yup
    .string()
    .required("New Password is required")
    .min(6, "Password must be at least 6 characters"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("newPassword")], "Passwords must match")
    .required("Confirm Password is required"),
});

export default function ChangePasswordForm() {
  const { theme } = useTheme();
  const isDarkTheme = theme === "dark";
  const { getInputStyles, inputProps, labelProps } = useFormTheme();
  const router = useRouter();
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

  const onSubmit = async (data: {
    currentPassword: string;
    newPassword: string;
    confirmPassword: string;
  }) => {
    dispatch(
      changePassword({
        currentPassword: data.currentPassword,
        newPassword: data.newPassword,
      }),
    );
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
        typeof message === "string" ? message : "Operation successful",
      );
      setSnackbarSeverity("success");
      setOpenSnackbar(true);
      dispatch(clearMessage());
      router.push("/auth/login");
    }
  }, [error, message, dispatch, router]);

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
            src={IMAGES.light}
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
          Change Your Password
        </Typography>

        <TextField
          margin="normal"
          fullWidth
          label="Current Password"
          type="password"
          error={!!errors.currentPassword}
          helperText={errors.currentPassword?.message}
          {...register("currentPassword")}
          InputProps={inputProps}
          InputLabelProps={labelProps}
          sx={getInputStyles()}
        />

        <TextField
          margin="normal"
          fullWidth
          label="New Password"
          type="password"
          error={!!errors.newPassword}
          helperText={errors.newPassword?.message}
          {...register("newPassword")}
          InputProps={inputProps}
          InputLabelProps={labelProps}
          sx={getInputStyles()}
        />

        <TextField
          margin="normal"
          fullWidth
          label="Confirm Password"
          type="password"
          error={!!errors.confirmPassword}
          helperText={errors.confirmPassword?.message}
          {...register("confirmPassword")}
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
          {loading ? "Loading..." : "Change Password"}
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
