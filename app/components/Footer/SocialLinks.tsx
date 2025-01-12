import {
  Facebook,
  Twitter,
  Instagram,
  LinkedIn,
} from "@mui/icons-material";
import { Icon } from "@iconify/react";
import tiktokIcon from "@iconify/icons-simple-icons/tiktok";

export const socialLinks = [
  {
    icon: <Facebook />,
    href: "https://www.facebook.com/TrustmedicaLtransportation",
    name: "Facebook",  
  },
  {
    icon: <Twitter />,
    href: "https://x.com/MedicalTmt",
    name: "Twitter",  
  },
  {
    icon: <Instagram />,
    href: "https://www.instagram.com/trust_medical_transportation/",
    name: "Instagram",  
  },
  {
    icon: <LinkedIn />,
    href: "https://www.linkedin.com/company/trust-medical-transportation-tmt/",
    name: "LinkedIn", 
  },
  {
    icon: <Icon icon={tiktokIcon} width={24} height={24} />,
    href: "https://www.tiktok.com/@trust_medical_transport",
    name: "TikTok",  
  },
];