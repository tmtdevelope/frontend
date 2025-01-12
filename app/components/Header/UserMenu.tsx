// components/UserMenu.tsx
"use client";
import {
  Menu,
  MenuItem,
  Typography,
  Avatar,
  IconButton,
  Tooltip,
} from "@mui/material";
import Link from "next/link";
import {
  Dashboard,
  Settings,
  ListAlt,
  Logout,
} from "@mui/icons-material";
import { useTheme } from "next-themes";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/app/redux/store/store";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { getMenuStyles } from "./navbarStyles";
import { logoutAction } from "@/app/redux/actions/users/logoutAction";

 
const UserMenu = () => {
  const { theme } = useTheme();
  const { user } = useSelector((state: RootState) => state.userDetails);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();

  // تحقق من أن theme ليس undefined
  const currentTheme = theme === "dark" ? "dark" : "light";

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = async () => {
    try {
      await dispatch(logoutAction()).unwrap();
      localStorage.removeItem("token");
      router.push("/auth/login");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <>
      <Tooltip title="Account settings">
        <IconButton
          onClick={handleMenuOpen}
          size="small"
          sx={{ ml: 2 }}
          aria-controls="account-menu"
          aria-haspopup="true"
        >
          {user && (
            <Avatar
              sx={{
                width: 40,
                height: 40,
                backgroundColor: currentTheme === "dark" ? "#4f46e5" : "#1e40af",
                color: "#fff",
                border: `2px solid ${currentTheme === "dark" ? "#fff" : "#000"}`,
                boxShadow:
                  currentTheme === "dark"
                    ? "0 4px 6px rgba(255, 255, 255, 0.1)"
                    : "0 4px 6px rgba(0, 0, 0, 0.1)",
                transition: "all 0.3s ease",
                "&:hover": {
                  transform: "scale(1.1)",
                },
              }}
              alt={`${user.firstName} ${user.lastName}`}
              src={user.avatar || ""}
            >
              {!user.avatar && user.firstName?.[0]}
            </Avatar>
          )}
        </IconButton>
      </Tooltip>

      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
        onClick={handleMenuClose}
        PaperProps={{
          sx: getMenuStyles(currentTheme), // استخدام currentTheme بدلاً من theme
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem disabled>
          <Typography variant="body1" sx={{ fontWeight: "bold" }}>
            {user.firstName} {user.lastName}
          </Typography>
        </MenuItem>

        <MenuItem component={Link} href="/dashboard/profile">
          <Settings fontSize="small" sx={{ mr: 1 }} />
          Profile
        </MenuItem>

        {user.role === "admin" && (
          <MenuItem component={Link} href="/dashboard/admin">
            <Dashboard fontSize="small" sx={{ mr: 1 }} />
            Dashboard
          </MenuItem>
        )}

        <MenuItem component={Link} href="/dashboard/quote">
          <ListAlt fontSize="small" sx={{ mr: 1 }} />
          Quotes
        </MenuItem>

        <MenuItem onClick={handleLogout} sx={{ color: "error.main" }}>
          <Logout fontSize="small" sx={{ mr: 1 }} />
          Logout
        </MenuItem>
      </Menu>
    </>
  );
};

export default UserMenu;