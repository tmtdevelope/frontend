"use client";

import { Box, Container } from "@mui/material";
import Sidebar from "../components/Sidebar";
 const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <>
            <Sidebar />
            <Container
                component="main"
                sx={{
                    paddin: 0,
                    flexGrow: 1,
                    display: "flex",
                    height: "100vh"
                }}
            >
                <Box sx={{ display: "flex", flexDirection: "column", marginLeft: 4, width: "100%" }}>
                    {children}
                </Box>
            </Container>
        </>
    );
};

export default Layout;
