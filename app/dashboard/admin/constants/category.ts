export const CATEGORY_TYPES = {
  FACILITY: "facility",
  QUOTE: "quote",
  INSURANCE: "insurance",
  PRIVATE: "private",
  SPECIAL: "special",
  BOOKING: "booking",
};

export const STATUS_TYPES = {
  PENDING: "pending",
  PROCESSING: "processing",
  CANCELLED: "cancelled",
  COMPLETED: "completed",
};

export const STATUS_REQUEST = {
  PENDING: "pending",
  CONFIRMED: "confirmed",
  CONFIRMED_ADJUSTED: "adjusted & confirmed",
  CANCELLED: "cancelled",
  IGNORED: "ignored",
};

export const STATUS_USER = {
  PENDING: "pending",
  ACTIVE: "active",
  Rejected: "rejected",
};

export const ROLES_USER = {
  ADMIN: "admin",
  MANAGER: "manager",
  SPECIAL: "special",
  USER: "user",
  DRIVER: "driver",
};

// constants/statusOptions.ts
export const statusOption = [
  {
    label: "pending",
    status: "pending",
    color: "#4CAF50",
  },
  {
    label: "Confirmed",
    status: "confirmed",
    color: "#FF9800",
  },
  {
    label: "Adjusted & Confirmed",
    status: "adjusted & confirmed",
    color: "#FF5722",
  },
  {
    label: "Cancel",
    status: "cancelled",
    color: "#F44336",
  },
  {
    label: "Ignore",
    status: "ignored",
    color: "#9E9E9E",
  },
];
