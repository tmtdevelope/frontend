"use client";

import {
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  RadioGroup,
  FormControlLabel,
  Radio,
  FormHelperText,
  TextField,
} from "@mui/material";
import { useFormTheme } from "../utils/theme";
import {
  oxygenOptions,
  serviceTypes,
  stairsAssistanceOptions,
  wheelchairSizes,
  needWheelchairOptions,
} from "../constants/form";
import { FormSectionProps } from "../types/form";

// Import styles from the new file
import {
  baseSelectStyles,
  baseMenuItemStyles,
  radioStyles,
  inputLabelStyles,
  outlinedInputStyles,
} from "./styles";
import { Controller } from "react-hook-form";

const renderSelectField = (
  label: string,
  name: string,
  options: { label: string; value: string }[],
  register: any,
  value: string,
  inputProps: any,
  labelProps: any,
  isDarkTheme: boolean,
) => {
  return (
    <FormControl fullWidth>
      <InputLabel {...labelProps}>{label}</InputLabel>
      <Select
        label={label}
        {...register(name)}
        value={value || ""}
        {...inputProps}
        sx={baseSelectStyles(isDarkTheme)}
        MenuProps={{
          PaperProps: {
            sx: {
              bgcolor: isDarkTheme ? "rgb(51, 51, 51)" : "#fff",
            },
          },
        }}
      >
        {options.map((option) => (
          <MenuItem
            key={option.value}
            value={option.value}
            sx={{
              ...baseMenuItemStyles(isDarkTheme),
              backgroundColor: isDarkTheme ? "rgb(51, 51, 51)" : "#fff",
            }}
          >
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

// Main component
export function ServiceSection({
  register,
  errors,
  control,
  setValue,
  watch,
  renderFormSection,
}: FormSectionProps) {
  const { getInputStyles, inputProps, labelProps, isDarkTheme } =
    useFormTheme();
  const serviceType = watch?.("serviceType") || "";
  const stairsAssistance = watch?.("stairsAssistance") || "";
  const requiresOxygen = watch?.("requiresOxygen") || "";

  return renderFormSection({
    title: "Service Type",
    children: (
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <FormControl
            fullWidth
            error={!!errors?.serviceType}
            sx={{
              ...getInputStyles(),
              ...inputLabelStyles(isDarkTheme),
              ...outlinedInputStyles(isDarkTheme),
            }}
          >
            <InputLabel {...labelProps}>Service Type *</InputLabel>
            <Select
              label="Service Type"
              {...register("serviceType", {
                required: "This field is required",
              })}
              value={serviceType || ""}
              sx={baseSelectStyles(isDarkTheme)}
              MenuProps={{
                PaperProps: {
                  sx: {
                    bgcolor: isDarkTheme ? "rgb(51, 51, 51)" : "#fff",
                  },
                },
              }}
            >
              {serviceTypes.map((option) => (
                <MenuItem
                  key={option.value}
                  value={option.value}
                  sx={{
                    ...baseMenuItemStyles(isDarkTheme),
                    backgroundColor: isDarkTheme ? "rgb(51, 51, 51)" : "#fff",
                  }}
                >
                  {option.label}
                </MenuItem>
              ))}
            </Select>
            {errors?.serviceType && (
              <FormHelperText sx={{ color: "error.main" }}>
                {errors?.serviceType?.message}
              </FormHelperText>
            )}
          </FormControl>
        </Grid>

        {/* Wheelchair Section */}
        {serviceType === "wheelchair" && (
          <>
            <Grid item xs={12} md={6}>
              <FormControl
                component="fieldset"
                sx={{
                  "& .MuiFormLabel-root": {
                    color: isDarkTheme ? "rgba(255, 255, 255, 0.7)" : undefined,
                  },
                }}
              >
                <Controller
                  name="wheelchairSize"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      row
                      {...field}
                      sx={radioStyles(isDarkTheme)}
                    >
                      {wheelchairSizes.map((size) => (
                        <FormControlLabel
                          key={size.value}
                          value={size.value}
                          control={<Radio />}
                          label={size.label}
                        />
                      ))}
                    </RadioGroup>
                  )}
                />
              </FormControl>
            </Grid>

            <Grid item xs={12} md={6}>
              <FormControl
                fullWidth
                error={!!errors?.needsWheelchair}
                sx={{
                  ...getInputStyles(),
                  ...inputLabelStyles(isDarkTheme),
                  ...outlinedInputStyles(isDarkTheme),
                }}
              >
                <InputLabel {...labelProps}>
                  Do you need a rental wheelchair?
                </InputLabel>
                <Controller
                  name="needsWheelchair"
                  control={control}
                  render={({ field }) => (
                    <Select
                      label="Do you need a rental wheelchair?"
                      value={field.value || ""}
                      onChange={(e) => {
                        field.onChange(e);
                        setValue("needsWheelchair", e.target.value);
                      }}
                      sx={baseSelectStyles(isDarkTheme)}
                      MenuProps={{
                        PaperProps: {
                          sx: {
                            bgcolor: isDarkTheme ? "rgb(51, 51, 51)" : "#fff",
                          },
                        },
                      }}
                    >
                      {needWheelchairOptions.map((option) => (
                        <MenuItem
                          key={option.value}
                          value={option.value}
                          sx={{
                            ...baseMenuItemStyles(isDarkTheme),
                            backgroundColor: isDarkTheme
                              ? "rgb(51, 51, 51)"
                              : "#fff",
                          }}
                        >
                          {option.label}
                        </MenuItem>
                      ))}
                    </Select>
                  )}
                />
                {/* إزالة رسالة الخطأ إذا لم يكن الحقل مطلوبًا */}
              </FormControl>
            </Grid>
          </>
        )}

        {/* stairs Assistance */}
        <Grid item xs={12} md={6} sx={getInputStyles()}>
          {renderSelectField(
            "Stairs Assistance *",
            "stairsAssistance",
            stairsAssistanceOptions,
            register,
            stairsAssistance,
            inputProps,
            labelProps,
            isDarkTheme,
          )}
          {errors?.stairsAssistance && (
            <FormHelperText sx={{ color: "error.main" }}>
              {errors?.stairsAssistance?.message}
            </FormHelperText>
          )}
        </Grid>
        {stairsAssistance === "yes" && (
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              type="number"
              label="Number of Assistants Needed *"
              {...register("assistantsCount")}
              InputProps={inputProps}
              InputLabelProps={labelProps}
              sx={getInputStyles()}
            />
            {errors?.assistantsCount && (
              <FormHelperText sx={{ color: "error.main" }}>
                {errors?.assistantsCount?.message}
              </FormHelperText>
            )}
          </Grid>
        )}
        {/* Oxygen Requirement Section */}
        <Grid item xs={12} md={6}>
          <FormControl
            fullWidth
            error={!!errors?.requiresOxygen}
            sx={getInputStyles()}
          >
            <InputLabel {...labelProps}>Do you require oxygen? *</InputLabel>
            <Select
              label="Do you require oxygen? *"
              value={requiresOxygen}
              {...register("requiresOxygen", {
                required: "Please select an option",
              })}
              sx={baseSelectStyles(isDarkTheme)}
              MenuProps={{
                PaperProps: {
                  sx: {
                    bgcolor: isDarkTheme ? "rgb(51, 51, 51)" : "#fff",
                  },
                },
              }}
            >
              {oxygenOptions.map((option) => (
                <MenuItem
                  key={option.value}
                  value={option.value}
                  sx={{
                    ...baseMenuItemStyles(isDarkTheme),
                    backgroundColor: isDarkTheme ? "rgb(51, 51, 51)" : "#fff",
                  }}
                >
                  {option.label}
                </MenuItem>
              ))}
            </Select>
            {errors?.requiresOxygen && (
              <FormHelperText sx={{ color: "error.main" }}>
                {errors?.requiresOxygen?.message}
              </FormHelperText>
            )}
          </FormControl>
        </Grid>

        {requiresOxygen === "yes" && (
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              type="number"
              label="Oxygen Flow Rate (L/min) *"
              {...register("oxygenFlowRate")}
              InputProps={inputProps}
              InputLabelProps={labelProps}
              sx={getInputStyles()}
            />
            {errors?.oxygenFlowRate && (
              <FormHelperText sx={{ color: "error.main" }}>
                {errors?.oxygenFlowRate?.message}
              </FormHelperText>
            )}
          </Grid>
        )}
      </Grid>
    ),
  });
}
