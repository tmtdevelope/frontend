"use client";
import { useEffect, useRef, useState } from "react";
import { TextField } from "@mui/material";
import { useFormTheme } from "../utils/theme";
import { loadGoogleMapsScript } from "../utils/loadGoogleMapsScript";

interface GooglePlacesAutocompleteProps {
  label: string;
  error: boolean;
  helperText: string;
  onPlaceSelected: (place: {
    address: string;
    lat: number;
    lng: number;
  }) => void;
  defaultValue?: string;
}

const GooglePlacesAutocomplete = ({
  label,
  onPlaceSelected,
  error,
  helperText,
  defaultValue = "",
}: GooglePlacesAutocompleteProps) => {
  const { getInputStyles, inputProps, labelProps } = useFormTheme();

  const inputRef = useRef<HTMLInputElement | null>(null);
  const [inputValue, setInputValue] = useState(defaultValue);

  useEffect(() => {
    setInputValue(defaultValue);
  }, [defaultValue]);

  useEffect(() => {
    loadGoogleMapsScript(() => {
      if (window.google && inputRef.current) {
        const autocomplete = new google.maps.places.Autocomplete(
          inputRef.current,
          {
            types: ["address"],
            componentRestrictions: { country: "us" },
          },
        );

        autocomplete.addListener("place_changed", () => {
          const place = autocomplete.getPlace();

          if (place?.geometry?.location) {
            const selectedPlace = {
              address: place.formatted_address || "",
              lat: place.geometry.location.lat(),
              lng: place.geometry.location.lng(),
            };
            setInputValue(place.formatted_address || "");
            onPlaceSelected(selectedPlace);
          }
        });
      }
    });
  }, [onPlaceSelected]);

  return (
    <TextField
      fullWidth
      label={label}
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
      inputRef={inputRef}
      error={error}
      helperText={helperText}
      InputProps={inputProps}
      InputLabelProps={labelProps}
      sx={getInputStyles()}
    />
  );
};

export default GooglePlacesAutocomplete;
