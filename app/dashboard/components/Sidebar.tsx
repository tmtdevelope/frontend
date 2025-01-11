"use client";

import { useState } from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
  Box,
  Divider,
  Toolbar,
} from "@mui/material";
import {
  Menu as MenuIcon,
  ChevronLeft,
  Dashboard,
  People,
  LocalTaxi,
  Logout,
} from "@mui/icons-material";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";

const drawerWidth = 240;

const menuItems = [
  { text: "Dashboard", icon: <Dashboard />, path: "/dashboard/admin" },
  { text: "Requests", icon: <LocalTaxi />, path: "/dashboard/admin/requests" },
  { text: "Users", icon: <People />, path: "/dashboard/admin/users" },
  { text: "Logout", icon: <Logout />, path: "/auth/login" },
];
export default function Sidebar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const { theme } = useTheme();

  const sharedStyles = {
    backgroundImage:
      theme === "dark"
        ? " linear-gradient(109.6deg, rgb(63, 76, 119) , rgb(16, 37, 60) 51.2%, rgb(0, 0, 0) 98.6%)"
        : "linear-gradient(to top, #dfe9f3 0%, white 100%)",
    color: theme === "dark" ? "#fff" : "#000",
  };

  return (
    <Drawer
      variant="permanent"
      open={open}
      sx={{
        width: open ? drawerWidth : 60,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: open ? drawerWidth : 60,
          boxSizing: "border-box",
          overflowX: "hidden",
          transition: "width 0.3s",
          borderRight: "none",
          backgroundColor: "transparent",
        },
        position: "fixed",
        zIndex: 100,
        height: "100vh",
        ...sharedStyles,
      }}
    >
      <Toolbar />
      <Box sx={{ display: "flex", justifyContent: "flex-end", padding: 1 }}>
        <IconButton onClick={() => setOpen(!open)}>
          {open ? <ChevronLeft /> : <MenuIcon />}
        </IconButton>
      </Box>
      <Divider />
      <List>
        {menuItems.map((item) => (
          <ListItem
            key={item.text}
            component={Link}
            href={item.path}
            sx={{
              minHeight: 48,
              justifyContent: open ? "initial" : "center",
              px: 2.5,
              backgroundColor:
                pathname === item.path ? "rgba(0, 0, 0, 0.1)" : "transparent",
              "&:hover": {
                backgroundColor: "rgba(0, 0, 0, 0.05)",
              },
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 3 : "auto",
                justifyContent: "center",
                color: theme === "dark" ? "white" : "inherit",
              }}
            >
              {item.icon}
            </ListItemIcon>
            <ListItemText
              primary={item.text}
              sx={{
                opacity: open ? 1 : 0,
                color: theme === "dark" ? "white" : "inherit",
              }}
            />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}
