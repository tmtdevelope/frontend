"use client";
import React, { useState } from "react";
import { Autocomplete, useLoadScript } from "@react-google-maps/api";
const placesLibrary = ["places"];

function App() {
  const [searchResult, setSearchResult] = useState(null);
  console.log("searchResult", searchResult);
  const [error, setError] = useState(null);

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
    libraries: placesLibrary,
  });

  function onLoad(autocomplete) {
    setSearchResult(autocomplete);
  }

  function onPlaceChanged() {
    if (searchResult != null) {
      const place = searchResult.getPlace();
      const name = place.name;
      const status = place.business_status;
      const formattedAddress = place.formatted_address;
      console.log(`Name: ${name}`);
      console.log(`Business Status: ${status}`);
      console.log(`Formatted Address: ${formattedAddress}`);
    } else {
      alert("Please enter text");
    }
  }

  // Handle loading and errors
  if (loadError) {
    setError("Failed to load Google Maps API. Please check your API key.");
  }

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <div className="App">
      <div id="searchColumn">
        <h2>Tide Forecast Options</h2>
        {error && <div style={{ color: "red" }}>{error}</div>}
        <Autocomplete onPlaceChanged={onPlaceChanged} onLoad={onLoad}>
          <input
            type="text"
            placeholder="Search for Tide Information"
            style={{
              boxSizing: `border-box`,
              border: `1px solid transparent`,
              width: `240px`,
              height: `32px`,
              padding: `0 12px`,
              borderRadius: `3px`,
              boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
              fontSize: `14px`,
              outline: `none`,
              textOverflow: `ellipses`,
            }}
          />
        </Autocomplete>
      </div>
    </div>
  );
}

export default App;
