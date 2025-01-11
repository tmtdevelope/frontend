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
  Checkbox,
  FormGroup,
  FormLabel,
  SelectChangeEvent,
} from "@mui/material";
import {
  assistanceOptions,
  assistanceTransportation,
  needWheelchairOptions,
  oxygenOptions,
  serviceTypes,
  stairsAssistanceOptions,
  wheelchairSizes,
} from "../../../forms/constants/form";
import { FormSectionProps } from "../../../forms/types/form";

// Import styles from the new file
import {
  baseSelectStyles,
  baseMenuItemStyles,
  radioStyles,
  inputLabelStyles,
  outlinedInputStyles,
} from "../../../forms/sections/styles";
import { useFormTheme } from "@/app/dashboard/forms/utils/theme";
import { useState } from "react";
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
) => (
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
          sx: { bgcolor: isDarkTheme ? "rgb(51, 51, 51)" : "#fff" },
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

const AssistanceCheckboxGroup = ({
  selectedAssistances,
  handleChange,
  error,
  setValue,
}: {
  selectedAssistances: string[];
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  error: boolean;
  setValue: (name: string, value: any) => void;
}) => {
  const handleAssistanceChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const value = event.target.value;
    const newSelectedAssistances = selectedAssistances.includes(value)
      ? selectedAssistances.filter((item) => item !== value)
      : [...selectedAssistances, value];

    // تأكد من تحديث selectedAssistances في react-hook-form باستخدام setValue
    setValue("selectedAssistances", newSelectedAssistances);
    handleChange(event); // حفظ المعالجة الأصلية
  };

  return (
    <FormControl component="fieldset" error={error} fullWidth>
      <FormLabel component="legend">
        Please select assistance (select one or more) *
      </FormLabel>
      <FormGroup row className="gap-4">
        {assistanceOptions.map((option) => (
          <FormControlLabel
            key={option}
            control={
              <Checkbox
                checked={selectedAssistances.includes(option)}
                onChange={handleAssistanceChange}
                value={option}
              />
            }
            label={option}
          />
        ))}
      </FormGroup>
      {error && (
        <FormHelperText className="text-red-500 mt-2 text-sm">
          Please select at least one option
        </FormHelperText>
      )}
    </FormControl>
  );
};

export function ServiceSection({
  register,
  errors,
  setValue,
  control,
  watch,
  renderFormSection,
}: FormSectionProps) {
  const { getInputStyles, inputProps, labelProps, isDarkTheme } =
    useFormTheme();
  const serviceType = watch?.("serviceType") || "";
  const stairsAssistance = watch?.("stairsAssistance") || "";
  const requiresOxygen = watch?.("requiresOxygen") || "";
  const [needAssistance, setNeedAssistance] = useState("");
  const [selectedAssistances, setSelectedAssistances] = useState<string[]>([]);

  const handleAssistanceChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const { value } = event.target;
    setSelectedAssistances(
      (prev) =>
        prev.includes(value)
          ? prev.filter((item) => item !== value) // Remove if already selected
          : [...prev, value], // Add if not selected
    );
  };

  const handleNeedAssistance = (event: SelectChangeEvent<string>) => {
    setNeedAssistance(event.target.value as string);
    setSelectedAssistances([]); // Reset selections when changing the answer
  };

  return renderFormSection({
    title: "Service Type",
    children: (
      <Grid container spacing={3}>
        {/* Question about assistance during transportation */}
        <Grid item xs={12} md={6}>
          <FormControl
            fullWidth
            error={!!errors?.needAssistance}
            sx={{
              ...getInputStyles(),
              ...inputLabelStyles(isDarkTheme),
              ...outlinedInputStyles(isDarkTheme),
            }}
          >
            <InputLabel {...labelProps}>
              Do you need assistance during transportation? *
            </InputLabel>
            <Controller
              name="needAssistance"
              control={control}
              defaultValue={needAssistance}
              render={({ field }) => (
                <Select
                  {...field}
                  value={field.value || ""}
                  onChange={(e) => {
                    field.onChange(e);
                    handleNeedAssistance(e);
                  }}
                  required
                  sx={baseSelectStyles(isDarkTheme)}
                  MenuProps={{
                    PaperProps: {
                      sx: { bgcolor: isDarkTheme ? "rgb(51, 51, 51)" : "#fff" },
                    },
                  }}
                >
                  {assistanceTransportation.map((option) => (
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
            {errors?.needAssistance && (
              <FormHelperText sx={{ color: "error.main" }}>
                {errors?.needAssistance?.message}
              </FormHelperText>
            )}
          </FormControl>
        </Grid>

        {needAssistance === "yes" && (
          <Grid item xs={12}>
            <AssistanceCheckboxGroup
              selectedAssistances={selectedAssistances}
              handleChange={handleAssistanceChange}
              error={selectedAssistances.length === 0}
              setValue={setValue}
            />
          </Grid>
        )}

        {/* Wheelchair Section */}
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
                      label="Do you need a rental wheelchair? *"
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
              </FormControl>
            </Grid>
          </>
        )}

        <Grid item xs={12} md={6} sx={getInputStyles()}>
          {renderSelectField(
            "Stairs Assistance",
            "stairsAssistance",
            stairsAssistanceOptions,
            register,
            stairsAssistance,
            inputProps,
            labelProps,
            isDarkTheme,
          )}
        </Grid>
        {stairsAssistance === "yes" && (
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              type="number"
              {...register("assistantsCount")}
              label="Number of Assistants Needed"
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
            <InputLabel {...labelProps}>Do you require oxygen?</InputLabel>
            <Select
              label="Do you require oxygen?"
              value={requiresOxygen}
              {...register("requiresOxygen")}
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
              label="Oxygen Flow Rate (L/min)"
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
