import {
  LocalHospital as PrivatePayIcon,
  Business as FacilityPayIcon,
  HealthAndSafety as InsurancePayIcon,
  MedicalServices as SpecialPayIcon,
} from "@mui/icons-material";

export const services = [
  {
    title: "Private Pay",
    icon: PrivatePayIcon,
    color: "#4CAF50",
    path: "/dashboard/quote/private-pay",
  },
  {
    title: "Facility Pay",
    icon: FacilityPayIcon,
    color: "#FF9800",
    path: "/dashboard/quote/facility-pay",
  },
  {
    title: "Insurance Pay",
    icon: InsurancePayIcon,
    color: "#F44336",
    path: "/dashboard/quote/insurance-pay",
  },
  {
    title: "Special Pay",
    icon: SpecialPayIcon,
    color: "#2196F3",
    path: "/dashboard/quote/special-pay",
  },
];
