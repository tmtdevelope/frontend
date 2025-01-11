import { Controller, FieldErrors, Control } from "react-hook-form";
import GooglePlacesAutocomplete from "@/app/dashboard/forms/components/GoogleMapsScript";
import { FormHelperText } from "@mui/material";

interface AddressInputProps {
  control: Control<any>;
  errors: FieldErrors<any>;
  isDarkTheme: boolean;
  getInputStyles: () => object;
  labelProps: object;
}

export const AddressInput = ({
  control,
}: AddressInputProps) => {
  return (
    <Controller
      name="facilityAddress"
      control={control}
      rules={{ required: "Facility Address is required" }}
      render={({ field, fieldState }) => (
        <>
          <GooglePlacesAutocomplete
            label="Facility Address *"
            onPlaceSelected={(place: any) => {
              field.onChange(place.address);
            }}
            error={!!fieldState.error}
            helperText={fieldState.error?.message ?? ""}
          />
        </>
      )}
    />
  );
};
