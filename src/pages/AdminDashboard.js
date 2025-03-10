import React from "react";
import DashboardLayout from "../components/DashboardLayout";
import { Typography } from "@mui/material";

const AdminDashboard = () => {
  return (
    <DashboardLayout>
      <Typography variant="h4" gutterBottom>
        Admin Dashboard
      </Typography>
    </DashboardLayout>
  );
};

export default AdminDashboard;
