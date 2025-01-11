"use client";

import { Grid, TextField } from "@mui/material";
import { useFormTheme } from "../utils/theme";

export function RequesterSection({ register, errors, renderFormSection }: any) {
  const { getInputStyles, inputProps, labelProps } = useFormTheme();

  return renderFormSection({
    title: "Requester Information",
    children: (
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            label="Requester Name *"
            error={!!errors.requesterName}
            helperText={errors.requesterName?.message}
            InputProps={inputProps}
            InputLabelProps={labelProps}
            {...register("requesterName", {
              required: "Requester Name is required",
            })}
            sx={getInputStyles()}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            label="Requester Phone Number *"
            error={!!errors.requesterPhone}
            helperText={errors.requesterPhone?.message}
            {...register("requesterPhone", {
              required: "Requester Phone Number is required",
            })}
            InputProps={inputProps}
            InputLabelProps={labelProps}
            sx={getInputStyles()}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            label="Requester Email *"
            type="email"
            error={!!errors.requesterEmail}
            helperText={errors.requesterEmail?.message}
            {...register("requesterEmail", {
              required: "Requester Email is required",
            })}
            InputProps={inputProps}
            InputLabelProps={labelProps}
            sx={getInputStyles()}
          />
        </Grid>
      </Grid>
    ),
  });
}
