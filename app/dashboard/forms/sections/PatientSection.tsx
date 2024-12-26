"use client";

import { Grid, TextField } from "@mui/material";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers";
import { useTheme } from "next-themes";
import { Controller } from "react-hook-form";
import GooglePlacesAutocomplete from "../components/GoogleMapsScript";
import { useFormTheme } from "../utils/theme";

export function PatientSection({
  register,
  errors,
  setValue,
  control,
  renderFormSection,
}: any) {
  const { theme } = useTheme();

  const isDarkTheme = theme === "dark";
  const currentDate = new Date();
  const { getInputStyles, inputProps, labelProps } = useFormTheme();

  return renderFormSection({
    title: "Patient Information",
    children: (
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            label="Patient Name  "
            {...register("patientName", {})}
            InputProps={inputProps}
            InputLabelProps={labelProps}
            sx={getInputStyles()}
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              label="Date of Birth "
              onChange={(date) => setValue("dateOfBirth", date)}
              maxDate={new Date(currentDate.setDate(currentDate.getDate() - 1))}
              slotProps={{
                textField: {
                  fullWidth: true,

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
            label="Patient Weight (in lbs) *"
            type="number"
            {...register("weight", { required: "Weight is required" })}
            InputProps={inputProps}
            InputLabelProps={labelProps}
            sx={getInputStyles()}
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <Controller
            name="address"
            control={control}
            rules={{ required: "Address is required" }}
            render={({ field, fieldState }) => (
              <GooglePlacesAutocomplete
                label="Address *"
                onPlaceSelected={(place) => {
                  setValue("address", place.address);
                  setValue("addressLat", place.lat);
                  setValue("addressLng", place.lng);
                }}
                error={!!fieldState.error}
                helperText={fieldState.error?.message ?? ""}
              />
            )}
          />
        </Grid>
      </Grid>
    ),
  });
}
