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
  const { isAuthenticated, user, logout } = useAuth();

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

  return (
    <>
      {/* Navbar */}
      <AppBar
        position="static"
        sx={{
          backgroundColor: "#081028",
          boxShadow: "0px 4px 10px rgba(0,0,0,0.2)",
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {/* Left - Menu Icon (Mobile) & Logo */}
          <Box sx={{ display: "flex", alignItems: "center" }}>
            {isMobile && (
              <IconButton
                color="inherit"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ color: "#FFD700" }}
              >
                <MenuIcon />
              </IconButton>
            )}
            <Typography
              variant="h6"
              sx={{
                marginLeft: isMobile ? 1 : 2,
                color: "#FFD700",
                fontWeight: "bold",
              }}
            >
              School Management System
            </Typography>
          </Box>

          {/* Right - Profile Section */}
          {isAuthenticated && user ? (
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Typography
                variant="body1"
                sx={{ marginRight: 1, color: "#FFF" }}
              >
                {user?.name || "User"}
              </Typography>
              <IconButton onClick={handleProfileClick}>
                <Avatar
                  src={user?.profilePic || "/default-avatar.png"}
                  alt={user?.name || "User"}
                  sx={{ border: "2px solid #FFD700", width: 40, height: 40 }}
                />
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleProfileClose}
                sx={{ mt: 1 }}
              >
                <Box sx={{ padding: 2, display: "flex", alignItems: "center" }}>
                  <Avatar
                    src={user?.profilePic || "/default-avatar.png"}
                    alt={user?.name || "User"}
                    sx={{ width: 50, height: 50, marginRight: 1 }}
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
            <Typography variant="body1" sx={{ color: "#FFD700" }}>
              Not Logged In
            </Typography>
          )}
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="left"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{
          "& .MuiDrawer-paper": {
            backgroundColor: "#081028",
            color: "#FFF",
            width: 250,
          },
        }}
      >
        <List>
          {["Dashboard", "Reports", "Analytics", "Support"].map((text) => (
            <ListItem key={text} disablePadding>
              <ListItemButton
                sx={{
                  color: "#FFD700",
                  "&:hover": { backgroundColor: "rgba(255, 215, 0, 0.2)" },
                }}
                onClick={handleDrawerToggle}
              >
                {text}
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default Navbar;
