/** @format */

// components/Data.ts
import { Service } from "./types";

export const services: Service[] = [
  {
    title: "Personal Transport",
    subtitle: "Reliable and Comfortable",
    description:
      "We offer top-notch personal transport services for all your needs.",
    imageUrl: "/personal-transport.png",
    features: ["Safe rides", "Experienced drivers", "Flexible scheduling"],
  },
  {
    title: "Airport Transfers",
    subtitle: "On-Time and Convenient",
    description:
      "Ensure a hassle-free journey to and from the airport with our services.",
    imageUrl: "/airport-transfers.png",
    features: ["Flight tracking", "Meet and greet", "Luggage assistance"],
  },
  {
    title: "City Tours",
    subtitle: "Explore with Us",
    description: "Discover the city’s highlights with our guided tours.",
    imageUrl: "/city-tours.png",
    features: [
      "Custom itineraries",
      "Comfortable vehicles",
      "Knowledgeable guides",
    ],
  },
];
