export interface BaseRequest {
  _id: string;
  patientName: string;
  dateOfBirth: string;
  phoneNumber: string;
  patientID?: string;
  weight: number | string;
  address: string;
  pickupDate: string;
  pickupTime: string;
  pickupAddress: string;
  dropoffAddress: string;
  appointmentTime: string;
  roomNumber: string;
  tripType: string;
  passengerCount: number | string;
  serviceType: string;
  wheelchairSize?: string;
  needsWheelchair?: string;
  stairsAssistance?: string;
  assistantsCount?: number | string;
  requiresOxygen?: string;
  oxygenFlowRate?: string;
  requesterEmail: string;
  requesterPhone: string;
  requesterName?: string;
  remarks?: string;
  documents: string[];
  images: string[];
  category: RequestCategory;
  updatedAt: string;
  createdAt: string;
  distance?: string;
  duration?: string;
  status: string;
  requestStatus: string;
  __v?: any;
}

export interface BookingPayRequest extends BaseRequest {
  category: "booking";
}

export interface FacilityRequest extends BaseRequest {
  category: "facility";
  billingAddress: string;
  city: string;
  zipCode: string;
  email: string;
}

export interface FreepayRequest extends BaseRequest {
  category: "quote";
  billingAddress: string;
  city: string;
  zipCode: string;
  email: string;
}

export interface InsuranceRequest extends BaseRequest {
  phoneNumberNPI: string;
  category: "insurance";
  staffPhysicianName: string;
  faxNumber: string;
  diagnosticCode: string;
  npiNumber: string;
}

export interface PrivateRequest extends BaseRequest {
  category: "private";
}

export interface SpecialRequest extends BaseRequest {
  category: "special";
  needAssistance: string;
  selectedAssistances: string[];
}

export type RequestCategory =
  | "booking"
  | "facility"
  | "quote"
  | "insurance"
  | "private"
  | "special";

export type Request =
  | BookingPayRequest
  | FacilityRequest
  | FreepayRequest
  | InsuranceRequest
  | PrivateRequest
  | SpecialRequest;
