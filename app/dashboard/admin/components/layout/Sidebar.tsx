"use client";

import { useState } from "react";
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
} from "@mui/material";
import {
  Menu as MenuIcon,
  Home as HomeIcon,
  CalendarClock as CalendarIcon,
  UserCircle2 as UserManageIcon,
  Ambulance as AmbulanceIcon,
  X as CloseIcon,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";

const menuItems = [
  {
    text: "Dashboard",
    icon: <HomeIcon />,
    path: "/dashboard/admin",
    color: "#60a5fa",
  },
  {
    text: "Schedule",
    icon: <CalendarIcon />,
    path: "/dashboard/admin/requests",
    color: "#34d399",
  },
  {
    text: "Users",
    icon: <UserManageIcon />,
    path: "/dashboard/admin/users",
    color: "#a855f7",
  },
];

export function Sidebar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const { theme } = useTheme();

  const handleClose = () => {
    setOpen(false);
  };

  const iconButtonStyle = {
    position: "fixed",
    left: 16,
    top: "80px",
    zIndex: 1200,
    color: theme === "dark" ? "#ffffff" : "#000000",
    backgroundColor: theme === "dark" ? "#374151" : "#f3f4f6",
    borderRadius: "8px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    "&:hover": {
      backgroundColor: theme === "dark" ? "#4b5563" : "#e5e7eb",
    },
  };

  const drawerPaperProps = {
    sx: {
      width: 280,
      bgcolor: theme === "dark" ? "#1f2937" : "#ffffff",
      marginTop: "75px",
      height: "calc(100vh - 75px)",
    },
  };

  const closeButtonStyle = {
    color: theme === "dark" ? "#ffffff" : "#000000",
    "&:hover": {
      backgroundColor: theme === "dark" ? "#4b5563" : "#e5e7eb",
    },
  };

  return (
    <>
      <IconButton onClick={() => setOpen(true)} sx={iconButtonStyle}>
        <MenuIcon />
      </IconButton>

      <Drawer
        anchor="left"
        open={open}
        onClose={handleClose}
        PaperProps={drawerPaperProps}
        variant="temporary"
        ModalProps={{ keepMounted: true }}
      >
        <Box sx={{ p: 2 }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 2,
              mb: 4,
              pb: 2,
              borderBottom: "1px solid",
              borderColor: theme === "dark" ? "#374151" : "#e5e7eb",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <AmbulanceIcon size={32} color={"#60a5fa"} />
              <Box>
                <Box sx={{ typography: "h6", color: "#60a5fa" }}>Transport</Box>
                <Box
                  sx={{
                    typography: "caption",
                    color: theme === "dark" ? "#9ca3af" : "#6b7280",
                  }}
                >
                  Management System
                </Box>
              </Box>
            </Box>
            <IconButton onClick={handleClose} sx={closeButtonStyle}>
              <CloseIcon />
            </IconButton>
          </Box>

          <List>
            {menuItems.map((item) => {
              const isActive = pathname === item.path;
              return (
                <ListItem
                  key={item.text}
                  component={Link}
                  href={item.path}
                  onClick={handleClose} // إغلاق الـ Sidebar عند النقر على الرابط
                  sx={{
                    mb: 1,
                    borderRadius: 1,
                    bgcolor: isActive
                      ? theme === "dark"
                        ? "#374151"
                        : "#f3f4f6"
                      : "transparent",
                    "&:hover": {
                      bgcolor: theme === "dark" ? "#4b5563" : "#e5e7eb",
                    },
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 40,
                      color: isActive
                        ? item.color
                        : theme === "dark"
                          ? "#9ca3af"
                          : "#6b7280",
                      transition: "color 0.2s ease-in-out",
                      "&:hover": {
                        animation: "spin 1s linear infinite",
                      },
                    }}
                  >
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={item.text}
                    primaryTypographyProps={{
                      sx: {
                        fontWeight: isActive ? 600 : 400,
                        color: isActive
                          ? theme === "dark"
                            ? "#ffffff"
                            : "#000000"
                          : theme === "dark"
                            ? "#9ca3af"
                            : "#6b7280",
                        transition: "color 0.2s ease-in-out",
                      },
                    }}
                  />
                </ListItem>
              );
            })}
          </List>
        </Box>
      </Drawer>
    </>
  );
}
