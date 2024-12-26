import {
  Grid,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
} from "@mui/material";
import { DatePicker, MobileTimePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { useTheme } from "next-themes";
import { FormSectionProps } from "../types/form";
import { tripTypes } from "../constants/form";
import {
  baseSelectStyles,
  baseMenuItemStyles,
  inputLabelStyles,
  outlinedInputStyles,
} from "./styles";
import { useFormTheme } from "../utils/theme";
import { Controller } from "react-hook-form";
import GooglePlacesAutocomplete from "../components/GoogleMapsScript";
import { useState, useEffect, useCallback } from "react";
import { calculateDistanceAndDuration } from "../utils/calculateDistanceAndDuration";

export function TransportSection({
  register,
  errors,
  control,
  watch,
  setValue,
  renderFormSection,
}: FormSectionProps) {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const { getInputStyles, inputProps, labelProps, isDarkTheme } =
    useFormTheme();
  const inputStyles = {
    "& .MuiOutlinedInput-root": {
      backgroundColor: isDark ? "rgba(255, 255, 255, 0.05)" : "transparent",
      "& fieldset": {
        borderColor: isDark
          ? "rgba(255, 255, 255, 0.23)"
          : "rgba(0, 0, 0, 0.23)",
      },
      "&:hover fieldset": {
        borderColor: isDark ? "#90caf9" : "#1976d2",
      },
    },
    "& .MuiInputLabel-root": {
      color: isDark ? "#b3b3b3" : "#666666",
    },
    "& .MuiOutlinedInput-input": {
      color: isDark ? "#ffffff" : "#000000",
    },
  };

  const [distance, setDistance] = useState<string | null>(null);
  const [duration, setDuration] = useState<string | null>(null);

  const pickupAddress = watch("pickupAddress");
  const dropoffAddress = watch("dropoffAddress");

  const handlePlaceSelected = useCallback(async (
    pickupAddress: string,
    dropoffAddress: string
  ) => {
    if (pickupAddress && dropoffAddress) {
      try {
        const result = await calculateDistanceAndDuration(
          pickupAddress,
          dropoffAddress
        );
        console.log("Distance and Duration:", result);
        setDistance(result.distance);
        setDuration(result.duration);
        setValue("distance", result.distance);
        setValue("duration", result.duration);
      } catch (error) {
        console.error("Error calculating distance and duration:", error);
      }
    }
  }, [setValue]);

  useEffect(() => {
    if (pickupAddress && dropoffAddress) {
      handlePlaceSelected(pickupAddress, dropoffAddress);
    }
  }, [pickupAddress, dropoffAddress, handlePlaceSelected]);

  return renderFormSection({
    title: "Transport Details",
    children: (
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Controller
              name="pickupDate"
              control={control}
              rules={{ required: "Pickup Date is required" }}
              render={({ field }) => (
                <DatePicker
                  label="Pickup Date"
                  onChange={(date) => setValue("pickupDate", date)}
                  value={field.value || null}
                  minDate={new Date()}
                  slotProps={{
                    textField: {
                      fullWidth: true,
                      error: !!errors.pickupDate?.message,
                      helperText: errors.pickupDate?.message,
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
              )}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <Controller
              name="pickupTime"
              control={control}
              rules={{ required: "Pickup Time is required" }}
              defaultValue={null}
              render={({ field }) => (
                <MobileTimePicker
                  label="Pickup Time *"
                  value={field.value || null}
                  onChange={(newTime) => {
                    setValue("pickupTime", newTime);
                  }}
                  slotProps={{
                    textField: {
                      fullWidth: true,
                      error: !!errors.pickupTime?.message,
                      helperText: errors.pickupTime?.message,
                      sx: {
                        ...inputStyles,
                        "& .MuiInputBase-input": {
                          cursor: "pointer !important",
                        },
                      },
                    },
                  }}
                />
              )}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <Controller
              name="pickupAddress"
              control={control}
              rules={{ required: "Pickup Address is required" }}
              render={({ field, fieldState }) => (
                <GooglePlacesAutocomplete
                  label="Pickup Address *"
                  onPlaceSelected={(place) => {
                    setValue("pickupAddress", place.address);
                  }}
                  error={!!fieldState.error}
                  helperText={fieldState.error?.message ?? ""}
                />
              )}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Controller
              name="dropoffAddress"
              control={control}
              rules={{ required: "Drop-off Address is required" }}
              render={({ field, fieldState }) => (
                <GooglePlacesAutocomplete
                  label="Drop-off Address *"
                  onPlaceSelected={(place) => {
                    setValue("dropoffAddress", place.address);
                  }}
                  error={!!fieldState.error}
                  helperText={fieldState.error?.message ?? ""}
                />
              )}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <Controller
              name="appointmentTime"
              control={control}
              rules={{ required: "Time is required" }}
              defaultValue={null}
              render={({ field }) => (
                <MobileTimePicker
                  label="appointment Time *"
                  value={field.value || null}
                  onChange={(newTime) => field.onChange(newTime)}
                  slotProps={{
                    textField: {
                      fullWidth: true,
                      error: !!errors.appointmentTime?.message,
                      helperText: errors.appointmentTime?.message,
                      sx: {
                        ...inputStyles,
                        "& .MuiInputBase-input": {
                          cursor: "pointer !important",
                        },
                      },
                    },
                  }}
                />
              )}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Room Number"
              {...register("roomNumber")}
              sx={inputStyles}
            />
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              ...getInputStyles(),
              ...inputLabelStyles(isDarkTheme),
              ...outlinedInputStyles(isDarkTheme),
            }}
          >
            <FormControl
              fullWidth
              error={!!errors.tripType?.message}
              {...labelProps}
            >
              <InputLabel {...labelProps}>Trip Type *</InputLabel>
              <Controller
                name="tripType"
                control={control}
                rules={{ required: "Trip Type is required" }}
                defaultValue=""
                render={({ field }) => (
                  <Select
                    {...field}
                    label="Trip Type *"
                    sx={baseSelectStyles(isDarkTheme)}
                    MenuProps={{
                      PaperProps: {
                        sx: {
                          bgcolor: isDarkTheme ? "rgb(51, 51, 51)" : "#fff",
                        },
                      },
                    }}
                  >
                    {tripTypes.map(({ value, label }: any) => (
                      <MenuItem
                        key={value}
                        value={value}
                        sx={{
                          ...baseMenuItemStyles(isDarkTheme),
                          backgroundColor: isDarkTheme
                            ? "rgb(51, 51, 51)"
                            : "#fff",
                        }}
                      >
                        {label}
                      </MenuItem>
                    ))}
                  </Select>
                )}
              />
              {errors.tripType && (
                <FormHelperText>{errors.tripType.message}</FormHelperText>
              )}
            </FormControl>
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Number of Passengers *"
              type="number"
              error={!!errors.passengerCount?.message}
              helperText={errors.passengerCount?.message}
              {...register("passengerCount", {
                required: "Number of Passengers is required",
              })}
              InputProps={inputProps}
              InputLabelProps={labelProps}
              sx={getInputStyles()}
            />
          </Grid>
        </Grid>
      </LocalizationProvider>
    ),
  });
}