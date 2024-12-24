import * as yup from "yup";

export const schema = yup.object({
  patientName: yup.string(),
  dateOfBirth: yup.date().nullable(),
  phoneNumber: yup
    .string()
    .matches(/^[0-9]{10}$/, "Phone Number must be a 10-digit number")
    .required("Phone Number is required"),
  pickupDate: yup.date().nullable().required("Pickup Date is required"),
  passengerCount: yup.number().required("Number of Passengers is required"),
  pickupTime: yup.date().nullable().required("Pickup Time is required"),
  appointmentTime: yup
    .date()
    .nullable()
    .min(yup.ref("pickupTime"), "Appointment time must be after pickup time")
    .required("Appointment Time is required"),
  pickupAddress: yup.string().required("Pickup Address is required"),
  dropoffAddress: yup.string().required("Drop-off Address is required"),
  tripType: yup.string().required("Trip Type is required"),
  serviceType: yup.string().required("Service Type is required"),
  requesterName: yup.string().required("Requester Name is required"),
  requesterPhone: yup
    .string()
    .matches(/^[0-9]{10}$/, "Requester Phone must be a 10-digit number")
    .required("Requester Phone is required"),
  requesterEmail: yup
    .string()
    .email("Invalid email")
    .required("Requester Email is required"),
});
