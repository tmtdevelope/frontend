export type UserRole = "admin" | "manager" | "user" | "special" | "driver";
export type UserStatus = "active" | "pending" | "rejected";

export interface User {
  _id?: string | undefined;
  firstName: string;
  lastName: string;
  email: string;
  phone?: string | undefined;
  jobTitle: string;
  organizationName: string;
  facilityAddress: string;
  status: UserStatus;
  role: UserRole;
}
