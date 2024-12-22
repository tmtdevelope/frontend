"use client";

import React, { useState, useRef, useEffect } from "react";
import Script from "next/script";

interface GooglePlacesAutocompleteProps {
  label: string;
  onPlaceSelected: (place: any) => void;
}

const GooglePlacesAutocomplete: React.FC<GooglePlacesAutocompleteProps> = ({
  label,
  onPlaceSelected,
}) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [isScriptLoaded, setIsScriptLoaded] = useState(false);

  useEffect(() => {
    if (typeof google !== "undefined" && isScriptLoaded) {
      if (inputRef.current) {
        const autocomplete = new google.maps.places.Autocomplete(inputRef.current, {
          types: ["address"],
          componentRestrictions: { country: "us" },
        });
      

        autocomplete.addListener("place_changed", () => {
          const place = autocomplete.getPlace();
          if (place.geometry && place.geometry.location) {
            const selectedPlace = {
              address: place.formatted_address,
              lat: place.geometry.location.lat(),
              lng: place.geometry.location.lng(),
            };
            onPlaceSelected(selectedPlace);
          } else {
            console.error("Place does not have geometry data.");
          }
        });
      }
    }
  }, [isScriptLoaded]);

  return (
    <div style={{ marginBottom: "1rem" }}>
      {/* تحميل مكتبة Google Maps */}
      <Script
        src={`https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&libraries=places`}
        strategy="lazyOnload"
        onLoad={() => setIsScriptLoaded(true)}
        onError={() => console.error("Failed to load Google Maps script")}
      />
      <label>{label}</label>
      <input
        type="text"
        ref={inputRef}
        style={{
          width: "100%",
          padding: "0.5rem",
          fontSize: "1rem",
          border: "1px solid #ccc",
          borderRadius: "5px",
        }}
        disabled={!isScriptLoaded}
        placeholder={isScriptLoaded ? "Enter a location" : "Loading..."}
      />
    </div>
  );
};

export default GooglePlacesAutocomplete;
