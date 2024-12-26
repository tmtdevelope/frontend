 import { MobileTimePicker } from "@mui/x-date-pickers";

export function TimeInput({ label, value, onChange, error, inputStyles }: any) {
  return (
    <MobileTimePicker
      label={label}
      value={value}
      onChange={onChange}
      slotProps={{
        textField: {
          fullWidth: true,
          error: !!error,
          helperText: error || "",
          sx: {
            ...inputStyles,
            "& .MuiInputBase-input": {
              cursor: "pointer !important",
            },
          },
        },
      }}
    />
  );
}
