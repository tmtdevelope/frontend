/** @format */
import { Lock, LocationOn } from "@mui/icons-material";

export const features = [
  {
    icon: <Lock sx={{ fontSize: 28 }} />,
    title: "24/7 Service",
    description: "Same day availability",
  },
  {
    icon: <LocationOn sx={{ fontSize: 28 }} />,
    title: "Any Distance",
    description: "No place too far",
  },
  {
    icon: (
      <svg
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        style={{
          height: 28,
          width: 28,
        }}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    title: "Flexible Pricing",
    description: "Solutions for every budget",
  },
];
