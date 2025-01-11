import React from "react";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
 
} from "@mui/material";
import { Controller, FieldErrors, Control } from "react-hook-form";
import {
  baseSelectStyles,
  baseMenuItemStyles,
  inputLabelStyles,
  outlinedInputStyles,
} from "../styles";

const jobTitles = [
  "Supervisor",
  "Case Manager",
  "Nurse",
  "Transportation Coordinator",
  "Appointment Coordinator",
  "Dispatch Coordinator",
  "Operations Assistant",
  "Conservator, Family Member, or Legal Guardian",
  "Other",
];

interface JobTitleSelectProps {
  control: Control<any>;
  errors: FieldErrors<any>;
  isDarkTheme: boolean;
  getInputStyles: () => object;
  labelProps: object;
}

export const JobTitleSelect: React.FC<JobTitleSelectProps> = ({
  control,
  errors,
  isDarkTheme,
  getInputStyles,
  labelProps,
}) => {
  return (
    <FormControl
      fullWidth
      error={!!errors.jobTitle}
      sx={{
        ...getInputStyles(),
        ...inputLabelStyles(isDarkTheme),
        ...outlinedInputStyles(isDarkTheme),
      }}
    >
      <InputLabel {...labelProps}>Please select your work title *</InputLabel>
      <Controller
        name="jobTitle"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <Select
            {...field}
            label="Please select your work title"
            sx={baseSelectStyles(isDarkTheme)}
            MenuProps={{
              PaperProps: {
                sx: {
                  bgcolor: isDarkTheme ? "rgb(51, 51, 51)" : "#fff",
                },
              },
            }}
          >
            {jobTitles.map((title) => (
              <MenuItem
                key={title}
                value={title}
                sx={{
                  ...baseMenuItemStyles(isDarkTheme),
                  backgroundColor: isDarkTheme ? "rgb(51, 51, 51)" : "#fff",
                }}
              >
                {title}
              </MenuItem>
            ))}
          </Select>
        )}
      />
    </FormControl>
  );
};
