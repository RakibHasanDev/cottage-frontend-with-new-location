// src/pages/dashboard/index.js
import DashboardLayout from "./layout";

const Dashboard = () => {
  return (
    <DashboardLayout>
      <h1 className="text-2xl font-semibold">Welcome to the Admin Dashboard</h1>
      <div className="grid grid-cols-4 gap-4">all data</div>
    </DashboardLayout>
  );
};

export default Dashboard;
