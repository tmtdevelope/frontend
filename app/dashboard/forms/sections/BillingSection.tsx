"use client";

import { Grid, TextField } from "@mui/material";
import { useFormTheme } from "../utils/theme";
import { FormSectionProps } from "../types/form";
import { Controller } from "react-hook-form";
import GooglePlacesAutocomplete from "../components/GoogleMapsScript";

export function BillingSection({
  register,
  renderFormSection,
  control,
  setValue,
}: FormSectionProps) {
  const { getInputStyles, inputProps, labelProps } = useFormTheme();

  return renderFormSection({
    title: "Billing Information",
    children: (
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Controller
            name="billingAddress"
            control={control}
            rules={{ required: "Billing Address is required" }}
            render={({ field, fieldState }) => (
              <GooglePlacesAutocomplete
                label="Billing Address *"
                onPlaceSelected={(place) => {
                  setValue("billingAddress", place.address);
                }}
                error={!!fieldState.error}
                helperText={fieldState.error?.message ?? ""}
              />
            )}
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <Controller
            name="city"
            control={control}
            rules={{ required: "City is required" }}
            render={({ field, fieldState }) => (
              <GooglePlacesAutocomplete
                label="City *"
                onPlaceSelected={(place: any) => {
                  setValue("city", place.address);
                }}
                error={!!fieldState.error}
                helperText={fieldState.error?.message ?? ""}
              />
            )}
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            label="Zip Code"
            {...register("zipCode")}
            InputProps={inputProps}
            InputLabelProps={labelProps}
            sx={getInputStyles()}
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            label="Email"
            type="email"
            {...register("email")}
            InputProps={inputProps}
            InputLabelProps={labelProps}
            sx={getInputStyles()}
          />
        </Grid>
      </Grid>
    ),
  });
}
