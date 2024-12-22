
'use client';

import { Grid, TextField } from '@mui/material';
import { useFormTheme } from '../utils/theme';
import { FormSectionProps } from '../types/form';

export function BillingSection({ register, renderFormSection }: FormSectionProps) {
  const { getInputStyles, inputProps, labelProps } = useFormTheme();

  return renderFormSection({
    title: 'Billing Information',
    children: (
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            label="Billing Address"
            {...register('billingAddress1')}
            InputProps={inputProps}
            InputLabelProps={labelProps}
            sx={getInputStyles()}
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            label="City"
            {...register('city')}
            InputProps={inputProps}
            InputLabelProps={labelProps}
            sx={getInputStyles()}
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            label="Zip Code"
            {...register('zipCode')}
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
            {...register('email')}
            InputProps={inputProps}
            InputLabelProps={labelProps}
            sx={getInputStyles()}
          />
        </Grid>
      </Grid>
    ),
  });
}