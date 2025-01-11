import * as yup from "yup";

export const schema = yup.object().shape({
  firstName: yup
    .string()
    .required("First Name is required")
    .max(50, "First Name should not exceed 50 characters"),

  lastName: yup
    .string()
    .required("Last Name is required")
    .max(50, "Last Name should not exceed 50 characters"),

  email: yup
    .string()
    .email("Invalid email address")
    .required("Email is required")
    .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Invalid email format")
    .max(100, "Email should not exceed 100 characters"),

  phone: yup
    .string()
    .required("Phone number is required")
    .matches(/^\d{10,15}$/, "Phone must be a valid number (10-15 digits)"),

  organizationName: yup.string().required("Organization Name is required"),

  facilityAddress: yup.string().required("Facility Address is required"),

  jobTitle: yup.string().required("Job Title is required"),

  otherJobTitle: yup
    .string()
    .when("jobTitle", (values, schema) =>
      values[0] === "Other"
        ? schema
            .required("Please specify your job title")
            .max(50, "Job Title should not exceed 50 characters")
        : schema.notRequired(),
    ),

  password: yup
    .string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters")
    .max(50, "Password should not exceed 50 characters"),
});
