declare module 'use-places-autocomplete' {
    interface Suggestion {
      place_id: string;
      description: string;
    }
  
    export interface UsePlacesAutocompleteProps {
      requestOptions?: google.maps.places.AutocompleteRequest;
      debounce?: number;
      cache?: boolean;
    }
  
    export function usePlacesAutocomplete(
      props?: UsePlacesAutocompleteProps
    ): {
      ready: boolean;
      value: string;
      suggestions: {
        status: string;
        data: Suggestion[];
      };
      setValue: (val: string, shouldFetchData?: boolean) => void;
      clearSuggestions: () => void;
    };
  }
  