"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch, useSelector } from "react-redux";
import { registerAction } from "@/app/redux/actions/users/register";
import { RootState, AppDispatch } from "@/app/redux/store/store";
import {
  TextField,
  Button,
  Box,
  Container,
  Typography,
  Paper,
  Grid,
  Snackbar,
  Alert,
} from "@mui/material";
import { useFormTheme } from "@/app/dashboard/forms/utils/theme";
import { schema } from "./validators";
import Image from "next/image";
import logo from "../../../public/logo.png";
import { JobTitleSelect } from "../components/JobTitleSelect";
import { AddressInput } from "../components/AddressInput";
import SuccessPopup from "../components/SuccessPopup";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  organizationName: string;
  facilityAddress: string;
  jobTitle: string;
  otherJobTitle?: string;
  password: string;
}

export default function RegisterForm() {
  const { getInputStyles, inputProps, labelProps, isDarkTheme } =
    useFormTheme();
  const primaryColor = isDarkTheme ? "#2563eb" : "#1E40AF";
  const dispatch = useDispatch<AppDispatch>();
  const { loading } = useSelector((state: RootState) => state.register);

  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
    defaultValues: {
      jobTitle: "",
    },
  });

  const jobTitle = watch("jobTitle");

  const [openPopup, setOpenPopup] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState<"success" | "error">(
    "success",
  );

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  const onSubmit = (data: FormData) => {
    dispatch(registerAction(data))
      .unwrap()
      .then(() => {
        setOpenPopup(true);
        setSnackbarSeverity("success");
        setOpenSnackbar(true);
      })
      .catch((err) => {
        setSnackbarMessage(
          err.message || "Registration failed. Please try again.",
        );
        setSnackbarSeverity("error");
        setOpenSnackbar(true);
      });
  };

  return (
    <Container
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      sx={{
        width: { xs: "90%", sm: "70%", md: "60%" },
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
            color: primaryColor,
          }}
        >
          Register with your Details
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <TextField
              margin="normal"
              fullWidth
              label="First Name"
              error={!!errors.firstName}
              helperText={errors.firstName?.message}
              {...register("firstName")}
              InputProps={inputProps}
              InputLabelProps={labelProps}
              sx={getInputStyles()}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              margin="normal"
              fullWidth
              label="Last Name"
              error={!!errors.lastName}
              helperText={errors.lastName?.message}
              {...register("lastName")}
              InputProps={inputProps}
              InputLabelProps={labelProps}
              sx={getInputStyles()}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              margin="normal"
              fullWidth
              label="Email Address"
              error={!!errors.email}
              helperText={errors.email?.message}
              {...register("email")}
              InputProps={inputProps}
              InputLabelProps={labelProps}
              sx={getInputStyles()}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              margin="normal"
              fullWidth
              label="Phone Number"
              error={!!errors.phone}
              helperText={errors.phone?.message}
              {...register("phone")}
              InputProps={inputProps}
              InputLabelProps={labelProps}
              sx={getInputStyles()}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <AddressInput
              control={control}
              errors={errors}
              isDarkTheme={isDarkTheme}
              getInputStyles={getInputStyles}
              labelProps={labelProps}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <JobTitleSelect
              control={control}
              errors={errors}
              isDarkTheme={isDarkTheme}
              getInputStyles={getInputStyles}
              labelProps={labelProps}
            />
          </Grid>

          {jobTitle === "Other" && (
            <Grid item xs={12} md={6}>
              <TextField
                margin="normal"
                fullWidth
                label="Other Job Title"
                error={!!errors.otherJobTitle}
                helperText={errors.otherJobTitle?.message}
                {...register("otherJobTitle")}
                InputProps={inputProps}
                InputLabelProps={labelProps}
                sx={getInputStyles()}
              />
            </Grid>
          )}
          <Grid item xs={12} md={6}>
            <TextField
              margin="normal"
              fullWidth
              label="Organization Name"
              error={!!errors.organizationName}
              helperText={errors.organizationName?.message}
              {...register("organizationName")}
              InputProps={inputProps}
              InputLabelProps={labelProps}
              sx={getInputStyles()}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              margin="normal"
              fullWidth
              label="Password"
              type="password"
              error={!!errors.password}
              helperText={errors.password?.message}
              {...register("password")}
              InputProps={inputProps}
              InputLabelProps={labelProps}
              sx={getInputStyles()}
            />
          </Grid>

          <Grid item xs={12}>
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
                background: "linear-gradient(45deg, #1E40AF 30%, #2563eb 90%)",
                color: "#fff",
                "&:hover": {
                  background:
                    "linear-gradient(45deg, #2563eb 30%, #1E40AF 90%)",
                },
              }}
            >
              {loading ? "Registering..." : "Register"}
            </Button>
          </Grid>
        </Grid>
      </Paper>
      <SuccessPopup open={openPopup} onClose={() => setOpenPopup(false)} />
      <Snackbar
        open={openSnackbar}
        autoHideDuration={5000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
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
