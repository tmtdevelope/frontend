"use client";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Button,
  Drawer,
  Container,
  Avatar,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
} from "@mui/material";
import { navigationItems } from "./NavigationItem";
import { useState, useMemo, useEffect } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Link from "next/link";
import Image from "next/image";
import ModeToggle from "@/app/Theme/toggel";
import { useTheme } from "next-themes";
import { NavigationLink } from "./NavigationLink";
import {
  Login,
  Settings,
  Logout,
  ListAlt,
  Dashboard,
} from "@mui/icons-material";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "@/app/redux/store/store";
import { useRouter } from "next/navigation";
import { logoutAction } from "@/app/redux/actions/users/logoutAction";
import { getUserDetailsAction } from "@/app/redux/actions/users/getUserDetailsAction";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const { theme } = useTheme();
  const { user } = useSelector((state: RootState) => state.userDetails);
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();

  const sharedStyles = useMemo(
    () => ({
      backgroundImage:
        theme === "dark"
          ? "linear-gradient(109.6deg, rgb(63, 76, 119), rgb(16, 37, 60) 51.2%, rgb(0, 0, 0) 98.6%)"
          : "linear-gradient(to top, #dfe9f3 0%, white 100%)",
      color: theme === "dark" ? "#fff" : "#000",
    }),
    [theme],
  );

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      dispatch(getUserDetailsAction());
    }
  }, [dispatch]);

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

  const avatarStyles = useMemo(
    () => ({
      width: 40,
      height: 40,
      backgroundColor: theme === "dark" ? "#4f46e5" : "#1e40af", // لون الخلفية
      color: theme === "dark" ? "#fff" : "#fff", // لون النص
      border: `2px solid ${theme === "dark" ? "#fff" : "#000"}`, // إطار مميز
      boxShadow:
        theme === "dark"
          ? "0 4px 6px rgba(255, 255, 255, 0.1)"
          : "0 4px 6px rgba(0, 0, 0, 0.1)", // ظل
      transition: "all 0.3s ease", // تأثير انتقالي
      "&:hover": {
        transform: "scale(1.1)", // تكبير الأيقونة عند التمرير
      },
    }),
    [theme],
  );

  return (
    <AppBar position="fixed" sx={sharedStyles}>
      <Container maxWidth="lg">
        <Toolbar
          disableGutters
          sx={{
            display: "flex",
            justifyContent: "space-between",
            height: "75px",
          }}
        >
          <Button component={Link} href="/">
            <Image
              priority
              src="/logo.png"
              className="object-contain shrink-0 max-w-full aspect-[3.76] w-[244px]"
              alt="Company Logo"
              width={244}
              height={65}
            />
          </Button>

          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
            {navigationItems.map((item) => (
              <NavigationLink
                key={item.id}
                href={item.href}
                ariaLabel={item.ariaLabel}
              >
                {item.label}
              </NavigationLink>
            ))}
          </Box>

          <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
            {user ? (
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
                        sx={avatarStyles}
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
                    sx: {
                      backgroundColor: theme === "dark" ? "#1e1e1e" : "#fff",
                      color: theme === "dark" ? "#fff" : "#000",
                      border: `1px solid ${theme === "dark" ? "#333" : "#ddd"}`,
                      width: 200,
                      mt: 1,
                    },
                  }}
                  transformOrigin={{ horizontal: "right", vertical: "top" }}
                  anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
                >
                  <MenuItem disabled>
                    <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                      {user.firstName} {user.lastName}
                    </Typography>
                  </MenuItem>
                  {user.role === "admin" ? (
                    <MenuItem component={Link} href="/dashboard/admin">
                      <Dashboard fontSize="small" sx={{ mr: 1 }} />
                      Dashboard
                    </MenuItem>
                  ) : (
                    <MenuItem component={Link} href="/dashboard/profile">
                      <Settings fontSize="small" sx={{ mr: 1 }} />
                      Profile
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
            ) : (
              <Box>
                <Link href="/auth/login" passHref>
                  <Box
                    sx={{
                      display: { xs: "flex", md: "inline-flex" },
                      justifyContent: { xs: "center", md: "initial" },
                      alignItems: "center",
                      gap: 1,
                      backgroundColor: "#1976d2",
                      color: "#ffffff",
                      px: { xs: 2, md: 3 },
                      py: 1.5,
                      borderRadius: "8px",
                      textTransform: "none",
                      fontSize: "1rem",
                      fontWeight: "bold",
                      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                      transition: "background-color 0.3s ease",
                      width: { xs: "100%", md: "auto" },
                      "&:hover": {
                        backgroundColor: "#125aa6",
                      },
                      "&:focus": {
                        outline: "2px solid #1976d2",
                        outlineOffset: "2px",
                      },
                    }}
                  >
                    <Login style={{ width: 20, height: 20 }} /> Login
                  </Box>
                </Link>
              </Box>
            )}

            <ModeToggle />

            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={() => setMobileOpen(true)}
              sx={{ display: { md: "none" } }}
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>

        <Drawer
          anchor="right"
          open={mobileOpen}
          onClose={() => setMobileOpen(false)}
          sx={{
            display: { md: "none" },
            "& .MuiDrawer-paper": sharedStyles,
          }}
        >
          <Box sx={{ width: 250, pt: 2 }}>
            <IconButton
              aria-label="close drawer"
              onClick={() => setMobileOpen(false)}
              sx={{ mb: 2, ml: 2 }}
            >
              <CloseIcon />
            </IconButton>
            <div className="flex flex-col gap-2 p-4">
              {navigationItems.map((item) => (
                <NavigationLink
                  key={item.id}
                  aria-label={item.ariaLabel}
                  href={item.href}
                >
                  {item.label}
                </NavigationLink>
              ))}
            </div>
          </Box>
        </Drawer>
      </Container>
    </AppBar>
  );
};

export default Navbar;
