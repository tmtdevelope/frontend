declare module "use-places-autocomplete" {
  interface Suggestion {
    place_id: string;
    description: string;
  }

  export interface UsePlacesAutocompleteProps {
    requestOptions?: google.maps.places.AutocompleteRequest;
    debounce?: number;
    cache?: boolean;
  }

  export function usePlacesAutocomplete(props?: UsePlacesAutocompleteProps): {
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
// Update the existing request types
export const CategoryType = {
  FACILITY: "FACILITY",
  INSURANCE: "INSURANCE",
  PRIVATE: "PRIVATE",
  SPECIAL: "SPECIAL",
  FREEPAY: "FREEPAY",
} as const;

export interface BaseRequest {
  id: string;
  patientName: string;
  patientID?: string;
  phoneNumber: string;
  pickupAddress: string;
  dropoffAddress: string;
  pickupDate: string;
  pickupTime: string;
  appointmentTime: string;
  serviceType: string;
  category: keyof typeof CategoryType;
  requesterName: string;
  requesterEmail: string;
  requesterPhone: string;
  createdAt: string;
  updatedAt: string;
  weight?: number;
  roomNumber?: string;
  requiresOxygen?: boolean;
  wheelchairSize?: string;
  assistantsCount?: number;
  oxygenFlowRate?: string;
  remarks?: string;
  tripType: string;
  passengerCount: number;
  dateOfBirth: string;
  status: "pending" | "approved" | "completed" | "cancelled";
}

export interface FacilityRequest extends BaseRequest {
  category: "FACILITY";
  billingAddress: string;
  city: string;
  zipCode: string;
  billingEmail: string;
}

export interface InsuranceRequest extends BaseRequest {
  category: "INSURANCE";
  staffPhysicianName: string;
  faxNumber: string;
  diagnosticCode: string;
  npiNumber: string;
  phoneNumberNPI: string;
  stairsAssistance: string;
}

export interface PrivateRequest extends BaseRequest {
  category: "PRIVATE";
}

export interface SpecialRequest extends BaseRequest {
  category: "SPECIAL";
  needAssistance: string;
  selectedAssistances: string;
  stairsAssistance: string;
}

export interface FreePayRequest extends BaseRequest {
  category: "FREEPAY";
  stairsAssistance?: string;
}

export type Request =
  | FacilityRequest
  | InsuranceRequest
  | PrivateRequest
  | SpecialRequest
  | FreePayRequest;
