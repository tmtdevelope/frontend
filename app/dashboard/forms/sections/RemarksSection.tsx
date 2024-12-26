'use client';

import { Grid, TextField } from '@mui/material';
 import { useFormTheme } from '../utils/theme';
export function RemarksSection({ register, renderFormSection }: any) {
  const { getInputStyles, inputProps, labelProps } = useFormTheme();

  return renderFormSection({
    title: 'Remarks',
    children: (
      <Grid item xs={12}>
        <TextField
          fullWidth
          multiline
          rows={4}
          label="Additional Notes"
          {...register('remarks')}
          InputProps={inputProps}
          InputLabelProps={labelProps}
          sx={getInputStyles()}
        />
      </Grid>
    ),
  });
}
