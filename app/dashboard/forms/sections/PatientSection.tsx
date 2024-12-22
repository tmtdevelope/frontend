"use client";

import { Grid, TextField } from "@mui/material";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers";
import { useTheme } from "next-themes";

export function PatientSection({
  register,
  errors,
  setValue,
  renderFormSection,
}: any) {
  const { theme } = useTheme();
  const isDarkTheme = theme === "dark";
  const currentDate = new Date();

  const getInputStyles = () => ({
    "& .MuiOutlinedInput-root": {
      borderRadius: "8px", // إضافة Rediuse
      "& fieldset": {
        borderColor: isDarkTheme
          ? "rgba(255, 255, 255, 0.23)"
          : "rgba(0, 0, 0, 0.23)",
      },
      "&:hover fieldset": {
        borderColor: isDarkTheme ? "#90caf9" : "#1976d2",
      },
      backgroundColor: isDarkTheme
        ? "rgba(255, 255, 255, 0.05)"
        : "transparent",
    },
  });

  const inputProps = {
    style: {
      color: isDarkTheme ? "#ffffff" : "#000000",
      fontSize: "1rem",
    },
  };

  const labelProps = {
    style: {
      color: isDarkTheme ? "#b3b3b3" : "#666666",
    },
  };

  return renderFormSection({
    title: "Patient Information",
    children: (
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            label="Patient Name *"
            error={!!errors.patientName}
            helperText={errors.patientName?.message}
            {...register("patientName", {
              required: "Patient Name is required",
            })}
            InputProps={inputProps}
            InputLabelProps={labelProps}
            sx={getInputStyles()}
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              label="Date of Birth *"
              onChange={(date) => setValue("dateOfBirth", date)}
              maxDate={new Date(currentDate.setDate(currentDate.getDate() - 1))}
              slotProps={{
                textField: {
                  fullWidth: true,
                  error: !!errors.dateOfBirth?.message,
                  helperText: errors.dateOfBirth?.message,
                  InputProps: inputProps,
                  InputLabelProps: labelProps,
                  sx: getInputStyles(),
                },
              }}
              sx={{
                "& .MuiPaper-root": {
                  backgroundColor: isDarkTheme ? "#333333" : "#ffffff",
                  color: isDarkTheme ? "#ffffff" : "#000000",
                  borderRadius: "8px",
                },
                "& .MuiButtonBase-root": {
                  color: isDarkTheme ? "#ffffff" : "#000000",
                },
              }}
            />
          </LocalizationProvider>
        </Grid>

        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            label="Patient ID *"
            error={!!errors.patientID?.message}
            helperText={errors.patientID?.message}
            {...register("patientID", { requires: "Patient ID is required" })}
            InputProps={inputProps}
            InputLabelProps={labelProps}
            sx={getInputStyles()}
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            label="Phone Number *"
            error={!!errors.phoneNumber?.message}
            helperText={errors.phoneNumber?.message}
            {...register("phoneNumber", {
              required: "Phone Number is required",
            })}
            InputProps={inputProps}
            InputLabelProps={labelProps}
            sx={getInputStyles()}
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            label="Patient Weight (in lbs)"
            type="number"
            {...register("weight")}
            InputProps={inputProps}
            InputLabelProps={labelProps}
            sx={getInputStyles()}
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            label="Address *"
            error={!!errors.address?.message}
            helperText={errors.address?.message}
            {...register("address", { required: "Address is required" })}
            InputProps={inputProps}
            InputLabelProps={labelProps}
            sx={getInputStyles()}
          />
        </Grid>
      </Grid>
    ),
  });
}
