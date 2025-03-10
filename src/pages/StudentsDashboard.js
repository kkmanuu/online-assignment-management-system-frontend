import React from "react";
import DashboardLayout from "../components/DashboardLayout";
import { Typography } from "@mui/material";

const StudentDashboard = () => {
  return (
    <DashboardLayout>
      <Typography variant="h4" gutterBottom>
        Student Dashboard
      </Typography>
    </DashboardLayout>
  );
};

export default StudentDashboard;