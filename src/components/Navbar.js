import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  Menu,
  MenuItem,
  Avatar,
  Box,
  Typography,
  Divider,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useAuth } from "../context/AuthContext";
import { useTheme } from "@mui/material/styles";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const { isAuthenticated, user, logout } = useAuth(); // Use the useAuth hook

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleProfileClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleProfileClose = () => {
    setAnchorEl(null);
  };

  // Debugging user and authentication status
  console.log("User:", user);
  console.log("Authenticated:", isAuthenticated);

  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: "#081028" }}>
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {/* Left Side - Logo & Menu Icon for Mobile */}
          <Box sx={{ display: "flex", alignItems: "center" }}>
            {isMobile && (
              <IconButton
                color="inherit"
                edge="start"
                onClick={handleDrawerToggle}
              >
                <MenuIcon />
              </IconButton>
            )}
            <Typography variant="h6" sx={{ marginLeft: isMobile ? 1 : 2 }}>
              School Management System
            </Typography>
          </Box>

          {/* Right Side - Profile Section */}
          {isAuthenticated && user ? (
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Typography variant="body1" sx={{ marginRight: 1 }}>
                {user?.name || "User"}
              </Typography>
              <IconButton onClick={handleProfileClick} color="inherit">
                <Avatar
                  src={user?.profilePic || "/default-avatar.png"}
                  alt={user?.name || "User"}
                />
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleProfileClose}
              >
                <Box sx={{ padding: 2, display: "flex", alignItems: "center" }}>
                  <Avatar
                    src={user?.profilePic || "/default-avatar.png"}
                    alt={user?.name || "User"}
                    sx={{ width: 40, height: 40, marginRight: 1 }}
                  />
                  <Typography variant="body1">
                    {user?.name || "User"}
                  </Typography>
                </Box>
                <Divider />
                <MenuItem onClick={handleProfileClose}>Profile</MenuItem>
                <MenuItem onClick={handleProfileClose}>Admin</MenuItem>
                <MenuItem onClick={handleProfileClose}>Settings</MenuItem>
                <MenuItem
                  onClick={() => {
                    handleProfileClose();
                    logout();
                  }}
                >
                  Log out
                </MenuItem>
              </Menu>
            </Box>
          ) : (
            <Typography variant="body1">Not Logged In</Typography>
          )}
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer anchor="left" open={mobileOpen} onClose={handleDrawerToggle}>
        <List sx={{ width: 250 }}>
          <ListItem disablePadding>
            <ListItemButton onClick={handleDrawerToggle}>
              Dashboard
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={handleDrawerToggle}>
              Reports
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={handleDrawerToggle}>
              Analytics
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={handleDrawerToggle}>
              Support
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
    </>
  );
};

export default Navbar;
