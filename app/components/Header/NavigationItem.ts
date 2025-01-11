/** @format */

import { NavigationItem } from "./type";

export const navigationItems: NavigationItem[] = [
  { id: "tmt", label: "TMT", href: "/", ariaLabel: "TMT Services" },
  {
    id: "quote",
    label: "Get A Quote",
    href: "/get-quote",
    ariaLabel: "Request a quote",
  },
  {
    id: "cities",
    label: "Cities",
    href: "/cities",
    ariaLabel: "View service cities",
  },
  {
    id: "rates",
    label: "Service-Rates",
    href: "/service-rates",
    ariaLabel: "View service rates",
  },
  {
    id: "privacy",
    label: "Privacy Policy",
    href: "/privacy-policy",
    ariaLabel: "Privacy policy",
  },
];
