import * as yup from "yup";
import { UserRole, UserStatus } from "../../types/user";
export const schema = yup.object().shape({
  _id: yup.string().optional(),
  firstName: yup.string().required("First Name is required"),
  lastName: yup.string().required("Last Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  phone: yup.string().optional(),
  jobTitle: yup.string().required("Job Title is required"),
  organizationName: yup.string().required("Organization Name is required"),
  facilityAddress: yup.string().required("Facility Address is required"),
  status: yup
    .mixed<UserStatus>()
    .oneOf(["active", "pending", "rejected"], "Invalid status")
    .required("Status is required"),
  role: yup
    .mixed<UserRole>()
    .oneOf(["admin", "manager", "user", "special", "driver"], "Invalid role")
    .required("Role is required"),
});
