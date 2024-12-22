import React from 'react';
import AutocompleteSearch from './components/AutocompleteSearch';
import { useCallback } from 'react';

const HomePage: React.FC = () => {  const handlePlaceSelected = useCallback((place: { address: string; lat: number; lng: number }) => {
    console.log('Selected place:', place);
  }, [])

  return (
    <div style={{ padding: 20 }}>
      <h1>Search for a Place</h1>
      <AutocompleteSearch onPlaceSelected={handlePlaceSelected} />
    </div>
  );
};

export default HomePage;
