export interface FormData {
  // Patient Information
  patientName: string;
  dateOfBirth: Date;
  patientId?: string;
  phoneNumber: string;
  weight?: number;
  address?: string;

  // Transport Details
  pickupDate: Date | null;
  pickupTime: string;
  pickupAddress: string;
  dropoffAddress: string;
  appointmentTime: string;
  roomNumber?: string;
  tripType: string;

  // Service Details
  serviceType: string;
  wheelchairSize?: string;
  stairsAssistance?: string;
  requiresOxygen: "yes" | "no";
  oxygenFlowRate?: number;
  assistantsCount?: number;

  // Requester Information
  requesterName: string;
  requesterPhone: string;
  requesterEmail: string;

  // Additional Information
  remarks?: string;
  passengerCount: number;
}

interface Option {
  label: string;
  value: string;
  description?: string;
}
export const MAX_FILES: { documents: number; images: number } = {
  documents: 5,
  images: 10,
};
export interface FormDataInsurance {
  patientName: string;
  dateOfBirth: Date;
  phoneNumber: string;
  pickupDate: Date;
  passengerCount: number;
  pickupTime: Date;
  appointmentTime: Date;
  pickupAddress: string;
  destinationAddress: string;
  remarks: string;
  requesterName: string;
  requesterEmail: string;
  requiresOxygen?: boolean;
  diagnosticCode?: string;
  staffPhysicianName?: string;
  npiNumber?: string;
  faxNumber?: string;

  phoneNumberNPI: string;

  dropoffAddress: string; // Add missing fields
  tripType: string; // Add missing fields
  serviceType: string; // Add missing fields
  requesterPhone: string; // Add missing fields
  wheelchairSize?: string; // Add missing fields
  stairsAssistance?: string; // Add missing fields
  oxygenFlowRate?: number; // Add missing fields
}
 
export interface FormSectionProps {
  register: any;
  errors: any;
  control?: any;
  watch?: any;
  setValue: any;
  renderFormSection: (props: {
    title: string;
    children: React.ReactNode;
  }) => JSX.Element;
}

export interface TransportSectionProps extends FormSectionProps {
  pickupInputRef: React.RefObject<HTMLInputElement>;
  dropoffInputRef: React.RefObject<HTMLInputElement>;
}
