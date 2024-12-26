"use client";

import { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Menu,
  MenuItem,
  Avatar,
  Box,
  Container,
} from "@mui/material";
import { Person, ExitToApp } from "@mui/icons-material";
import { useRouter, usePathname } from "next/navigation";

export function TopNav() {
  const router = useRouter();
  const pathname = usePathname();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    document.cookie =
      "auth_token=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT";
    router.push("/auth/login");
  };

  return (
    <AppBar
      position="fixed"
      elevation={scrolled ? 4 : 0}
      sx={{
        backdropFilter: "blur(10px)",
        backgroundColor: "var(--background-color)",
        borderBottom: "1px solid var(--border-color)",
        transition: "all 0.3s ease-in-out",
      }}
    >
      <Container>
        <Toolbar
          sx={{ display: "flex", justifyContent: "space-between", py: 1 }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              ml: "auto",
            }}
          >
            <IconButton
              size="large"
              onClick={handleMenu}
              sx={{
                "&:hover": {
                  backgroundColor: "transparent",
                },
              }}
            >
              <Avatar
                sx={{
                  bgcolor: "var(--avatar-bg-color)",
                  width: 35,
                  height: 35,
                }}
              >
                <Person />
              </Avatar>
            </IconButton>

            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleClose}
              transformOrigin={{ horizontal: "right", vertical: "top" }}
              anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
              PaperProps={{
                sx: {
                  position: "absolute",
                  minWidth: "200px",
                  maxWidth: "300px",
                  mt: 1,
                  borderRadius: "8px",
                },
              }}
            >
              <MenuItem onClick={handleClose}>
                <Person sx={{ mr: 2, fontSize: 20 }} /> Profile
              </MenuItem>
              <MenuItem
                onClick={handleLogout}
                sx={{
                  color: "var(--error-color)",
                  "& .MuiSvgIcon-root": {
                    color: "var(--error-color)",
                  },
                }}
              >
                <ExitToApp sx={{ mr: 2, fontSize: 20 }} /> Logout
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
