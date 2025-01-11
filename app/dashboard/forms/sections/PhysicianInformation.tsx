"use client"; // إذا كنت لا تستخدم هذا في بيئة الخادم، يمكنك حذفه

import {
  Grid,
  TextField,
  Autocomplete,
  Box,
  CircularProgress,
} from "@mui/material";
import { useFormTheme } from "../utils/theme";
import {
  UseFormRegister,
  FieldValues,
  UseFormSetValue,
  useWatch,
  Control,
} from "react-hook-form";
import { FormDataInsurance } from "../types/form";
import { diagnosticCodes } from "../constants/form";
import { inputLabelStyles, outlinedInputStyles } from "./styles";
import { useEffect, useState, useCallback } from "react";

interface Doctor {
  number: string;
  npi: string;
  name: string;
  label: string;
  telephone_number?: string;
  fax_number?: string;
}

interface StaffPhysicianSectionProps {
  register: UseFormRegister<FormDataInsurance>;
  setValue: UseFormSetValue<FormDataInsurance>;
  errors: FieldValues;

  control: Control<FormDataInsurance>;

  renderFormSection: (props: {
    title: string;
    children: React.ReactNode;
  }) => JSX.Element;
}

export function StaffPhysicianSection({
  register,
  setValue,
  errors,
  control,
  renderFormSection,
}: StaffPhysicianSectionProps) {
  const { getInputStyles, inputProps, labelProps, isDarkTheme } =
    useFormTheme();
  const [doctorNames, setDoctorNames] = useState<Doctor[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [npi, setNpi] = useState<string>("");
  const staffPhysicianName = useWatch({ control, name: "staffPhysicianName" });
  const phoneNumberNPI = useWatch({ control, name: "phoneNumberNPI" });
  const faxNumber = useWatch({ control, name: "faxNumber" });
  const fetchDoctorNames = useCallback(async (npi: string) => {
    setLoading(true);
    try {
      const response = await fetch(`http://localhost:8080/api/npi/${npi}`);
      const data = await response.json();
      if (data.results && data.results.length > 0) {
        const names = data.results.map((item: any) => ({
          label: ` ${item.number}`,
          npi: item.number,
          name: `${item.basic.name_prefix} ${item.basic.first_name} ${item.basic.middle_name} ${item.basic.last_name}`,
          fax_number: `${item.addresses[0].fax_number} `,
          telephone_number: `${item.addresses[0].telephone_number}`,
        }));
        setDoctorNames(names);
      } else {
        setDoctorNames([]);
      }
    } catch (error) {
      console.error("Error fetching data: ", error);
      setDoctorNames([]);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (npi.length === 10) {
      fetchDoctorNames(npi);
    } else {
      setDoctorNames([]);
    }
  }, [npi, fetchDoctorNames]);

  useEffect(() => {
    if (doctorNames.length > 0) {
      const selectedDoctor = doctorNames[0];
      setValue("npiNumber", selectedDoctor.npi || "", { shouldValidate: true });
      setValue("staffPhysicianName", selectedDoctor.name || "", {
        shouldValidate: true,
      });
      setValue("phoneNumberNPI", selectedDoctor.telephone_number || "", {
        shouldValidate: true,
      });
      setValue("faxNumber", selectedDoctor.fax_number || "", {
        shouldValidate: true,
      });
    }
  }, [doctorNames, setValue]);

  const diagnosticCodesWithKeys = diagnosticCodes
    .map((item, index) => ({
      ...item,
      key: `${item.code}-${item.description}-${index}`,
    }))
    .filter(
      (item, index, self) =>
        self.findIndex(
          (t) => t.code === item.code && t.description === item.description,
        ) === index,
    );

  return renderFormSection({
    title: "Staff/Physician Information",
    children: (
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Autocomplete
            options={diagnosticCodesWithKeys}
            slotProps={{
              paper: {
                sx: {
                  "& .MuiAutocomplete-listbox": {
                    backgroundColor: isDarkTheme ? "#333" : "#fff",
                    "& .MuiAutocomplete-option": {
                      ...getInputStyles(),
                      ...inputLabelStyles(isDarkTheme),
                      ...outlinedInputStyles(isDarkTheme),
                      color: isDarkTheme ? "#fff" : "#000",
                    },
                  },
                },
              },
            }}
            getOptionLabel={(option) =>
              `${option.code} - ${option.description}`
            }
            renderInput={(params) => (
              <TextField
                {...params}
                label="Diagnostic Code *"
                error={!!errors.diagnosticCode?.message}
                helperText={errors.diagnosticCode?.message}
                {...register("diagnosticCode", {
                  required: "Diagnostic Code is required",
                })}
                InputProps={{
                  ...params.InputProps,
                  ...inputProps,
                }}
                InputLabelProps={labelProps}
                sx={getInputStyles()}
              />
            )}
            onChange={(event, value) => {
              const code = value?.code || "";
              setValue("diagnosticCode", code);
            }}
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <Autocomplete
            options={doctorNames}
            getOptionLabel={(option: Doctor) => option?.label || ""}
            loading={loading}
            renderInput={(params) => (
              <TextField
                {...params}
                label="NPI Number *"
                error={!!errors.npiNumber}
                helperText={errors.npiNumber?.message}
                {...register("npiNumber", {
                  required: "NPI Number is required",
                })}
                InputProps={{
                  ...params.InputProps,
                  ...inputProps,
                }}
                InputLabelProps={labelProps}
                sx={getInputStyles()}
              />
            )}
            onChange={(event, value: Doctor | null) => {
              setValue("npiNumber", value?.npi || "", { shouldValidate: true });
              setValue("staffPhysicianName", value?.name || "", {
                shouldValidate: true,
              });
            }}
            onInputChange={(event, value) => {
              if (value.trim() !== "") {
                setNpi(value);
              } else {
                setNpi("");
              }
            }}
            renderOption={(props, option: Doctor) => {
              const { key, ...restProps } = props;
              return (
                <Box component="li" key={option.npi} {...restProps}>
                  {loading ? <CircularProgress size={24} /> : option.label}
                </Box>
              );
            }}
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            label="Staff/Physician Name *"
            error={!!errors.staffPhysicianName}
            helperText={errors.staffPhysicianName?.message}
            {...register("staffPhysicianName", {
              required: "Staff/Physician Name is required",
            })}
            InputProps={inputProps}
            InputLabelProps={{
              ...labelProps,
              shrink: !!errors.staffPhysicianName || !!staffPhysicianName, // رفع الـ placeholder إذا كانت القيمة موجودة
            }}
            sx={getInputStyles()}
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            label="Phone Number *"
            error={!!errors.phoneNumberNPI}
            helperText={errors.phoneNumberNPI?.message}
            {...register("phoneNumberNPI", {
              required: "Phone Number is required",
            })}
            InputProps={inputProps}
            InputLabelProps={{
              ...labelProps,
              shrink: !!errors.phoneNumberNPI || !!phoneNumberNPI,
            }}
            sx={getInputStyles()}
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            label="Fax Number *"
            error={!!errors.faxNumber}
            helperText={errors.faxNumber?.message}
            {...register("faxNumber", { required: "Fax Number Is Required" })}
            InputProps={inputProps}
            InputLabelProps={{
              ...labelProps,
              shrink: !!errors.faxNumber || !!faxNumber,
            }}
            sx={getInputStyles()}
          />
        </Grid>
      </Grid>
    ),
  });
}
