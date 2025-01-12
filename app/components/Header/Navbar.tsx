"use client";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Drawer,
  Container,
 
} from "@mui/material";
import { navigationItems } from "./NavigationItem";
import React, { useState, useEffect } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Link from "next/link";
import Image from "next/image";
import ModeToggle from "@/app/Theme/toggel";
import { useTheme } from "next-themes";
import { NavigationLink } from "./NavigationLink";
import {
  Login,
} from "@mui/icons-material";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "@/app/redux/store/store";
  import { getUserDetailsAction } from "@/app/redux/actions/users/getUserDetailsAction";
import { IMAGES } from "@/app/utils/images";
import { getSharedStyles , loginButtonStyles } from "./navbarStyles";
import UserMenu from "./UserMenu";

const Navbar = React.memo(() => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { theme } = useTheme();
  const { user } = useSelector((state: RootState) => state.userDetails);
  const dispatch = useDispatch<AppDispatch>();
  const currentTheme = theme === "dark" ? "dark" : "light";

  const sharedStyles = getSharedStyles(currentTheme);
 
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      dispatch(getUserDetailsAction());
    }
  }, [dispatch]);

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
          <Link href="/">
            <Image
              priority
              // src={currentTheme === "dark" ?  IMAGES.dark : IMAGES.light}
              src={IMAGES.light}
              className="object-contain shrink-0  max-w-full aspect-[3.76] w-[244px]"
              alt="Company Logo"
              width={244}
              height={65}
            />
          </Link>

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
              <UserMenu />
            ) : (
              <Box>
                <Link href="/auth/login" passHref>
                  <Box sx={loginButtonStyles}>
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
});

export default Navbar;