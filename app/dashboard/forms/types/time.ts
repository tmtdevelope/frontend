
export interface TimePickerBaseProps {
  value: string | null;
  onChange: (value: string | null) => void;
  error?: boolean;
  helperText?: string;
}

export interface CustomTimePickerProps extends TimePickerBaseProps {
  label: string;
}

export type TimeView = 'hours' | 'minutes' | 'seconds';

export interface TimePickerSlotProps {
  textField: {
    fullWidth: boolean;
    error?: boolean;
    helperText?: string;
    sx?: any;
  };
}