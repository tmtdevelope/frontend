/** @format */

"use client";

import {
  Container,
  Grid,
  Typography,
  Box,
  Link,
  IconButton,
} from "@mui/material";
import {
  Facebook,
  Twitter,
  Instagram,
  LinkedIn,
  Fax,
  Mail,
  LocationOn,
  Phone,
} from "@mui/icons-material";
import { useTheme } from "next-themes";
import { navigationItems } from "../Header/NavigationItem";
import { Icon } from "@iconify/react";
import tiktokIcon from "@iconify/icons-simple-icons/tiktok";

const Footer = () => {
  const { theme } = useTheme();
  const isDarkMode = theme === "dark";

   const textColor = isDarkMode ? "#fff" : "text.primary";
  const linkHoverColor = isDarkMode ? "white" : "primary.main";

  return (
    <Box
      component="footer"
      sx={{
        pt: 8,
        pb: 4,
        borderTop: 1,
        borderColor: "divider",
        backgroundColor: isDarkMode ? "background.default" : "background.paper",
      }}
    >
      <Container>
        <Grid container spacing={8}>
           <Grid item xs={12} md={4}>
            <Typography variant="h6" fontWeight="bold" mb={4}>
              Follow Us
            </Typography>
            <Typography color={textColor} mb={4}>
              Stay connected with us through our social media channels. Follow us
              for the latest updates and news.
            </Typography>
            <Box display="flex" gap={2}>
              <Link
                href="https://www.facebook.com/TrustmedicaLtransportation"
                target="_blank"
                color={textColor}
                sx={{
                  "&:hover": { color: linkHoverColor },
                }}
              >
                <Facebook fontSize="large" />
              </Link>
              <Link
                href="https://x.com/MedicalTmt"
                target="_blank"
                color={textColor}
                sx={{
                  "&:hover": { color: linkHoverColor },
                }}
              >
                <Twitter fontSize="large" />
              </Link>
              <Link
                href="https://www.instagram.com/trust_medical_transportation/"
                target="_blank"
                color={textColor}
                sx={{
                  "&:hover": { color: linkHoverColor },
                }}
              >
                <Instagram fontSize="large" />
              </Link>
              <Link
                href="https://www.linkedin.com/company/trust-medical-transportation-tmt/"
                target="_blank"
                color={textColor}
                sx={{
                  "&:hover": { color: linkHoverColor },
                }}
              >
                <LinkedIn fontSize="large" />
              </Link>
              <Link
                href="https://www.tiktok.com/@trust_medical_transport"
                target="_blank"
                color={textColor}
                sx={{
                  "&:hover": { color: linkHoverColor },
                }}
              >
                <Icon icon={tiktokIcon} width={24} height={24} />
              </Link>
            </Box>
          </Grid>

           <Grid item xs={12} md={4}>
            <Typography variant="h6" fontWeight="bold" mb={4}>
              Quick Links
            </Typography>
            <Box component="ul" sx={{ listStyle: "none", p: 0, m: 0 }}>
              {navigationItems.map((item) => (
                <Box component="li" key={item.id} mb={2}>
                  <Link
                    href={item.href}
                    color={textColor}
                    underline="hover"
                    sx={{
                      "&:hover": { color: linkHoverColor },
                    }}
                  >
                    {item.label}
                  </Link>
                </Box>
              ))}
            </Box>
          </Grid>

           <Grid item xs={12} md={4}>
            <Typography variant="h6" fontWeight="bold" mb={4}>
              Contact Info
            </Typography>
            <Box display="flex" flexDirection="column" gap={3}>
               <Box display="flex" alignItems="center">
                <IconButton sx={{ mr: 1, color: "primary.main" }}>
                  <Phone />
                </IconButton>
                <Link
                  href="tel:+16507999921"
                  color={textColor}
                  underline="hover"
                  sx={{
                    "&:hover": { color: linkHoverColor },
                  }}
                >
                  <Typography>+1 (650) 799-9921</Typography>
                </Link>
              </Box>

               <Box display="flex" alignItems="center">
                <IconButton sx={{ mr: 1, color: "primary.main" }}>
                  <Fax />
                </IconButton>
                <Link
                  href="tel:+16502922323"
                  color={textColor}
                  underline="hover"
                  sx={{
                    "&:hover": { color: linkHoverColor },
                  }}
                >
                  <Typography>+1 (650) 292-2323</Typography>
                </Link>
              </Box>

               <Box display="flex" alignItems="center">
                <IconButton sx={{ mr: 1, color: "primary.main" }}>
                  <Mail />
                </IconButton>
                <Link
                  href="mailto:trustmtrans@outlook.com"
                  color={textColor}
                  underline="hover"
                  sx={{
                    "&:hover": { color: linkHoverColor },
                  }}
                >
                  <Typography>trustmtrans@outlook.com</Typography>
                </Link>
              </Box>

              {/* العنوان */}
              <Box display="flex" alignItems="center">
                <IconButton sx={{ mr: 1, color: "primary.main" }}>
                  <LocationOn />
                </IconButton>
                <Link
                  href="https://www.google.com/maps?q=291+Emaron+Dr,+San+Bruno,+CA+94066"
                  target="_blank"
                  rel="noopener noreferrer"
                  color={textColor}
                  underline="hover"
                  sx={{
                    "&:hover": { color: linkHoverColor },
                  }}
                >
                  <Typography>291 Emaron Dr, San Bruno, CA 94066</Typography>
                </Link>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>

       <Box
        sx={{
          borderTop: 1,
          borderColor: "divider",
          mt: 8,
          pt: 4,
          textAlign: "center",
        }}
      >
        <Typography color={textColor}>
          © {new Date().getFullYear()} Trust Medical Transportation. All rights
          reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;