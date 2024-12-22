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
                  value={field.value || null} // التأكد من أن القيمة هي null أو تاريخ صالح
                  minDate={new Date()} // التأكد من أن التاريخ الحالي هو الحد الأدنى
                  slotProps={{
                    textField: {
                      fullWidth: true,
                      error: !!errors.pickupDate?.message, // التأكد من أن الخطأ يتعلق بالحقل الصحيح
                      helperText: errors.pickupDate?.message, // التأكد من الرسالة الصحيحة
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
            <TextField
              fullWidth
              label="Pickup Address *"
              error={!!errors.pickupAddress?.message}
              helperText={errors.pickupAddress?.message}
              {...register("pickupAddress", {
                required: "Pickup Address is required",
              })}
              InputProps={inputProps}
              InputLabelProps={labelProps}
              sx={getInputStyles()}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Drop-off Address *"
              error={!!errors.dropoffAddress?.message}
              helperText={errors.dropoffAddress?.message}
              {...register("dropoffAddress", {
                required: "Drop-off Address is required",
              })}
              InputProps={inputProps}
              InputLabelProps={labelProps}
              sx={getInputStyles()}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <Controller
              name="appointmentTime"
              control={control}
              rules={{ required: "Delivery Time is required" }}
              defaultValue={null}
              render={({ field }) => (
                <MobileTimePicker
                  label="appointment Delivery Time *"
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
