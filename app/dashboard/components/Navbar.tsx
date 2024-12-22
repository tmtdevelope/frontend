"use client";

import { 
  AppBar, 
  Toolbar, 
  IconButton, 
   Avatar,
  Menu,
  MenuItem
} from "@mui/material";
import { Person } from "@mui/icons-material";
import { useState } from "react";

interface NavbarProps {
  drawerWidth: number;
  onMenuClick: () => void;
}

export function Navbar({ drawerWidth, onMenuClick }: NavbarProps) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar
      position="fixed"
    
    >
      <Toolbar>
        <IconButton
          color="inherit"
          edge="start"
          onClick={onMenuClick}
          sx={{ mr: 2, display: { sm: "none" } }}
        >
          <Person />
        </IconButton>
 
        <div>
          <IconButton
            size="large"
            onClick={handleMenu}
            color="inherit"
          >
            <Avatar>
              <Person />
            </Avatar>
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>Logout</MenuItem>
          </Menu>
        </div>
      </Toolbar>
    </AppBar>
  );
}