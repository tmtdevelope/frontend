"use client";

import { Box } from "@mui/material";
import { Sidebar } from "./components/layout/Sidebar";
import { ReactNode, useEffect, useState } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(true);
  }, []);
  return (
    <Box sx={{ display: "flex", minHeight: "100vh" }}>
      {open && <Sidebar />}
      {children}
    </Box>
  );
};

export default Layout;
