import React from "react";
import DashboardLayout from "../components/DashboardLayout";
import { Typography } from "@mui/material";

const AdminDashboard = () => {
  return (
    <DashboardLayout>
      <Typography variant="h4" gutterBottom>
        Admin Dashboard
      </Typography>
      {/* Add admin-specific content here */}
    </DashboardLayout>
  );
};

export default AdminDashboard;