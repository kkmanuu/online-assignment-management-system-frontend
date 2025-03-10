import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { 
  Box, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography, Divider 
} from "@mui/material";
import AssignmentIcon from "@mui/icons-material/Assignment";
import PeopleIcon from "@mui/icons-material/People";
import SettingsIcon from "@mui/icons-material/Settings";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import AddIcon from "@mui/icons-material/Add";
import VisibilityIcon from "@mui/icons-material/Visibility";
import SchoolIcon from "@mui/icons-material/School";
import { useAuth } from "../context/AuthContext";

const drawerWidth = 280;

const DashboardLayout = ({ children }) => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  // Admin Sidebar Items
  const adminSidebarItems = [
    {
      text: "Manage Assignments",
      items: [
        { text: "View All Assignments", icon: <VisibilityIcon />, path: "/admin/assignments" },
        { text: "Create New Assignment", icon: <AddIcon />, path: "/admin/assignments/create" },
        { text: "View Submissions", icon: <CheckCircleIcon />, path: "/admin/submissions" },
      ],
    },
    {
      text: "Manage Students",
      items: [
        { text: "Add Student", icon: <AddIcon />, path: "/admin/students/add" },
        { text: "View Students", icon: <SchoolIcon />, path: "/admin/students" },
      ],
    },
    { text: "Settings", icon: <SettingsIcon />, path: "/admin/settings" },
  ];

  // Student Sidebar Items
  const studentSidebarItems = [
    {
      text: "Assignments",
      items: [
        { text: "View Assignments", icon: <VisibilityIcon />, path: "/student/assignments" },
        { text: "Submit Assignment", icon: <AssignmentIcon />, path: "/student/assignments/submit" },
      ],
    },
    {
      text: "Submissions",
      items: [{ text: "My Submissions", icon: <CheckCircleIcon />, path: "/student/submissions" }],
    },
    { text: "Settings", icon: <SettingsIcon />, path: "/student/settings" },
  ];

  const sidebarItems = user?.role === "admin" ? adminSidebarItems : studentSidebarItems;

  return (
    <Box sx={{ display: "flex", height: "100vh", bgcolor: "#f5f5f5" }}>
      {/* Sidebar */}
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            bgcolor: "#263238", // Dark sidebar
            color: "#fff",
          },
        }}
      >
        <Toolbar>
          <Typography variant="h6" sx={{ fontWeight: "bold", mx: "auto", color: "#FFEB3B" }}>
            {user?.role === "admin" ? "Admin Panel" : "Student Dashboard"}
          </Typography>
        </Toolbar>
        <Divider sx={{ bgcolor: "#607D8B" }} />

        <List>
          {sidebarItems.map((section, index) =>
            Array.isArray(section.items) ? (
              <Box key={index}>
                <Typography sx={{ ml: 2, mt: 1, fontWeight: "bold", color: "#FFEB3B" }}>
                  {section.text}
                </Typography>
                {section.items.map((item) => (
                  <ListItem key={item.text} disablePadding>
                    <ListItemButton
                      sx={{
                        "&:hover": { bgcolor: "#455A64" },
                        bgcolor: location.pathname === item.path ? "#78909C" : "inherit",
                      }}
                      onClick={() => navigate(item.path)}
                    >
                      <ListItemIcon sx={{ color: "#FFEB3B" }}>{item.icon}</ListItemIcon>
                      <ListItemText primary={item.text} />
                    </ListItemButton>
                  </ListItem>
                ))}
                <Divider sx={{ bgcolor: "#607D8B", my: 1 }} />
              </Box>
            ) : (
              <ListItem key={section.text} disablePadding>
                <ListItemButton
                  sx={{
                    "&:hover": { bgcolor: "#455A64" },
                    bgcolor: location.pathname === section.path ? "#78909C" : "inherit",
                  }}
                  onClick={() => navigate(section.path)}
                >
                  <ListItemIcon sx={{ color: "#FFEB3B" }}>{section.icon}</ListItemIcon>
                  <ListItemText primary={section.text} />
                </ListItemButton>
              </ListItem>
            )
          )}
        </List>
      </Drawer>

      {/* Main Content */}
      <Box component="main" sx={{ flexGrow: 1, p: 3, overflowY: "auto" }}>
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
};

export default DashboardLayout;
